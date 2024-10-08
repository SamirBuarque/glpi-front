"use client";

import React from "react";
import "@/app/styles/globals.css";
import Login from '@/app/components/login/login';
import { useState, ReactNode, ReactElement, Children, cloneElement } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  const handleLogin = (email: string, password: string) => {
    console.log('Usuário logado com sucesso', email, password);
  }

  return (
    <html>
      <body>
        <div>
          <Login onLogin={handleLogin}/>
        </div>
      </body>
    </html>
  );
}
