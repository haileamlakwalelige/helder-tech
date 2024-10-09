import React from 'react'
import helderlogo from '../../assets/helderlogo.png'
import projecticon from '../../assets/projecticon.png'
import pcicon from '../../assets/pcicon.png'
import phoneicon from '../../assets/phoneicon.png'
import { Link } from 'react-router-dom'

interface Card {
    id:string
    clientName:string
    content:string
}

interface CardProps {
    currentProjects:Card[]
    currentPage:number
}

const ProjectCards: React.FC<CardProps> = ({currentProjects}) =>{
    return(
        <div>
            {currentProjects.map((p)=>( 
                <div key={p.id} className='flex flex-col md:flex-row border bg-white mb-4 rounded-[20px] mx-10 py-8'>
                    <div className='basis-[55%]'>
                        <img src={helderlogo} alt="" className='block px-1 size-36 -mt-6 ' />
                        <div className='px-12 -mt-5 '>
                            <h2 className='font-extrabold text-normalFont text-3xl pb-3'>{p.clientName}</h2>
                            <p className='font-normal text-base text-justify' >{p.content}</p>
                            <Link to={`/projectdetail/${p.id}`} className='text-titleFont font-normal text-base flex justify-end underline'>View</Link>
                        </div>

                        <div className='text-normalFont px-12'>
                            <h3 className='font-medium text-lg mb-2'>Services</h3>
                            <div className='text-center flex justify-evenly items-center'>
                                <p className=' border rounded-full font-normal text-base px-3 py-1'>Website</p>
                                <p className=' border rounded-full font-normal text-base px-3 py-1'>Mobile App</p>
                                <p className=' border rounded-full font-normal text-base px-3 py-1'>Production</p>
                                <p className=' border rounded-full font-normal text-base px-3 py-1'>Digital Marketing</p>
                            </div>
                        </div>

                    </div>

                    <div className='relative basis-[45%] flex ml-9 mt-14'>
                        <img src={pcicon} alt="" className='mt-4 size-72 z-10'/>
                        <img src={phoneicon} alt="" className='absolute left-2/4 bottom-[30%]'/>
                        <img src={projecticon} alt="" className='absolute left-[38%] top-[60%] size-24 '/> 
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCards