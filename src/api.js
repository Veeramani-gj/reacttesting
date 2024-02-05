import React, { useEffect, useState } from 'react';

export default function Apimethod() {
    const [api,changeapi] = useState([]);
    useEffect(()=> {
        const data = fetch('https://jsonplaceholder.typicode.com/posts');
        console.log(data)
        const value = data.then((item)=> item.json());
        // console.log(value)
        value.then((apidata)=>changeapi(apidata));
      
    },[])
   
    return(    
        <>
            {api.map((item,i)=> {
                return(
                    <div className='card'>
                        <h1>TITLE : {item.title}</h1>
                         <p>BODY : {item.body}</p>
                    </div>
                     
                )
            })}


        </>
    )
}