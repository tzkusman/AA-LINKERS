import { NTN_NUMBER, PHONE_NUMBER, WHATSAPP_NUMBER } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="h-16 bg-slate-100 border-t border-slate-200 px-6 md:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-widest gap-2 z-10 shrink-0">
      <div>&copy; {new Date().getFullYear()} A.A Linkers &bull; Industrial Trading Experts</div>
      <div className="flex space-x-4 md:space-x-6 flex-wrap justify-center">
        <span>NTN: {NTN_NUMBER}</span>
        <span className="hidden sm:inline">Tel: {PHONE_NUMBER}</span>
        <span className="hidden sm:inline">Mob: {WHATSAPP_NUMBER}</span>
      </div>
    </footer>
  );
}
