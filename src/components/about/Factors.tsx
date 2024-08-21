import factors1 from '../../assets/factors1.png'
import factors2 from '../../assets/factors2.png'
import factors3 from '../../assets/factors3.jpg'

const Factors = () =>{
    return(
        <div className='bg-secondary md:h-[80vh] py-8 my-2'>
            <h2 className='text-titleFont font-bold text-2xl text-center mb-10'>Helder Technologies unique factors</h2>
            <div className='grid md:grid-cols-3 mx-20 place-items-center'>
                <div className='bg-white w-[25vw] h-96 flex flex-col items-center p-4 space-y-4 rounded-[18px] shadow'>
                    <img src={factors1} alt="" className='size-40 mb-4' />
                    <h3 className='text-titleFont font-semibold text-xl'>Client-Centric Approach</h3>
                    <p className='text-normalFont text-lg font-normal text-center'>Prioritizing understanding and fulfilling client needs to foster enduring partnerships.</p>
                </div>
                
                <div className='bg-white w-[25vw] h-96 flex flex-col items-center p-4 space-y-4 rounded-[18px] shadow'>
                    <img src={factors2} alt="" className='size-40 mb-4'/>
                    <h3 className='text-titleFont font-semibold text-xl'>Innovative Solutions</h3>
                    <p className='text-normalFont text-lg font-normal text-center'>Constantly pushing the boundaries of technological innovation to meet evolving client demands.</p>
                </div>

                <div className='bg-white w-[25vw] h-96 flex flex-col items-center p-4 space-y-4 rounded-[18px] shadow'>
                    <img src={factors3} alt="" className='size-40 mb-4'/>
                    <h3 className='text-titleFont font-semibold text-xl'>Commitment to stability</h3>
                    <p className='text-normalFont text-lg font-normal text-center'>Integrating environmentally friendly practices into every aspect of business operations.</p>
                </div>
            </div>
        </div>

    )
}

export default Factors