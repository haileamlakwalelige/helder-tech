import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

const ProjectDetail = ()=>{

    const {id} = useParams()
    console.log("ID",id)
    const [data,setData]= useState<Card>();

    useEffect(()=>{
        const fetch = async () =>{
            try{
                const response = await axios.get(`/api/blog.json`)
                console.log('Fetched data:' , response.data)
                setData(response.data)
                // const singleData = response.data.filter((item) => item.id === id)
                // setData('single data', singleData);
            }
            catch(error){
                console.error("Error fetching the blog post:",error)
            }
        }

        fetch()
    },[])
 
    const singleData = data?.filter((item) => item.id === id)
    console.log("data", singleData[0])

//    const { clientName,serviceType,startDate,endDate,expectedDate} = singleData[0];
//    console.log('client Name', clientName);

    return(
        <div>
             <div className="bg-[#3A79CE] text-white mb-[50px] pt-32 px-20 flex justify-around w-screen h-[60vh] top-0 z-10 ">
                <div>
                    <h1 className='font-extrabold text-3xl flex self-center py-10'>{singleData[0].clientName}</h1>
                </div>

                <div className='flex flex-col ml-56' >

                    <div className='flex gap-20 '>
                        <div>
                            <h2 className='font-bold text-xl'>Services:</h2>
                            <span className='font-normal text-base ml-1'>{singleData[0].serviceType}</span>
                        </div>
                        <div>
                            <h2 className='font-bold text-xl'>Client:</h2>
                            <span className='font-normal text-base ml-1'>{singleData[0].clientName}</span>
                        </div>
                    </div>

                    <div className='flex gap-20 my-16 '>
                        <div>
                            <h2 className='font-bold text-xl' >Start Date:</h2>
                            <span className='font-normal text-base ml-1'>{singleData[0].startDate}</span>
                        </div> 

                        <div>
                            <h2 className='font-bold text-xl'>Over Date: </h2>
                            <span className='font-normal text-base ml-1'>{singleData[0].endDate}</span>
                        </div>
                        <div>
                            <h2 className='font-bold text-xl'>Expectation Date: </h2>
                            <span className='font-normal text-base ml-1'>{singleData[0].expectedDate}</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProjectDetail