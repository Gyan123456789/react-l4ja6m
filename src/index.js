import React from 'react';
import ReactDOM from 'react-dom';

 import App from "./App";
 import Card  from "./Card";
 import sdata from "./Sdata";

   import "./style.css";

/* function Card(props)
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
 }  */



 ReactDOM.render(
  <>
      <div>
  <h2 className="jumbotron" >List of Top-5 Netflix Web Series in 2022      </h2>
  </div>
  {sdata.map((val)=>
       {
     return(
      <Card imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.links}
          />
         );
       }
  
   ) }
  



  


  
  
  </> , 
  

  
  

  
  document.getElementById('root')
  );





  



