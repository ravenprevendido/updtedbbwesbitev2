"use client";

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  HiMenu,
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiX
} from 'react-icons/hi'
import { HiChevronDown } from 'react-icons/hi2'
import { RiMenu4Line } from "react-icons/ri";
import ToolTip from './ToolTip'
import { useRouter, useSearchParams } from 'next/navigation';
import TooltipServices from './TooltipServices';
import AboutTooltip from './AboutTooltip';
import { AnimatePresence, motion } from 'framer-motion';
// header props
type HeaderProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  children?: React.ReactNode;
}



const Header: React.FC<HeaderProps> = ({ searchValue, setSearchValue}) => {
const [isSearchActive, setIsSearchActive] = useState(false);
const router = useRouter()
 const handleNavClick = (sectionId: string) => {
  if(typeof window !== 'undefined' && window.location.pathname === '/') {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({behavior: "smooth"});
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  } else {
    router.push(`/?scrollTo=${sectionId}`);
  }
 };
 const searchParams = useSearchParams();
 useEffect(() => {
  const scrollTo = searchParams?.get('scrollTo');
  if(scrollTo) {
    const section = document.getElementById(scrollTo);
    if(section) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  }
 }, [searchParams])

  const [list, setList] = useState<string[]>([
    'A4 Paper',
    'about',
    'services',
    'PCV ID/Lanyard',
    'Photo canvas',
    'Wall Mural',
    'gallery',
    'burnbox',
    'home',
    'contact'
  ]);

  const aboutList = ['About Us', 'Mission and Vission', 'Why Choose Burnbox Printing?'];
  
  const servicesList = [
  {
    name: "Offset Printing / Forms & Reciept",
  },
  { name: "Corporate Giveaways" },
  { name: "Large format Services" },
  { name: "Stickers & Labels" },
  { name: "Signage" },
  { name: "Marketing Collaterals" },
  { name: "Wall Mural" },
  { name: "Glass Frosted Sticker" },
  { name: "Transit adds" },
  { name: "Graphic Design" },
  { name: "Logo design" },
  { name: "Other services.", nestedTooltip: ["Receipt types", "Forms customization", "Bulk orders"],
 },
];
  const buttons = ['wallmural', 'labelsticker', 'photocanvas', 'pvclanyard']
  
  const [showToolTip, setToolTip] = useState(false)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showMobileSubmenu, setShowMobileSubmenu] = useState(false)
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);
  const [showServicesTooltip, setShowServicesTooltip] = useState(false);
  const [showAboutTooltip, setShowAboutTooltip] = useState(false);
  const [isHoveringTooltip, setIsHoveringTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null)
  const hideTooltipTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);


  
  const filteredList = list.filter((item) => {
    return item.toLowerCase().includes(searchValue.toLowerCase())
  });
  const handleSearch = () => {
    if(filteredList.length === 1) {
      const sectionId = filteredList[0].toLowerCase().replace(/\s+/g, '-');
      const section = document.getElementById(sectionId);
      if(section) {
        section.scrollIntoView({behavior:  'smooth'})
      }
    }
  }



  useEffect(() => {
    // detect 
    const handleResize = () =>{
      setIsMobile(window.innerWidth < 768);
    };


    handleResize();
    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const handleClickTooltipAbout = () => {
    setShowAboutTooltip(!showAboutTooltip);
  }

  const handleClickTooltipServices = () => {
    setShowServicesTooltip(!showServicesTooltip)
  }


  useEffect(() => {
    if(searchValue) {
      handleSearch();
    }
  }, [searchValue])

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 768) {
        setMobileMenuOpen(false)
        setShowMobileSubmenu(false); 
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])
const handleMobileNavClick = (id: string) => {
  const section = document.getElementById(id);
  if(section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  setMobileMenuOpen(false)
  setShowMobileSubmenu(false)
}


  const handleMouseLeaveLeaveAbout = () => {
    if(!isHoveringTooltip) {
      hideTooltipTimeout.current = setTimeout(() => {
        setShowAboutTooltip(false);
      }, 200)
    }
  }

  const handleMouseLeaveServices = () => {
    // Delay tooltip hide only if not hovering over the tooltip
    if (!isHoveringTooltip) {
      hideTooltipTimeout.current = setTimeout(() => {
        setShowServicesTooltip(false);
      }, 200);  // Adjust delay if necessary
    }
  };

  // Handle mouse enter the Tooltip component
  const handleMouseEnterTooltip = () => {
    if (hideTooltipTimeout.current) {
      clearTimeout(hideTooltipTimeout.current);  // Cancel timeout if mouse enters tooltip
    }
    setIsHoveringTooltip(true);
    setShowServicesTooltip(true);  // Show tooltip when mouse is over it
  };

  // Handle mouse leave the Tooltip component
  const handleMouseLeaveTooltip = () => {
    setIsHoveringTooltip(false);  // Set flag to false when leaving the tooltip
    hideTooltipTimeout.current = setTimeout(() => {
      setShowServicesTooltip(false);  // Hide tooltip after delay
    }, 200);  // Adjust delay if necessary
  };


 const handleMouseEnterTooltipAbout = () => {
    if (hideTooltipTimeout.current) {
      clearTimeout(hideTooltipTimeout.current);  // Cancel timeout if mouse enters tooltip
    }
    setIsHoveringTooltip(true);
    setShowAboutTooltip(true);  // Show tooltip when mouse is over it
  };

  // Handle mouse leave the Tooltip component
  const handleMouseLeaveTooltipAbout = () => {
    setIsHoveringTooltip(false);  // Set flag to false when leaving the tooltip
    hideTooltipTimeout.current = setTimeout(() => {
      setShowAboutTooltip(false);  // Hide tooltip after delay
    }, 200);  // Adjust delay if necessary
  };

  


  return (
    <div className='h-20 w-full flex items-center justify-between px-5 py-3 text-white font-extralight text-lg z-100 bg-black fixed'>
      {/* Logo */}
      <a href="#home" className='h-20 py-3 px-1'>
      <Image
        height={500}
        width={500} 
        src={'/burnboxlogo.png'}
        alt='company logo'
        className='h-full object-contain object-left'
      />
      </a>
      <div className='hidden md:flex items-center   justify-end flex-1 '>
        {!isSearchActive ? (
       <>
        <a href="#home"><button
          onClick={() => handleNavClick("home")}
          type="button"
          className='px-5 h-full hover:text-pink transition ease-in duration-200'
        >Home</button>
        </a>
        <span className='relative'
          onMouseEnter={() => setShowAboutTooltip(true)}
          onMouseLeave={handleMouseLeaveLeaveAbout}
        >
        <a href="/about">
        <button
          onClick={() => handleNavClick("about")}
          type="button"
          className='px-5 h-full hover:text-pink transition ease-in duration-200'
        >
          About
        </button>
        </a>
       
        {showAboutTooltip && (
          <div ref={tooltipRef}
            onMouseEnter={handleMouseEnterTooltipAbout}
            onMouseLeave={handleMouseLeaveTooltipAbout}
          >
          <AboutTooltip aboutus={aboutList}/>
          </div>
        )}
        
          </span>
        <span 
        className='relative'
        onMouseEnter={() => setShowServicesTooltip(true)}
        // onMouseLeave={() => setShowServicesTooltip(false)}
        onMouseLeave={handleMouseLeaveServices}
        >
        <a href="/services"><button
          onClick={() => handleNavClick("services")}
          type="button"
          className='px-5 h-full flex gap-2 items-center hover:text-pink transition ease-in duration-200'
        >
          Services
        </button>
        </a>
        {showServicesTooltip && (
          <div
          ref={tooltipRef}
          onMouseEnter={handleMouseEnterTooltip}
          onMouseLeave={handleMouseLeaveTooltip}
          >
          <TooltipServices services={servicesList} />
          </div>
        )}
      </span>
        {/* <span className='relative'>
          <a href="#gallery" ><button
            type="button"
            className='pl-5 pr-3 h-full flex gap-2 items-center  hover:text-pink transition ease-in duration-200'
            onClick={() => setToolTip(!showToolTip)}
          >
            Gallery

          </button>
          </a>
          {showToolTip && <ToolTip buttons={buttons} setToolTip={setToolTip} />}
        </span> */}
         <a href="/contact">
        <button
          onClick={() => handleNavClick("contact")}
          type="button"
          className='px-5 h-full hover:text-pink transition ease-in duration-200'
        >
          Contact
        </button>
        </a>
        {/* search */}
        <button
          type="button"
          onClick={() => setIsSearchActive(true)}
        ><HiOutlineSearch />
        </button>
      {/* cart */}
          </>
        ): (
          <div 
            className={`
              ${isSearchActive
                ?  'opacity-100 translae-y-0 scale-100'
                :  'opacity-0 -translate-2 scale-95 pointer-events-none absolute'
              }
              `}
            >
            <input  
              type='text'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='Search...'
              className='bg-transparent border border-pink-300 text-white px-4 py-2 rounded-md focus:outline-none transition-all duration-300 w-64 placeholder:text-gray-500'
            />
            <button
              type='button'
              className='text-2xl p-2 mr-3'
              onClick={() => {
                setIsSearchActive(false);
                setSearchValue('');
              }}
            >
              <HiX className='text-pink-500'/>
           </button>
        </div>
          )}
      </div>
          {/* right side */}
        <div className='hidden md:flex ml-4'>
           <button className='text-2xl p-3 rounded-full bg-pink hover:scale-110 ease-in-out duration-200'>
            <HiOutlineShoppingCart />
          </button>
        </div>
      <div className='md:hidden flex items-center'>
        <button
          className='text-3xl text-white'
          onClick={() => {
            setMobileMenuOpen(!isMobileMenuOpen)
            setShowMobileSubmenu(false) // reset submenu when toggling menu
          }}
        >
          {isMobileMenuOpen ? <RiMenu4Line  className='text-pink-500'/>: <HiMenu />}
        </button>
      </div>
      {isMobileMenuOpen && (
  <div
    className={`absolute top-20 left-0 w-full bg-black text-white px-7 space-y-4 z-40 transition-[max-height,opacity,transform] duration-300 ease-in-out overflow-hidden max-h-screen opacity-100`}
  >
 {['Home', 'About', 'Services', 'Contact'].map((item, index) => {
  const isAbout = item === 'About';
  const isServices = item === 'Services';

  return (
    <div
      key={item}
      className="w-full animate-fadeInUp"
      style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
    >
      {/* Top-level Menu Item */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            if (isAbout) {
              setShowAboutTooltip(prev => !prev);
              setShowServicesTooltip(false);
            } else if (isServices) {
              setShowServicesTooltip(prev => !prev);
              setShowAboutTooltip(false);
            } else {
              handleMobileNavClick(item.toLowerCase());
              setShowAboutTooltip(false);
              setShowServicesTooltip(false);
            }
          }}
          className="flex items-center gap-2 text-left hover:text-pink transition"
        >
          <span>{item}</span>
          {(isAbout || isServices) && (
            <HiChevronDown
              className={`
                text-pink-500 transition-transform duration-300 
                ${((isAbout && showAboutTooltip) || (isServices && showServicesTooltip)) ? 'rotate-180' : ''}
              `}
              size={18}
            />
          )}
        </button>
      </div>

      {/* Submenu */}
      <AnimatePresence>
      {isAbout && showAboutTooltip && (
        <motion.div
          key="tooltip-overlay"
          initial={{ opacity: 0, scale: 1,y: 10}}
          animate={{opacity: 1, scale: 1, y : 0}}
          exit={{opacity: 0, scale: 0.8, transition: { duration: 0.2 }}}
          transition={{duration: 0.2, ease: 'easeInOut'}}
        >
        <div className="ml-4 mt-2 space-y-2  bg-zinc-900 rounded p-6 w-[280px]">
          {aboutList.map((text, idx) => (
            <button
              key={idx}
              className="block text-sm text-left hover:text-pink transition"
              onClick={() => {
                const id = text.toLowerCase().replace(/\s+/g, '-');
                const section = document.getElementById(id);
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
                setMobileMenuOpen(false);
                setShowAboutTooltip(false);
              }}
            >
              {text}
            </button>
          ))}
        </div>
        </motion.div>
      )}
      </AnimatePresence>
      <AnimatePresence>
      {isServices && showServicesTooltip && (
        <motion.div
          key="tooltip-overlay"
          initial={{ opacity: 0, scale: 1,y: 10}}
          animate={{opacity: 1, scale: 1, y : 0}}
          exit={{opacity: 0, scale: 0.8, transition: { duration: 0.2 }}}
          transition={{duration: 0.2, ease: 'easeInOut'}}
        >
        <div className="ml-4 mt-2 space-y-2 bg-zinc-900 rounded p-6 w-[280px]">
          {servicesList.map((service, idx) => (
            <button
              key={idx}
              className="block text-sm text-left hover:text-pink transition"
              onClick={() => {
                const id = service.name.toLowerCase().replace(/\s+/g, '-');
                const section = document.getElementById(id);
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
                setMobileMenuOpen(false);
                setShowServicesTooltip(false);
              }}
            >
              {service.name}
            </button>
          ))}
        </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
    
  );
})}

    <div className='block w-full text-left animate-fadeInUp' style={{ animationDelay: '0.4s' }}>
       <div className='flex items-center gap-2 w-full'>
       {/* <button
          onClick={() => {
            const section = document.getElementById('gallery');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
            setMobileMenuOpen(false); 
            setShowMobileSubmenu(false); 
          }}
          className='relative flex-1 w-full text-left hover:text-pink transition'
        >
          Gallery
        </button> */}
      </div>
        {/* 📌 Chevron — Toggles submenu */}
        {/* <button
          onClick={() => setShowMobileSubmenu(!showMobileSubmenu)}
          className='absolute flex-shrink-0 top-2 ml-15 text-1xl text-white hover:text-pink transition-transform duration-300'
        >
          <HiChevronDown className={`${showMobileSubmenu ? 'rotate-180' : ''} hover:text-pink`} />
        </button> */}
      {showMobileSubmenu && (
        <div className='ml-4 mt-3 space-y-2'>
          {buttons.map((item, index) => (
            <button
              key={index}
              className='block w-full text-left text-sm hover:text-pink animate-fadeInUp'
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              onClick={() => {
                const id = item.toLowerCase().replace(/\s+/g, '-');
                const section = document.getElementById(id)
                if(section) {
                  section.scrollIntoView({behavior: 'smooth'});
                }
                setMobileMenuOpen(false);
                setShowMobileSubmenu(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
   <div
  className='flex items-center gap-4 mt-6 py-4 animate-fadeInUp transition-all duration-300'
  style={{ animationDelay: '0.7s' }}
>
  {/* Cart Icon */}
  <div className='p-2 rounded-full bg-pink hover:scale-110 transition'>
    <HiOutlineShoppingCart className='text-xl' />
  </div>
  {/* Search Input Field */}
  {isMobileSearchActive && (
    <input
      type='text'
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder='Search...'
      className='min-w-[120px] max-w-[200px] bg-transparent border border-pink-300 text-white px-4 py-2 rounded-md focus:outline-none placeholder:text-gray-400 transition-all duration-300'
    />
  )}
 <button
    onClick={() => {
      setIsMobileSearchActive(prev => !prev);
      setSearchValue('');
    }}
    className='relative w-8 h-8 transition-all duration-500 ease-in-out transform hover:rotate-90'
  >
    {/* Search Icon */}
    <HiOutlineSearch
      className={`
        absolute top-0 left-0 w-8 h-8 text-white transition-all duration-300 ease-in-out 
        ${isMobileSearchActive ? 'opacity-0 scale-0 rotate-45' : 'opacity-100 scale-100 rotate-0'}
      `}
    />
    {/* X Icon */}
    <HiX
      className={`
        absolute top-0 left-0 w-8 h-8 text-pink-500 transition-all duration-300 ease-in-out 
        ${isMobileSearchActive ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-45'}
      `}
    />
  </button>
</div>
  </div>
)}
    </div>
  )
}
export default Header