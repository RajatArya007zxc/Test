/*
Define an array of numbers (use any random numbers). Write a program
 to print only the even numbers of the array.
  Do not use any library functions, need to do via for loops only
*/
import React, { useEffect, useState } from 'react'

export default function First() {

    const arrayOfNum=[1,2,3,4,6,5];
    
    const [even,setEven]=useState([]);
    
    useEffect(()=>{
        for(let i of arrayOfNum){
            if(i%2===0){
                setEven(prev=>[...prev,i])
                
            }
        }
    },[])

    
    
    
    return (
        <div>
          <h1>Given Array [{arrayOfNum.join(',')}]</h1>
          <h1>Even numbers in an Array{even.join(',')}</h1>
        </div>
    )
}
