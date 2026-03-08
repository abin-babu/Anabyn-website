'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFirebase } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function AdminLoginPage() {
    const { auth } = useFirebase();
    const router = useRouter();
    const { toast } = useToast();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/admin');
        } catch (error: any) {
            toast({
                variant: 'destructive',
                title: 'Login Failed',
                description: error.message || 'Please check your credentials and try again.',
            });
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 flex items-center justify-center py-12 md:py-20 bg-secondary/50 pt-32">
                <Card className="w-full max-w-sm">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-headline">Admin Login</CardTitle>
                        <CardDescription>Enter your credentials to access the dashboard.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="sales@anabyn.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? 'Logging in...' : 'Login'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
