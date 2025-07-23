import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Chatbox from '../components/Chatbox';

const MainChatPage = () => {
    return (
        <main className="w-screen h-screen flex flex-col bg-gray-100">
            {/* Navbar */}
            <Navbar />

            {/* Chat Layout */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside className=" min-w-[300px] bg-gray-900 text-white border-r overflow-y-auto">
                    <Sidebar />
                </aside>

                {/* Chatbox */}
                <section className="flex-1 bg-white overflow-y-auto">
                    <Chatbox />
                </section>
            </div>
        </main>
    );
};

export default MainChatPage;
