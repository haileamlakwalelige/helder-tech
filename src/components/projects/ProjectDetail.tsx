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

const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    console.log("ID", id);
    const [data, setData] = useState<Card[]>([]);
    const [singleData, setSingleData] = useState<Card | undefined>(undefined);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get<Card[]>('/api/blog.json');
                console.log('Fetched data:', response.data);
                setData(response.data);
                const singleData = response.data.find((item) => item.id === id);
                setSingleData(singleData);
            } catch (error) {
                console.error("Error fetching the blog post:", error);
            }
        };

        fetch();
    }, [id]);

    if (!singleData) {
        return <div>Loading...</div>;
    }

    const { clientName, serviceType, startDate, endDate, expectedDate } = singleData;

    return (
        <div>
            <div className="bg-[#3A79CE] text-white mb-[50px] pt-32 px-20 flex justify-around w-screen h-[60vh] top-0 z-10">
                <div>
                    <h1 className='font-extrabold text-3xl flex self-center py-10'>{clientName}</h1>
                </div>

                <div className='flex flex-col ml-56'>
                    <div className='flex gap-20'>
                        <div>
                            <h2 className='font-bold text-xl'>Services:</h2>
                            <span className='font-normal text-base ml-1'>{serviceType}</span>
                        </div>
                        <div>
                            <h2 className='font-bold text-xl'>Client:</h2>
                            <span className='font-normal text-base ml-1'>{clientName}</span>
                        </div>
                    </div>

                    <div className='flex gap-20 my-16'>
                        <div>
                            <h2 className='font-bold text-xl'>Start Date:</h2>
                            <span className='font-normal text-base ml-1'>{startDate}</span>
                        </div> 
                        <div>
                            <h2 className='font-bold text-xl'>Over Date:</h2>
                            <span className='font-normal text-base ml-1'>{endDate}</span>
                        </div>
                        <div>
                            <h2 className='font-bold text-xl'>Expectation Date:</h2>
                            <span className='font-normal text-base ml-1'>{expectedDate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
