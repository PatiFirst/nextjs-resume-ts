import { GetStaticProps, GetStaticPaths, NextPage, NextPageContext } from 'next'
import React, { ReactElement } from 'react'
import { Data } from '../../models/modelProject'
// import projects from '../../libs/newAllProjects.json'
import projects from '../../libs/allProjects.json'
import Layout from '../../components/Layout'
import styles from '../../styles/Project.module.css'
import { Space, Image, Button } from 'antd'
import Link from 'next/link'

// interface Props{
//     project: Data
// }
interface Props{
    data: Data
}

export default function Project({data}: Props) {
    const images = data.image
    const buttons = data.button

    return (
        <Layout>
             <div className={styles.projectCon}>
                 <h1>{data.title}</h1>
                 <h3>{data.subtitle}</h3>
                <p>{data.description}</p>
                
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

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await import('../../libs/allProjects.json')
    const paths = Object.keys(data).map((thisData) => ({
        params: {id: thisData},
    }))
    return{
        fallback: false,
        paths 
    }
}

interface Params{
    params: any
}

export const getStaticProps: GetStaticProps = async({params}: Params) => {
  const detail = await import('../../libs/allProjects.json')
  let data 
  if(typeof(detail) !== 'undefined') {
      data = detail[params.id]
  }
  else{
      data = {}
  }
  return{
    props: {
      data
    }
  }
}



// interface Proj{
//     proj: object
//     query: any
// }

// Project.getInitialProps = async ({query}: NextPageContext) => {
//     const proj = projects[query.id]
//     return{
//         project: proj
//     }
// }