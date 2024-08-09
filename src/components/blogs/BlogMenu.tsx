const BlogMenu = () => {
    return (
        <div className="w-full overflow-x-hidden flex flex-col">
            <div className="relative left-[5%]">
                <button className="w-[120px] h-[60px] bg-white text-titleFont">Insights</button>
                <button className="w-[120px] h-[60px] bg-titleFont text-white">Industry</button>
                <button className="w-[120px] h-[60px] bg-titleFont text-white">News</button>
            </div>
            <div className="w-full h-[3px] bg-titleFont"></div>
        </div>
    );
}

export default BlogMenu;