import * as React from 'react'
import Layout from '../components/layout'
// import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const JobPage = () => {
    return (
        <Layout pageTitle="Application Materials Archive">
            <p>Below you will find my application materials from when I was on the job market for positions starting in Fall 2025.</p>
            <p className='pb-5'>To be clear, I am not currently on the job market. These are my materials from Fall 2024/Spring 2025.</p>
            <span className='text-cyan-500 hover:opacsity-60 font-archivoNarrow text-2xl pb-5'><Link to="https://github.com/makayla-moster/pdfs/blob/master/cv/Moster_Makayla_CV_jobapp.pdf?raw=true" target="_blank">CV</Link></span>
            <span className='text-cyan-500 hover:opacsity-60 font-archivoNarrow text-2xl pb-5'><Link to="https://github.com/makayla-moster/pdfs/blob/master/application/Moster_TeachingStatement.pdf?raw=true" target="_blank">Teaching Statement</Link></span>
            <span className='text-cyan-500 hover:opacsity-60 font-archivoNarrow text-2xl pb-5'><Link to="https://github.com/makayla-moster/pdfs/blob/master/application/Moster_ResearchStatement.pdf?raw=true" target="_blank">Research Statement</Link></span>
        </Layout>
    )
}

export const Head = () => <title>Makayla Moster Application Materials</title>

export default JobPage
