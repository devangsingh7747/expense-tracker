import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return (

        <div className="flex">

        <Sidebar />

        <div className="flex-1 bg-[#0f1020] min-h-screen">
            {children}
        </div>

        </div>

    );
}