import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

export default function BarChartBox(){

    const { transactions } = useContext(ExpenseContext);


    // Monthly data
    const monthlyMap={};

    transactions.forEach(t=>{

        const month =
        new Date(t.id)
        .toLocaleString("default",{month:"short"});

        if(monthlyMap[month]){
            monthlyMap[month]+=t.amount;
        }else{
            monthlyMap[month]=t.amount;
        }

    });

    const data=
        Object.keys(monthlyMap).map(key=>({
        month:key,
        amount:monthlyMap[key]
    }));

    return(

        <div className="bg-[#0f122b] p-6 rounded-2xl shadow-lg">

        <h2 className="mb-6">
        Monthly Summary
        </h2>

        <div style={{height:300}}>

        <ResponsiveContainer>

        <BarChart data={data}>

        <XAxis dataKey="month"/>

        <YAxis/>

        <Tooltip/>

        <Bar
            dataKey="amount"
            fill="#8b5cf6"
            animationDuration={1500}
        />

        </BarChart>

        </ResponsiveContainer>

        </div>

        </div>

    );
}