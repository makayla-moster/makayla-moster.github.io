import * as React from 'react'
import Layout from '../components/layout'
// import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const JobPage = () => {
    return (
        <Layout pageTitle="Application Materials">
            <p className='pb-5'>I anticipate graduating in May 2025 and I will be looking for academic positions for Fall 2025.</p>
            <p className='pb-5'>I am currently working on my application materials, they will be posted here soon!</p>
            <p className='pb-5'>If you are interested in collaborating or know of a position I would be right for, please contact me at <span className="text-cyan-500 hover:opacity-60"><Link to="mailto:makaylamoster@gmail.com">makaylamoster@gmail.com</Link></span>!</p>
        </Layout>
    )
}

export const Head = () => <title>Makayla Moster Application Materials</title>

export default JobPage
