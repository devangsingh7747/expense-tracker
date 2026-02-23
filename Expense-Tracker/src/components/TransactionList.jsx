import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import EditTransaction from "./EditTransaction";

export default function TransactionList() {

    const [editItem, setEditItem]=useState(null);

    const { transactions, deleteTransaction } =
        useContext(ExpenseContext);

    return (

        <div className="bg-[#0f122b] p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl mb-8 font-semibold">
            Transaction History
        </h2>

        {transactions.length === 0 && (
            <p className="text-gray-400">
            No transactions yet
            </p>
        )}

        {transactions.map(t => (

            <div
            key={t.id}
            className="flex justify-between border-b border-gray-800 py-4"
            >

            <div>

                <p>{t.title}</p>

                <p className="text-sm text-gray-400">
                {t.category}
                </p>

            </div>

            <div className="flex gap-6 items-center">

                <p
                className={
                    t.type === "income"
                    ? "text-green-400"
                    : "text-red-400"
                }
                >
                ${t.amount}
                </p>

                <button
                    onClick={()=>setEditItem(t)}
                    className="text-blue-400"
                >
                    Edit
                </button>

                <button
                    onClick={() => deleteTransaction(t.id)}
                    className="text-red-500"
                >
                    X
                </button>

            </div>

            </div>

        ))}

        {editItem && (

            <EditTransaction

                transaction={editItem}

                closeModal={()=>
                    setEditItem(null)
                }

            />

        )}

        </div>

    );
}