import { FaChartPie, FaPlus, FaWallet, FaCog } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="w-64 min-h-screen bg-[#0c0d22] p-6 border-r border-gray-800">

        <h1 className="text-2xl font-bold mb-10 text-white">
            Expense Tracker
        </h1>

        <div className="space-y-6">

            <div className="flex items-center gap-3 text-purple-400 cursor-pointer">
            <FaChartPie />
            Dashboard
            </div>

            <div className="flex items-center gap-3 text-gray-400 cursor-pointer hover:text-white">
            <FaPlus />
            Add Expense
            </div>

            <div className="flex items-center gap-3 text-gray-400 cursor-pointer hover:text-white">
            <FaWallet />
            Add Income
            </div>

            <div className="flex items-center gap-3 text-gray-400 cursor-pointer hover:text-white">
            <FaCog />
            Settings
            </div>
        
        </div>

        </div>
    );
}