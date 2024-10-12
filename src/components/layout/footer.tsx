import React from 'react';
import styles from '@/app/styles/layout/footer.module.css';

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <p>&copy; 2024 GLPI</p>
            <p>Desenvolvido por Samir Buarque</p>
        </footer>
    );
}