import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div> */}
      <div className={styles.logo}>EduBlogs</div>
      <div></div>
      <div className={styles.links}><div className={styles.links}>
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="https://edu-magzine-leij.vercel.app/" className={styles.link}>Achievers Wall</Link>
        <Link href="/#Footer" className={styles.link}>About</Link>
      </div>
      <div className={styles.links1}>
        <AuthLinks />
        {/* <ThemeToggle /> */}
      </div></div>
    </div>
  );
};

export default Navbar;
