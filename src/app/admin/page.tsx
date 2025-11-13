
'use client';
import { useUser, useFirebase, useCollection, useMemoFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { collection } from 'firebase/firestore';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { signOut } from 'firebase/auth';

export default function AdminPage() {
    const { user, isUserLoading } = useUser();
    const { firestore, auth } = useFirebase();
    const router = useRouter();

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

    if (isUserLoading || !user) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    const handleLogout = async () => {
        if (auth) {
            await signOut(auth);
            router.push('/admin/login');
        }
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 md:py-20 bg-secondary/50">
                <div className="container max-w-6xl mx-auto">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="text-2xl font-headline">Inquiry Management</CardTitle>
                                <CardDescription>Review and manage customer inquiries.</CardDescription>
                            </div>
                            <Button onClick={handleLogout} variant="outline">Logout</Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {inquiriesLoading && (
                                        <TableRow>
                                            <TableCell colSpan={5} className="text-center">Loading inquiries...</TableCell>
                                        </TableRow>
                                    )}
                                    {inquiries && inquiries.map((inquiry : any) => (
                                        <TableRow key={inquiry.id}>
                                            <TableCell>{inquiry.createdAt?.toDate().toLocaleDateString()}</TableCell>
                                            <TableCell>{inquiry.name}</TableCell>
                                            <TableCell>{inquiry.email}</TableCell>
                                            <TableCell><Badge>{inquiry.status}</Badge></TableCell>
                                            <TableCell>
                                                <Button variant="outline" size="sm">View</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
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
