import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout pageTitle='Hello World!'>
      <p className='pb-5'>Hiya! My name is Makayla Moster and I'm a <span className="text-cyan-500">Computer Science Ph.D. Candidate</span> at Clemson University.</p> 
      <p className='pb-5'>I am a member of the <span className="text-cyan-500 hover:opacity-60"><Link to="http://clemsonhfse.com" target='_blank'>Human Factors Software Engineering lab</Link></span> under the guidance of <span className="text-cyan-500 hover:opacity-60"><Link to="https://paigerodeghero.com" target="_blank">Dr. Paige Rodeghero</Link></span>.</p> 
      <div className="flex lg:mx-auto  space-x-3 grid-flow-row pb-5">
      <StaticImage className="" alt="Words" src="../images/Norway_MM.jpeg"/>
      <StaticImage className="" alt="Words" src="../images/Gizmo.jpeg"/>
      <StaticImage className="" alt="Words" src="../images/Norway_MBMM.jpeg"/>
      </div>

      <p className='pb-5'>I graduated from the University of North Carolina Wilmington with my B.S. (Honors) in Computer Science. During my time at Clemson, I have completed my M.S. in Computer Science and my Graduate Certificate in Engineering and Science Education.</p>
      <p className='pb-5'>In my limited spare time, I mostly enjoy reading novels and playing videogames. I also dabble in crafting; I am a tie dye enthusiast and a hobby crocheter. Lastly, I enjoy going on walks with my <span className="text-cyan-500 hover:opacity-60"><Link to="https://michael-byrd.github.io" target="_blank">fiancé</Link></span> and cat, Gizmo.</p>
      
    </Layout>
  )
}

export const Head = () => <title>Makayla Moster</title>

export default IndexPage