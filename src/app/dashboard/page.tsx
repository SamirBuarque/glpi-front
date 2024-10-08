import React from "react";
import "@/app/styles/globals.css";
import styles from "@/app/styles/layout.module.css";
import Header from "@/app/components/layout/header";
import SideBar from '@/app/components/layout/sideBar';
import Main from '@/app/components/layout/main';
import Footer from "@/app/components/layout/footer";

export default function DashboardPage() {
    return (
        <>
            <Header showModal={showModal} setShowModal={setShowModal}/>
          <div className={styles.mainLayout}>
            <SideBar />
            <main className={styles.mainContent}><Main showModal={showModal} setShowModal={setShowModal}/></main>
          </div>
          <Footer />
        </>
    );
}