import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
      setIsOpen(!isOpen);
  };
  
  return (
    <>
      <div className='flex m-0 w-full h-20 bg-primary'>
          <div className="flex-auto pt-[20px]">
            <p className="text-2xl md:text-3xl ml-3 text-white">MCC-code manager</p>
          </div>
          <div className="flex-auto"></div>
          <div className="flex-auto">
            <ul className="pr-5 h-full hidden justify-end text-center text-white sm:flex">
              <Link to='/'        className="mt-[22px] pt-[5px] text-lg h-10 mx-2 rounded-md w-[125px] hover:bg-secondery">Банки</Link>
              <Link to='/manager' className="mt-[22px] pt-[5px] w-[125px] text-lg h-10 mx-2 rounded-md hover:bg-secondery">Управление</Link>
              <Link to='/profile' className="mt-[22px] pt-[5px] w-[125px] text-lg h-10 mx-2 rounded-md hover:bg-secondery">Аккаунт</Link>
            </ul>
          </div>
          <button onClick={handleClick} className="flex flex-col justify-center items-center mr-10 sm:hidden">
              <span className={`bg-white block transition-all duration-300 ease-out 
                              h-0.5 w-6 rounded-sm ${isOpen ? 
                              'rotate-45 translate-y-1' : '-translate-y-0.5'
                              }`} >
              </span>
              <span className={`bg-white block transition-all duration-300 ease-out 
                              h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                              'opacity-0' : 'opacity-100'
                              }`} >
              </span>
              <span className={`bg-white block transition-all duration-300 ease-out 
                              h-0.5 w-6 rounded-sm ${isOpen ? 
                              '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                              }`}>
              </span>  
          </button>
      </div>
      {/* <div>
        <ul className={`flex h-full ${isOpen ? 'block' : 'hidden'} justify-center text-center text-white sm:hidden`}>
              <li className="bg-red-300 mt-[22px] pt-[5px] w-[135px] text-lg h-10 mx-3 bg-primary rounded-md hover:bg-secondery"><a>Банки</a></li>
              <li className="bg-red-300 mt-[22px] pt-[5px] w-[135px] text-lg h-10 mx-3 bg-primary rounded-md hover:bg-secondery"><a>Управление</a></li>
              <li className="bg-red-300 mt-[22px] pt-[5px] w-[135px] text-lg h-10 mx-3 bg-primary rounded-md hover:bg-secondery"><a>Аккаунт</a></li>
          </ul>
      </div> */}
    </>
  )
}

export default Header