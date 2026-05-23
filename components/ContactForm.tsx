'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', requirements: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to submit quote');
      
      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', company: '', email: '', requirements: '' });
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again or use WhatsApp.' });
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-xl shadow-blue-900/5 p-8 relative overflow-hidden h-full flex flex-col">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] pointer-events-none"></div>
      <h3 className="text-2xl font-extrabold uppercase text-slate-900 mb-4">Send an Inquiry</h3>
      <p className="text-sm text-slate-500 font-medium mb-8">Fill out the form below or use our direct contact buttons for quicker responses.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4 mb-8 flex-1">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Name *</label>
            <input 
              required
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full border border-slate-300 rounded px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm font-medium" 
              placeholder="John Doe" 
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Company</label>
            <input 
              type="text" 
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full border border-slate-300 rounded px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm font-medium" 
              placeholder="ABC Industries" 
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email *</label>
          <input 
            required
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full border border-slate-300 rounded px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm font-medium" 
            placeholder="john@example.com" 
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Requirements *</label>
          <textarea 
            required
            rows={4} 
            value={formData.requirements}
            onChange={(e) => setFormData({...formData, requirements: e.target.value})}
            className="w-full border border-slate-300 rounded px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none text-sm font-medium" 
            placeholder="We need bulk ball valves..."
          ></textarea>
        </div>
        
        {status.success && <div className="p-3 bg-green-50 text-green-700 rounded text-sm font-bold border border-green-200">Quote request sent successfully!</div>}
        {status.error && <div className="p-3 bg-red-50 text-red-700 rounded text-sm font-bold border border-red-200">{status.error}</div>}

        <button 
          type="submit" 
          disabled={status.loading}
          className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-50 text-white py-4 rounded font-bold uppercase tracking-widest flex justify-center items-center gap-2 transition-all shadow-md shadow-blue-200"
        >
          <Send className="w-5 h-5" /> {status.loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
