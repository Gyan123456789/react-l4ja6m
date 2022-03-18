

import React from "react"; 


function Card(props)
 {
   return(
     <>
<div className="card">
<div className="card-body">
<div className=' cards'>
  <div className=' card' >
   <img src={props.imgsrc} alt='mypic' className='cardimg  ' />
     <div className='card_info '>
<span className='card_category'>{props.title}</span>
       
<h5 className='card_title'>{ props.sname}</h5>
<a href={props.link} target='_blank' >
  <button className="btn btn-success btn-sm"  >watch Now</button>
       </a>
       </div>
       </div>
       </div> 
       </div>
       </div>
      </>
      );
 }

export default Card ; 
