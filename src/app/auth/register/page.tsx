import React from "react";
import styles from "@/app/styles/register/register.module.css";
import { FormRegister } from "@/components/auth/FormRegister";

const Register: React.FC = () => {
  return (
    <div className={styles.registerContainer}>
      <h2>Register</h2>
      <FormRegister/>
    </div>
  );
};

export default Register;
