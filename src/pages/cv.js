import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const CvPage = () => {
    return (
        <Layout pageTitle="Curriculum Vitae">
            <span className='text-cyan-500 hover:opacity-60 font-archivoNarrow text-2xl pb-10'><Link to="https://github.com/makayla-moster/pdfs/blob/master/cv/Moster_Makayla_CV.pdf?raw=true" target="_blank">pdf version</Link></span>
            {/* <p className='pb-10 text-sm'>For more details, <Link className='text-cyan-500 hover:opacity-60' to="https://github.com/makayla-moster/pdfs/blob/master/cv/Moster_Makayla_CV.pdf?raw=true" target="_blank">please view the PDF</Link> of my CV.</p> */}
            {/* <h1 className='font-archivoNarrow text-3xl pb-3'>Research Interests</h1>
            <ul className='pb-10'>
                <li>Computer Science Education, Software Engineering Education, Remote/Hybrid Learning, Remote/Hybrid Work, HCI</li>
            </ul> */}

            <h1 className='font-archivoNarrow text-3xl pb-3'>Education</h1>
            <ul className='pb-5'>
                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>Ph.D. Candidate, Computer Science</span> <span className='float-right'>Expected May 2025</span></li>
                <li className='float-none'>Clemson University</li>
                <li>Advisor: <span className='hover:text-cyan-500 hover:opacity-60'><Link to="https://paigerodeghero.com" target="_blank">Dr. Paige Rodeghero</Link></span> <span className='float-right hover:text-cyan-500 hover:opacity-60'><Link to="http://clemsonhfse.com" target='_blank'>Human Factors Software Engineering member</Link></span></li>
            </ul>
            <ul className='pb-5'>
                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>Graduate Certificate, Engineering and Science Education</span> <span className='float-right'>December 2022</span></li>
                <li className='float-none'>Clemson University</li>
            </ul>
            <ul className='pb-5'>
                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>M.S., Computer Science</span> <span className='float-right'>May 2021</span></li>
                <li className='float-none'>Clemson University</li>
            </ul>
            <ul className='pb-10'>
                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>B.S. Honors, Computer Science</span> <span className='float-right'>May 2019</span></li>
                <li className='float-none'>University of North Carolina Wilmington <span className='float-right'>Concentration: Digital Arts</span></li>
                {/* <li>Concentration in Digital Arts</li> */}
                <li className='float-none'>Thesis: "Conforming Realistic, Procedural Tree Models to User-drawn Shapes"</li>
                <li>Advisor: <span className='hover:text-cyan-500 hover:opacity-60'><Link to='http://people.uncw.edu/moragob/' target="_blank">Dr. Brittany Morago</Link></span></li>
    
            </ul>

            <h1 className='font-archivoNarrow text-3xl pb-3'>Research Experience</h1>
            <ul className='pb-5'>
                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>Research Assistant, <Link to="http://clemsonhfse.com" target='_blank' className='hover:text-cyan-500 hover:opacity-60'>HFSE lab</Link></span> <span className='float-right'>May 2020 - Present</span></li>
                <li className='float-none'>Advisor: <span className='hover:text-cyan-500 hover:opacity-60'><Link to="https://paigerodeghero.com" target="_blank">Dr. Paige Rodeghero</Link></span> <span className='float-right'>Clemson University</span></li>
                <li className='float-none'>Studying how communication tools prepare collegiate software engineering students for roles in industry.</li>
            </ul>

            <ul className='pb-5'>
                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>Researcher, <Link to="https://edase.org" target='_blank' className='hover:text-cyan-500 hover:opacity-60'>EdASE Coding Camp for Autistm</Link></span> <span className='float-right'>January 2021 - Present</span></li>
                <li className='float-none'><span className='hover:text-cyan-500 hover:opacity-60'><Link to="https://edase.org" target="_blank">edase.org</Link></span> <span className='float-right'>Clemson University</span></li>
                <li className='float-none'>Examining how computer coding camps for autism impact students' self-efficacy and communication skills.</li>
            </ul>

            <ul className='pb-10'>
                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>Research Assistant, <Link to="https://computing.clemson.edu/vcl/" target='_blank' className='hover:text-cyan-500 hover:opacity-60'>Visual Computing lab</Link></span> <span className='float-right'>August 2019 - May 2020</span></li>
                <li className='float-none'>Advisor: <span className='hover:text-cyan-500 hover:opacity-60'><Link to="https://djsingh.people.clemson.edu" target="_blank">Dr. Daljit Singh Dhillon</Link></span> <span className='float-right'>Clemson University</span></li>
                <li className='float-none'>Developed code to model reaction-diffusion systems over arbitrary meshes.</li>
            </ul>

            <h1 className='font-archivoNarrow text-3xl pb-3'>Teaching Experience</h1>

            <ul className='pb-5'>
                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>Adjunct Faculty</span><span className='float-right'>January 2025 - Present</span></li>
                <li className='float-none'>Department of Computer Science<span className='float-right'>University of North Carolina Wilmington</span></li>
                <li className='float-none'><span className=' text-cyan-500'>CIT 425</span>: Human-Computer Interfaces</li>
                {/* <li className='float-none'>Developed 2D game development course content and activities involving pixel art and videogame narratives.</li>
                <li className='float-none'>Helped lead camp instruction and developed content for multiple days of camp. </li>
                <li className='float-none'>Liaison between parents and instructors for the 2022 camp.</li> */}
            </ul>

            <ul className='pb-5'>
                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>Graduate Teaching Assistant</span> <span className='float-right'>August 2019 - Present</span></li>
                <li className='float-none'>School of Computing <span className='float-right'>Clemson University</span></li>
                <li className='float-none'><span className=' text-cyan-500'>CPSC 8740</span>: AI-Receptive Software Development <span className='float-right'>2024, 2025</span></li>

                <li className='float-none'><span className='text-cyan-500'>CPSC 9500</span>: Graduate Seminar <span className='float-right'>2023</span></li>
                {/* <li className='float-none pb-3'>Conducted speaker searches, developed course materials, and organized/lead seminar sessions for a departmental, graduate-level seminar course. <br /> (6 graduate students)</li> */}

                <li className='float-none'><span className=' text-cyan-500'>CPSC 4910/4911</span>: Seminar in Professional Issues II <span className='float-right'>2021 - 2023</span></li>
                {/* <li className='float-none pb-3'>Conducted lab lectures, provided aid, was scrum master for 3 to 6 sections of student SE teams. <br/> (approx. 60-100 undergraduate students)</li> */}

                <li className='float-none'><span className='text-cyan-500'>CPSC 1010/1011</span>: Computer Science I <span className='float-right'>2019, 2020</span></li>
                {/* <li className='float-none'>Conducted lab lectures, provided aid and office hourse, and graded weekly introductory programming assignments for 3 sections of students. <br/>(60 undergraduate students)</li> */}
            </ul>

            <ul className='pb-5'>
                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>Instructor</span>, EdASE Coding Camp for Autism <span className='float-right'>2021, 2022, 2023, 2024</span></li>
                <li className='float-none'><span className='hover:text-cyan-500 hover:opacity-60'><Link to="https://edase.org" target="_blank">edase.org</Link></span> <span className='float-right'>Clemson University</span></li>
                {/* <li className='float-none'>Developed 2D game development course content and activities involving pixel art and videogame narratives.</li>
                <li className='float-none'>Helped lead camp instruction and developed content for multiple days of camp. </li>
                <li className='float-none'>Liaison between parents and instructors for the 2022 camp.</li> */}
            </ul>

            <ul className='pb-10'>
                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>Instructor</span>, Engineering Expectations <span className='float-right'>June 2018 - August 2019</span></li>
                <li className='float-none'>Summer & Weekend Camps <span className='float-right'>University of North Carolina Wilmington</span></li>
                {/* <li className='float-none'>Taught children how to code in HTML/CSS, Python, Javs, and Scratch in several week-long and weekend computer science camps. <br/>(20 students/camp)</li> */}

            </ul>

            <h1 className='font-archivoNarrow text-3xl pb-3'>Reviewing Experience</h1>
            <ul className='pb-10'>
                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>Reviewer</span> <span className='float-right'>ASEE 2024, 2025</span></li>

                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>Reviewer</span> <span className='float-right'>CSCW 2022</span></li>
                
                <li className='float-none'><span className='font-archivoNarrow text-cyan-500 text-2xl'>Reviewer</span> <span className='float-right'>SEmotion 2021</span></li>
                
                <li className='float-none'><span className='font-archivoNarrow text-cyan-500 text-2xl'>Sub-reviewer</span> <span className='float-right'>ESEC/FSE 2021</span></li>
            </ul>

            <h1 className='font-archivoNarrow text-3xl pb-3'>Professional Memberships</h1>
            <ul className='pb-10'>
                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>Member</span>, ACM <span className='float-right'>2023 - Present</span></li>
                
                <li className='float-none'><span className='font-archivoNarrow text-cyan-500 text-2xl'>Member</span>, IEEE <span className='float-right'>2021 - Present</span></li>
                
                <li className='float-none'><span className='font-archivoNarrow text-cyan-500 text-2xl'>Member</span>, Upsilon Pi Epsilon <span className='float-right'>2018 - Present</span></li>
            </ul>

            <h1 className='font-archivoNarrow text-3xl pb-3'>Honors & Awards</h1>
            <ul className='pb-10'>
                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>Exceptionally Engaging Letters award</span>, Letters for a Prescientist <span className='float-right'>2021</span></li>
                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>Graduate Student Travel Grant</span>, Clemson University GSG <span className='float-right'>2020</span></li>
                
                <li className='float-none'><span className='font-archivoNarrow text-cyan-500 text-2xl'>Robert M. Geist III Fellowship in Computing</span>, Clemson University <span className='float-right'>2019</span></li>
                
                <li className='float-none'><span className='font-archivoNarrow text-cyan-500 text-2xl'>Dean's List</span>, 8 semesters, UNCW <span className='float-right'>2015 - 2019</span></li>
            </ul>

            <h1 className='font-archivoNarrow text-3xl pb-3'>Service & Outreach</h1>
            <ul>
                <li className='float-none'><span className='font-archivoNarrow text-cyan-500 text-2xl'>Invited Panelist</span> <span className='float-right'>New MSCS Sneak Peek</span></li>
                <li className='float-none pb-5'>Clemson University<span className='float-right'>June &amp; July 2024</span></li>

                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>Session Moderator</span> <span className='float-right'>ASEE Annual Conference &amp; Exposition 2024</span></li>
                <li className='float-none pb-5'>Portland, Oregon<span className='float-right'>June 2024</span></li>

                <li><span className='font-archivoNarrow text-cyan-500 text-2xl'>Judge</span> <span className='float-right'>Clemson Tigertown Throwdown Robotics Competition</span></li>
                <li className='float-none pb-5'>Clemson University<span className='float-right'>February 4, 2023</span></li>
                
                <li className='float-none'><span className='font-archivoNarrow text-cyan-500 text-2xl'>President</span> <span className='float-right'>School of Computing Graduate Student Associaton</span></li>
                <li className='float-none pb-5'>Clemson University<span className='float-right'>August 2022 - May 2024</span></li>
                {/* <li>SoCGSA is a student organization that represents and holds events for computing graduate students in CS, HCC, DPA, and BDSI.</li>
                <li className='pb-5'>Conducted administrative duties, organization of events, and task delegation.</li> */}
                
                <li className='float-none'><span className='font-archivoNarrow text-cyan-500 text-2xl'>Invited Panelist</span> <span className='float-right'>New Graduate Student & Postdoc Teaching Conference</span></li>
                <li className='float-none pb-5'>Clemson University<span className='float-right'>August 2022</span></li>

                <li className='float-none'><span className='font-archivoNarrow text-cyan-500 text-2xl'>Student Volunteer</span> <span className='float-right'>Carolinas Women in Computing Conference 2022</span></li>
                <li className='float-none pb-5'>University of North Carolina Wilmington<span className='float-right'>April 2022</span></li>

                <li className='float-none'><span className='font-archivoNarrow text-cyan-500 text-2xl'>Hackathon Participant</span> <span className='float-right'>CUhackit 2022</span></li>
                <li className='float-none pb-5'>Clemson University<span className='float-right'>January 29 - 30, 2022</span></li>

                <li className='float-none'><span className='font-archivoNarrow text-cyan-500 text-2xl'>Student Volunteer</span> <span className='float-right'>FomaliSE at ICSE 2021</span></li>
                <li className='float-none pb-5'>Madrid, Spain (Virtual)<span className='float-right'>May 2021</span></li>


                <li className='float-none'><span className='font-archivoNarrow text-cyan-500 text-2xl'>Program Committee Member & Website Chair</span> <span className='float-right'>SEmotion 2021</span></li>
                <li className='float-none pb-5'>Madrid, Spain (Virtual)<span className='float-right'>May 2021</span></li>
                {/* <li className='pb-5'>Deployed, edited, and kept website up-to-date before and during conference period.</li> */}

                <li className='float-none pb-5'><span className='font-archivoNarrow text-cyan-500 text-2xl'>Penpal</span>, <Link to='https://prescientist.org' target='_blank' className='hover:text-cyan-500 hover:opacity-60'>Letters to a Prescientist Program</Link> <span className='float-right'>August 2020 - May 2023</span></li>
                {/* <li className='float-none'>Corresponded through letters with an elementary school student each school year who is interested in learning more about STEM careers.</li>
                <li className='pb-5'>Received an <span className=' text-cyan-500'>award for Exceptionally Engaging Letters</span> for the 2020-2021 school year.</li> */}

                <li className='float-none'><span className='font-archivoNarrow text-cyan-500 text-2xl'>President</span> <span className='float-right'>Upsilon Pi Epsilon</span></li>
                <li className='float-none'>University of North Carolina Wilmington<span className='float-right'>August 2018 - May 2019</span></li>
            </ul>

            <p className='pt-10'>For more details, <Link className='text-cyan-500 hover:opacity-60' to="https://github.com/makayla-moster/pdfs/blob/master/cv/Moster_Makayla_CV.pdf?raw=true" target="_blank">please view the PDF</Link> of my CV.</p>
            <p className="pt-10"><Link className='text-cyan-500 hover:opacity-60' to='/appmats'>2024-2025 Job Market Application Materials Archive</Link></p>
        </Layout>
    )
}

export const Head = () => <title>Makayla Moster CV</title>

export default CvPage
