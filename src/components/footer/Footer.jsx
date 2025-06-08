// import React from "react";
// import styles from "./footer.module.css";
// import Image from "next/image";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.info}>
//         <div className={styles.logo}>
//           <Image src="/logo.png" alt="lama blog" width={50} height={50} />
//           <h1 className={styles.logoText}>Lamablog</h1>
//         </div>
//         <p className={styles.desc}>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
//           necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
//           porro sequi, totam minima consequuntur, aspernatur deleniti vero
//           repellendus dorales.
//         </p>
//         <div className={styles.icons}>
//           <Image src="/facebook.png" alt="" width={18} height={18} />
//           <Image src="/instagram.png" alt="" width={18} height={18} />
//           <Image src="/tiktok.png" alt="" width={18} height={18} />
//           <Image src="/youtube.png" alt="" width={18} height={18} />
//         </div>
//       </div>
//       <div className={styles.links}>
//         <div className={styles.list}>
//           <span className={styles.listTitle}>Links</span>
//           <Link href="/">Homepage</Link>
//           <Link href="/">Blog</Link>
//           <Link href="/">About</Link>
//           <Link href="/">Contact</Link>
//         </div>
//         <div className={styles.list}>
//           <span className={styles.listTitle}>Tags</span>
//           <Link href="/">Style</Link>
//           <Link href="/">Fashion</Link>
//           <Link href="/">Coding</Link>
//           <Link href="/">Travel</Link>
//         </div>
//         <div className={styles.list}>
//           <span className={styles.listTitle}>Social</span>
//           <Link href="/">Facebook</Link>
//           <Link href="/">Instagram</Link>
//           <Link href="/">Tiktok</Link>
//           <Link href="/">Youtube</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


// import React from "react";
// import styles from "./footer.module.css";
// import Image from "next/image";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.info}>
//         <div className={styles.logo}>
//           <Image src="/logo.png" alt="lama blog" width={50} height={50} />
//           <h1 className={styles.logoText}>MentXtv</h1>
//         </div>
//         <p className={styles.desc}>
//           MentXTV is a growing media-led project under the MentX umbrella, aiming to revolutionize mentorship in India through engaging short-form videos featuring mentors, achievers, and students.
//         </p>
//         <div className={styles.icons}>
//             {/* Facebook video */}
//             <video
//               className={styles.iconVideo}
//               src="/Facebook.webm"
//               width="30"
//               height="30"
//               autoPlay
//               loop
//               muted
//               playsInline
//             />

//             {/* Instagram video */}
//             <video
//               className={styles.iconVideo}
//               src="/Instagram.webm"
//               width="30"
//               height="30"
//               autoPlay
//               loop
//               muted
//               playsInline
//             />

//             {/* TikTok video */}
//             <video
//               className={styles.iconVideo}
//               src="/Twitter.webm"
//               width="30"
//               height="30"
//               autoPlay
//               loop
//               muted
//               playsInline
//             />

//             {/* YouTube video */}
//             <video
//               className={styles.iconVideo}
//               src="/YouTube.webm"
//               width="30"
//               height="30"
//               autoPlay
//               loop
//               muted
//               playsInline
//             />
//           </div>

//       </div>

//       <div className={styles.links}>
//         <div className={styles.list}>
//           <span className={styles.listTitle}>Links</span>
//           <Link href="/">Homepage</Link>
//           <Link href="/#CardList">Blog</Link>
//           <Link href="/">Achievers Wall</Link>
//           <Link href="/#Footer">About</Link>
//         </div>
//         <div className={styles.list}>
//           <span className={styles.listTitle}>Tags</span>
//           <Link href="/">Motivation</Link>
//           <Link href="/">Community</Link>

//           <Link href="/">Coding</Link>
//           <Link href="/">Meetups</Link>
//         </div>
//         <div className={styles.list}>
//           <span className={styles.listTitle}>Social</span>
//           <Link href="/">Facebook</Link>
//           <Link href="/">Instagram</Link>
//           <Link href="/">Youtube</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// components/footer/Footer.js
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container} id="Footer">
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="MentXtv logo" width={50} height={50} />
          <h1 className={styles.logoText}>MentXtv</h1>
        </div>
        <p className={styles.desc}>
          MentXTV is a growing media-led project under the MentX umbrella,
          aiming to revolutionize mentorship in India through engaging short-form videos featuring mentors, achievers, and students.
        </p>

        <div className={styles.icons}>
          <video
            className={styles.iconVideo}
            src="/Facebook.webm"
            width="30"
            height="30"
            autoPlay
            loop
            muted
            playsInline
          />
          <video
            className={styles.iconVideo}
            src="/Instagram.webm"
            width="30"
            height="30"
            autoPlay
            loop
            muted
            playsInline
          />
          <video
            className={styles.iconVideo}
            src="/Twitter.webm"
            width="30"
            height="30"
            autoPlay
            loop
            muted
            playsInline
          />
          <video
            className={styles.iconVideo}
            src="/YouTube.webm"
            width="30"
            height="30"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/#CardList">Blog</Link>
          <Link href="/">Achievers Wall</Link>
          <Link href="/#Footer">About</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Motivation</Link>
          <Link href="/">Community</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Meetups</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
