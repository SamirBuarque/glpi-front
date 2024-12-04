"use client";

import React from "react";
import "@/app/styles/globals.css";
import styles from "@/app/styles/layout/layout.module.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SideBar from "@/components/layout/sideBar";
import Main from "@/components/layout/main";
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
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.mainLayout}>
        <SideBar />
        <div className={styles.mainContent}>{children}</div>
      </div>
    </div>
  );
}
