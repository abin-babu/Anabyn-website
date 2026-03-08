'use client';

import { useState, useMemo, useEffect } from 'react';
import { useUser, useFirebase, useCollection, useMemoFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { collection, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { 
  Download, 
  Search, 
  Trash2, 
  Eye, 
  LogOut, 
  FileText, 
  MessageSquare, 
  PackageCheck,
  Clock,
  Loader2
} from 'lucide-react';

type RFQStatus = 'New' | 'In Progress' | 'Quoted' | 'Closed';

export default function AdminPage() {
    const { user, isUserLoading } = useUser();
    const { firestore, auth } = useFirebase();
    const router = useRouter();
    const { toast } = useToast();
    
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    // Inquiries Collection
    const inquiriesQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return collection(firestore, 'inquiries');
    }, [firestore]);
    const { data: inquiries, isLoading: inquiriesLoading } = useCollection(inquiriesQuery);

    // RFQ Collection
    const rfqQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return collection(firestore, 'rfq_submissions');
    }, [firestore]);
    const { data: rfqs, isLoading: rfqLoading } = useCollection(rfqQuery);

    useEffect(() => {
        if (!isUserLoading && !user) {
            router.push('/admin/login');
        }
    }, [user, isUserLoading, router]);

    const filteredInquiries = useMemo(() => {
        if (!inquiries) return [];
        return inquiries.filter(inquiry => {
            const matchesSearch = 
                inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (inquiry.company && inquiry.company.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesStatus = statusFilter === 'All' || inquiry.status === statusFilter;
            return matchesSearch && matchesStatus;
        }).sort((a, b) => (b.createdAt?.toMillis() || 0) - (a.createdAt?.toMillis() || 0));
    }, [inquiries, searchTerm, statusFilter]);

    const filteredRFQs = useMemo(() => {
        if (!rfqs) return [];
        return rfqs.filter(r => {
            const matchesSearch = 
                r.rfqId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                r.userDetails.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                r.userDetails.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                r.product.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilter === 'All' || r.status === statusFilter;
            return matchesSearch && matchesStatus;
        }).sort((a, b) => (b.createdAt?.toMillis() || 0) - (a.createdAt?.toMillis() || 0));
    }, [rfqs, searchTerm, statusFilter]);

    const handleUpdateRFQStatus = (id: string, newStatus: RFQStatus) => {
        if (!firestore) return;
        const docRef = doc(firestore, 'rfq_submissions', id);
        updateDoc(docRef, { status: newStatus })
            .then(() => {
                toast({ title: 'RFQ Status Updated', description: `Changed to ${newStatus}` });
            })
            .catch(async (error) => {
                errorEmitter.emit('permission-error', new FirestorePermissionError({
                    path: docRef.path,
                    operation: 'update',
                    requestResourceData: { status: newStatus }
                }));
            });
    };

    const handleDeleteRFQ = (id: string) => {
        if (!firestore || !confirm('Permanently delete this RFQ?')) return;
        const docRef = doc(firestore, 'rfq_submissions', id);
        deleteDoc(docRef)
            .then(() => {
                toast({ title: 'RFQ Deleted' });
            })
            .catch(async (error) => {
                errorEmitter.emit('permission-error', new FirestorePermissionError({
                    path: docRef.path,
                    operation: 'delete'
                }));
            });
    };

    const handleLogout = async () => {
        if (auth) {
            await signOut(auth);
            router.push('/admin/login');
        }
    }

    if (isUserLoading || !user) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center">
                <Loader2 className="animate-spin h-10 w-10 text-brand-gold mb-4" />
                <p className="font-bold text-brand-navy">Authenticating Admin...</p>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 bg-secondary/30 pt-32">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl font-bold font-playfair text-brand-navy">Control Center</h1>
                            <p className="text-muted-foreground">Managing Anabyn Global Ventures Lead Pipeline</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button onClick={handleLogout} variant="destructive" size="sm" className="rounded-xl">
                                <LogOut className="mr-2 h-4 w-4" /> Logout
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        <Card className="bg-brand-navy text-white">
                            <CardContent className="pt-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Total RFQs</p>
                                        <h3 className="text-3xl font-bold">{rfqs?.length || 0}</h3>
                                    </div>
                                    <FileText className="text-brand-gold w-8 h-8" />
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-white">
                            <CardContent className="pt-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Pending</p>
                                        <h3 className="text-3xl font-bold text-brand-navy">{rfqs?.filter(r => r.status === 'New').length || 0}</h3>
                                    </div>
                                    <Clock className="text-brand-gold w-8 h-8" />
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-white">
                            <CardContent className="pt-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Inquiries</p>
                                        <h3 className="text-3xl font-bold text-brand-navy">{inquiries?.length || 0}</h3>
                                    </div>
                                    <MessageSquare className="text-brand-gold w-8 h-8" />
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-white">
                            <CardContent className="pt-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Conversions</p>
                                        <h3 className="text-3xl font-bold text-success">98%</h3>
                                    </div>
                                    <PackageCheck className="text-success w-8 h-8" />
                                </div>
                            </CardContent>
                        </div>
                    </div>

                    <Card className="mb-8 border-brand-gold/20">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-lg">Filter Workspace</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input 
                                        placeholder="Search by ID, Name, Product or Company..." 
                                        className="pl-10 h-12 border-brand-gold/20 rounded-xl"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <Select value={statusFilter} onValueChange={setStatusFilter}>
                                    <SelectTrigger className="h-12 border-brand-gold/20 rounded-xl">
                                        <SelectValue placeholder="Status Filter" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All">All Statuses</SelectItem>
                                        <SelectItem value="New">New / Unread</SelectItem>
                                        <SelectItem value="In Progress">In Discussion</SelectItem>
                                        <SelectItem value="Quoted">Quoted</SelectItem>
                                        <SelectItem value="Closed">Closed / Completed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>

                    <Tabs defaultValue="rfqs" className="space-y-6">
                        <TabsList className="bg-white p-1 border border-brand-gold/20 rounded-xl h-14">
                            <TabsTrigger value="rfqs" className="px-8 font-bold rounded-lg data-[state=active]:bg-brand-navy data-[state=active]:text-white">
                                <FileText className="w-4 h-4 mr-2" /> Quotes (RFQs)
                            </TabsTrigger>
                            <TabsTrigger value="inquiries" className="px-8 font-bold rounded-lg data-[state=active]:bg-brand-navy data-[state=active]:text-white">
                                <MessageSquare className="w-4 h-4 mr-2" /> General Inquiries
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="rfqs">
                            <Card className="border-none shadow-xl overflow-hidden">
                                <Table>
                                    <TableHeader className="bg-brand-navy text-white">
                                        <TableRow className="hover:bg-brand-navy">
                                            <TableHead className="text-white">ID & Date</TableHead>
                                            <TableHead className="text-white">Buyer</TableHead>
                                            <TableHead className="text-white">Product</TableHead>
                                            <TableHead className="text-white">Status</TableHead>
                                            <TableHead className="text-right text-white">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody className="bg-white">
                                        {rfqLoading ? (
                                            <TableRow><TableCell colSpan={5} className="text-center py-20">Loading RFQs...</TableCell></TableRow>
                                        ) : filteredRFQs.length === 0 ? (
                                            <TableRow><TableCell colSpan={5} className="text-center py-20">No matching RFQs found.</TableCell></TableRow>
                                        ) : (
                                            filteredRFQs.map((r) => (
                                                <TableRow key={r.id}>
                                                    <TableCell>
                                                        <div className="font-mono font-bold text-brand-gold">{r.rfqId}</div>
                                                        <div className="text-[10px] text-muted-foreground uppercase">{r.createdAt?.toDate().toLocaleDateString()}</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="font-bold text-brand-navy">{r.userDetails.name}</div>
                                                        <div className="text-xs text-muted-foreground">{r.userDetails.company} ({r.destinationCountry})</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="font-medium">{r.product}</div>
                                                        <Badge variant="outline" className="text-[10px]">{r.quantity} {r.unit}</Badge>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Select value={r.status} onValueChange={(val) => handleUpdateRFQStatus(r.id, val as RFQStatus)}>
                                                            <SelectTrigger className="w-32 h-8 text-xs rounded-lg">
                                                                <SelectValue />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="New">New</SelectItem>
                                                                <SelectItem value="In Progress">In Progress</SelectItem>
                                                                <SelectItem value="Quoted">Quoted</SelectItem>
                                                                <SelectItem value="Closed">Closed</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        <div className="flex justify-end gap-2">
                                                            <Dialog>
                                                                <DialogTrigger asChild>
                                                                    <Button variant="ghost" size="icon" className="hover:bg-brand-navy/5 text-brand-navy">
                                                                        <Eye className="h-4 w-4" />
                                                                    </Button>
                                                                </DialogTrigger>
                                                                <DialogContent className="max-w-3xl overflow-y-auto max-h-[90vh]">
                                                                    <DialogHeader>
                                                                        <div className="flex items-center gap-2 mb-2">
                                                                            <Badge className="bg-brand-gold text-brand-navy">{r.rfqId}</Badge>
                                                                            <Badge variant="outline">{r.status}</Badge>
                                                                        </div>
                                                                        <DialogTitle className="text-3xl font-playfair">{r.product}</DialogTitle>
                                                                        <DialogDescription>Submitted on {r.createdAt?.toDate().toLocaleString()}</DialogDescription>
                                                                    </DialogHeader>
                                                                    
                                                                    <div className="grid md:grid-cols-2 gap-8 py-6">
                                                                        <div className="space-y-6">
                                                                            <section>
                                                                                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Buyer Profile</h4>
                                                                                <div className="bg-secondary/10 p-4 rounded-xl space-y-2">
                                                                                    <p className="text-sm"><strong>Name:</strong> {r.userDetails.name} ({r.userDetails.designation})</p>
                                                                                    <p className="text-sm"><strong>Company:</strong> {r.userDetails.company}</p>
                                                                                    <p className="text-sm"><strong>Email:</strong> {r.userDetails.email}</p>
                                                                                    <p className="text-sm"><strong>WhatsApp:</strong> {r.userDetails.whatsapp}</p>
                                                                                    <p className="text-sm"><strong>Source:</strong> {r.userDetails.source}</p>
                                                                                </div>
                                                                            </section>
                                                                            <section>
                                                                                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Logistics</h4>
                                                                                <div className="bg-brand-navy/5 p-4 rounded-xl space-y-2">
                                                                                    <p className="text-sm"><strong>Target Country:</strong> {r.destinationCountry}</p>
                                                                                    <p className="text-sm"><strong>Required Date:</strong> {new Date(r.deliveryDate).toLocaleDateString()}</p>
                                                                                    <p className="text-sm"><strong>Incoterm:</strong> {r.incoterm}</p>
                                                                                </div>
                                                                            </section>
                                                                        </div>
                                                                        <div className="space-y-6">
                                                                            <section>
                                                                                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Customization</h4>
                                                                                <div className="bg-success/5 p-4 rounded-xl space-y-2">
                                                                                    <p className="text-sm"><strong>OEM/Private Label:</strong> {r.customization.oem ? 'YES' : 'No'}</p>
                                                                                    <p className="text-sm"><strong>Custom Size:</strong> {r.customization.customSize}</p>
                                                                                    <p className="text-sm"><strong>Custom Color:</strong> {r.customization.customColor}</p>
                                                                                    <p className="text-sm"><strong>Certs:</strong> {r.customization.certifications.join(', ') || 'None'}</p>
                                                                                    <p className="text-sm"><strong>Sample:</strong> {r.customization.sampleRequired ? 'YES' : 'No'}</p>
                                                                                </div>
                                                                            </section>
                                                                            {r.customization.referenceImageUrl && (
                                                                                <section>
                                                                                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Reference Image</h4>
                                                                                    <a href={r.customization.referenceImageUrl} target="_blank" className="block relative aspect-video rounded-xl overflow-hidden border">
                                                                                        <img src={r.customization.referenceImageUrl} alt="Reference" className="object-cover w-full h-full" />
                                                                                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                                                                                            <Download className="text-white w-6 h-6" />
                                                                                        </div>
                                                                                    </a>
                                                                                </section>
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    <div className="border-t pt-6">
                                                                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Account Manager Notes</h4>
                                                                        <p className="text-sm p-4 bg-muted/30 rounded-xl italic">"{r.userDetails.notes || 'No notes provided by buyer.'}"</p>
                                                                    </div>

                                                                    <DialogFooter className="mt-6">
                                                                        <Button variant="outline" asChild className="rounded-xl border-brand-gold text-brand-gold">
                                                                            <a href={`mailto:${r.userDetails.email}?subject=RFQ Response: ${r.rfqId} - ${r.product}`}>Draft Email Response</a>
                                                                        </Button>
                                                                        <Button className="rounded-xl bg-brand-navy" asChild>
                                                                            <a href={`https://wa.me/${r.userDetails.whatsapp.replace(/\D/g, '')}?text=Hi ${r.userDetails.name}, I'm reaching out from Anabyn regarding your RFQ ${r.rfqId}.`}>Reply via WhatsApp</a>
                                                                        </Button>
                                                                    </DialogFooter>
                                                                </DialogContent>
                                                            </Dialog>
                                                            <Button 
                                                                variant="ghost" 
                                                                size="icon" 
                                                                className="text-destructive hover:bg-destructive/10 rounded-lg"
                                                                onClick={() => handleDeleteRFQ(r.id)}
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        )}
                                    </TableBody>
                                </Table>
                            </Card>
                        </TabsContent>

                        <TabsContent value="inquiries">
                            <Card className="border-none shadow-xl overflow-hidden">
                                <Table>
                                    <TableHeader className="bg-brand-navy text-white">
                                        <TableRow className="hover:bg-brand-navy">
                                            <TableHead className="text-white">Date</TableHead>
                                            <TableHead className="text-white">Customer</TableHead>
                                            <TableHead className="text-white">Company</TableHead>
                                            <TableHead className="text-white">Status</TableHead>
                                            <TableHead className="text-right text-white">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody className="bg-white">
                                        {filteredInquiries.map((inquiry) => (
                                            <TableRow key={inquiry.id}>
                                                <TableCell className="text-xs">{inquiry.createdAt?.toDate().toLocaleDateString()}</TableCell>
                                                <TableCell>
                                                    <div className="font-bold">{inquiry.name}</div>
                                                    <div className="text-xs text-muted-foreground">{inquiry.email}</div>
                                                </TableCell>
                                                <TableCell className="text-sm">{inquiry.company || '-'}</TableCell>
                                                <TableCell>
                                                    <Badge variant="outline">{inquiry.status}</Badge>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <Button variant="ghost" size="icon" onClick={() => router.push(`/admin/inquiry/${inquiry.id}`)}>
                                                        <Eye className="h-4 w-4" />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
            <Footer />
        </div>
    );
}
