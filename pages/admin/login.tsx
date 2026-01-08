import { useState } from 'react';
import useUser from '@/lib/useUser';
import Layout from '@/components/Layout';
import styles from '@/styles/Login.module.css';
import { useRouter } from 'next/router';

export default function Login() {
  const { mutateUser } = useUser({
    redirectTo: '/admin/dashboard',
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = {
      password: e.currentTarget.password.value,
    };

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        mutateUser(await res.json());
      } else {
        setErrorMsg('Incorrect password');
      }
    } catch (error) {
      console.error('An unexpected error happened:', error);
      setErrorMsg('An unexpected error happened');
    }
  }

  return (
    <Layout title="Admin Login" description="Admin Login">
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h1>Admin Login</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" required />
            </div>
            {errorMsg && <p className={styles.error}>{errorMsg}</p>}
            <button type="submit" className={styles.loginBtn}>Login</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
