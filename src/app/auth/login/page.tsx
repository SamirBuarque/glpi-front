import styles from "@/app/styles/login/login.module.css";

import { FormLogin } from "@/components/auth/FormLogin";

const Login: React.FC = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.titleWrapper}>
      <h2>Login</h2>
      </div>
        <FormLogin/>
    </div>
  );
};

export default Login;
