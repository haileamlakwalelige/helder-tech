import React,{useEffect} from 'react'
import { BiPhone } from 'react-icons/bi';
import { BiSolidLocationPlus } from "react-icons/bi";
import { IoMdMailOpen } from "react-icons/io";
// import projecticon4 from '../../assets/projecticon4.jpg'

const Address: React.FC = () =>{

    return(

        <div className='relative flex mx-16'>

            {/* form */}
            <div className='bg-white md:-mr-36 z-30 left-0  border rounded-[30px] my-12 py-5 w-[47vw] h-[75vh]'>

                <div className='text-center space-y-4'>
                    <h2 className='text-footer font-extrabold text-3xl '>Get in touch</h2>
                    <p className='text-[#000000] font-normal text-xl'>Get in touch with our team today to start your project and elevate your business with cutting-edge technology solutions.</p>
                </div>

                <div className='my-5 px-16'>
                    <form action="POST">
                        <div >
                            <div className='mb-2'>
                                <label className='block font-normal text-[#000000] text-lg ml-2 mb-2'>Full Name</label>
                                <input type="text" className='w-full md:h-[40px] rounded-[10px] bg-[#F0F0F0] focus:outline-none'  />
                            </div>
                            <div className='mb-2'>
                                <label className='block font-normal text-[#000000] text-lg ml-2 mb-2'>Email</label>
                                <input type="email" className='w-full md:h-[40px] rounded-[10px] bg-[#F0F0F0] focus:outline-none'  />
                            </div>
                            <div className='mb-2'>
                                <label className='block font-normal text-[#000000] text-lg ml-2 mb-2'>Message</label>
                                <textarea type="text" rows='5' className='w-full md:h-[40px] rounded-[10px] bg-[#F0F0F0] focus:outline-none'  ></textarea>
                            </div>

                            <button className='bg-footer text-white px-24 py-2 rounded-full ml-20'>Send Message</button>
                        </div>
                    </form>
                </div>

            </div>

            {/* address */}
            <div className='relative z-10 bg-footer border rounded-[30px] w-[60vw] h-[90vh] pl-48 py-48 flex flex-col gap-8 '>
                {/* <img src={projecticon4} alt="" className=' absolute -top-28 left-[65%] size-48 ' /> */}
                <div className='inline-flex space-x-3 mb-5'>
                    <IoMdMailOpen className='bg-white rounded-full mt-1 p-1 text-footer' size={28}/>
                    <p className='text-white font-normal text-2xl'>info@heldertechnologie.com</p>
                </div>
                <div className='inline-flex space-x-3 mb-5'>
                    <BiPhone className='bg-white rounded-full mt-1 p-1 text-footer' size={28}/>
                    <p className='text-white font-normal text-2xl'>+251901299902/+251937176551</p>
                </div>
                <div className='inline-flex space-x-3 mb-5 '>
                    <BiSolidLocationPlus className='bg-white rounded-full mt-1 p-1 text-footer w-8 h-7' />
                    <p className='text-white font-normal text-2xl'>Address: 22 Meklit Building, 6th floor 6003</p>
                </div>
            </div>


        </div>

    )
}

export default Address