import { useEffect, useState } from "react";

export default function Counter({ value }) {

    const [count,setCount]=useState(0);

    useEffect(()=>{

        let start=0;

        const duration=800;

        const increment=value/(duration/10);

        const timer=setInterval(()=>{

        start+=increment;

        if(start>=value){
        start=value;
        clearInterval(timer);
        }

        setCount(Math.floor(start));

        },10);

        return ()=>clearInterval(timer);

    },[value]);

    return <span>${count}</span>;

}