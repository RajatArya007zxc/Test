// Sort object by the "id"
import React,{useState,useEffect} from 'react'

export default function Fifth() {

    let initialState= [
        {id : 4, name : "abc"},
        {id : 10, name : "ab2"},
        {id : 5, name : "ab3"},
        {id : 6, name:"abc5"}
       ]
    const [obj,setObj]=useState(initialState)
    
    useEffect(()=>{

        setObj(obj.sort((a,b)=>a.id-b.id))
    console.log(obj)
    },[])
    
    return (
        <div>
           <ul style={{'list-style-type':"none"}}> {obj.map(e=>(
                
                    <li keys={e.id}>id:{e.id} ,name:{e.name}</li>
                
            ))}
            </ul>
        </div>
    )
}
