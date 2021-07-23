import { Button, Card} from "antd";
import Meta from "antd/lib/card/Meta";
import styles from "../styles/Layout.module.css"
import Link from "next/link"
// import projects from "../libs/allProjects.json"
import projects from "../libs/newAllProjects.json"
import Image from "next/image"


export default function Cards() {

  return (
    <>
      {
        Object.entries(projects).map((project) => {
          return(
            <div key={project[1].projectId} className={styles.card}>
            {/* <div key={project[0]} className={styles.card}> */}
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <Image
                    width={200}
                    height={200}
                    src={project[1].image[0]}
                    alt={project[1].title}
                  />
                }
              >
                <Meta title={project[1].title} />

                <Button type="primary" size="large" className={styles.button}>
                  {/* <Link href="/projects/[project]" as={"/projects/" + project[1].projectId}> */}
                  <Link href="/projects/[project]" as={"/projects/" + project[1].projectId}>
                    <a>View More</a>
                  </Link>
                </Button>

              </Card> 
            </div>
          )

        })
      }
    </>
  );
}

