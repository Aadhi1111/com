import React from 'react';
import './CompB.css';
const CompB = ({obj}) => {
    return (
        <> 
          <h1 className='head'>hello</h1>  
          <h2>Name:{obj.name}</h2>
          <h2>Age:{obj.age}</h2>
          <h3></h3>
        </>
    );
};
 
export default CompB;