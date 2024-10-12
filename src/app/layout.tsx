"use client";

import React from "react";
import '@/app/styles/globals.css';
import Login from '@/components/login/login';
import { useState, ReactNode, ReactElement, Children, cloneElement } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  //const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    //setShowModal(true);
  }

  return (
    <html>
      <body>
        <main>
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
