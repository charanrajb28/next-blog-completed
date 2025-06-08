// "use client";
// import { signIn, useSession } from "next-auth/react";
// import styles from "./loginPage.module.css";
// import { useRouter } from "next/navigation";

// const LoginPage = () => {
//   const { status } = useSession();

//   const router = useRouter();

//   if (status === "loading") {
//     return <div className={styles.loading}>Loading...</div>;
//   }

//   if (status === "authenticated") {
//     router.push("/")
//   }
 
//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <div className={styles.socialButton} onClick={() => signIn("google")}>
//           Sign in with Google
//         </div>
//         <div className={styles.socialButton}>Sign in with Github</div>
//         <div className={styles.socialButton}>Sign in with Facebook</div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



 

// // 'use client';
// // import React, { useState } from 'react';
// // import { FaGoogle, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

// // function AuthPage() {
// //   const [isSignIn, setIsSignIn] = useState(true);

// //   return (
// //     <div className="flex items-center justify-center min-h-screen w-full bg-[var(--bg)] text-[var(--textColor)] relative">
// //       {/* Overlay Panel Container */}
// //       <div
// //         className="relative w-full max-w-4xl h-[80vh] rounded-lg shadow-2xl overflow-hidden flex backdrop-blur-lg bg-[var(--softBg)] bg-opacity-80"
// //         style={{
// //           backgroundImage: `url('/overlay.png')`,
// //           backgroundSize: 'cover',
// //           backgroundPosition: 'center',
// //         }}
// //       >
// //         {/* Sign In Form */}
// //         <div
// //           className={`w-1/2 flex flex-col justify-center items-center p-10 absolute top-0 left-0 h-full transition-all duration-700 ease-in-out ${
// //             isSignIn ? 'translate-x-0 opacity-100 z-10' : '-translate-x-full opacity-0 z-0'
// //           }`}
// //         >
// //           <h2 className="text-3xl font-bold mb-6">Sign In</h2>
// //           <div className="flex space-x-4 mb-4">
// //             <SocialIcons />
// //           </div>
// //           <div className="flex items-center w-full max-w-sm mb-6">
// //             <div className="flex-1 h-px bg-gray-500" />
// //             <span className="px-3 text-sm text-[var(--softTextColor)]">or</span>
// //             <div className="flex-1 h-px bg-gray-500" />
// //           </div>
// //           <form className="flex flex-col w-full max-w-sm space-y-4">
// //             <input type="email" placeholder="Email" className="bg-transparent border px-4 py-2 rounded-md text-[var(--textColor)] border-gray-400" />
// //             <input type="password" placeholder="Password" className="bg-transparent border px-4 py-2 rounded-md text-[var(--textColor)] border-gray-400" />
// //             <button
// //               type="submit"
// //               className="bg-blue-600 text-white rounded-md py-2 mt-4 hover:bg-blue-700 transition"
// //             >
// //               SIGN IN
// //             </button>
// //           </form>
// //         </div>

// //         {/* Sign Up Form */}
// //         <div
// //           className={`w-1/2 flex flex-col justify-center items-center p-10 absolute top-0 right-0 h-full transition-all duration-700 ease-in-out ${
// //             isSignIn ? 'translate-x-full opacity-0 z-0' : 'translate-x-0 opacity-100 z-10'
// //           }`}
// //         >
// //           <h2 className="text-3xl font-bold mb-6">Create Account</h2>
// //           <div className="flex space-x-4 mb-4">
// //             <SocialIcons />
// //           </div>
// //           <div className="flex items-center w-full max-w-sm mb-6">
// //             <div className="flex-1 h-px bg-gray-500" />
// //             <span className="px-3 text-sm text-[var(--softTextColor)]">or</span>
// //             <div className="flex-1 h-px bg-gray-500" />
// //           </div>
// //           <form className="flex flex-col w-full max-w-sm space-y-4">
// //             <input type="text" placeholder="Name" className="bg-transparent border px-4 py-2 rounded-md text-[var(--textColor)] border-gray-400" />
// //             <input type="email" placeholder="Email" className="bg-transparent border px-4 py-2 rounded-md text-[var(--textColor)] border-gray-400" />
// //             <input type="password" placeholder="Password" className="bg-transparent border px-4 py-2 rounded-md text-[var(--textColor)] border-gray-400" />
// //             <button
// //               type="submit"
// //               className="bg-blue-600 text-white rounded-md py-2 mt-4 hover:bg-blue-700 transition"
// //             >
// //               SIGN UP
// //             </button>
// //           </form>
// //         </div>

// //         {/* Toggle Panel */}
// //         <div
// //           className={`absolute top-0 left-0 w-1/2 h-full text-white flex flex-col items-center px-10 transition-all duration-700 ease-in-out ${
// //             isSignIn ? 'translate-x-full' : 'translate-x-0'
// //           }`}
// //         >
// //           <div className="max-w-md text-center space-y-6 flex flex-col justify-center h-full py-10">
// //             <div>
// //               <h1 className="text-4xl font-bold">
// //                 {isSignIn ? 'Welcome Back!' : 'Hello, Friend!'}
// //               </h1>
// //             </div>
// //             <p className="text-sm">
// //               {isSignIn
// //                 ? 'New around here? Let’s get you set up — it only takes a moment.'
// //                 : 'Already with us? Great! Just sign in and pick up where you left off.'}
// //             </p>
// //             <button
// //               onClick={() => setIsSignIn(!isSignIn)}
// //               className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
// //             >
// //               {isSignIn ? 'SIGN UP' : 'SIGN IN'}
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function SocialIcons() {
// //   return (
// //     <>
// //       <button className="group border rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-50 transition">
// //         <FaFacebookF className="text-gray-300 group-hover:text-blue-600 transition" />
// //       </button>
// //       <button className="group border rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-50 transition">
// //         <FaGoogle className="text-gray-300 group-hover:text-red-500 transition" />
// //       </button>
// //       <button className="group border rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-50 transition">
// //         <FaLinkedinIn className="text-gray-300 group-hover:text-blue-700 transition" />
// //       </button>
// //     </>
// //   );
// // }

// // export default AuthPage;
 


'use client';
import React, { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import styles from './loginPage.module.css';

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const { status } = useSession();
  const router = useRouter();

  if (status === 'loading') return <div className={styles.loading}>Loading...</div>;
  if (status === 'authenticated') {
    router.push('/');
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
          <form className={styles.authForm}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className={styles.btnPrimary}>SIGN IN</button>
          </form>
        </div>

        {/* Sign Up */}
        <div className={`${styles.formPanel} ${styles.signUp} ${!isSignIn ? styles.active : styles.hidden}`}>
          <h2>Create Account</h2>
          <div className={styles.socialIcons}>
            <SocialIcons />
          </div>
          <Divider />
          <form className={styles.authForm}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className={styles.btnPrimary}>SIGN UP</button>
          </form>
        </div>

        {/* Overlay */}
        <div className={`${styles.overlay} ${isSignIn ? styles.slideRight : styles.slideLeft}`}>
          <div className={styles.overlayContent}>
            <h1>{isSignIn ? 'Welcome Back!' : 'Hello, Friend!'}</h1>
            <p>
              {isSignIn
                ? 'New around here? Let’s get you set up — it only takes a moment.'
                : 'Already with us? Great! Just sign in and pick up where you left off.'}
            </p>
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className={styles.toggleBtn}
            >
              {isSignIn ? 'SIGN UP' : 'SIGN IN'}
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
    <button className={styles.iconBtn} onClick={() => signIn('google')}><FaGoogle /></button>
    <button className={styles.iconBtn}><FaLinkedinIn /></button>
  </>
);

export default LoginPage;
