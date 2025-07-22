"use client"; // Required for client-side functionality in Next.js App Router

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import routes from "@/config/routes";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "/public/icons/facebook-icon.svg";
import googleIcon from "/public/icons/google-icon.svg";
import axios from 'axios';


export default function RegisterForm() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    password: "",
    confirmPassword: ""
  });
  
  // Error state
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user types
    if (error) setError("");
    if (passwordError && (name === "password" || name === "confirmPassword")) {
      setPasswordError("");
    }
  };

  // Handle form submission
 const handleSubmit = async (e) => {
  e.preventDefault();

  // Password validation
  if (formData.password !== formData.confirmPassword) {
    setPasswordError("Passwords do not match");
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:8000/register/",
      formData,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    console.log("nkh" , response.data.message);

    // Redirect to login page after successful registration
    window.location.href = routes.auth.login.index;

  } catch (err) {
    console.error("Error:", err.response?.data || err);
    setError("An unexpected error occurred. Please try again.");
  }
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* First Name */}
      <Input 
        className="mb-4" 
        placeholder="Your first name here" 
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      
      {/* Last Name */}
      <Input 
        className="mb-4" 
        placeholder="Your last name here" 
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      
      {/* Phone */}
      <Input 
        className="mb-4" 
        placeholder="Your phone here" 
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        type="tel"
        required
      />
      
      {/* Email */}
      <Input 
        className="mb-4" 
        placeholder="Your Mail here" 
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        required
      />
      
      {/* Country */}
      <Input 
        className="mb-4" 
        placeholder="Your country here" 
        name="country"
        value={formData.country}
        onChange={handleChange}
        required
      />
      
      {/* City */}
      <Input 
        className="mb-4" 
        placeholder="Your city here" 
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
      />
      
      {/* Password */}
      <Input 
        className="mb-4" 
        placeholder="Password" 
        name="password"
        value={formData.password}
        onChange={handleChange}
        type="password"
        required
      />
      
      {/* Confirm Password */}
      <Input 
        className="mb-4" 
        placeholder="Confirm password" 
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        type="password"
        required
      />
      
      {/* Password Error Message */}
      {passwordError && (
        <p className="text-red-500 text-sm">{passwordError}</p>
      )}
      
      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
      
      {/* Register Button */}
      <Button className="w-full" type="submit">Register</Button>
      
      {/* Divider */}
      <div className="my-6 border-t border-gray-300"></div>
      
      {/* Social Login Options */}
      <div className="text-center text-gray-600 mb-4">Or register with</div>
      <div className="flex items-center justify-center gap-4 mb-6">
        <Button pill variant="outline" type="button" className="flex items-center gap-2">
          <Image src={googleIcon} alt="google icon" width={20} height={20} />
          Google
        </Button>
        <Button pill variant="outline" type="button" className="flex items-center gap-2">
          <Image src={facebookIcon} alt="facebook icon" width={20} height={20} />
          Facebook
        </Button>
      </div>
      
      {/* Login Link */}
      <div className="text-center">
        Already have an account?{" "}
        <Button variant="link" className="text-primary" asChild>
          <Link href={routes.auth.login.index}>Login</Link>
        </Button>
      </div>
    </form>
  );
}