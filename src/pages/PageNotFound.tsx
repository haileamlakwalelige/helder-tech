const PageNotFound = () => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <div className="p-[30px] bg-primary text-[#d2b759] flex flex-col items-center justify-evenly rounded-2xl">
        <h2 className="text-[32px] text-center">Oops!</h2>
        <h2 className="text-[24px] text-center">
          The page you are looking for cannot be found :( <br /> check the URL or try
          navigating back to the home page.
        </h2>
      </div>
    </div>
  );
};

export default PageNotFound;
