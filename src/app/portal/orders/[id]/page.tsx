
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useFirebase, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Package, 
  Truck, 
  ArrowLeft, 
  Download, 
  CheckCircle2, 
  ExternalLink,
  FileText,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const statusSteps = [
  { status: 'Order Confirmed', icon: CheckCircle2 },
  { status: 'In Production', icon: Package },
  { status: 'QC Passed', icon: ShieldCheck },
  { status: 'Shipped', icon: Truck },
  { status: 'Delivered', icon: CheckCircle2 },
];

export default function OrderDetailPage() {
  const { id } = useParams();
  const { firestore } = useFirebase();
  const router = useRouter();

  const orderRef = useMemoFirebase(() => {
    if (!firestore || !id) return null;
    return doc(firestore, 'orders', id as string);
  }, [firestore, id]);

  const { data: order, isLoading } = useDoc(orderRef);

  if (isLoading) return <div className="p-20 text-center">Loading shipment data...</div>;
  if (!order) return <div className="p-20 text-center">Order not found.</div>;

  const currentStatusIndex = statusSteps.findIndex(s => s.status === order.status);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold font-playfair text-brand-navy">Order Details</h1>
            <Badge className="bg-brand-gold text-brand-navy px-3">{order.orderId}</Badge>
          </div>
          <p className="text-muted-foreground mt-1">Full technical audit and logistics breakdown.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Order Summary */}
          <Card className="border-brand-gold/10">
            <CardHeader className="bg-brand-navy text-white rounded-t-2xl">
              <CardTitle className="text-xl">Technical Specification</CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Product</p>
                  <p className="font-bold text-brand-navy">{order.product}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Quantity</p>
                  <p className="font-bold text-brand-navy">{order.quantity} {order.unit}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Created</p>
                  <p className="font-bold text-brand-navy">{new Date(order.createdAt?.toDate()).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Compliance</p>
                  <div className="flex gap-1 mt-1">
                    <Badge className="bg-success text-white scale-75 origin-left">ISO</Badge>
                    <Badge className="bg-success text-white scale-75 origin-left">CE</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipment Timeline */}
          <Card className="border-brand-gold/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="text-brand-gold w-5 h-5" /> Logistics Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 px-8 pb-12">
              <div className="relative flex justify-between">
                {/* Connector Line */}
                <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-100 -z-0" />
                <div className={cn(
                  "absolute top-5 left-0 h-0.5 bg-brand-gold transition-all duration-1000 -z-0",
                  `w-[${(currentStatusIndex / (statusSteps.length - 1)) * 100}%]`
                )} style={{ width: `${(currentStatusIndex / (statusSteps.length - 1)) * 100}%` }} />

                {statusSteps.map((step, idx) => {
                  const isCompleted = idx <= currentStatusIndex;
                  const isCurrent = idx === currentStatusIndex;
                  return (
                    <div key={step.status} className="flex flex-col items-center relative z-10 flex-1">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                        isCompleted ? "bg-brand-gold text-brand-navy shadow-lg" : "bg-white border-2 border-gray-100 text-gray-300"
                      )}>
                        <step.icon className={cn("w-5 h-5", isCurrent && "animate-pulse")} />
                      </div>
                      <span className={cn(
                        "mt-3 text-[9px] uppercase font-black text-center px-2",
                        isCompleted ? "text-brand-navy" : "text-gray-400"
                      )}>
                        {step.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Logistics Details */}
          {order.status === 'Shipped' || order.status === 'Delivered' ? (
            <Card className="bg-success/5 border-success/20">
              <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    <Truck className="text-success w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy">Active Tracking</h4>
                    <p className="text-sm text-muted-foreground">Carrier: <span className="font-bold text-brand-navy uppercase">{order.carrier}</span></p>
                    <p className="text-xs font-mono mt-1">No: {order.trackingNumber}</p>
                  </div>
                </div>
                <Button className="bg-success text-white font-bold h-12 px-8 rounded-xl">
                  Track on {order.carrier} <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ) : null}
        </div>

        {/* Sidebar: Documents */}
        <div className="space-y-8">
          <Card className="border-brand-gold/20 shadow-xl bg-white sticky top-24">
            <CardHeader className="bg-secondary/20">
              <CardTitle className="text-lg flex items-center gap-2 text-brand-navy">
                <FileText className="w-5 h-5 text-brand-gold" /> Shipment Dossier
              </CardTitle>
              <CardDescription>Verified export documentation for your customs clearance.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-2">
                {order.documents?.length > 0 ? (
                  order.documents.map((doc: any) => (
                    <Button 
                      key={doc.name} 
                      variant="outline" 
                      className="w-full justify-between h-14 rounded-xl border-gray-100 hover:border-brand-gold hover:bg-brand-gold/5 group"
                      asChild
                    >
                      <a href={doc.url} target="_blank">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-secondary/30 flex items-center justify-center text-brand-navy group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                            <Download className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-bold text-brand-navy">{doc.name}</span>
                        </div>
                        <Badge variant="outline" className="text-[8px] bg-white group-hover:bg-brand-gold/10">{doc.type || 'PDF'}</Badge>
                      </a>
                    </Button>
                  ))
                ) : (
                  <div className="py-8 text-center bg-muted/20 rounded-2xl border-2 border-dashed">
                    <Clock className="w-8 h-8 text-muted-foreground opacity-20 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground font-medium px-4">Documents are uploaded post-production audit.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
