import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
    } from "recharts";

    export default function PieChartBox(){

    const { transactions } = useContext(ExpenseContext);

    const expenses =
        transactions.filter(
        t=>t.type==="expense"
    );

    const categoryMap={};

    expenses.forEach(t=>{

    if(categoryMap[t.category]){
        categoryMap[t.category]+=t.amount;
    }
    else{
        categoryMap[t.category]=t.amount;
    }

    });

    const data =
        Object.keys(categoryMap).map(key=>({
        name:key,
        value:categoryMap[key]
    }));

    const COLORS=[
        "#8b5cf6",
        "#06b6d4",
        "#22c55e",
        "#f43f5e",
        "#f59e0b"
    ];

    return(

        <div className="bg-[#0f122b] p-6 rounded-2xl shadow-lg">

        <h2 className="mb-6">
            Expenses by Category
        </h2>

        <div style={{width:"100%",height:300}}>

        <ResponsiveContainer>

        <PieChart>

        <Pie
            data={data}
            dataKey="value"
            animationDuration={1200}
            animationEasing="ease-out"
        >

        {
        data.map((entry,index)=>(
        <Cell
        key={index}
        fill={
        COLORS[index%COLORS.length]
        }
        />
        ))
        }

        </Pie>

        <Tooltip/>

        </PieChart>

        </ResponsiveContainer>

        </div>

        </div>

    );

}