// // import React from "react";
// // import styles from "./featured.module.css";
// import Image from "next/image";

// // const Featured = () => {
// //   return (
// //     <div className={styles.container}>
// //       {/* <h1 className={styles.title}>
// //         <b>Hey, lama dev here!</b> <h2 className={styles.title1}>Discover my stories and creative ideas.</h2>
// //       </h1> */}
// //       {/* <h1 >Hey, lama dev here!</h1><h2>Discover my stories and creative ideas</h2> */}
// //       <div className={styles.post}>
// //         <div className={styles.imgContainer}>
// //           <Image src="/p1.jpeg" alt="" fill className={styles.image} />
// //         </div>
// //         <div className={styles.textContainer}>
// //           <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
// //           <p className={styles.postDesc}>
// //             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
// //             Cupiditate, quam nisi magni ea laborum inventore voluptatum
// //             laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
// //             quisquam! Harum unde sit culpa debitis.
// //           </p>
// //           <button className={styles.button}>Read More</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Featured;

// import React from "react";
// import styles from "./featured.module.css";

// const Featured = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.post}>
//         <div className={styles.videoContainer}>
//           <video
//             className={styles.video}
//             src="/sample-video.mp4"
//             controls
//             muted
//             autoPlay
//             loop
//           />
//         </div>
//         <div className={styles.textContainer}>
//           <h1 className={styles.postTitle}>
//             Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
//           </h1>
//           <p className={styles.postDesc}>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//             Cupiditate, quam nisi magni ea laborum inventore voluptatum
//             laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
//             quisquam! Harum unde sit culpa debitis.
//           </p>
//           <button className={styles.button}>Read More</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;



import React from "react";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      {/* Optional Title Section */}
       
      {/* <h1 className={styles.title}>
        <b>Hey, I’m a creative mind!</b>
        <h2 className={styles.title1}>Explore my videos and ideas</h2>
      </h1>  */}
      <div className={styles.title}>
  <h5><b>BUILT NOT BORN</b></h5>
  <h6>The Real Stories of Hustle & Rise.</h6>
</div>
      

      <div className={styles.post}>
        <div className={styles.videoContainer}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/Db6ZRMSbUfg?si=WT2wdmfl1UDPGjKh&start=6"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

