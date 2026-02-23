import { createContext, useEffect, useState } from "react";

export const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {

    const [transactions, setTransactions] = useState([]);

    // Load from LocalStorage
    useEffect(() => {
        const data = localStorage.getItem("transactions");
        if (data) setTransactions(JSON.parse(data));
    }, []);

    // Save to LocalStorage
    useEffect(() => {
        localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
        );
    }, [transactions]);

    function addTransaction(transaction) {
        setTransactions([
        ...transactions,
        transaction
        ]);
    }

    function deleteTransaction(id) {
        setTransactions(
        transactions.filter(t => t.id !== id)
        );
    }

    function editTransaction(updatedTransaction){

        setTransactions(

            transactions.map(t=>

                t.id===updatedTransaction.id
                ?updatedTransaction
                :t

            )

        );

    }

    return (
        <ExpenseContext.Provider
        value={{
            transactions,
            addTransaction,
            deleteTransaction,
            editTransaction
        }}
        >
        {children}
        </ExpenseContext.Provider>
    );
}