"use client"; // ✅ الإضافة المطلوبة

import { useState } from "react";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Input from "@/components/ui/Input";
import routes from "@/config/routes";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "/public/icons/facebook-icon.svg";
import googleIcon from "/public/icons/google-icon.svg";
import axios from 'axios';


export default function LoginForm() {
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios.post("http://localhost:8000/login/", formData ,).then((e)=>{
        localStorage.setItem('email' , e.data.user.email);
        localStorage.setItem('first_name' , e.data.user.first_name);
        localStorage.setItem('last_name' , e.data.user.last_name);
        localStorage.setItem('ID' , e.data.user.ID);
      }).catch((error)=>{
        console.log(error.error);
      });

      // if (!response.ok) throw new Error("فشل تسجيل الدخول");

      // إعادة التوجيه أو عرض رسالة نجاح
    } catch (error) {
      console.error("Error:", error);
    }
  };
 const handleRefresh = () => {
     window.location.pathname='/'
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input className="mb-4" placeholder="Your Mail here"
      name="email"
      value={formData.email}
      onChange={handleChange}
      
      
      />
      <Input className="mb-4" placeholder="Password" 
      name="password"
      value={formData.password}
      onChange={handleChange}
      
      
      
      />
      <div className="mb-4 flex justify-between">
        <div className="flex items-center gap-3">
          <Checkbox id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <Button variant="link">Forgot Password ?</Button>
      </div>
          <Button className="mb-4 w-full" onClick={handleRefresh}>
      Log In
    </Button>
      <div className="mb-4 text-center">Or login With</div>
      <div className="mb-4 flex items-center justify-center gap-4">
        <Button pill variant="outline">
          <Image src={googleIcon} alt="google icon" />
          Google
        </Button>
        <Button pill variant="outline">
          <Image src={facebookIcon} alt="facebook icon" />
          Facebook
        </Button>
      </div>
      <div className="text-center">
        Don't have an account ?{" "}
        <Button variant="link" className="text-primary" asChild>
          <Link href={routes.auth.register.index}>Create an account</Link>
        </Button>
      </div>
    </form>
  );
  }