"use client";

import React from "react";
import "@/app/styles/globals.css";
import styles from "@/app/styles/layout.module.css";
import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";
import SideBar from "@/app/components/layout/sideBar";
import Main from "@/app/components/layout/main";
import { useState, ReactNode, ReactElement, Children, cloneElement } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [showModal, setShowModal] = useState(false);
  
  return (
    <html>
      <body>
        <div>
          <Header showModal={showModal} setShowModal={setShowModal}/>
          <div className={styles.mainLayout}>
            <SideBar />
            <main className={styles.mainContent}><Main showModal={showModal} setShowModal={setShowModal}/></main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
