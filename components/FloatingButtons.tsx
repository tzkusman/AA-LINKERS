'use client';
import { Phone, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_NUMBER } from '@/lib/constants';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a 
        href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`} 
        className="bg-blue-700 text-white p-4 rounded-full shadow-[0_4px_14px_rgba(29,78,216,0.4)] hover:bg-blue-800 hover:scale-105 transition-all flex items-center justify-center group relative"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-semibold">
          Call Now
        </span>
      </a>
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-105 transition-all flex items-center justify-center group relative"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-semibold">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
