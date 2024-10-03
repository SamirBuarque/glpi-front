"use client";

import React from "react";
import "@/app/styles/globals.css";
import styles from "@/app/styles/layout.module.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import SideBar from "./components/sideBar";
import Main from "./components/main";
import { useState, ReactNode, ReactElement, Children, cloneElement } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  const [showModal, setShowModal] = useState(false);
  
  const childrenWithProps = Children.map(children, (child) =>
    React.isValidElement(child)
      ? cloneElement(child as ReactElement<any>, { showModal, setShowModal })
      : child
    )

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
