import React from "react";
// import "./style.css";

export default function App(props ) {
       
     return (
    <div>
      <h2>My name is{ props.myname } 
       I live in { props.mycity  }</h2>
       <h1> By degree is {props.degree  }   </h1>
    </div>
  );
}

App.defaultprop={     
  degree:" B.sc "
}