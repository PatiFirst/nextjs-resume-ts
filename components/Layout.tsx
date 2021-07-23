import React from "react";
import styles from "../styles/Layout.module.css";
import Image from "next/image";
import Cards from "../components/Card"
import { Button } from "antd";
import Link from "next/link"

export interface Props{
     children: React.ReactNode,
     home?:boolean
}

export default function Layout({children, home}:Props ) {
  return (
    <main className={styles.container}>
          {home ? (
               <div className={styles.resume}>
                    <div className={styles.resumeLeft}>
                    <div className={styles.profileImg}>
                    <Image src="/images/Profile2.jpg" width={250} height={250} />
                    </div>

                    <div className={styles.profile}>
                    <h2>Personal Information</h2>

                    <p>
                         I am a third-year student and studying
                         <span className={styles.bold}>Media Technology</span> at
                         <span className={styles.bold}>
                              KMUTT.
                         </span>
                    </p>
                    <p>
                         I am interested in front-end web development and interactive
                         development and I would like to develop my skills to have
                         knowledge and experience from this internship.
                    </p>

                    <p className={styles.bold}>Email</p>
                    <p>patipon_981@hotmail.com</p>

                    <p className={styles.bold}>Phone</p>
                    <p>0814888901</p>
                    <p className={styles.bold}>Facebook</p>
                    <p>PatiFirst Wsstt</p>
                    <p className={styles.bold}>Instagram</p>
                    <p>p.patifirst</p>
                    </div>

                    <div className={styles.language}>
                         <h2>Languages</h2>
                         <p>
                              <span className={styles.bold}>Thai: </span> <span>Native</span>
                         </p>
                         <p>
                              <span className={styles.bold}>English: </span> <span>Good</span>
                         </p>
                    </div>
                    </div>

                    {/* Right side of Resume */}
                    <div className={styles.resumeRight}>
                    <h1 className={styles.name}>Patipon Wongsuebsantati</h1>

                    {/* Project Experience */}
                    <div className={styles.projectCon}>
                         <h2>Project Experience</h2>
                         <div className={styles.projectCard}>
                              <Cards />   
                         </div>

                    </div>

                    <div className={styles.gridProgram}>
                    <div>
                         <h2 className="mb-4">Programming Language</h2>

                         <p>
                         <span className={styles.bold}>Basic: </span>
                         <span>HTML/CSS/JavaScript/C#</span>
                         </p>

                         <p>
                         <span className={styles.bold}>Beginner: </span>
                         <span>SQL/TypeScript/Java</span>
                         </p>
                    </div>

                    <div>
                         <h2 className="mb-4">Programming Language</h2>

                         <p>
                         <span className={styles.bold}>Basic: </span>
                         <span>Bootstrap/Node.js/Unity/Vuforia</span>
                         </p>
                         <p>
                         <span className={styles.bold}>Beginner: </span>
                         <span>React.js/Next.js/Arduino</span>
                         </p>
                    </div>
                    </div>
                    </div>
               </div>
          ) : (
               <>
                    <Button type="primary" danger size="large" className={styles.button}>
                         <Link href="/">
                              <a>Back</a>
                         </Link>
                    </Button>

                    {children}
               </>
          )}
    </main>
  );
}
