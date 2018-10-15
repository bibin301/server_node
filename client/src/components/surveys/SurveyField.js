import React from 'react';

export default ({input,label,meta:{error,touched} }) =>{

    

    return (
        <div>
            <label> {label}</label>
            <input {...input} />
            <div className="red-text" style={{marginBottom:'20px', color:'red'}}>
            {touched && error}
            </div>
          
        </div>
    )
}