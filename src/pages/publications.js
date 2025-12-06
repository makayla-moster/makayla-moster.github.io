import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const PublicationsPage = () => {
  return (
    <Layout pageTitle='Research &amp; Publications'>



      <h1 className='font-archivoNarrow text-cyan-500 text-3xl pb-5'>Research Interests</h1>
      <p>My research interests are very broad but mostly focus on Computing Education. Some current interests include:</p>
      <ul className='pb-5 pl-10'>
        <li>1. Computing-focused <span className="text-cyan-500">informal learning communities</span> and their benefits</li>
        <li>2. How to best utilize <span className="text-cyan-500">informal computer-mediated communication tools</span> in educational settings</li>
        <li>3. Broad interests in <span className="text-cyan-500">AI &amp; Computing Education</span></li>
        <li>4. Reducing <span className="text-cyan-500">imposter phenomenon</span> in computing students</li>
        <li>5. Improving the student <span className="text-cyan-500">teamwork experience</span></li>
      </ul>

      <h1 className='font-archivoNarrow text-cyan-500 text-3xl pt-5 pb-5'>Prospective Students</h1>
      <p className='pb-10'>I am always interested in working with motivated students! Please <span className="text-cyan-500 hover:opacity-60"><Link to="mailto:mosterm@uncw.edu">reach out</Link></span> if you're interested in working with me.</p>

      <div className="flex lg:mx-auto space-x-3 grid-flow-row pb-5">
      <StaticImage className="rounded-xl" width="960" alt="Words" src="../images/cscw2023.jpg"/>
      <StaticImage className="rounded-xl" width="960" alt="Words" src="../images/makayla-moster-ICSE24-cropped.JPG"/>
      <StaticImage className="rounded-xl" width="960" alt="Words" src="../images/Norway_MBMM.jpeg"/>
      </div>

      <h1 className='font-archivoNarrow text-cyan-500 text-3xl pt-5 pb-5'>Publications</h1>
      <h1 className='font-archivoNarrow text-3xl pb-5'>2025</h1>
      <ul className='pb-5'>
        <li><span className="text-cyan-500 underline">Moster, M.</span> "Learning Through Online Participation: From Breakout Rooms to Discord" (2025). All Dissertations. 3900.</li>
        <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://open.clemson.edu/all_dissertations/3900" target="_blank">dissertation download</Link></span></li>
      </ul>

      <h1 className='font-archivoNarrow text-3xl pb-5'>2024</h1>
      <ul className='pb-5'>
        <li>Kokinda, E., <span className="text-cyan-500 underline">Moster, M.</span>, Rodeghero, P., Boyer, D. M. "Informal Learning Opportunities - Neurodiversity, Self-Efficacy, and Motivation for Programming Interest", presented at the 16th International Conference on Computer Supported Education (<span className="text-cyan-500 hover:opacity-60"><Link to="https://csedu.scitevents.org/" target="_blank">CSEDU '24</Link></span>), Angers, France, May 2-4, 2024. </li>
        <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/papers/2024_CSEDU_InformalLearning.pdf?raw=true" target="_blank">pre-print</Link></span></li>
      </ul>

      <ul className='pb-5'>
        <li><span className="text-cyan-500 underline">Moster, M.</span> & Boyer, D. M., "WIP: Exploring how an Unofficial Discord Server Supports Undergraduate Learning in Computer Science", presented at 2024 ASEE Annual Conference & Exposition, Portland, Oregon, USA, June 23-26, 2024. </li>
        {/* <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow">pre-print coming soon</span></li> */}
        <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/papers/Moster_ASEE2024_Discord.pdf?raw=true" target="_blank">pre-print</Link></span> | <span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/slides/2024_ASEE_Poster.pdf?raw=true" target="_blank">poster</Link></span> | <span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to='https://peer.asee.org/board-54-work-in-progress-exploring-how-an-unofficial-discord-server-supports-undergraduate-learning-in-computer-science' target="_blank">paper</Link></span></li>
      </ul>

      <ul className='pb-5'>
        <li>Kokinda, E., <span className="text-cyan-500 underline">Moster, M.</span>, Boyer, D. M., "Compiling Resilience: A Study on First-Generation Women Pursuing Computing Degrees", presented at 2024 ASEE Annual Conference & Exposition, Portland, Oregon, USA, June 23-26, 2024. </li>
        {/* <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow">pre-print coming soon</span></li> */}
        <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/papers/2024_ASEE_CompilingResilience.pdf?raw=true" target="_blank">pre-print</Link></span> | <span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/slides/2024_ASEE_WomenInComputing.pdf?raw=true" target="_blank">slides</Link></span> | <span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to='https://peer.asee.org/compiling-resilience-a-study-on-first-generation-women-pursuing-computing-degrees' target='_blank'>paper</Link></span></li>
      </ul>

      <ul className='pb-10'>
        <li><span className="text-cyan-500 underline">Moster, M.</span>, Kokinda, E., Boyer, D. M., Rodeghero, P. "Experiences with Summer Camp Communication via Discord", in Proc. of the 46th IEEE/ACM International Conference on Software Engineering - Software Engineering Education and Training Track (<span className="text-cyan-500 hover:opacity-60"><Link to="https://conf.researchr.org/track/icse-2024/icse-2024-software-engineering-education-and-training-track" target="_blank">ICSE SEET '24</Link></span>), Lisbon, Portugal, April 14-20, 2024. </li>
        <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/papers/2024_ICSE_SEET_DiscordExperienceReport.pdf?raw=true" target="_blank">pre-print</Link></span>  | <span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/slides/2024_ICSE_EdASEDiscordExperiences.pdf?raw=true" target="_blank">slides</Link></span>  | <span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/papers/ICSE24.JPG?raw=true" target="_blank">presentation photo</Link></span></li>
      </ul>

      <h1 className='font-archivoNarrow text-3xl pb-5'>2023</h1>
      <ul className='pb-5'>
        <li>Kokinda, E., <span className="text-cyan-500 underline">Moster, M.</span>, Dominic, J., Rodeghero, P. "Under the Bridge: Trolling and the Challenges of Recruiting Software Developers for Empirical Research Studies", in Proc. of the 45th IEEE/ACM International Conference on Software Engineering - New Ideas and Emerging Results Track (<span className="text-cyan-500 hover:opacity-60"><Link to="https://conf.researchr.org/track/icse-2023/icse-2023-NIER?" target="_blank">ICSE NIER '23</Link></span>), Melbourne, Australia, May 17-19, 2023. </li>
        <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/papers/2023_ICSE_NIER_Trolling.pdf?raw=true" target="_blank">pre-print</Link></span></li>
      </ul>

      <ul className='pb-10'>
        <li><span className="text-cyan-500 underline">*Moster, M.</span>, *Kokinda, E., Rodeghero, P., McNeese, N. "Both Sides of the Story: Changing the 'Pre-existing Culture of Dread' Surrounding Student Teamwork in Breakout Rooms", in Proc. of the ACM on Human Computer Interaction, <span className="text-cyan-500 hover:opacity-60"><Link to="https://cscw.acm.org/2023/" target="_blank">CSCW1</Link></span>, Article 30 (April 2023), 33 pages. <span className="text-cyan-500 hover:opacity-60"><Link to="https://doi.org/10.1145/3579463" target="_blank">https://doi.org/10.1145/3579463</Link></span> </li>
        <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/papers/2023_CSCW_BothSidesoftheStory.pdf?raw=true" target="_blank">pre-print</Link></span> | <span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/slides/2023_CSCW_BothSidesPresentation.pdf?raw=true" target="_blank">slides</Link></span></li>
        <li>*denotes co-first authorship</li>
      </ul>


      <h1 className='font-archivoNarrow text-3xl pb-5'>2022</h1>
      <ul className='pb-5'>
        <li><span className="text-cyan-500 underline">Moster, M.</span>, Chandra, A., Chu, C., Liu, W., Rodeghero, P. "In the Zone: An Analysis of the Music Practices of Remote Software Developers", in Proc. of the 2022 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (<span className="text-cyan-500 hover:opacity-60"><Link to="https://conf.researchr.org/track/esem-2022/esem-2022-emerging-results-and-vision-papers?#About" target="_blank">ESEM '22</Link></span>), Helsinki, Finland, September 19-23, 2022. </li>
        <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/papers/2022_ESEM_NewIdea_Paper.pdf?raw=true" target="_blank">pre-print</Link></span> | <span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/slides/2022_ESEM_Presentation_Rodeghero.pdf?raw=true" target="_blank">slides</Link></span></li>
      </ul>
      <ul className='pb-5'>
        <li><span className="text-cyan-500 underline">Moster, M.</span> "Investigating Communication Tools in SE Capstone Courses", in Proc. of the 2022 ACM Conference on International Computing Education Research V.2 (<span className="text-cyan-500 hover:opacity-60"><Link to="https://icer2022.acm.org/track/icer-2022-doctoral-consortium" target="_blank">ICER '22</Link></span>), Lugano and Virtual Event, Switzerland, August 7–11, 2022. </li>
        <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/slides/2022_ICER_Slide.pdf?raw=true" target="_blank">slide</Link></span> | <span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/slides/2022_ICER_Poster.pdf?raw=true" target="_blank">poster</Link></span></li>
      </ul>

      <ul className='pb-5'>
        <li><span className="text-cyan-500 underline">Moster, M.</span>, Begel, A., Boyer, D. M., Rodeghero, P. "A Longitudinal Study Exploring Autistic High Schoolers' Interests in CS", 4th Annual Autism at Work Research Workshop (<span className="text-cyan-500 hover:opacity-60"><Link to="https://www.microsoft.com/en-us/research/event/4th-annual-autism-at-work-research-workshop/" target="_blank">AAWRW '22</Link></span>), Virtual, May 16-18, 2022. </li>
        <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/papers/2022_MSFT_AutismAtWork_Workshop.pdf?raw=true" target="_blank">paper</Link></span></li>
      </ul>

      <ul className='pb-10'>
        <li><span className="text-cyan-500 underline">Moster, M.</span>, Kokinda, E., Re, M., Dominic, J., Lehmann, J., Begel, A., Rodeghero, P. "'Can You Help Me?' An Experience Report of Teamwork in a Game Coding Camp for Autistic High School Students", in Proc. of the 44th IEEE/ACM International Conference on Software Engineering - Software Engineering Education and Training Track (<span className="text-cyan-500 hover:opacity-60"><Link to="https://conf.researchr.org/track/icse-2022/icse-2022-seet?" target="_blank">ICSE SEET '22</Link></span>), Pittsburgh, PA, USA, May 21-29, 2022. </li>
        <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/papers/2022_ICSE_SEET_Experience_Report.pdf?raw=true" target="_blank">pre-print</Link></span> | <span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://zenodo.org/record/5902445" target="_blank">materials</Link></span> | <span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://youtu.be/YGufCW6Mq4c?si=OBALjJ-xidLZ-5VE" target="_blank">talk</Link></span> | <span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/slides/2022_SEET_ExperienceReport.pdf?raw=true" target="_blank">slides</Link></span></li>
      </ul>

      <h1 className='font-archivoNarrow text-3xl pb-5'>2021</h1>
      <ul className='pb-5'>
        <li><span className="text-cyan-500 underline">Moster, M.</span>, Ford, D., Rodeghero, P. "'Is My Mic On?' Preparing SE Students for Collaborative Remote Work and Hybrid Team Communication", in Proc. of the 43rd IEEE/ACM International Conference on Software Engineering - Joint Software Engineering Education and Training Track (<span className="text-cyan-500 hover:opacity-60"><Link to="https://conf.researchr.org/track/icse-2021/icse-2021-Software-Engineering-and-Education-Track#About" target="_blank">ICSE JSEET '21</Link></span>), Madrid, Spain (virtual), May 23-29, 2021. </li>
        <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://arxiv.org/abs/2102.01057" target="_blank">pre-print</Link></span> | <span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://youtu.be/xTDhabCZOCw?si=Uwbj-OLBN5S32hVD" target="_blank">talk</Link></span> | <span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/slides/moster_ford_rodeghero_jseet_presentation_2021.pdf?raw=true" target="_blank">slides</Link></span></li>
      </ul>

      <ul className='pb-10'>
        <li>Huff Jr, E. W., Boateng, K., <span className="text-cyan-500 underline">Moster, M.</span> ,Rodeghero, P., Brinkley, J. "Exploring the Perspectives of Teachers of the Visually Impaired Regarding Accessible K12 Computing Education", in Proc. of the 51st Technical Symposium on Computer Science Education (<span className="text-cyan-500 hover:opacity-60"><Link to="https://sigcse2021.sigcse.org/info/" target="_blank">SIGCSE '21</Link></span>), Toronto, Canada (virtual), March 13-20, 2021.</li>
      </ul>

      <h1 className='font-archivoNarrow text-3xl pb-5'>2020</h1>
      <ul className='pb-10'>
        <li>Huff Jr, E. W., Boateng, K., <span className="text-cyan-500 underline">Moster, M.</span> ,Rodeghero, P., Brinkley, J. "Examining the Work Experience of Programmers with Visual Impairments", in Proc. of the 36th International Conference on Software Maintenance and Evolution - New Ideas and Emerging Results Track (<span className="text-cyan-500">ICSME NIER '20</span>), Adelaide, Australia (virtual), Sept. 27-Oct. 3, 2020.</li>
      </ul>

      <h1 className='font-archivoNarrow text-3xl pb-5'>Undergraduate Research</h1>
      <ul>
        <li>I spent a year and a half doing computer graphics research as an undergrad. Below are two projects I completed that had to do with procedurally generating fractal trees using C++ and OpenGL.</li> <br />
        <ul className='pb-5'>
          <li><strong>Conforming Realistic, Procedural Tree Models to User-Drawn Shapes</strong> (2019)</li>
          <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/slides/Makayla_Moster.pdf?raw=true" target="_blank">poster</Link></span> | <span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/CSC_499" target="_blank">github</Link></span> | <span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/papers/2019_DepartmentalHonorsThesis.pdf?raw=true" target="_blank">bachelor's thesis</Link></span></li>
        </ul>

        <ul className='pb-5'>
          <li><strong>Generating Plant Models using Fractals</strong> (2018)</li>
          <li><span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/pdfs/blob/master/slides/Poster.pdf?raw=true" target="_blank">poster</Link></span> | <span className="text-cyan-500 hover:opacity-60 font-archivoNarrow"><Link to="https://github.com/makayla-moster/FractalTree" target="_blank">github</Link></span></li>
        </ul>
      </ul>
    </Layout>
  )
}

export const Head = () => <title>Makayla Moster Publications</title>

export default PublicationsPage