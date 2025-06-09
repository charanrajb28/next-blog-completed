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
         Technology
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        coding
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
         Startups
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
         Gadgets
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        Software
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
         tech & Society
      </Link> 
    </div>
  );
};

export default MenuCategories;
