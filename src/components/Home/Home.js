import "./fonts/BDSupperBold.ttf"
import React from 'react';
import './Home.css'
// import { useEffect } from "react";
import Content1 from './Content1/Content1'
import Content2 from './Content2/Content2'
import Content3 from './Content3/Content3'
import Content4 from './Content4/Content4'
import Content5 from './Content5/Content5'
import Content6 from'./Content6/Content6'
import Content7 from './Content7/Content7'
// import Content8 from './Content8/Content8'

function App() {

  // useEffect(()=>{
  //   const the_animation = document.querySelectorAll('.animation')
  
  // const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //             entry.target.classList.add('scroll-animation')
  //         }
  //             else {
  //                 entry.target.classList.remove('scroll-animation')
  //             }
          
  //     })
  // },
  //    { threshold: 0.1
  //    });
  // //
  //   for (let i = 0; i < the_animation.length; i++) {
  //    const elements = the_animation[i];
  
  //     observer.observe(elements);
  //   } 
  // },[])
  return (
    <>
    <Content1/>
    <Content2/>
    <Content3/>
    <Content4/>
    <Content5/>
    <Content6/>
    <Content7/>
    {/* <Content8/> */}
    </>
  );
}

export default App;
