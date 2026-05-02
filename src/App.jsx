import { useState, useRef, useEffect, useCallback, memo } from 'react'
import WavyCanvas from './canvas'
import './App.css'

// Isolated Title Component - only re-renders when title prop changes
const Title = memo(({ title, onWidthChange }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        onWidthChange(entry.contentRect.width);
      }
    });

    resizeObserver.observe(elementRef.current);

    return () => resizeObserver.disconnect();
  }, [onWidthChange]);

  return (
    <p className='font-TW text-(--Mcream) text-[40px] text-nowrap element' ref={elementRef}>{title}</p>
  );
});

Title.displayName = 'Title';

// Isolated Menu Item - only re-renders when activeMenu or name prop changes
const SetActivePageItem = memo(({ name, activeMenu, onMenuSelect }) => {
  return (
    <button
      className={`w-75 h-15 font-SA text-[35px] text-center tracking-wide leading-17 pl-2 font-light ${activeMenu === name ? 'text-(--Mcream) bg-(--Mgreen) bg-opacity-100 shadow-[inset_0_0_7px_7px_#F4ECD6]' : 'text-(--Mgreen)'
        } hover:text-(--Mcream) hover:bg-(--Mgreen) hover:shadow-[inset_0_0_15px_15px_#F4ECD6] cursor-pointer`}
      onClick={() => onMenuSelect(name)}
    >
      {name}
    </button>
  );
});

SetActivePageItem.displayName = 'SetActivePageItem';

// Isolated Navigation Component - only re-renders when width, isMenuOpen, or activeMenu changes
const Navigation = memo(({ width, isMenuOpen, onMenuOpen, onMenuClose, activeMenu, onMenuSelect }) => {
  return (
    <nav className={`nav transition-all duration-350 ease-in-out`} style={{ marginLeft: `calc(100dvw - ${width}px - 100px)` }}>
      <div>
        <div>
          <button
            className='h-12 w-12 flex justify-center align-center MenuB p-0.75 hover:p-0.5 relative z-2 hover:border hover:border-(--MRed) hover:shadow-[inset_0_0_21px_2px_var(--MRed)] hover:border-dotted hover:rounded-full'
            style={{ opacity: isMenuOpen ? `0` : `100` }}
            onClick={onMenuOpen}
          >
            <svg className='cursor-pointer' width="40px" height="40px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#F4ECD6" strokeWidth="0.00024000000000000003">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M2 5.5C2 4.94772 2.44772 4.5 3 4.5H21C21.5523 4.5 22 4.94772 22 5.5V6.5C22 7.05228 21.5523 7.5 21 7.5H3C2.44772 7.5 2 7.05228 2 6.6V5.5Z" fill="#F4ECD6"></path>
                <path d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5H21C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#F4ECD6"></path>
                <path d="M3 16.5C2.44772 16.5 2 16.9477 2 17.5V18.5C2 19.0523 2.44772 19.5 3 19.5H21C21.5523 19.5 22 19.0523 22 18.5V17.5C22 16.9477 21.5523 16.5 21 16.5H3Z" fill="#F4ECD6"></path>
              </g>
            </svg>
          </button>
          <div
            onMouseEnter={onMenuOpen}
            onMouseLeave={onMenuClose}
            className={`MenuList z-3 transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-100'} h-dvh w-75 bg-(--Mcream) flex flex-col items-center justify-start absolute -top-10 right-10 rounded-bl-[20px] rounded-tl-[20px]`}
          >
            <p className='font-CL font-bold text-[60px] mt-10 '>/menu</p>
            <ul className='w-75 font-CL list-none mt-20 p-0 '>
              <SetActivePageItem name="Main Page" activeMenu={activeMenu} onMenuSelect={onMenuSelect} />
              <SetActivePageItem name="About Me" activeMenu={activeMenu} onMenuSelect={onMenuSelect} />
              <SetActivePageItem name="My Projects" activeMenu={activeMenu} onMenuSelect={onMenuSelect} />
              <SetActivePageItem name="My C.V." activeMenu={activeMenu} onMenuSelect={onMenuSelect} />
              <SetActivePageItem name="Contacts" activeMenu={activeMenu} onMenuSelect={onMenuSelect} />
            </ul>
            <p className='text-[18px] tracking-wider opacity-95 text-(--Mgreen) font-CL mt-45'>majd-2026 • mark abt</p>
          </div>
        </div>
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

// Page Components - only re-render when activeMenu changes to that page
const Main = memo(() => (
  <>
    <div className="relative h-screen w-full -z-1 bg-[#071E22] overflow-hidden">
      <WavyCanvas />
    </div>
    <div className='flex flex-wrap justify-start items-start'>
      <footer className='absolute bottom-30 left-10 flex justify-start items-center'>
        <p className='font-CL text-(--Mcream) text-[75px] tracking-wider m-0 p-0 text-start leading-20'>
          <span className='font-bold m-0 p-0'>web</span> <br />
          <span className='m-0 p-0'>development</span> <br />
          <span className='font-bold m-0 p-0'>full</span> stack
        </p>
      </footer>
    </div>
  </>
));

Main.displayName = 'Main';

const AboutMe = memo(() => (
  <>
    <div className="relative h-screen w-full bg-[#071E22] overflow-hidden">
      <div className="absolute top-90 left-0 h-[90%] w-[50%] -translate-y-1/2 [background:var(--gradient)] rounded-br-[50px] rounded-tl-[50px] rounded-bl-[300px] rounded-tr-[300px] animate-movement blur-[60px] opacity-85 skew-x-45"></div>
    </div>
    <div className='flex flex-wrap justify-start items-start'>
      <footer className='absolute bottom-30 left-10 flex justify-start items-center'>
        <p className='font-CL text-(--Mcream) text-[75px] tracking-wider m-0 p-0 text-start leading-20'>
          <span className='font-bold m-0 p-0'>web</span> <br />
          <span className='m-0 p-0'>development</span> <br />
          <span className='font-bold m-0 p-0'>full</span> stack
        </p>
      </footer>
    </div>
  </>
));

AboutMe.displayName = 'AboutMe';

const MyProjects = memo(() => (
  <>
    <div className="relative h-screen w-full bg-[#071E22] overflow-hidden">
      <div className="absolute top-90 left-0 h-[90%] w-[50%] -translate-y-1/2 [background:var(--gradient)] rounded-br-[50px] rounded-tl-[50px] rounded-bl-[300px] rounded-tr-[300px] animate-movement blur-[60px] opacity-85 skew-x-45"></div>
    </div>
    <div className='flex flex-wrap justify-start items-start'>
      <footer className='absolute bottom-30 left-10 flex justify-start items-center'>
        <p className='font-CL text-(--Mcream) text-[75px] tracking-wider m-0 p-0 text-start leading-20'>
          <span className='font-bold m-0 p-0'>web</span> <br />
          <span className='m-0 p-0'>development</span> <br />
          <span className='font-bold m-0 p-0'>full</span> stack
        </p>
      </footer>
    </div>
  </>
));

MyProjects.displayName = 'MyProjects';

const MyCV = memo(() => (
  <>
    <div className="relative h-screen w-full bg-[#071E22] overflow-hidden">
      <div className="absolute top-90 left-0 h-[90%] w-[50%] -translate-y-1/2 [background:var(--gradient)] rounded-br-[50px] rounded-tl-[50px] rounded-bl-[300px] rounded-tr-[300px] animate-movement blur-[60px] opacity-85 skew-x-45"></div>
    </div>
    <div className='flex flex-wrap justify-start items-start'>
      <footer className='absolute bottom-30 left-10 flex justify-start items-center'>
        <p className='font-CL text-(--Mcream) text-[75px] tracking-wider m-0 p-0 text-start leading-20'>
          <span className='font-bold m-0 p-0'>web</span> <br />
          <span className='m-0 p-0'>development</span> <br />
          <span className='font-bold m-0 p-0'>full</span> stack
        </p>
      </footer>
    </div>
  </>
));

MyCV.displayName = 'MyCV';

// Page Router Component
const Showing = memo(({ activeMenu }) => {
  const renderPage = () => {
    switch (activeMenu) {
      case "Main Page":
        return <Main />;
      case "About Me":
        return <AboutMe />;
      case "My Projects":
        return <MyProjects />;
      case "My C.V.":
        return <MyCV />;
      case "Contacts":
        return <MyCV />;
      default:
        return <Main />;
    }
  };

  return renderPage();
});

Showing.displayName = 'Showing';

// Main App Component
function App() {
  const [width, setWidth] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Main Page");

  const handleWidthChange = useCallback((newWidth) => {
    setWidth(newWidth);
  }, []);

  const handleMenuOpen = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleMenuSelect = useCallback((menuName) => {
    setActiveMenu(menuName);
    setIsMenuOpen(false);
  }, []);

  const getTitleText = () => {
    switch (activeMenu) {
      case "Main Page":
        return "Majd Skikr";
      case "About Me":
        return "Aspiring Developer";
      case "My Projects":
        return "My Projects";
      case "My C.V.":
        return "C.V.";
      case "Contacts":
        return "Contact Me";
      default:
        return "Majd Skikr";
    }
  };

  return (
    <>
      <header className='flex justify-start items-center fixed -top-10 left-0 h-5 w-full mt-20 ml-10 z-100'>
        <Title title={getTitleText()} onWidthChange={handleWidthChange} />
        <Navigation
          width={width}
          isMenuOpen={isMenuOpen}
          onMenuOpen={handleMenuOpen}
          onMenuClose={handleMenuClose}
          activeMenu={activeMenu}
          onMenuSelect={handleMenuSelect}
        />
      </header>
      <Showing activeMenu={activeMenu} />
    </>
  );
}

export default App

if (import.meta.hot) {
  import.meta.hot.accept();
}
