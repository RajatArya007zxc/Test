/*
Find the maximum consecutive 1's in an array of 0's and 1's.
a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]


*/


import React,{useEffect, useState} from 'react'

export default function Second() {
    const [state]=useState([0,0,1,1,0,0,0,1,0,0,1,1,1,0])
    const [find,setfind]=useState('');


   
  useEffect(()=>{
   function handleChange(){
        let largestCount = 0;
        let currentCount = 0;

        for(let v of state){
            if(v!==0){
               currentCount++
            }
            else{
                currentCount=0
            }
           if(currentCount>largestCount){ 
                largestCount=currentCount}
        }
        return setfind(largestCount)
      }
      handleChange();
  })
    return (
        <div>
            <h1>The Binary Number is:[{state}]</h1>
            <h1>Max num of consecutive 1's is :{find}</h1>
            
        </div>
    )
}
