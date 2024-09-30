import "@/app/styles/globals.css";
import styles from "@/app/styles/layout.module.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import SideBar from "./components/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div>
          <Header />
          <div className={styles.mainLayout}>
            <SideBar />
            <main className={styles.mainContent}>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
