import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Motivation
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        Technology
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Career Advice
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        meetups
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        Community
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        Coding
      </Link> 
    </div>
  );
};

export default MenuCategories;
