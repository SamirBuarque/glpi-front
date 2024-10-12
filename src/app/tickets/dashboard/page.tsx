import React from "react";
import styles from "@/app/styles/layout/layout.module.css";
import Header from "@/components/layout/header";
import SideBar from "@/components/layout/sideBar";
import Main from "@/components/layout/main";
import Footer from "@/components/layout/footer";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <div className={styles.mainLayout}>
        <SideBar />
        <div className={styles.mainContent}>Main content goes here</div>
      </div>
    </>
  );
}
