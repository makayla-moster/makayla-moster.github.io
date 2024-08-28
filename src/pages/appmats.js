import * as React from 'react'
import Layout from '../components/layout'
// import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const JobPage = () => {
    return (
        <Layout pageTitle="Application Materials">
            <p >I anticipate graduating in May 2025 and I will be looking for academic positions for Fall 2025.</p><p className='pb-5'>My application materials can be found below.</p>
            <span className='text-cyan-500 hover:opacsity-60 font-archivoNarrow text-2xl pb-5'><Link to="https://github.com/makayla-moster/pdfs/blob/master/cv/Moster_Makayla_CV.pdf?raw=true" target="_blank">CV</Link></span>
            <span className='text-cyan-500 hover:opacsity-60 font-archivoNarrow text-2xl pb-5'><Link to="https://github.com/makayla-moster/pdfs/blob/master/application/Moster_TeachingStatement.pdf?raw=true" target="_blank">Teaching Statement</Link></span>
            <span className='text-cyan-500 hover:opacsity-60 font-archivoNarrow text-2xl pb-5'><Link to="https://github.com/makayla-moster/pdfs/blob/master/application/Moster_ResearchStatement.pdf?raw=true" target="_blank">Research Statement</Link></span>
            <p className='pb-5'>If you are interested in collaborating or know of a position I would be right for, please contact me at <span className="text-cyan-500 hover:opacity-60"><Link to="mailto:makaylamoster@gmail.com">makaylamoster@gmail.com</Link></span>!</p>
        </Layout>
    )
}

export const Head = () => <title>Makayla Moster Application Materials</title>

export default JobPage
