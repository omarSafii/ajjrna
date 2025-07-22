"use client";

import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import MastercardIcon from "@/components/icons/MastercardIcon";
import PaypalIcon from "@/components/icons/PaypalIcon";
import RupayIcon from "@/components/icons/RupayIcon";
import VisaLogo from "@/components/icons/VisaLogo";
import CartItem from "@/components/payment/CartItem";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import Separator from "@/components/ui/Separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import { ShoppingCartIcon, Loader2 } from "lucide-react";

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    cardType: 'visa',
    nameOnCard: '',
    cardNumber: '',
    expirationDate: '',
    ccv: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleCardTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, cardType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // تحويل التاريخ من MM/YY إلى YYYY-MM-DD

      const paymentData = {
        ...formData,
        CCV: formData.ccv,
      };
      const user = localStorage.getItem('ID')
      const response = await axios.post(`http://localhost:8000/api/payments/${user}/`, paymentData);
      
      toast.success('Payment processed successfully!');
      console.log('Payment data saved:', response.data);
      
    } catch (error) {
      toast.error('Failed to process payment');
      console.error('Payment error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container grid items-start gap-4 py-24 pt-32 md:grid-cols-[auto_auto] md:flex-row">
      <div>
        <p className="mb-4 font-montserrat text-2xl font-semibold">Shopping continue</p>
        <Separator className="mb-4" />
        <h2 className="mb-6 font-montserrat text-2xl font-semibold">Shopping cart</h2>
        <ul>
          <CartItem />
        </ul>
      </div>
      
      <Card asChild className="bg-[#565ABB] text-white hover:drop-shadow-none md:basis-1/3">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <div className="font-montserrat text-xl font-semibold">Card Details</div>
            <ShoppingCartIcon size={32} />
          </div>
          
          <div className="grid gap-4 sm:grid-cols-4 md:grid-cols-2">
            <div className="sm:col-span-2 sm:row-span-1">
              <div className="mb-2">Card type</div>
              <ToggleGroup 
                type="single" 
                value={formData.cardType}
                onValueChange={handleCardTypeChange}
                className="gap-2"
              >
                <ToggleGroupItem size="small" value="visa">
                  <VisaLogo className="size-6" />
                </ToggleGroupItem>
                <ToggleGroupItem size="small" value="paypal">
                  <PaypalIcon className="size-6" />
                </ToggleGroupItem>
                <ToggleGroupItem size="small" value="mastercard">
                  <MastercardIcon className="size-6" />
                </ToggleGroupItem>
                <ToggleGroupItem size="small" value="rupay">
                  <RupayIcon className="size-6" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            <div className="sm:col-span-2">
              <Label className="mb-2 font-montserrat font-semibold" htmlFor="nameOnCard">
                Name on card
              </Label>
              <Input
                className="rounded-md border-none bg-[#6268C6] text-white placeholder:text-[#C4C4C4] hover:bg-[#6268C6]"
                placeholder="Name"
                id="nameOnCard"
                value={formData.nameOnCard}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="sm:col-span-2">
              <Label className="mb-2 font-montserrat font-semibold" htmlFor="cardNumber">
                Card number
              </Label>
              <Input
                className="rounded-md border-none bg-[#6268C6] text-white placeholder:text-[#C4C4C4] hover:bg-[#6268C6]"
                placeholder="1234 5678 9012 3456"
                id="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div>
              <Label className="mb-2 font-montserrat font-semibold" htmlFor="expirationDate">
                Expiration date
              </Label>
              <Input
                className="w-full rounded-md border-none bg-[#6268C6] text-white placeholder:text-[#C4C4C4] hover:bg-[#6268C6]"
                placeholder="year-month-day"
                id="expirationDate"
                value={formData.expirationDate}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div>
              <Label className="mb-2 font-montserrat font-semibold" htmlFor="ccv">
                CCV
              </Label>
              <Input
                className="w-full rounded-md border-none bg-[#6268C6] text-white placeholder:text-[#C4C4C4] hover:bg-[#6268C6]"
                placeholder="123"
                id="ccv"
                value={formData.ccv}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <Separator className="my-4 bg-[#5F65C3]" />
          
          <Button 
            variant="success" 
            className="w-full justify-between" 
            size="lg"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              <>
                <span>Checkout</span>
              </>
            )}
          </Button>
        </form>
      </Card>
    </section>
  );
}