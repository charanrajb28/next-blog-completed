"use client";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import styles from "./loginPage.module.css";

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const { status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    if (res?.error) {
      setError("Invalid credentials");
    } else {
      router.push("/");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signed up:", userCred.user);
      alert("Account created! You can now sign in.");
      setIsSignIn(true); // Go to login
    } catch (err) {
      console.error("Firebase SignUp Error:", err.message);
      alert("Signup failed: " + err.message);
    }
  };

  if (status === "loading") return <div className={styles.loading}>Loading...</div>;
  if (status === "authenticated") {
    router.push("/");
    return null;
  }

  return (
    <div className={styles.authWrapper}>
      <div className={styles.backgroundImage} />

      <div className={styles.authContainer}>
        {/* Sign In */}
        <div className={`${styles.formPanel} ${styles.signIn} ${isSignIn ? styles.active : styles.hidden}`}>
          <h2>Sign In</h2>
          <div className={styles.socialIcons}>
            <SocialIcons />
          </div>
          <Divider />
          <form className={styles.authForm} onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <button type="submit" className={styles.btnPrimary}>
              SIGN IN
            </button>
          </form>
        </div>

        {/* Sign Up */}
        <div className={`${styles.formPanel} ${styles.signUp} ${!isSignIn ? styles.active : styles.hidden}`}>
          <h2>Create Account</h2>
          <div className={styles.socialIcons}>
            <SocialIcons />
          </div>
          <Divider />
          <form className={styles.authForm} onSubmit={handleSignUp}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit" className={styles.btnPrimary}>
              SIGN UP
            </button>
          </form>
        </div>

        {/* Overlay */}
        <div className={`${styles.overlay} ${isSignIn ? styles.slideRight : styles.slideLeft}`}>
          <div className={styles.overlayContent}>
            <h1>{isSignIn ? "Welcome Back!" : "Hello, Friend!"}</h1>
            <p>
              {isSignIn
                ? "New around here? Let’s get you set up — it only takes a moment."
                : "Already with us? Great! Just sign in and pick up where you left off."}
            </p>
            <button onClick={() => setIsSignIn(!isSignIn)} className={styles.toggleBtn}>
              {isSignIn ? "SIGN UP" : "SIGN IN"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Divider = () => (
  <div className={styles.divider}>
    <div className={styles.line} />
    <span>or</span>
    <div className={styles.line} />
  </div>
);

const SocialIcons = () => (
  <>
    <button className={styles.iconBtn}><FaFacebookF /></button>
    <button className={styles.iconBtn} onClick={() => signIn("google")}><FaGoogle /></button>
    <button className={styles.iconBtn}><FaLinkedinIn /></button>
  </>
);

export default LoginPage;
