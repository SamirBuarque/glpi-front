"use client";

import React from "react";
import '@/app/styles/globals.css';
import { ReactNode } from "react";
import Footer from "@/components/layout/footer";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {

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
