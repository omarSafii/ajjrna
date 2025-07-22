"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon, XCircleIcon, Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

interface Product {
  id: number;
  ProName: string;
  Description: string;
  price: number;
  ProImage: string;
}

interface CartItem {
  id: number;
  product: Product;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    setUserId(localStorage.getItem('ID'));
  }, []);

  const fetchCartItems = async () => {
    if (!userId) return;
    
    try {
      const response = await axios.get(`http://localhost:8000/cart/${userId}/`);
      setCartItems(response.data.cart_items || []);
    } catch (error) {
      toast.error("Failed to load cart items");
      console.error('Error:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchCartItems();
    }
  }, [userId]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchCartItems();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin h-12 w-12 text-primary" />
      </div>
    );
  }

  if (!cartItems.length) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold">Your cart is empty</h3>
        <p className="text-muted-foreground mt-2">
          Start shopping to add items to your cart
        </p>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Shopping Cart</h1>
        <Button 
          variant="outline" 
          onClick={handleRefresh}
          disabled={refreshing}
        >
          {refreshing ? (
            <Loader2 className="animate-spin h-4 w-4 mr-2" />
          ) : null}
          Refresh
        </Button>
      </div>

      <div className="grid gap-6">
        {cartItems.map((item) => (
          <CartItemCard 
            key={item.id} 
            item={item} 
            onUpdate={handleRefresh}
          />
        ))}
      </div>

      <CartSummary cartItems={cartItems} />
    </div>
  );
}

function CartItemCard({ item, onUpdate }: { item: CartItem, onUpdate: () => void }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const updateQuantity = async (newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setIsUpdating(true);
    try {
      await axios.put(`http://localhost:8000/cart/put/${item.id}/`, {
        quantity: newQuantity
      });
      toast.success("Quantity updated");
      onUpdate();
    } catch (error) {
      toast.error("Failed to update quantity");
      console.error('Error:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const removeItem = async () => {
    setIsRemoving(true);
    try {
      await axios.delete(`http://localhost:8000/cart/delete/${item.id}/`);
      toast.success("Item removed from cart");
      onUpdate();
    } catch (error) {
      toast.error("Failed to remove item");
      console.error('Error:', error);
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <Card className="p-4 relative">
      {isRemoving && (
        <div className="absolute inset-0 bg-background/80 flex items-center justify-center rounded-md">
          <Loader2 className="animate-spin h-8 w-8 text-primary" />
        </div>
      )}
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative w-full md:w-32 h-32 flex-shrink-0">
          <Image
            src={item.product.ProImage || "/images/default-product.png"}
            alt={item.product.ProName}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, 128px"
          />
        </div>

        <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{item.product.ProName}</h3>
            <p className="text-muted-foreground text-sm">
              {item.product.Description || "No description available"}
            </p>
            <div className="mt-2 text-primary font-medium">
              {item.product.price} SAR
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => updateQuantity(item.quantity - 1)}
                disabled={item.quantity <= 1 || isUpdating}
              >
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
              
              <div className="w-10 text-center">
                {isUpdating ? (
                  <Loader2 className="animate-spin h-4 w-4 mx-auto" />
                ) : (
                  <span>{item.quantity}</span>
                )}
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => updateQuantity(item.quantity + 1)}
                disabled={isUpdating}
              >
                <ChevronUpIcon className="h-4 w-4" />
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={removeItem}
              disabled={isRemoving}
              className="text-destructive hover:text-destructive"
            >
              <XCircleIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

function CartSummary({ cartItems }: { cartItems: CartItem[] }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.product.price * item.quantity),
    0
  );

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      toast.success("Redirecting to checkout...");
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Add actual checkout logic here
    } catch (error) {
      toast.error("Checkout failed");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <Card className="p-6 mt-8">
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{subtotal.toFixed(2)} SAR</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Calculated at checkout</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>{subtotal.toFixed(2)} SAR</span>
        </div>
      </div>

      <Button 
        className="w-full mt-6" 
        size="lg"
        onClick={handleCheckout}
        disabled={isCheckingOut || cartItems.length === 0}
      >
        {isCheckingOut ? (
          <>
            <Loader2 className="animate-spin h-4 w-4 mr-2" />
            Processing...
          </>
        ) : (
          "Proceed to Checkout"
        )}
      </Button>
    </Card>
  );
}