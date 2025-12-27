import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout pageTitle='Hello World!'>

       
      
      {/* <div className="flex lg:mx-auto space-x-2 grid-flow-ro/w pb-5"> */}
      <div className='flex flex-row'>
        <div className='basis-2/3 pr-10'>
          <p className='font-archivoNarrow pb-5 text-2xl'>Hiya! My name is <span className="text-cyan-500">Makayla Moster</span> and I am an <span className="text-cyan-500">Assistant Professor</span> in <span className="text-cyan-500">Computer Science</span> at the <span className="text-cyan-500">University of North Carolina Wilmington</span>.</p> 

          {/* <p className='pb-5'>I received my Ph.D. and M.S. in Computer Science and my Certificate in Engineering and Science Education from Clemson University. I received my B.S. with Honors in Computer Science from UNC Wilmington.</p> */}
          <p className='pb-5'>My research is broadly focused on Computing Education. Some topics that I'm interested in investigating include <span className="text-cyan-500">informal learning communities</span>, <span className="text-cyan-500">AI + Computing Education</span>, and <span className="text-cyan-500">imposter phenomenon</span>. <br/> More information about my research and publications is <span className="text-cyan-500 hover:opacity-60"><Link to='/publications'>here</Link></span>.</p>
          <h1 className='font-archivoNarrow text-3xl pb-3'>Student Research Opportunities</h1>
          <p className='pb-5'>I am always interested in working with motivated students! <br/>Please <span className="text-cyan-500 hover:opacity-60"><Link to="mailto:mosterm@uncw.edu">send an email</Link></span> if you're interested in working with me.</p>
          <h1 className='font-archivoNarrow text-3xl pb-3'>Spring 2026 Courses</h1>
      <ul className='pb-3 pl-5'>
        <li>CIT 213: Introduction to Databases</li>
        <li>CIT 425: Human-Computer Interfaces</li>
      </ul>
      <h1 className='font-archivoNarrow text-3xl pb-3'>Spring 2026 Office Hours</h1>
      <ul className='pb-3 pl-5'>
        <li>Day(s) and time(s) TBA</li>
        <li>By appointment, please <span className="text-cyan-500 hover:opacity-60"><Link to="mailto:mosterm@uncw.edu">send an email</Link></span> to schedule</li>
      </ul>
        </div>
        <div className='basis-1/3 pl-10'>
          <StaticImage className="max-h-1/4 rounded-xl" alt="Words" src="../images/makayla-moster-225-2.jpg"/>
          </div>
      </div>
      {/* <StaticImage className="object-scale-down" alt="Words" src="../images/makayla-moster-225-xl.jpg"/> */}
      {/* <StaticImage className="" width="960" alt="Words" src="../images/gzmo_bench.jpg"/> */}
      {/* </div> */}

      
      

      

      
      
      {/* <div className="flex lg:mx-auto space-x-3 grid-flow-row pb-5">
      <StaticImage className="" width="960" alt="Words" src="../images/makayla-moster-225.jpg"/>
      <StaticImage className="" width="960" alt="Words" src="../images/gzmo_bench.jpg"/>
      <StaticImage className="" width="960" alt="Words" src="../images/Norway_MBMM.jpeg"/>
      </div> */}

      
      
    </Layout>
  )
}

export const Head = () => <title>Makayla Moster</title>

export default IndexPage