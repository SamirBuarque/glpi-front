import { ReactNode } from "react";
import Header from "@/components/layout/header";
import styles from '@/app/styles/layout/layout.module.css'

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
