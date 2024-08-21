import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rectangle from '../../assets/Rectangle 12.png'
import clienticon from '../../assets/clienticon.png'
import homeicon from '../../assets/homeServiceIcon1.png'
import clienticon2 from '../../assets/clienticon2.png'
import { RiDoubleQuotesL } from "react-icons/ri";

 interface TeamMember{
    img:string; 
    name:string;
    review:string;
    title:string;
}

const Clients:React.FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed:2000,
        autoplaySpeed:7000,
        cssEase: "linear"
      };


      const data: TeamMember[] = [
        {
            img:Rectangle,
            name:`Mr. Abraham W Alemu`,
            title:`BMJ highschool, USA`,
            review:"without me traveling to Ethiopia, they turn  my ambition of building a digital library system for my school into reality"
        },
        {
            img:Rectangle,
            name:`Mr. Abraham W Alemu`,
            title:`BMJ highschool, USA`,
            review:"without me traveling to Ethiopia, they turn  my ambition of building a digital library system for my school into reality"
        },
        {
            img:Rectangle,
            name:`Mr. Abraham W Alemu`,
            title:`BMJ highschool, USA`,
            review:"without me traveling to Ethiopia, they turn  my ambition of building a digital library system for my school into reality"
        },
        {
            img:Rectangle,
            name:`Mr. Abraham W Alemu`,
            title:`BMJ highschool, USA`,
            review:"without me traveling to Ethiopia, they turn  my ambition of building a digital library system for my school into reality"
        },
       
        
       
    ]
    return ( 
        <div className='bg-secondary flex flex-col md:flex-row justify-between my-5 h-[80vh] md:h-[55vh] px-16'>
            <div className='max-w-xl relative basis-[45%] py-4 px-5'>
                <h2 className='text-titleFont font-medium text-3xl my-5'>What our clients say to us</h2>
                <img src={clienticon} alt="" className='absolute inset-0 size-56 left-2/4 top-24'/>
                <p className='text-normalFont font-normal text-2xl text-justify leading-tighter '>Our clients consistently praise our dedication, expertise, and the transformative impact of our solutions on their businesses.</p>
                <img src={clienticon2} alt="" className='absolute inset-0 left-[43rem] top-2/4'/>
            </div>
       
            <div className=' basis-[55%] p-4 mt-5 max-w-md '>
                           
                <Slider {...settings} className='border border-hidden shadow'>
                    {data.map((d, index) => ( 
                            <div key={index} className='p-4 bg-white pl-8' >
                                <div className='relative flex justify-between'>
                                    <RiDoubleQuotesL className='absolute -left-3 -top-2 text-[#000000] size-8' />
                                    <p className='text-normalFont text-base ml-6 font-normal'>"{d.review}"</p>
                                </div>

                                <div className='flex items-center mt-4 ml-9'>
                                    <img src={d.img} alt="" className='size-14 object-cover rounded-full'/>
                                    <div className='ml-4'>
                                        <p className='text-titleFont font-medium text-lg'>{d.name}</p>
                                        <span className='text-normalFont font-light text-xl'>{d.title}</span>
                                    </div>
                                </div>
                            </div>             
                    ))}
                </Slider>
                {/* <img src={homeicon} alt="" className='absolute inset-0 size-10 -left-[20rem] '/> */}
            </div>
        </div>
    )
}





export default Clients

