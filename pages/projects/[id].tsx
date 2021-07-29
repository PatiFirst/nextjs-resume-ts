import { GetStaticProps, GetStaticPaths, NextPage, GetServerSidePropsContext, NextPageContext } from 'next'
import React, { ReactElement } from 'react'
import { Data } from '../../models/modelProject'
// import projects from '../../libs/newAllProjects.json'
import projects from '../../libs/allProjects.json'
import Layout from '../../components/Layout'
import styles from '../../styles/Project.module.css'
import { Space, Image, Button } from 'antd'
import Link from 'next/link'

interface Props{
    project: Data
}
// export interface Props{
//     data: Data
// }

// export type ProjectDetailProps = Data

export default function Project({project}: Props) {
    const images = project.image
    const buttons = project.button

    return (
        <Layout>
             <div className={styles.projectCon}>
                 <h1>{project.title}</h1>
                 <h3>{project.subtitle}</h3>
                <p>{project.description}</p>
                
                 <div className={styles.projectImgCon}>
                     <Space size="large">
                         {
                            buttons.map((button, index) => {
                                return(
                                        <Button type="primary" size="large"  key={index}>
                                            <Link href={button.link}>
                                                <a >{button.title}</a>
                                            </Link>
                                        </Button>
                                )
                            })
                        }
                    </Space>
                        
                </div>

                <Image.PreviewGroup>
                    <Space size="small" wrap>
                        {
                            images.map((image, index) => {
                                return(
                                        <Image
                                            
                                            key={index}
                                            style={{marginRight: 20}}
                                            width={200}
                                            src={image}
                                            />
                                    )
                                })
                        }
                    </Space>
                </Image.PreviewGroup>
            </div>
        </Layout>

    )
}

Project.getInitialProps = async ({ query }) => {
    // const projId: Proj = query.id
    // console.log(typeof(query))
    const project = query.id
    const proj: Data = projects[query.id]
    // console.log(typeof(proj))
    return{
        project: proj
    }
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     const data = await import('../../libs/allProjects.json')
//     const myData = data.default
//     const paths = Object.keys(myData).map((thisData) => ({
//         params: {id: thisData},
//     }))
//     return{
//         fallback: false,
//         paths 
//     }
// }

// export const getStaticProps: GetStaticProps= async({query}) => {
// //   const detail  = await import('../../libs/allProjects.json')
// //   const myObj = detail.default
    
//     console.log(query.id)
//   let data
//   if(typeof(projects) !== 'undefined') {
//       data = projects[query.id]
//   }
//   else{
//       data = {}
//   }
//   return{
//     props: {
//       data
//     }
//   }
// }



