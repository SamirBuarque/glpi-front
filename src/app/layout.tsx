"use client";

import "bootstrap/dist/css/bootstrap.min.css"; // css bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // js bootstrap
import React from "react";
import "@/app/styles/globals.css";
import { ReactNode } from "react";
import Footer from "@/components/layout/footer";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
        <body>
          <main className="content">
            {children}
            </main>
          <footer>
            <Footer />
          </footer>
        </body>
    </html>
  );
}
