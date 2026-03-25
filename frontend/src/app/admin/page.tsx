import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [adminToken, setAdminToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('md_trader_token');
    if (token === 'adminwaleed786') {
      setIsAuthenticated(true);
      setAdminToken(token);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate Admin Token
    if (adminToken === 'adminwaleed786') {
      localStorage.setItem('md_trader_token', adminToken);
      setIsAuthenticated(true);
    } else {
      alert("Invalid Admin Token");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAdminToken('');
    localStorage.removeItem('md_trader_token');
    router.push('/');
  };

  if (!isAuthenticated) {
    return (
      <main className="flex flex-col h-full w-full justify-center items-center p-6">
        <h1 className="text-white text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">MD TRADER ADMIN</h1>
        <form onSubmit={handleLogin} className="w-full">
          <label className="text-gray-300 text-sm font-semibold mb-2 block">
            Admin Secrets Key
          </label>
          <input 
            type="password"
            value={adminToken}
            onChange={(e) => setAdminToken(e.target.value)}
            className="bg-[#1A1A2E] text-white border border-gray-700 rounded-xl px-4 py-3 w-full outline-none mb-6 focus:border-purple-500"
            placeholder="Enter Master Token..."
          />
          <button 
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 w-full py-3 rounded-xl text-white font-bold tracking-wide transition-all"
          >
            Unlock Dashboard
          </button>
        </form>
      </main>
    );
  }

  // Active Admin Dashboard State
  return (
    <main className="flex flex-col h-full w-full relative p-2">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-white text-2xl font-black">Admin Panel</h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => router.push('/dashboard')}
            className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-4 py-2 rounded-lg"
          >
            Dashboard
          </button>
          <button 
            onClick={handleLogout}
            className="bg-red-500/20 text-red-500 hover:bg-red-500/40 text-xs font-bold px-4 py-2 rounded-lg"
          >
            Lock System
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto pr-1 pb-4 custom-scrollbar">
        {/* Token Generation Module */}
        <section className="bg-white/5 border border-white/10 rounded-xl p-5">
           <h2 className="text-purple-400 font-bold mb-4">Generate New Access Token</h2>
           <div className="flex flex-col space-y-3">
             <div>
               <label className="text-xs text-gray-400">Duration (Days)</label>
               <input type="number" defaultValue={30} className="w-full bg-black/40 border border-gray-800 text-white rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-purple-500" />
             </div>
             <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-2.5 rounded-lg text-sm active:scale-[0.98]">
               Generate Token
             </button>
           </div>
        </section>

        {/* Existing Tokens Table */}
        <section className="bg-white/5 border border-white/10 rounded-xl p-5">
           <h2 className="text-blue-400 font-bold mb-4">Active & Expired Tokens</h2>
           <div className="space-y-3">
             {/* Mocked Token Row 1 */}
             <div className="bg-black/40 border border-gray-800 rounded-lg p-3 flex justify-between items-center">
                <div>
                  <div className="text-white font-mono text-sm mb-1">mdt_39f82a9...</div>
                  <div className="flex items-center space-x-2 text-xs">
                     <span className="text-green-400 bg-green-400/10 px-2 py-0.5 rounded">Active</span>
                     <span className="text-gray-500">28 days left</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                   <button className="bg-blue-600 p-2 rounded-md"><span className="text-white text-xs">Edit</span></button>
                   <button className="bg-red-600 p-2 rounded-md"><span className="text-white text-xs">Revoke</span></button>
                </div>
             </div>

             {/* Mocked Token Row 2 */}
             <div className="bg-black/40 border border-gray-800 rounded-lg p-3 flex justify-between items-center opacity-60">
                <div>
                  <div className="text-white font-mono text-sm mb-1">mdt_1fa92c...</div>
                  <div className="flex items-center space-x-2 text-xs">
                     <span className="text-red-400 bg-red-400/10 px-2 py-0.5 rounded">Expired</span>
                     <span className="text-gray-500">-2 days ago</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                   <button className="bg-blue-600 p-2 rounded-md"><span className="text-white text-xs">Renew</span></button>
                   <button className="bg-red-600 p-2 rounded-md"><span className="text-white text-xs">Del</span></button>
                </div>
             </div>
           </div>
        </section>
      </div>
    </main>
  );
}
