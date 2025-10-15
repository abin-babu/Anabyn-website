import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function AdminPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 md:py-20 bg-secondary/50">
                <div className="container max-w-4xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-headline">Admin Dashboard</CardTitle>
                            <CardDescription>This is a placeholder for the admin dashboard. A real implementation would include inquiry management, product CRUD, and user authentication.</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p>Features to be built:</p>
                           <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                            <li>Protected routes for admin access only.</li>
                            <li>Inquiry management table with search, sort, and status updates.</li>
                            <li>CSV export for inquiries.</li>
                            <li>Full CRUD (Create, Read, Update, Delete) operations for products.</li>
                           </ul>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
