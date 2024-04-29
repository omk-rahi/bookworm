import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="h-[40rem] bg-orange-100 px-8 md:flex lg:h-[30rem]">
      <div className="container mx-auto flex h-full flex-col items-center justify-center md:flex-row">
        <div className="text-center md:flex-1 md:text-left">
          <h1 className="lg:max-w-1/2 max-w-80 text-3xl font-bold text-orange-950 md:text-4xl lg:max-w-[24rem]">
            There is no friend as loyal as books
          </h1>
          <p className="text-orange-95 0 md:text-md  mb-4 mt-2 max-w-80 text-sm md:mt-4 md:text-base lg:max-w-[24rem]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="mb-8 max-w-80 md:mb-0 lg:max-w-[24rem]">
            <SearchBar />
          </div>
        </div>
        <img src="/hero.svg" alt="Hero image" className="h-60 md:flex-1" />
      </div>
    </div>
  );
};

export default Hero;
