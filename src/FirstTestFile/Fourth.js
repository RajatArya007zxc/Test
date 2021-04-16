import React, { useState,useEffect } from 'react'

export default function Fourth() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        
     
       const gettingData=async()=>{
           let fetc=await fetch('https://jsonplaceholder.typicode.com/users')
              
           let b=await fetc.json();
           setData(b)
           
          
        }
        
    gettingData()   
    },[])
    
    return (
        <div>
            {data.map(e=>(
                
                    <h1 key={e.id}>{e.name}</h1>
                  
            ))}
        </div>
    )
}

/// here i used other API