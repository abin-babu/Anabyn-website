
'use client';

import { useState, useMemo } from 'react';
import { useUser, useFirebase, useCollection, useMemoFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { collection, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import { Download, Search, Trash2, Eye, LogOut } from 'lucide-react';
import { products as productCatalog } from '@/lib/products';

type InquiryStatus = 'Enquired' | 'Under Discussion' | 'Order Confirmed' | 'Shipped' | 'Completed';

export default function AdminPage() {
    const { user, isUserLoading } = useUser();
    const { firestore, auth } = useFirebase();
    const router = useRouter();
    const { toast } = useToast();
    
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    const inquiriesQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return collection(firestore, 'inquiries');
    }, [firestore]);

    const { data: inquiries, isLoading: inquiriesLoading } = useCollection(inquiriesQuery);

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

    const handleUpdateStatus = async (inquiryId: string, newStatus: InquiryStatus) => {
        if (!firestore) return;
        try {
            const inquiryRef = doc(firestore, 'inquiries', inquiryId);
            await updateDoc(inquiryRef, { status: newStatus });
            toast({
                title: 'Status Updated',
                description: `Inquiry status changed to ${newStatus}.`,
            });
        } catch (error: any) {
            toast({
                variant: 'destructive',
                title: 'Update Failed',
                description: error.message,
            });
        }
    };

    const handleDeleteInquiry = async (inquiryId: string) => {
        if (!firestore || !confirm('Are you sure you want to delete this inquiry?')) return;
        try {
            const inquiryRef = doc(firestore, 'inquiries', inquiryId);
            await deleteDoc(inquiryRef);
            toast({
                title: 'Inquiry Deleted',
                description: 'The inquiry has been removed.',
            });
        } catch (error: any) {
            toast({
                variant: 'destructive',
                title: 'Delete Failed',
                description: error.message,
            });
        }
    };

    const exportToCSV = () => {
        if (!filteredInquiries.length) return;
        
        const headers = ['Date', 'Name', 'Email', 'Phone', 'Company', 'Status', 'Message'];
        const csvRows = filteredInquiries.map(inq => [
            inq.createdAt?.toDate().toLocaleDateString() || '',
            inq.name,
            inq.email,
            inq.phone || '',
            inq.company || '',
            inq.status,
            `"${inq.message.replace(/"/g, '""')}"`
        ]);

        const csvContent = [headers, ...csvRows].map(e => e.join(",")).join("\n");
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `inquiries_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 bg-secondary/30">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl font-bold font-headline">Admin Dashboard</h1>
                            <p className="text-muted-foreground">Manage customer inquiries and requests.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button onClick={exportToCSV} variant="outline" className="hidden sm:flex">
                                <Download className="mr-2 h-4 w-4" /> Export CSV
                            </Button>
                            <Button onClick={handleLogout} variant="destructive" size="sm">
                                <LogOut className="mr-2 h-4 w-4" /> Logout
                            </Button>
                        </div>
                    </div>

                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-xl">Inquiry Filters</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input 
                                        placeholder="Search by name, email, or company..." 
                                        className="pl-10"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <Select value={statusFilter} onValueChange={setStatusFilter}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Filter by status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All">All Statuses</SelectItem>
                                        <SelectItem value="Enquired">Enquired</SelectItem>
                                        <SelectItem value="Under Discussion">Under Discussion</SelectItem>
                                        <SelectItem value="Order Confirmed">Order Confirmed</SelectItem>
                                        <SelectItem value="Shipped">Shipped</SelectItem>
                                        <SelectItem value="Completed">Completed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Customer</TableHead>
                                        <TableHead>Company</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {inquiriesLoading ? (
                                        <TableRow>
                                            <TableCell colSpan={5} className="text-center py-10">Loading inquiries...</TableCell>
                                        </TableRow>
                                    ) : filteredInquiries.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={5} className="text-center py-10 text-muted-foreground">No inquiries found.</TableCell>
                                        </TableRow>
                                    ) : (
                                        filteredInquiries.map((inquiry) => (
                                            <TableRow key={inquiry.id}>
                                                <TableCell className="font-medium">
                                                    {inquiry.createdAt?.toDate().toLocaleDateString() || 'N/A'}
                                                </TableCell>
                                                <TableCell>
                                                    <div>
                                                        <div className="font-bold">{inquiry.name}</div>
                                                        <div className="text-xs text-muted-foreground">{inquiry.email}</div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>{inquiry.company || '-'}</TableCell>
                                                <TableCell>
                                                    <Select 
                                                        value={inquiry.status} 
                                                        onValueChange={(val) => handleUpdateStatus(inquiry.id, val as InquiryStatus)}
                                                    >
                                                        <SelectTrigger className="w-[160px] h-8 text-xs">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="Enquired">Enquired</SelectItem>
                                                            <SelectItem value="Under Discussion">Under Discussion</SelectItem>
                                                            <SelectItem value="Order Confirmed">Order Confirmed</SelectItem>
                                                            <SelectItem value="Shipped">Shipped</SelectItem>
                                                            <SelectItem value="Completed">Completed</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <Dialog>
                                                            <DialogTrigger asChild>
                                                                <Button variant="ghost" size="icon">
                                                                    <Eye className="h-4 w-4" />
                                                                </Button>
                                                            </DialogTrigger>
                                                            <DialogContent className="max-w-2xl">
                                                                <DialogHeader>
                                                                    <DialogTitle>Inquiry Details</DialogTitle>
                                                                    <DialogDescription>
                                                                        Received on {inquiry.createdAt?.toDate().toLocaleString()}
                                                                    </DialogDescription>
                                                                </DialogHeader>
                                                                <div className="grid grid-cols-2 gap-4 py-4">
                                                                    <div className="space-y-1">
                                                                        <span className="text-xs font-bold uppercase text-muted-foreground">Customer</span>
                                                                        <p>{inquiry.name}</p>
                                                                    </div>
                                                                    <div className="space-y-1">
                                                                        <span className="text-xs font-bold uppercase text-muted-foreground">Email</span>
                                                                        <p>{inquiry.email}</p>
                                                                    </div>
                                                                    <div className="space-y-1">
                                                                        <span className="text-xs font-bold uppercase text-muted-foreground">Phone</span>
                                                                        <p>{inquiry.phone || 'N/A'}</p>
                                                                    </div>
                                                                    <div className="space-y-1">
                                                                        <span className="text-xs font-bold uppercase text-muted-foreground">Company</span>
                                                                        <p>{inquiry.company || 'N/A'}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="space-y-2 border-t pt-4">
                                                                    <span className="text-xs font-bold uppercase text-muted-foreground">Message</span>
                                                                    <p className="text-sm bg-secondary/50 p-3 rounded-md italic">"{inquiry.message}"</p>
                                                                </div>
                                                                {inquiry.products && inquiry.products.length > 0 && (
                                                                    <div className="space-y-2 border-t pt-4">
                                                                        <span className="text-xs font-bold uppercase text-muted-foreground">Interested Products</span>
                                                                        <div className="space-y-1">
                                                                            {inquiry.products.map((p: any) => {
                                                                                const prod = productCatalog.find(pc => pc.id === p.id);
                                                                                return (
                                                                                    <div key={p.id} className="text-sm flex justify-between">
                                                                                        <span>{prod?.name || p.id}</span>
                                                                                        <span className="font-bold">Qty: {p.qty}</span>
                                                                                    </div>
                                                                                );
                                                                            })}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                                <DialogFooter>
                                                                    <Button asChild variant="secondary" className="w-full sm:w-auto">
                                                                        <a href={`mailto:${inquiry.email}?subject=Re: Your Inquiry with Anabyn`}>Reply via Email</a>
                                                                    </Button>
                                                                </DialogFooter>
                                                            </DialogContent>
                                                        </Dialog>
                                                        <Button 
                                                            variant="ghost" 
                                                            size="icon" 
                                                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                                            onClick={() => handleDeleteInquiry(inquiry.id)}
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
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
