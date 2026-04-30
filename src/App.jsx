import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
      <div className="relative h-screen w-full bg-[#071E22] overflow-hidden">
        <div
          className="absolute top-90 left-0 h-[90%] w-[50%] -translate-y-1/2 [background:var(--gradient)] rounded-br-[50px] rounded-tl-[50px] rounded-bl-[300px] rounded-tr-[300px] animate-movement blur-[60px] opacity-85 skew-x-45">
        </div>
      </div>
      <div className='flex flex-wrap justify-start items-start'>
        <header className='flex justify-start items-center fixed top-0 left-0 h-5 w-full mt-20 ml-10'>
          <p className='font-TW text-(--Mcream) text-[40px] text-nowrap'>Majd Skikr</p>
          <nav className='nav ml-[80%] transition-all duration-300 ease-in-out'>
            <div>
            <div>
              <button className='MenuB block relative z-2' onClick={()=>{
                if(document.querySelector('.nav').classList.contains('ml-[80%]')){
                  document.querySelector('.nav').classList.remove('ml-[80%]');
                  document.querySelector('.nav').classList.add('ml-[60%]');
                  document.querySelector('.MenuList').classList.remove('opacity-0');
                  document.querySelector('.MenuList').classList.add('opacity-100');
                } else{
                  document.querySelector('.nav').classList.remove('ml-[60%]');
                  document.querySelector('.nav').classList.add('ml-[80%]');
                  document.querySelector('.MenuList').classList.remove('opacity-100');
                  document.querySelector('.MenuList').classList.add('opacity-0');
                }
              }}>
                <svg className='cursor-pointer' width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#F4ECD6" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 5.5C2 4.94772 2.44772 4.5 3 4.5H21C21.5523 4.5 22 4.94772 22 5.5V6.5C22 7.05228 21.5523 7.5 21 7.5H3C2.44772 7.5 2 7.05228 2 6.5V5.5Z" fill="#F4ECD6"></path> <path d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5H21C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#F4ECD6"></path> <path d="M3 16.5C2.44772 16.5 2 16.9477 2 17.5V18.5C2 19.0523 2.44772 19.5 3 19.5H21C21.5523 19.5 22 19.0523 22 18.5V17.5C22 16.9477 21.5523 16.5 21 16.5H3Z" fill="#F4ECD6"></path> </g></svg>
              </button>
              <div className='MenuList transition-all duration-400 ease-in-out opacity-0 h-dvh w-75 bg-(--Mcream) flex flex-col items-center justify-start absolute -top-20 right-10 rounded-bl-[20px] rounded-tl-[20px]'>
                <p className='font-CL font-bold text-[60px] mt-10 '>Menu</p>
                <ul className='w-75 font-CL list-none mt-20 p-0 '>
                  <button className='w-75 h-15 font-SA text-[35px] text-center tracking-wide leading-17 pl-2 font-light text-(--MBlack) hover:text-(--Mcream) hover:bg-(--Mgreen) hover:bg-opacity-50 hover:shadow-[inset_0_0_15px_0.5px_rgba(255,255,255,0.3)] cursor-pointer'>About Me</button>
                  <button className='w-75 h-15 font-SA text-[35px] text-center tracking-wide leading-17 pl-2 font-light text-(--MBlack) hover:text-(--Mcream) hover:bg-(--Mgreen) hover:bg-opacity-50 hover:shadow-[inset_0_0_15px_0.5px_rgba(255,255,255,0.3)] cursor-pointer'>my projects</button>
                  <button className='w-75 h-15 font-SA text-[35px] text-center tracking-wide leading-17 pl-2 font-light text-(--MBlack) hover:text-(--Mcream) hover:bg-(--Mgreen) hover:bg-opacity-50 hover:shadow-[inset_0_0_15px_0.5px_rgba(255,255,255,0.3)] cursor-pointer'>my c.v.</button>
                  <button className='w-75 h-15 font-SA text-[35px] text-center tracking-wide leading-17 pl-2 font-light text-(--MBlack) hover:text-(--Mcream) hover:bg-(--Mgreen) hover:bg-opacity-50 hover:shadow-[inset_0_0_15px_0.5px_rgba(255,255,255,0.3)] cursor-pointer'>Contacts</button>
                </ul>
                <p className='text-[18px] tracking-wider opacity-95 text-(--Mgreen) font-CL mt-95'>majd-2026 • mark abt</p>
              </div>
            </div>
            </div>
          </nav>
        </header>
        <footer className='absolute bottom-30 left-10 flex justify-start items-center'>
          <p className='font-CL text-(--Mcream) text-[75px] tracking-wider m-0 p-0 text-start leading-20'>
            <span className='font-bold m-0 p-0'>web</span> <br />
            <span className='m-0 p-0'>development</span> <br />
            <span className='font-bold m-0 p-0'>full</span> stack
          </p>
        </footer>
      </div>
    </>
  )
}

export default App
