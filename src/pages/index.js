import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout pageTitle='Hello World!'>
      <p className='pb-5'>Hiya! My name is Makayla Moster and I'm a <span className="text-cyan-500">Computer Science Ph.D. Candidate</span> at Clemson University.</p> 
      <p className='text-center'><span className="text-cyan-500 font-bold">I am on the job market and looking for academic positions starting in Fall 2025!</span></p> 
      <p   className='pb-5 text-center'>You can find my application materials <span className="text-cyan-500 hover:opacity-60"><Link to='/appmats'>here</Link></span>.</p>
      
      <div className="flex lg:mx-auto  space-x-3 grid-flow-row pb-5">
      <StaticImage className="" alt="Words" src="../images/Norway_MM.jpeg"/>
      <StaticImage className="" alt="Words" src="../images/Gizmo.jpeg"/>
      <StaticImage className="" alt="Words" src="../images/Norway_MBMM.jpeg"/>
      </div>

      <p className='pb-5'>I am a member of the <span className="text-cyan-500 hover:opacity-60"><Link to="http://clemsonhfse.com" target='_blank'>Human Factors Software Engineering lab</Link></span> under the guidance of <span className="text-cyan-500 hover:opacity-60"><Link to="https://paigerodeghero.com" target="_blank">Dr. Paige Rodeghero</Link></span>. 
      I am studying how the tools students use impacts their overall learning. Currently, I'm focusing on the tool Discord and how it can be used as an informal learning community as well as how it can help improve student communication during team projects.</p> 
      <p className='pb-5'>I graduated from the University of North Carolina Wilmington with my <span className="text-cyan-500">B.S. (Honors)</span> in Computer Science. During my time at Clemson, I have completed my <span className="text-cyan-500">M.S.</span> in Computer Science and my <span className="text-cyan-500">Graduate Certificate</span> in Engineering and Science Education.</p>
      <p className='pb-5'>In my limited spare time, I mostly enjoy reading novels and playing videogames. I also dabble in crafting; I am a tie dye enthusiast, a hobby crocheter, and have recently started sewing bandanas for my cat. Lastly, I enjoy going on walks with my <span className="text-cyan-500 hover:opacity-60"><Link to="https://michael-byrd.github.io" target="_blank">husband</Link></span> and cat, Gizmo.</p>
      
    </Layout>
  )
}

export const Head = () => <title>Makayla Moster</title>

export default IndexPage