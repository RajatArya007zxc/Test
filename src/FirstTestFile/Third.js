/*
uppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive. 
Each number only occurs once in the array except one number which occurs twice.
  Write a js code to find the repeated number.
*/
import React, {  useState } from 'react'

export default function Third() {
    const[obj,setObj]=useState({});
    const [number,setNumber]=useState('');
    
    const givenArray=[1,2,3,4,5,6,7,7,8,9];

    const findFirstDouble=()=>{
        for( let i of givenArray){

            obj[i]?setObj(++obj[i]):setObj(obj[i]=1)
            if(obj[i]>1){
                setNumber(i)
            }
       }
    }
   
    return(
        <div>
            <p>[{givenArray.join(',')}]</p>
            <button onClick={findFirstDouble}>Find Double in Array</button>
            <p>{number}</p>
        </div>
    )
}
