import React from 'react';
import ReactDOM from 'react-dom';

 import App from "./App";
// import Heading  from "./Heading";
   import "./style.css";
 function Card(props)
 {
   return(
     <>
       <div className=' cards'>
       <div className=' card' >
       <img src={props.imgsrc} alt='mypic' className='cardimg  ' />
       <div className='card_info '>
       <span className='card_category'>{ props.title}</span>
       
<h3 className='card_title'>{ props.sname}</h3>
       <a href={props.link } target='_blank' >
       <button>watch Now</button>
       </a>
       </div>
       </div>
       </div> 
      </>
      );
 }



 ReactDOM.render(
  <>
    <Card imgsrc="https://wallpaperaccess.com/download/dark-netflix-712536  " 
  title="A Netflix original Web series"
  sname=" DARK "
  link="https://www.netflix.com/in/title/80100172"
  />

  <Card imgsrc= "https://wallpaperaccess.com/download/minnal-murali-7870871"  
  title="A Netflix original Web series"
  sname=" Minnal Murli "
  link="https://www.netflix.com/in/title/81497215?preventIntent=true"
  />

  <Card imgsrc= "   https://pics.alphacoders.com/by_sub_type/5/185025      "
 title="A Netflix original Web series"
  sname=" HellBound "
  link="https://www.netflix.com/in/title/81256675?preventIntent=true"
  />

  <Card imgsrc=" https://wallpaperaccess.com/download/extracurricular-4600592 "   
  title="A Netflix original Web series"
  sname=" ExtraCurriculam "
  link="https://www.netflix.com/in/title/80990668?preventIntent=true"
  />
  
  
  </> , 
  

  
  

  
  document.getElementById('root')
  );





  



