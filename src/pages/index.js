import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout pageTitle='Hello World!'>
      <p className='pb-5'>Hiya! My name is Makayla Moster and I'm a <span className="text-cyan-500">Computer Science Ph.D. Candidate</span> at Clemson University.</p> 

      {/* <p className='pb-5'>Hiya! My name is Makayla Moster and I am an <span className="text-cyan-500">Assistant Professor</span> in the Computer Science department at the <span className="text-cyan-500">University of North Carolina Wilmington</span>.</p>  */}
      
      <div className="flex lg:mx-auto  space-x-3 grid-flow-row pb-5">
      <StaticImage className="" alt="Words" src="../images/Norway_MM.jpeg"/>
      <StaticImage className="" alt="Words" src="../images/Gizmo.jpeg"/>
      <StaticImage className="" alt="Words" src="../images/Norway_MBMM.jpeg"/>
      </div>

      {/* <p  className='pb-5'>I am an <span className="text-cyan-500">Assistant Professor</span> in the Computer Science department at the <span className="text-cyan-500">University of North Carolina Wilmington</span>. 
        I received my Ph.D. in Computer Science with a focus on Software Engineering Education from Clemson University. </p> */}

      <p className='pb-5'>My research focuses on <span className="text-cyan-500">teamwork</span>, <span className="text-cyan-500">computer-mediated communication tools</span>, and <span className="text-cyan-500">informal learning communities</span>. 
        I have two goals with my research: 1) I want to further our understanding of informal online education-based communities and how/if they impact students’ formal education, and 2) I want to improve the student teamwork experience through CMC tools. 
        My hope is to help further our understanding of informal learning communities and ways to improve the learning experience for everyone.</p>

      <p className='pb-5'>In my limited spare time, I mostly enjoy reading novels and playing videogames. I also dabble in crafting; I am a tie dye enthusiast, a hobby crocheter, and sew bandanas for my cat. Lastly, I enjoy going on walks with my <span className="text-cyan-500 hover:opacity-60"><Link to="https://michael-byrd.github.io" target="_blank">husband</Link></span> and cat, Gizmo.</p>
      
    </Layout>
  )
}

export const Head = () => <title>Makayla Moster</title>

export default IndexPage