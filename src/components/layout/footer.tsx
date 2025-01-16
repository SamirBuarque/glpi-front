import React from "react";
import styles from "@/app/styles/layout/footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
      <footer className={`${styles.footer} bg-dark text-white pt-2 pb-2`}>
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-6 mx-auto mt-3">
              <p>&copy; {currentYear} GLPI - Ticketing System</p>
            </div>
            <div className="col-6 mx-auto mt-3">
              <p>Desenvolvido por Wizarion e Katochi</p>
            </div>
          </div>
        </div>
      </footer>
  );
}
