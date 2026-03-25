"use client";
import React, { useState } from 'react';
import Logo from '@/components/Logo';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [token, setToken] = useState('wajahat123');
  // Error state visible by default to match the exact visual requirement of the user
  const [showError, setShowError] = useState(true); 
  const router = useRouter();

  const handleAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (token) {
      localStorage.setItem('md_trader_token', token);
      router.push('/dashboard');
    }
  };

  return (
    <main className="flex flex-col h-full w-full">
      {/* Advisory Box */}
      <div className="border border-[#C59B27] bg-[#342D16] rounded-xl p-4 text-center mt-2 mb-10 z-0 relative">
        <p className="text-white text-sm font-semibold tracking-wide leading-snug">
          I am not a financial advisor. Risk<br/>management is essential.
        </p>
      </div>

      <Logo />

      <form onSubmit={handleAccess} className="flex flex-col flex-1 mt-4">
        <label className="text-white text-[15px] font-bold mb-2">
          Enter Access Token:
        </label>
        <input 
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="bg-[#EAEFFD] text-[#1E1E1E] rounded-xl px-4 py-3.5 w-full outline-none font-medium mb-6 focus:ring-2 focus:ring-[#7B59D0]"
        />

        <button 
          type="submit"
          className="bg-gradient-to-r from-[#5041B2] to-[#7B59D0] w-full py-4 rounded-xl text-white font-bold tracking-wide shadow-lg active:scale-[0.98] transition-all mb-4"
        >
          Access Bot
        </button>

        <div className="flex space-x-3 mb-6">
          <button type="button" className="flex-1 bg-gradient-to-r from-[#5041B2] to-[#7B59D0] py-3.5 rounded-xl text-white font-bold tracking-wide shadow-lg active:scale-[0.98] transition-all text-sm">
            Free Group
          </button>
          <button type="button" className="flex-1 bg-gradient-to-r from-[#5041B2] to-[#7B59D0] py-3.5 rounded-xl text-white font-bold tracking-wide shadow-lg active:scale-[0.98] transition-all text-sm">
            Paid Token
          </button>
        </div>

        {/* Error Box */}
        {showError && (
          <div className="mt-auto bg-[#4e1b21] rounded-xl py-4 px-2 text-center border border-[#642429]">
            <p className="text-[#d86d75] text-sm font-medium">
              This token is already in use on<br/>another device.
            </p>
          </div>
        )}
      </form>
    </main>
  );
}
