export default function Logo() {
  return (
    <div className="flex justify-center -mt-8 mb-8 relative z-10 drop-shadow-2xl">
      <div className="rounded-full bg-[#181A1B] border-[6px] border-[#F1F1F1] w-36 h-36 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.8)]">
        {/* Chart icon mock */}
        <div className="flex items-end space-x-1 mb-1">
           <div className="w-1.5 h-4 bg-green-500 rounded-sm"></div>
           <div className="w-1.5 h-6 bg-green-500 rounded-sm"></div>
           <div className="w-1.5 h-3 bg-red-500 rounded-sm"></div>
           <div className="w-1.5 h-8 bg-green-500 rounded-sm relative">
             {/* Arrow pointer styling mock */}
             <div className="absolute -top-3 -right-2 text-green-500 text-lg leading-none transform rotate-45">↗</div>
           </div>
        </div>
        <div className="text-white font-black text-2xl tracking-tighter leading-none mt-1">MW</div>
        <div className="text-gray-300 font-bold text-xs tracking-widest mt-0.5">TRADER</div>
      </div>
    </div>
  );
}
