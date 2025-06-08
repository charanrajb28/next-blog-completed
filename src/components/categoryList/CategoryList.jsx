// import React from "react";
// import styles from "./categoryList.module.css";
// import Link from "next/link";
// import Image from "next/image";

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

// const CategoryList = async () => {
//   const data = await getData();
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Popular Categories</h1>
//       <div className={styles.categories}>
//         {data?.map((item) => (
//           <Link
//             href="/blog?cat=style"
//             className={`${styles.category} ${styles[item.slug]}`}
//             key={item._id}
//           >
//             {item.img && (
//               <Image
//                 src={item.img}
//                 alt=""
//                 width={32}
//                 height={32}
//                 className={styles.image}
//               />
//             )}
//             {item.title}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryList;


'use client'

import React, { useEffect, useState } from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/categories");
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>Popular Categories</h1> */}
      <div className={styles.categories}>
        {data.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
