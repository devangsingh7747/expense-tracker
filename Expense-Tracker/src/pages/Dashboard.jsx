import TransactionList from "../components/TransactionList";
import { useState, useContext } from "react";
import AddTransaction from "../components/AddTransaction";
import { ExpenseContext } from "../context/ExpenseContext";
import PieChartBox from "../components/PieChartBox";
import BarChartBox from "../components/BarChartBox";
import Counter from "../components/Counter";

export default function Dashboard() {
    const [showModal, setShowModal] = useState(false);

    const { transactions } = useContext(ExpenseContext);

    const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc,t)=>acc+t.amount,0);

    const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc,t)=>acc+t.amount,0);

const balance = income - expense;

    return (
        <div className="p-10">

            <h1 className="text-3xl font-bold mb-8">
                Dashboard
            </h1>
            
            <button
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 rounded-lg mb-6 shadow-lg hover:scale-105 transition"
                >
                Add Transaction
            </button>

            <div className="grid grid-cols-3 gap-6 mb-10">

                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 rounded-xl shadow-xl">
                    <p className="text-gray-200">Total Balance</p>
                    <h2 className="text-3xl font-bold mt-2"><Counter value={balance}/></h2>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl shadow-xl">
                    <p className="text-gray-200">Income</p>
                    <h2 className="text-3xl font-bold mt-2"><Counter value={income}/></h2>
                </div>

                <div className="bg-gradient-to-r from-red-500 to-pink-600 p-6 rounded-xl shadow-xl">
                    <p className="text-gray-200">Expense</p>
                    <h2 className="text-3xl font-bold mt-2"><Counter value={expense}/></h2>
                </div>

            </div>

            <TransactionList />

            <div className="grid grid-cols-2 gap-6 mt-6">

            <PieChartBox />

            <BarChartBox />

            </div>

            {showModal && (
                <AddTransaction
                    closeModal={() => setShowModal(false)}
                />
            )}

        </div>
    )
}