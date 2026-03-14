'use client';

import { useUser, useFirebase, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, orderBy, limit } from 'firebase/firestore';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Package, 
  Truck, 
  FileCheck, 
  ArrowRight, 
  Clock, 
  AlertCircle,
  FlaskConical,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';
import { cn } from '@/lib/utils';

export default function PortalDashboard() {
  const { user } = useUser();
  const { firestore } = useFirebase();

  // Fetch User's Orders
  const ordersQuery = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return query(
      collection(firestore, 'orders'), 
      where('buyerUid', '==', user.uid),
      orderBy('createdAt', 'desc')
    );
  }, [firestore, user]);

  const { data: orders, isLoading: ordersLoading } = useCollection(ordersQuery);

  // Stats calculation
  const stats = useMemo(() => {
    if (!orders) return { total: 0, pending: 0, active: 0 };
    return {
      total: orders.length,
      pending: orders.filter(o => o.status === 'Shipped').length,
      active: orders.filter(o => o.status !== 'Delivered').length
    };
  }, [orders]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-playfair text-brand-navy">Portal Dashboard</h1>
          <p className="text-muted-foreground mt-1">Global Procurement Hub for Anabyn Partners.</p>
        </div>
        <Button asChild className="bg-brand-gold text-brand-navy font-bold rounded-xl h-12 px-6">
          <Link href="/request-quote">Request New Quote</Link>
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white border-brand-gold/10">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Total Orders</p>
                <h3 className="text-3xl font-bold text-brand-navy">{stats.total}</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-gold">
                <Package size={20} />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white border-brand-gold/10">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">In Transit</p>
                <h3 className="text-3xl font-bold text-brand-navy">{stats.pending}</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-gold">
                <Truck size={20} />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-brand-navy text-white">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-1">Active Pipeline</p>
                <h3 className="text-3xl font-bold text-brand-gold">{stats.active}</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold">
                <Clock size={20} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-[1fr_350px] gap-8">
        {/* Recent Orders */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-bold text-brand-navy">Recent Order Activity</h2>
            <Button asChild variant="link" className="text-brand-gold p-0">
              <Link href="/portal/orders">View All Orders <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </Button>
          </div>

          <div className="space-y-4">
            {ordersLoading ? (
              [1, 2].map(i => <div key={i} className="h-24 bg-white rounded-2xl animate-pulse" />)
            ) : orders?.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-3xl border-2 border-dashed border-brand-gold/20">
                <AlertCircle className="mx-auto w-10 h-10 text-muted-foreground opacity-20 mb-4" />
                <p className="text-muted-foreground font-medium">No active orders found.</p>
                <Link href="/products" className="text-brand-gold text-sm font-bold mt-2 inline-block hover:underline">Browse Catalogue</Link>
              </div>
            ) : (
              orders?.slice(0, 5).map((order) => (
                <Link key={order.id} href={`/portal/orders/${order.id}`}>
                  <Card className="hover:shadow-lg transition-all border-brand-gold/5 group">
                    <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                          <Package className="text-brand-navy w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs font-mono font-bold text-brand-gold">{order.orderId}</p>
                          <h4 className="font-bold text-brand-navy group-hover:text-brand-gold transition-colors">{order.product}</h4>
                          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">{new Date(order.createdAt?.toDate()).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right hidden md:block">
                          <p className="text-[10px] text-muted-foreground uppercase font-black">Qty</p>
                          <p className="font-bold text-brand-navy">{order.quantity} {order.unit}</p>
                        </div>
                        <Badge variant="outline" className={cn(
                          "px-3 py-1",
                          order.status === 'Delivered' ? "bg-success/5 text-success border-success/20" : 
                          order.status === 'Shipped' ? "bg-blue-50 text-blue-600 border-blue-100" :
                          "bg-brand-gold/5 text-brand-gold border-brand-gold/20"
                        )}>
                          {order.status}
                        </Badge>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            )}
          </div>
        </div>

        {/* Portal Context Sidebar */}
        <div className="space-y-8">
          {/* Active Support */}
          <Card className="bg-brand-navy text-white overflow-hidden border-none shadow-xl">
            <div className="p-8 space-y-6 relative">
              <MessageSquare className="absolute -top-4 -right-4 w-24 h-24 text-white/5 rotate-12" />
              <div>
                <Badge className="bg-brand-gold text-brand-navy mb-4">Account Support</Badge>
                <h3 className="text-xl font-bold font-playfair">Dedicated Manager</h3>
                <p className="text-sm text-white/60 mt-2 leading-relaxed">Your assigned export desk is available for real-time compliance assistance.</p>
              </div>
              <div className="space-y-3">
                <Button className="w-full bg-white text-brand-navy font-bold rounded-xl h-12" asChild>
                  <a href="mailto:info@anabyn.com">Email Desk</a>
                </Button>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 rounded-xl h-12" asChild>
                  <a href="https://wa.me/919495613121">WhatsApp Support</a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Sample Tracking */}
          <Card className="border-brand-gold/20 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-brand-gold" /> Samples
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">Request and track product evaluations before finalizing bulk contracts.</p>
              <Button asChild variant="outline" className="w-full rounded-xl border-brand-gold text-brand-gold">
                <Link href="/portal/samples">View Sample Pipeline</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
