import * as React from 'react'
import Layout from '../components/layout'
// import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const TeachingPage = () => {
    return (
        <Layout pageTitle="Teaching">
            <h1 className='font-archivoNarrow text-3xl pb-3'>UNCW</h1>
            <ul className='pb-8'>
                <li><span className="text-cyan-500">CIT 425</span>: Human-Computer Interfaces <span className='float-right text-cyan-500 hover:opacity-60 font-archivoNarrow'><Link to="https://github.com/makayla-moster/pdfs/blob/master/CIT425_Syllabus.pdf?raw=truw" target="_blank">syllabus</Link></span></li>
                {/* <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="" target="_blank">syllabus here soon</Link></span></li> */}
                <li className='float-none'></li>

                <li><span className="text-cyan-500">CIT 213</span>: Introduction to Databases <span className='float-right text-cyan-500 hover:opacity-60 font-archivoNarrow'><Link to="https://github.com/makayla-moster/pdfs/blob/master/CIT213_Syllabus.pdf?raw=true" target="_blank">syllabus</Link></span></li>
                {/* <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="" target="_blank">syllabus here soon</Link></span></li> */}
                <li className='float-none'></li>
            </ul>

            <h1 className='font-archivoNarrow text-3xl pb-3'>Clemson University Graduate Teaching Assistant</h1>
            <ul className='pb-8'>
                <li><span className="text-cyan-500">CPSC 8740</span>: AI-Receptive Software Development <span className='float-right'>2024, 2025</span></li>
                <li className='float-none'><span className="text-cyan-500">CPSC 9500</span>: Graduate Seminar <span className='float-right'>2023</span></li>
                <li className='float-none'><span className="text-cyan-500">CPSC 4910/4911</span>: Senior Computing Practicum <span className='float-right'>2021 - 2023</span></li>
                <li className='float-none'><span className="text-cyan-500">CPSC 1010/1011</span>: Computer Science I <span className='float-right'>2019, 2020</span></li>
            </ul>

            <h1 className='font-archivoNarrow text-3xl pb-3'>Summer Camp Instructor</h1>
            <ul className='pb-8'>
                <li><span className="text-cyan-500"><Link to="https://edase.org" target='_blank' className='hover:text-cyan-500 hover:opacity-60'>EdASE Coding Camp for Autism</Link></span>, Clemson University <span className='float-right'>2021, 2022, 2023, 2024</span></li>
                <li className='float-none'><span className="text-cyan-500">Engineering Expectations</span>, UNCW <span className='float-right'>2018 - 2019</span></li>
            </ul>
        </Layout>
    )
}

export const Head = () => <title>Makayla Moster Teaching</title>

export default TeachingPage
