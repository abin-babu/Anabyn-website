
'use client';

import { useUser, useFirebase, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, orderBy, addDoc, serverTimestamp } from 'firebase/firestore';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FlaskConical, 
  Plus, 
  Star, 
  Clock, 
  Truck, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function PortalSamplesPage() {
  const { user } = useUser();
  const { firestore } = useFirebase();
  const { toast } = useToast();
  const [isRequesting, setIsRequesting] = useState(false);
  const [newSampleProduct, setNewSampleProduct] = useState('');

  const samplesQuery = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return query(
      collection(firestore, 'sample_requests'), 
      where('buyerUid', '==', user.uid),
      orderBy('createdAt', 'desc')
    );
  }, [firestore, user]);

  const { data: samples, isLoading } = useCollection(samplesQuery);

  const handleRequestSample = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firestore || !user || !newSampleProduct) return;
    
    setIsRequesting(true);
    try {
      await addDoc(collection(firestore, 'sample_requests'), {
        buyerUid: user.uid,
        productName: newSampleProduct,
        status: 'Requested',
        createdAt: serverTimestamp(),
        rating: 0
      });
      toast({ title: 'Sample Requested', description: 'Our logistics team will ship your physical sample shortly.' });
      setNewSampleProduct('');
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Error', description: error.message });
    } finally {
      setIsRequesting(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-playfair text-brand-navy">Sample Requests</h1>
          <p className="text-muted-foreground mt-1">Track physical evaluations and material approvals.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-brand-navy text-white font-bold rounded-xl h-12">
              <Plus className="w-4 h-4 mr-2" /> Request New Sample
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Evaluation Request</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleRequestSample} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Product Name / Specification</Label>
                <Input 
                  placeholder="e.g. 400TC Sateen Striped Sheets - White" 
                  value={newSampleProduct}
                  onChange={(e) => setNewSampleProduct(e.target.value)}
                  required
                />
              </div>
              <p className="text-xs text-muted-foreground bg-secondary/30 p-3 rounded-lg">
                <strong>Note:</strong> Standard sample fees apply for first-time requests, which are fully credited against your first bulk order.
              </p>
              <DialogFooter>
                <Button type="submit" disabled={isRequesting} className="bg-brand-navy text-white">
                  {isRequesting ? 'Submitting...' : 'Submit Request'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          [1, 2, 3].map(i => <div key={i} className="h-48 bg-white rounded-3xl animate-pulse" />)
        ) : samples?.length === 0 ? (
          <div className="col-span-full text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-brand-gold/20">
            <FlaskConical className="w-12 h-12 text-brand-gold opacity-30 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-brand-navy">No samples requested</h3>
            <p className="text-muted-foreground max-w-xs mx-auto mt-2">Request samples to verify quality before bulk commitment.</p>
          </div>
        ) : (
          samples?.map((sample) => (
            <Card key={sample.id} className="border-brand-gold/10 overflow-hidden hover:shadow-xl transition-all">
              <CardHeader className="bg-secondary/10 pb-4">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-gold shadow-sm">
                    <FlaskConical size={20} />
                  </div>
                  <Badge variant="outline" className={cn(
                    "text-[9px] uppercase font-black",
                    sample.status === 'Requested' ? "text-brand-gold border-brand-gold/30" : 
                    sample.status === 'Dispatched' ? "text-blue-600 border-blue-200" :
                    "text-success border-success/30"
                  )}>
                    {sample.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg mt-4 leading-tight">{sample.productName}</CardTitle>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">Requested {new Date(sample.createdAt?.toDate()).toLocaleDateString()}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 text-xs font-bold text-brand-navy/60">
                  {sample.status === 'Requested' && <><Clock size={14} className="text-brand-gold" /> Waiting for Dispatch</>}
                  {sample.status === 'Dispatched' && <><Truck size={14} className="text-blue-600" /> In Transit</>}
                  {sample.status === 'Received' && <><CheckCircle2 size={14} className="text-success" /> Quality Verified</>}
                </div>
                
                {sample.status === 'Received' && (
                  <div className="mt-6 pt-4 border-t border-gray-50">
                    <p className="text-[10px] uppercase font-black text-muted-foreground mb-2">Quality Rating</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={cn(i < sample.rating ? "fill-brand-gold text-brand-gold" : "text-gray-200")} />
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
