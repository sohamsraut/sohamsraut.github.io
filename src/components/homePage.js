
export default function homePageComponent({width}) {
  return (
      <section className="h-fit md:min-h-full w-full flex items-center justify-center" id="home">
        <div className=" fixed md:h-[200%] h-[100%] w-[300%] md:w-full md:left-[-83%] left-[-6%] top-[-40%] md:top-[-50%] bg-[#ffb400]" id="home-decor"></div>
        <div className=" flex flex-col md:flex-row min-h-full w-full py-5 items-center md:justify-between justify-center">
          <img src={width < 768 ? "./myphoto-mobile.jpg" : "./myphoto.jpg"} className="lg:h-4/5 md:h-3/5 sm:h-[300px] sm:w-[300px] h-[250px] w-[250px] mt-10 mb-5 md:mb-0 rounded-full md:rounded-3xl z-[111] left-10 lg:ms-20 md:ms-10"/>
          <div className="flex flex-col items-center justify-center w-full md:ms-10 mt-10 md:pt-20 pt-5 text-xl z-[111] text-[#f5f6f7] bg-[#111]/[0.9] xl:bg-transparent">
            <p className="text-lg">Hello there, I'm</p>
            <p className="heading lg:text-7xl sm:text-6xl text-5xl mt-3 font-bold">Soham Raut</p>
            <p className="md:mt-5 mt-3 md:mx-20 mx-10 tmd:ext-base lg:text-xl text-sm text-center 2xl:mx-40">
              I'm a Senior studying <span className="font-semibold">Computer Science</span> at the University of Washington in Seattle.
              Apart form technology and science, I love reading, swimming, and sports.
              I am passionate about building software that helps improve the world!
            </p>
            <ul className="flex space-x-6 mt-10 mb-5">
              <li><a href="mailto:sohamsraut97@gmail.com" target="_blank" className="bg-white p-1 flex rounded-md" ><img src="./envelope-solid.svg" className="w-[40px] h-[40px]"/></a></li>
              <li><a href="https://github.com/sohamsraut" target="_blank" className="bg-white p-1 flex rounded-md"><img src="./square-github.svg" className="w-[40px] h-[40px]"/></a></li>
              <li><a href="https://linkedin.com/in/sohamsraut" target="_blank" className="bg-white p-1 flex rounded-md"><img src="./linkedin.svg" className="w-[40px] h-[40px]"/></a></li>
              <li><a href="./Soham_Raut_resume.pdf" className="bg-white p-1 flex rounded-md" ><img src="./cv.png" className="w-[40px] h-[40px]"/></a></li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#ffb400] h-[80px] mt-5 md:mb-20 mb-30" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
          </div>
        </div>
      </section>
  );

}
