"use client";
import Navlinks from "@/components/header/Navlinks";
import SigninIcon from "@/components/icons/SigninIcon";
import routes from "@/config/routes";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/labeled_logo.png";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [first_name, setFirst_name] = useState<string | null>(null);
  const [last_name, setLast_name] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fname = localStorage.getItem('first_name');
      setFirst_name(fname);
      const lname = localStorage.getItem('last_name');
      setLast_name(lname);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('first_name');
    localStorage.removeItem('last_name');
    setFirst_name(null);
    setLast_name(null);
    // يمكنك إضافة توجيه إلى صفحة تسجيل الدخول هنا إذا لزم الأمر
    // window.location.href = routes.auth.login.index;
  };

  const fullName = first_name && last_name ? `${first_name} ${last_name}` : null;

  return (
    <div className="bg-gradient-to-r from-secondary/60 to-primary/60 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between gap-4 py-4 font-montserrat font-bold text-white">
        <Link href={routes.index}>
          <Image src={logo} alt="ajjrna" className="max-w-20 lg:max-w-32" />
        </Link>
        <Navlinks />
        {fullName ? (
          <div className="flex items-center gap-4">
            <span>{fullName}</span>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition-colors"
            >
              تسجيل الخروج
            </button>
          </div>
        ) : (
          <Link href={routes.auth.login.index} className="flex items-center gap-2">
            <SigninIcon className="w-6" />
            <span>Login/Register</span>
          </Link>
        )}
      </nav>
    </div>
  );
}