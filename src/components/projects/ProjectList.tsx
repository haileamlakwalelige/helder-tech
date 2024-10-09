import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import ProjectCards from './ProjectCards'
import Pagination from './Pagination';
import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import pcicon1 from '../../assets/pcicon1.jpg'

interface Card {
    id: string;
    clientName: string;
    content: string;
    serviceType: string;
    startDate: string;
    endDate: string;
    expectedDate: string;
    sampleImage: string;
    typography: {
      style: string;
      size: string;
    };
    colors: {
      primary: string;
      secondary: string;
    };

}

const ProjectList: React.FC = () => {

    const [projects,setProjects] = useState<Card[]>([])
    const [currentPage,setCurrentPage] = useState<number>(1)
    const [projectsPerPage] = useState<number>(3)

    useEffect(()=>{
        const fetch = async () =>{
            try{
                const response = await axios.get('/api/blog.json')
                // console.log('Fetched data:' , response.data)
                setProjects(response.data)
            }
            catch(error){
                console.error(error)
            }
        }

        fetch()
    },[])

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    // console.log("project:", projects)
    const currentProjects = projects.slice(indexOfFirstProject,indexOfLastProject );
    const totalProjects = projects.length
  
    const paginate = (pageNumber:number)=>{
        setCurrentPage(pageNumber)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const previousPage = () => {
        if (currentPage !== 1) {
          setCurrentPage(currentPage - 1);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
    
      const nextPage = () => {
        if (currentPage !== Math.ceil(totalProjects / projectsPerPage)) {
          setCurrentPage(currentPage + 1);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
    

    return(
        <div>
            <div>
                {/* <img src={pcicon1} alt="" className='size-20' /> */}
            </div>
            <div className='my-9'>
                <ProjectCards currentProjects={currentProjects} currentPage={currentPage} />
            </div>

            <div className='pb-4'>
                <Pagination totalProjects={totalProjects}  projectsPerPage={projectsPerPage} paginate={paginate} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage}/>
            </div>

            <div className="my-3 pb-6 flex flex-col items-center justify-center gap-[25px]">
                <h2 className="md:text-[40px] text-[25px] text-titleFont text-center font-[600]">Get New Project?</h2>
                <p className="text-normalFont lg:text-[24px] text-[16px] text-center font-[400]">Contact us for fast support to this Link</p>
                <Link to='/contact' className="p-[10px] bg-titleFont text-white text-[18px] flex items-center justify-center gap-[10px] rounded-[36px]">Contact us <FaArrowRightLong /></Link>
            </div>
            
        </div>
    )
}

export default ProjectList