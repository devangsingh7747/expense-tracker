import { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

export default function AddTransaction({ closeModal }) {

    const { addTransaction } = useContext(ExpenseContext);

    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState("");
    const [category,setCategory] = useState("General");
    const [type,setType] = useState("expense");

    function handleSubmit(e){

        e.preventDefault();

        const newTransaction = {
            id: Date.now(),
            title,
            amount:Number(amount),
            category,
            type
        };

        addTransaction(newTransaction);

        closeModal();
    }

    return (

    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

    <div className="bg-[#0f122b] p-8 rounded-2xl w-96 shadow-2xl">

    <h2 className="text-2xl mb-6">
    Add Transaction
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4">

    <input
        placeholder="Title"
        value={title}
        onChange={e=>setTitle(e.target.value)}
        className="w-full p-3 rounded bg-[#111222]"
    />

    <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e=>setAmount(e.target.value)}
        className="w-full p-3 rounded bg-[#111222]"
    />

    <select
        value={category}
        onChange={e=>setCategory(e.target.value)}
        className="w-full p-3 rounded bg-[#111222]"
    >

    <option>General</option>
    <option>Food</option>
    <option>Shopping</option>
    <option>Rent</option>
    <option>Salary</option>

    </select>

    <select
        value={type}
        onChange={e=>setType(e.target.value)}
        className="w-full p-3 rounded bg-[#111222]"
    >

    <option value="expense">Expense</option>
    <option value="income">Income</option>

    </select>

    <button
    className="w-full bg-purple-600 p-3 rounded mt-4"
    >

    Add Transaction

    </button>

    </form>

    <button
        onClick={closeModal}
        className="mt-4 text-gray-400"
    >

    Cancel

    </button>

    </div>

    </div>

    );
}