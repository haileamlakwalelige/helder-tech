import React from 'react'

interface PaginationProps {
    totalProjects:number;
    projectsPerPage:number;
    paginate:(pageNumber: number) => void;
    currentPage:number;
    nextPage: () => void;
    previousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({totalProjects,projectsPerPage,paginate,currentPage,previousPage,nextPage}) =>{

    const pageNumbers:number[] = []
    const totalPages = Math.ceil(totalProjects/projectsPerPage)
    for(let i=1 ; i<=totalPages; i++){
        pageNumbers.push(i)
    }

    return(
        <div className='mb-5'>
            <ul className='flex justify-center items-center gap-3 cursor-pointer'>
                <li onClick={previousPage} className='px-3 py-1 bg-[#F0F2F4] rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-200'>
                    Prev
                </li>

                {pageNumbers.map((number)=>(
                    <li key={number} onClick={()=>paginate(number)}  className={`flex px-2 py- border rounded-md transition-colors duration-200 ${
                        number === currentPage
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-none border-gray-100 hover:bg-blue-500 hover:text-white'
                    }`}> 
                        {number}
                    </li>
                ))}

                <li onClick={nextPage} className='px-3 py-1 bg-[#F0F2F4] rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-200'>
                    Next
                </li>

            </ul>
            
        </div>
    )
}

export default Pagination