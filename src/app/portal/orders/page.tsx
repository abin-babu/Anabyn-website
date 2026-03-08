
'use client';

import { useUser, useFirebase, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, orderBy } from 'firebase/firestore';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Eye, 
  Package, 
  Download, 
  Filter,
  ArrowUpDown
} from 'lucide-react';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';

export default function PortalOrdersPage() {
  const { user } = useUser();
  const { firestore } = useFirebase();
  const [searchTerm, setSearchTerm] = useState('');

  const ordersQuery = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return query(
      collection(firestore, 'orders'), 
      where('buyerUid', '==', user.uid),
      orderBy('createdAt', 'desc')
    );
  }, [firestore, user]);

  const { data: orders, isLoading } = useCollection(ordersQuery);

  const filteredOrders = useMemo(() => {
    if (!orders) return [];
    return orders.filter(o => 
      o.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.product.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [orders, searchTerm]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-playfair text-brand-navy">My Orders</h1>
          <p className="text-muted-foreground mt-1">Full history of your international procurement.</p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-brand-gold/10">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search by ID or Product..." 
            className="pl-10 h-11 border-brand-gold/20 focus:ring-brand-gold"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-brand-gold/30 h-11 px-6">
            <Filter className="w-4 h-4 mr-2" /> Filters
          </Button>
          <Button variant="outline" className="border-brand-gold/30 h-11 px-6">
            <ArrowUpDown className="w-4 h-4 mr-2" /> Sort
          </Button>
        </div>
      </div>

      <Card className="border-none shadow-xl overflow-hidden bg-white">
        <Table>
          <TableHeader className="bg-brand-navy text-white">
            <TableRow className="hover:bg-brand-navy">
              <TableHead className="text-white">Order Details</TableHead>
              <TableHead className="text-white hidden md:table-cell">Product</TableHead>
              <TableHead className="text-white">Quantity</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-right text-white">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow><TableCell colSpan={5} className="text-center py-20">Syncing with export ledger...</TableCell></TableRow>
            ) : filteredOrders.length === 0 ? (
              <TableRow><TableCell colSpan={5} className="text-center py-20 text-muted-foreground">No matching orders found.</TableCell></TableRow>
            ) : (
              filteredOrders.map((o) => (
                <TableRow key={o.id} className="group hover:bg-secondary/5 transition-colors">
                  <TableCell>
                    <div className="font-mono font-bold text-brand-gold">{o.orderId}</div>
                    <div className="text-[10px] text-muted-foreground uppercase font-black tracking-tighter">
                      {new Date(o.createdAt?.toDate()).toLocaleDateString()}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="font-bold text-brand-navy">{o.product}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{o.quantity} {o.unit}</div>
                  </TableCell>
                  <TableCell>
                    <Badge className={cn(
                      "px-3 py-0.5 text-[9px] uppercase",
                      o.status === 'Delivered' ? "bg-success" : 
                      o.status === 'Shipped' ? "bg-blue-600" :
                      "bg-brand-gold text-brand-navy"
                    )}>
                      {o.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button asChild variant="ghost" size="icon" className="hover:bg-brand-navy/5 text-brand-navy">
                        <Link href={`/portal/orders/${o.id}`}><Eye className="h-4 w-4" /></Link>
                      </Button>
                      {o.documents?.length > 0 && (
                        <Button variant="ghost" size="icon" className="hover:bg-brand-navy/5 text-brand-gold">
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
