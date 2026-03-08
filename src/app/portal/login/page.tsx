
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFirebase } from '@/firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ShieldCheck, LogIn, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function PortalLoginPage() {
  const { auth } = useFirebase();
  const router = useRouter();
  const { toast } = useToast();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/portal');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: 'Please check your credentials or request access if you are a new buyer.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/portal');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Google Login Failed',
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-24 bg-secondary/30 px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-brand-navy flex items-center justify-center mb-6 shadow-xl shadow-brand-navy/20">
              <ShieldCheck className="text-brand-gold w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold font-playfair text-brand-navy">Buyer Portal</h1>
            <p className="text-muted-foreground">Secure access for Anabyn procurement partners.</p>
          </div>

          <Card className="border-brand-gold/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-xl">Sign In</CardTitle>
              <CardDescription>Enter your work email to manage orders and documents.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="procurement@company.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>
                    <button type="button" className="text-xs text-brand-gold hover:underline">Forgot password?</button>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                    className="h-12"
                  />
                </div>
                <Button type="submit" className="w-full h-12 bg-brand-navy text-white hover:bg-brand-navy/90" disabled={isLoading}>
                  {isLoading ? 'Authenticating...' : 'Sign In to Portal'}
                </Button>
              </form>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full h-12 border-gray-200" 
                onClick={handleGoogleLogin}
                disabled={isLoading}
              >
                <img src="https://www.gstatic.com/firebase/static/bin/white/google.svg" className="w-4 h-4 mr-2" alt="Google" />
                Sign in with Google
              </Button>
            </CardContent>
            <CardFooter className="bg-secondary/10 flex flex-col items-center p-6 gap-2">
              <p className="text-sm text-muted-foreground text-center">New procurement partner?</p>
              <Button asChild variant="link" className="text-brand-gold font-bold">
                <Link href="/portal/access-request">Request Portal Access <ChevronRight className="ml-1 w-4 h-4" /></Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
