import soft from '../../assets/soft.jpg'
import graphic from '../../assets/graphic.jpg'
import digital from '../../assets/digital.jpg'
import programming from '../../assets/programming.jpg'


const Offer = ()=>{
    return(
        <div className='bg-secondary mt-6 h-[] md:h-[75vh] py-9'>
            <h2 className='font-bold text-titleFont text-3xl text-center mb-6'>What We offer</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 my-6 place-items-center mx-20'>
                <div className='md:space-y-14 my-2 '>
                    <div className='bg-white flex flex-row gap-3 max-w-[26rem] h-32 px-7 rounded-[18px] items-center'>
                        <div className='size-24 self-center'>
                            <img src={soft} alt="soft" />
                        </div>
                        <h3 className='font-semibold text-xl text-titleFont flex items-center'>Software Development</h3>
                    </div>
                    <div className='bg-white flex flex-row gap-3 max-w-[26rem] h-32 px-7 rounded-[18px] items-center'>
                        <div className='size-24 self-center'>
                            <img src={graphic} alt="soft" />
                        </div>
                        <h3 className='font-semibold text-xl text-titleFont flex items-center'>Graphic Design</h3>
                    </div>

                </div>

                <div className='md:space-y-14 my-2'>
                    <div className='bg-white flex flex-row -gap-6 max-w-[26rem] h-32 px-7 rounded-[18px] items-center'>
                        <div className='size-28 flex items-center self-center '>
                            <img src={digital} alt="soft" />
                        </div>
                        <h3 className='font-semibold text-xl text-titleFont flex items-center'>Digital Marketing</h3>
                    </div>
                    <div className='bg-white flex flex-row gap-3 max-w-[26rem] h-32 px-7 rounded-[18px] items-center'>
                        <div className='size-28 self-center flex items-center'>
                            <img src={programming} alt="soft" />
                        </div>
                        <h3 className='font-semibold text-xl text-titleFont flex items-center'>Computer Programming Training</h3>
                    </div>

                </div>

                
            </div>
        </div>
    )
}

export default Offer