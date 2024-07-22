// import React from 'react'
import { BiPhone } from 'react-icons/bi';
import { BiSolidLocationPlus } from "react-icons/bi";
import { IoMdMailOpen } from "react-icons/io";
import logo from '../../assets/logo.png';
import twit from '../../assets/twit.jpg';
import link from '../../assets/linked.jpg';
import face from '../../assets/google.jpg';
import insta from '../../assets/tg.jpg';
import fotmob from '../../assets/fotmob.png';
import footer from '../../assets/footer.png';
import { Link } from 'react-router-dom';

const Footer = () => {

    const divStyle = {
        backgroundImage: `url(${footer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%', // Adjust the height as per your design
        // You can add more styles as needed
      };

    return (
        <div style={divStyle} className='min-h-[60vh] py-10 overflow-x-hidden cri w-screen flex flex-col items-center justify-center'>
            <div className='flex w-[95%] flex-wrap lg:flex-nowrap gap-8 items-center justify-center lg:justify-between bg-primary px-2 sm:px-6 md:px-12 lg:px-16 mx-2 sm:mx-6 md:mx-12 lg:mx-16 rounded-xl overflow-x-hidden'>
                <div className='lg:w-1/4'>
                    <img src={logo} alt="" className='w-[262px] h-[250px]' />
                </div>
                <div className='lg:w-2/4 lg:mt-20'>
                   <p className='text-[20px] md:text-[22px] lg:text-[24px] text-white font-bold cri text-center xl:text-[26px]'>Full stack Mobile, Website Development and <br/> Digital Marketing company.</p>
                </div>
                <div className='lg:w-1/4'>
                    <img src={fotmob} alt='' className='max-h-[222px] max-w-[387px] h-full w-full'/>
                </div>
            </div>


            {/* second footer */}
            <div className='flex gap-10 lg:gap-5 flex-col md:flex-row flex-wrap justify-center md:items-start items-center md:justify-between py-10 px-2 sm:px-6 md:px-12'>
                
                <div className='flex flex-col'>
                    <p className='text-primary font-bold cri text-[24px] pb-4 text-center'>Quick Link</p>
                    <div className='ml-4 gap-1 flex flex-col'>
                        <Link to="/about">
                            <p className='text-[#6B6B6B] cri text-[20px]'>About</p>
                        </Link>
                        <Link to="/service">
                            <p className='text-[#6B6B6B] cri text-[20px]'>Service</p>

                        </Link>
                        <Link to="/gallery">
                            <p className='text-[#6B6B6B] cri text-[20px]'>Gallery</p>

                        </Link>
                    </div>
                </div>

                {/* two */}
                <div className='flex flex-col'>
                    <p className='text-primary font-bold cri text-[24px] cri pb-4 text-center '> Our Services</p>
                    <div className='ml-4 gap-1 flex flex-col'>
                        <Link to="/about">
                            <p className='text-[#6B6B6B] cri text-[20px]'>Software Development</p>
                        </Link>
                        <Link to="/contact">
                            <p className='text-[#6B6B6B] cri text-[20px]'>Graphic Design</p>

                        </Link>
                        <Link to="/properties">
                            <p className='text-[#6B6B6B] cri text-[20px]'>Digital Marketing</p>

                        </Link>
                        <Link to="/properties">
                            <p className='text-[#6B6B6B] cri text-[20px]'>Training</p>

                        </Link>
                    </div>
                </div>

{/* three */}
                <div className='flex flex-col'>
                    <p className='text-primary font-bold cri text-[24px] pb-4 text-center'>Contact us </p>
                    <div className='ml-4 gap-1 flex flex-col'>
                        <div className='flex gap-3'>
                            <IoMdMailOpen className="text-primary" size={20}/>
                            <p className='text-[#6B6B6B] cri text-[20px]'>info@heldertechnologies.com</p>
                        </div>
                        <div  className='flex gap-3'>
                            <BiPhone className="text-primary" size={20}/>
                            <p className='text-[#6B6B6B] cri text-[20px]'>+251 901 29 99 02 / +251 937 17 65 51</p>

                        </div>
                        <div className='flex gap-3'>
                            <BiSolidLocationPlus className="text-primary" size={20}/>
                            <p className='text-[#6B6B6B] cri text-[20px]'>Address: 22 Meklit Building, 6th floor 6003</p>
                        </div>
                    </div>
                </div>
               
               {/* four */}
               <div>
                    <div className='flex gap-6 justify-end items-end lg:mt-20' >
                        <img src={face} alt='' className='h-[25px] w-[25px]' />
                        <img src={insta} alt='' className='h-[25px] w-[25px]' />
                        <img src={link} alt='' className='h-[25px] w-[25px]' />
                        <img src={twit} alt='' className='h-[25px] w-[25px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer