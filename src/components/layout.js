import * as React from 'react'
import { Link } from 'gatsby'
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { SiGooglescholar } from "@react-icons/all-files/si/SiGooglescholar"
import { FaOrcid } from "@react-icons/all-files/fa/FaOrcid"
// import { siteMetadata } from '../../gatsby-config'

const Layout = ({ pageTitle, children}) => {
    return (
        <html lang="en" class="flex flex-col h-screen justify-between">
            {/* <nav class="container mx-auto flex flex-wrap p-5 flex-col text-center text-gray-100 bg-cyan-600"> */}
            <nav className="text-center py-8 text-cyan-500 dark:bg-zinc-700">
                {/* <a class="flex  items-center text-gray-900 mb-4">
                <img src={locofy} />
                </a> */}
                <h1 className="font-bebasNeue text-6xl mx-auto text-center flex flex-wrap flex-col"><Link to="/" className='hover:opacity-60 '>Makayla Moster</Link></h1>
                <p className="opacity-60 font-archivoNarrow text-xl mb-2">Computer Science Ph.D. Candidate @ Clemson University</p>
                <div class="flex flex-wrap items-center text-base justify-center">
                <ul className="flex list-none no-underline font-archivoNarrow text-4xl">
                    <li className="hover:opacity-60 text-sm sm:text-lg pr-6"><Link to='/'>home</Link></li>
                    <li className="hover:opacity-60 text-sm sm:text-lg pr-6"><Link to='/publications'>publications</Link></li>
                    <li className="hover:opacity-60 text-sm sm:text-lg pr-6"><Link to='/cv'>cv</Link></li>
                    <li className="hover:opacity-60 text-sm sm:text-lg pr-6"><Link to='/appmats'>application materials</Link></li>
                </ul>
                </div>
                {/* <button class="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4">Click Me</button> */}
            </nav>
            {/* <nav className="flex sm:justify-between justify-around items-center xl:px-20 lg:px-20 sm:px-6 py-8 text-gray-100 bg-cyan-600">
                <h1 className="hover:opacity-80 font-bebasNeue text-5xl"><Link to="/">Makayla Moster</Link></h1>
                <ul className="flex list-none no-underline font-archivoNarrow text-4xl">
                    <li className="hover:opacity-80 text-sm sm:text-lg pr-6"><Link to='/'>home</Link></li>
                    <li className="hover:opacity-80 text-sm sm:text-lg pr-6"><Link to='/about'>publications</Link></li>
                    <li className="hover:opacity-80 text-sm sm:text-lg pr-6"><Link to='/about'>cv</Link></li>
                </ul>
            </nav> */}
            {/* <main className='dark:bg-zinc-700 dark:text-white flex-grow px-20 py-20 container mx-auto flex flex-wrap flex-col'> */}
            <main className='text-white text-xl flex flex-col flex-grow p-10 md:container mx-auto'>
                <h1 className='font-archivoNarrow text-4xl pb-8'>{pageTitle}</h1>
                {children}
            </main>
            <footer className="text-center py-8 text-cyan-500 dark:bg-zinc-700 bg-zinc-700">
                <p className="flex items-center justify-center space-x-3 pb-2" ><Link to="https://github.com/makayla-moster" target='_blank'><FaGithub size={25} className="hover:opacity-80"/></Link> <Link to="https://www.linkedin.com/in/mmoster/" target='_blank'><FaLinkedin size={25} className="hover:opacity-80"/></Link> <Link to="https://scholar.google.com/citations?hl=en&user=hfjoBY0AAAAJ&view_op=list_works&authuser=1&gmla=AJsN-F6q4Yy8oZ1N-1PjHDlI43gZQ1nmm8XomMXrrhwpRFxWpR_a8qtSDCVdobWC_Ygqe73rHO-tQENKNUes3zLENciYerbEJA" target='_blank'><SiGooglescholar size={25} className="hover:opacity-80"/></Link> <Link to="https://orcid.org/0000-0002-0661-0550" target='_blank'><FaOrcid size={25} className="hover:opacity-80"/></Link></p>
                <p className="font-archivoNarrow text-l hover:opacity-100 opacity-60"><Link to="mailto:makaylamoster@gmail.com">makaylamoster@gmail.com</Link></p>
                <p className="font-bebasNeue text-xl">Makayla Moster &copy; 2024</p>
            </footer>
        </html>
    )
}

export default Layout