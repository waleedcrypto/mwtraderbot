import React, { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('md_trader_token');
    if (token === 'adminwaleed786') {
      setIsAdmin(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('md_trader_token');
    router.push('/');
  };

  return (
    <main className="flex flex-col h-full w-full relative">
      <div className="absolute top-0 right-0 z-20 flex space-x-2 translate-x-2 -translate-y-2">
        {isAdmin && (
          <button 
            onClick={() => router.push('/admin')}
            className="bg-gradient-to-r from-emerald-500 to-green-600 text-white text-[12px] font-bold px-4 py-2 rounded-lg shadow-lg"
          >
            Admin Panel
          </button>
        )}
        <button 
          onClick={handleLogout}
          className="bg-gradient-to-r from-[#6b58c7] to-[#8d6ee5] text-white text-[12px] font-bold px-4 py-2 rounded-lg shadow-lg"
        >
          Logout
        </button>
      </div>

      {/* Advisory Box */}
      <div className="border border-[#C59B27] bg-[#342D16] rounded-xl p-4 text-center mt-2 mb-10 z-0 relative">
        <p className="text-white text-sm font-semibold tracking-wide leading-snug">
          I am not a financial advisor. Risk<br/>management is essential.
        </p>
      </div>

      <Logo />

      <div className="flex flex-col space-y-5 flex-1 mt-2">
        <div>
          <label className="text-white text-[15px] font-medium mb-2 block">
            Select Broker:
          </label>
          <div className="relative">
            <select className="appearance-none bg-[#020005] border border-gray-800 rounded-xl px-4 py-3.5 w-full text-gray-300 outline-none focus:border-purple-500">
              <option>Choose a broker...</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <span className="text-xs">▼</span>
            </div>
          </div>
        </div>

        <div>
           <label className="text-white text-[15px] font-medium mb-2 block">
            Select Pair:
          </label>
          <div className="relative">
            <select className="appearance-none bg-[#020005] border border-gray-800 rounded-xl px-4 py-3.5 w-full text-gray-300 outline-none focus:border-purple-500">
              <option>Choose a pair...</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <span className="text-xs">▼</span>
            </div>
          </div>
        </div>

        <div>
           <label className="text-white text-[15px] font-medium mb-2 block">
            Select Timeframe:
          </label>
          <div className="relative">
            <select className="appearance-none bg-[#020005] border border-gray-800 rounded-xl px-4 py-3.5 w-full text-gray-300 outline-none focus:border-purple-500">
              <option>Choose a timeframe...</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <span className="text-xs">▼</span>
            </div>
          </div>
        </div>

        <button 
          disabled
          className="bg-gradient-to-r from-[#443888] to-[#5946B0] opacity-80 w-full py-4 rounded-xl text-[#B9AEDF] font-bold tracking-wide mt-4 cursor-not-allowed"
        >
          Generate Signal
        </button>

        <div className="mt-auto bg-[#04010A] rounded-xl py-6 px-4 text-center mt-6">
          <p className="text-[#A297C1] text-[13px] leading-relaxed">
            Select broker, pair, and timeframe to<br/>generate signals
          </p>
        </div>
      </div>
    </main>
  );
}
