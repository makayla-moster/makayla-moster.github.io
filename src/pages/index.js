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
          <p className='font-archivoNarrow pb-5 text-2xl'>Hiya! My name is <span className="text-cyan-500">Makayla Moster</span> and I am an <span className="text-cyan-500">Assistant Professor</span> in the <span className="text-cyan-500">Computer Science Department</span> at the <span className="text-cyan-500">University of North Carolina Wilmington</span>.</p> 
          {/* <p className='pb-5'>I received my Ph.D. and M.S. in Computer Science and my Certificate in Engineering and Science Education from Clemson University. I received my B.S. with Honors in Computer Science from UNC Wilmington.</p> */}
          <p className='pb-5'>I teach courses mainly within the <span className="text-cyan-500 hover:opacity-60"><Link to='https://uncw.edu/academics/majors-programs/cse-csb/information-technology-bs/' target='_blank'>Information Technology program</Link></span>. My research is broadly focused on Computing Education. Some topics that I'm interested in investigating include <span className="text-cyan-500">informal learning communities</span>, <span className="text-cyan-500">AI + Computing Education</span>, and <span className="text-cyan-500">imposter phenomenon</span>. More information about my research and publications is <span className="text-cyan-500 hover:opacity-60"><Link to='/publications'>here</Link></span>.</p>
          <br/>
          <h1 className='font-archivoNarrow text-3xl pb-3'>Research Opportunities</h1>
          <p className='pb-5'>I am always interested in working with <span className="text-cyan-500 hover:opacity-60">motivated</span> students or collaborators on research projects! <br/>Please <span className="text-cyan-500 hover:opacity-60"><Link to="mailto:mosterm@uncw.edu">send an email</Link></span> if you're interested in working with me.</p>
          <br/>
          <h1 className='font-archivoNarrow text-3xl pb-3'>Fall 2026 Courses</h1>
      <ul className='pb-3 pl-5'>
        <li>CIT 213: Introduction to Databases</li>
        <li>CIT 425: Human-Computer Interfaces</li>
      </ul>
      <h1 className='font-archivoNarrow text-3xl pb-3'>Fall 2026 Office Hours</h1>
      <ul className='pb-3 pl-5'>
        <li>TBD</li>
        {/* <li>Mondays, 9-11am</li>
        <li>Wednesdays, 9-11am</li>
        <li>By appointment, please <span className="text-cyan-500 hover:opacity-60"><Link to="mailto:mosterm@uncw.edu">send an email</Link></span> to schedule</li> */}
      </ul>
        </div>
        <div className='basis-1/3 pl-10'>
          <StaticImage className="max-h-1/4 rounded-xl" alt="Words" src="../images/makayla-moster-225-2.jpg"/>
          </div>
      </div>
      <br/>
            <br/>
      <p className='pt-5 pb-3'>In my free time, I play board/video games, read novels, craft, and hang out with my husband and cats.</p>
      <div className="flex lg:mx-auto space-x-3 grid-flow-row pb-5">
        <StaticImage className="rounded-xl" width="960" alt="Words" src="../images/MMMB_UNCWCS.jpg"/>
        <StaticImage className="rounded-xl" width="960" alt="Words" src="../images/gzmo_bench.jpg"/>
        <StaticImage className="rounded-xl" width="960" alt="Words" src="../images/gadget2.jpg"/>
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