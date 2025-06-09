import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="http://localhost:3000/posts/mufasa-the-lion-king-who-taught-us-leadership-legacy-and-love" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="https://firebasestorage.googleapis.com/v0/b/blogapp-45987.firebasestorage.app/o/1749293999073mufasa.jpg?alt=media&token=7b50d273-9c55-4b8f-b56c-16cd61e243df" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Style</span>
          <h3 className={styles.postTitle}>
            Mufasa: The Lion King Who Taught Us Leadership, Legacy, and Love
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>charan</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="http://localhost:3000/posts/blockchain-the-digital-backbone-of-tomorrow" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="https://firebasestorage.googleapis.com/v0/b/blogapp-45987.firebasestorage.app/o/1749359716011Blockchain.png?alt=media&token=38e5f3f2-5bf4-479a-a6b9-de7fde4199c4" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
             Coding
          </span>
          <h3 className={styles.postTitle}>
            Blockchain: The Digital Backbone of Tomorrow
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}></span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="http://localhost:3000/posts/ai-the-engine-of-the-new-intelligence-era" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/logo.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Artificial Intelligence</span>
          <h3 className={styles.postTitle}>
            AI: The Engine of the New Intelligence Era
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}></span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="http://localhost:3000/posts/ai-in-new-tech-powering-the-next-frontier-of-innovation" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="https://firebasestorage.googleapis.com/v0/b/blogapp-45987.firebasestorage.app/o/1749455803294download%20(1).jpeg?alt=media&token=274cc613-93a2-4534-ba0c-df48487fe5c0 " alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Artificial Intelligence
          </span>
          <h3 className={styles.postTitle}>
            AI in New Tech: Powering the Next Frontier of Innovation
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}></span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
