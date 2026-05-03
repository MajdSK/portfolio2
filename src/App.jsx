import { useState, useRef, useEffect, useCallback, memo } from 'react'
import WavyCanvas from './canvas'
import NavCanvas from './canvas2'
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
    <div>
      <button
        className={`transition-all duration-300 font-SA text-nowrap text-[10px] text-center tracking-wide opacity-40 leading-20 font-light text-(--Mcream) ${activeMenu === name ? 'opacity-100' : "opacity-40"
          } hover:text-(--Mcream) hover:opacity-70 cursor-pointer`}
        onClick={() => onMenuSelect(name)}
      >
        {name}
      </button>
    </div>
  );
});

SetActivePageItem.displayName = 'SetActivePageItem';

// Isolated Navigation Component - only re-renders when width, isMenuOpen, or activeMenu changes
const Navigation = memo(({ width, isMenuOpen, onMenuOpen, onMenuClose, activeMenu, onMenuSelect }) => {
  return (
    <nav className={`nav relative top-80`} style={{ left: `calc(1300px - ${width}px)` }}>
      <div className='absolute inline top-6.25 left-7'>
        <button name="Main Page" className={`h-2 w-2 border border-(--Mcream-40) rounded-full ${activeMenu === "Main Page" ? "bg-(--Mcream)" : "bg-(--Mcream-40)"} cursor-pointer hover:border-(--Mcream)`}></button>
        <div className={`transition-all duration-500 h-13.75 m-0 p-0 w-px ml-[3.5px] ${activeMenu == "Main Page" ? 'bg-[image:var(--selectionGradientTop)]' : activeMenu == "About Me" ? "bg-[image:var(--selectionGradientBottom)]" : "bg-(--Mcream-40)"}`}></div>
        <button name="About Me" className={`h-2 w-2 border border-(--Mcream-40) rounded-full ${activeMenu === "About Me" ? "bg-(--Mcream)" : "bg-(--Mcream-40)"} cursor-pointer hover:border-(--Mcream)`}></button>
        <div className={`transition-all duration-500 h-13.75 m-0 p-0 w-px ml-[3.5px] ${activeMenu == "About Me" ? 'bg-[image:var(--selectionGradientTop)]' : activeMenu == "My Projects" ? "bg-[image:var(--selectionGradientBottom)]" : "bg-(--Mcream-40)"}`}></div>
        <button name="My Projects" className={`h-2 w-2 border border-(--Mcream-40) rounded-full ${activeMenu === "My Projects" ? "bg-(--Mcream)" : "bg-(--Mcream-40)"} cursor-pointer hover:border-(--Mcream)`}></button>
        <div className={`transition-all duration-500 h-13.75 m-0 p-0 w-px ml-[3.5px] ${activeMenu == "My Projects" ? 'bg-[image:var(--selectionGradientTop)]' : activeMenu == "My C.V." ? "bg-[image:var(--selectionGradientBottom)]" : "bg-(--Mcream-40)"}`}></div>
        <button name="My C.V." className={`h-2 w-2 border border-(--Mcream-40) rounded-full ${activeMenu === "My C.V." ? "bg-(--Mcream)" : "bg-(--Mcream-40)"} cursor-pointer hover:border-(--Mcream)`}></button>
        <div className={`transition-all duration-500 h-13.75 m-0 p-0 w-px ml-[3.5px] ${activeMenu == "My C.V." ? 'bg-[image:var(--selectionGradientTop)]' : activeMenu == "Contacts" ? "bg-[image:var(--selectionGradientBottom)]" : "bg-(--Mcream-40)"}`}></div>
        <button name="Contacts" className={`h-2 w-2 border border-(--Mcream-40) rounded-full ${activeMenu === "Contacts" ? "bg-(--Mcream)" : "bg-(--Mcream-40)"} cursor-pointer hover:border-(--Mcream)`}></button>
      </div>
      <div className='flex flex-col items-center relative'>
        <SetActivePageItem name="Main Page" activeMenu={activeMenu} onMenuSelect={onMenuSelect} />
        <SetActivePageItem name="About Me" activeMenu={activeMenu} onMenuSelect={onMenuSelect} />
        <SetActivePageItem name="My Projects" activeMenu={activeMenu} onMenuSelect={onMenuSelect} />
        <SetActivePageItem name="My C.V." activeMenu={activeMenu} onMenuSelect={onMenuSelect} />
        <SetActivePageItem name="Contacts" activeMenu={activeMenu} onMenuSelect={onMenuSelect} />
        <p className='text-[18px] tracking-wider opacity-95 text-(--Mgreen) font-CL mt-80'>majd-2026 • mark abt</p>
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
    switch ("Main Page") {
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
      <Showing activeMenu={"Main Page"} />
    </>
  );
}

export default App

if (import.meta.hot) {
  import.meta.hot.accept();
}
