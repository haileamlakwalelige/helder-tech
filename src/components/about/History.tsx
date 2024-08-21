import React, {useState} from 'react'
import founder1 from '../../assets/founder1.png'
import founder2 from '../../assets/founder2.png'
import founder3 from '../../assets/founder3.png'
import history1 from '../../assets/history1.png'
import history2 from '../../assets/history2.png'

interface Data {
    year:number
    image:string
    title:string
    text:string
}

const data: Data[] = [
    {
        year: 2022,
        image: founder1,
        title:'2022:Foundation',
        text:'In 2022, Helder Technologies was founded by Ashenafi Belete with a vision to revolutionize the tech industry through innovation and client-centric solutions. The company started its journey with a small team and a focus on providing services such as website development, mobile app development, digital marketing, graphic design, and AI-related projects.'
    },
    {
        year: 2023,
        image: founder3,
        title:'Expansion and Diversification',
        text:'In 2023, Helder Technologies experienced significant growth and expansion. The company diversified its service offerings to include more specialized solutions such as system software development, product design, and computer programming training. With an increasing demand for its services, Helder Technologies expanded its team, welcoming skilled professionals from various tech domains to meet the evolving needs of its clients.'
    },
    {
        year: 2024,
        image: founder2,
        title:'Innovation and Leadership',
        text:'By 2024, Helder Technologies had established itself as a leader in the tech industry, known for its innovative solutions and commitment to excellence. The company continued to stay ahead of the curve by embracing emerging technologies and incorporating them into its service offerings. With a focus on sustainability, diversity, and inclusion, Helder Technologies remained dedicated to serving its clients with the highest standards of quality and integrity, setting new benchmarks for success in the digital age.'
    }
]

const History: React.FC = () =>{

    const [selectedYear, setSelectedYear] = useState<number>(2022)

    const handleClick = (year:number) => {
        setSelectedYear(year)
    }

    const selectedContent = data.find(item => item.year === selectedYear)

    return(
        <div className='bg-secondary my-6 py-9'>
            <div className='bg-white rounded-full w-[80vw] mx-auto mb-9 px-5 py-1 flex justify-around items-center'>
                {data.map(item => (
                    <button key={item.year} onClick={() => handleClick(item.year)} className={`border rounded-[45px] px-4 text-titleFont font-medium text-base transition-colors duration-300 
                        ${selectedYear === item.year ? 'bg-titleFont text-white' : 'bg-blue-100'}`} >
                       {item.year}
                    </button>
                ))}
            </div>

            <section className='relative w-full px-20   '>
                {
                    selectedContent && (
                        <div className='flex flex-col md:flex-row md:ml-6'>
                            <div className='max-w-3xl bg-white py-10 px-8 -ml-9 my-5'>
                                <img src={history1} alt="" className='absolute inset-0 left-[40%] top-5'/>
                                <h3 className='text-titleFont font-semibold text-2xl my-3 '>{selectedContent.title}</h3>
                                <p className='text-normalFont text-lg font-normal'>{selectedContent.text}</p>
                                <img src={history2} alt="" className='absolute inset-0 left-[56%] top-52 mt-8'/>

                            </div>
                            <div>
                                <img src={selectedContent.image} alt="" className='w-[600px] h-[50vh] object-cover '/>
                            </div>
                        </div>        
                    )
                }
            </section>
        </div>
    )
}

export default History