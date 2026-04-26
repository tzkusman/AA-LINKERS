import { MapPin, Phone, MessageCircle, Mail, Send } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_NUMBER, PHONE_NUMBER, ADDRESS, EMAIL_ADDRESS, NTN_NUMBER } from "@/lib/constants";

export const metadata = {
  title: "Contact Us | A.A Linkers",
  description: "Get in touch for bulk orders and pricing inquiries.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16 bg-slate-50 w-full">
      <section className="industrial-gradient py-24 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tight mb-4">Contact Us</h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto font-medium">Reach out for inquiries, catalog details, or bulk pricing.</p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Company Info */}
          <div>
            <div className="accent-border pl-6 mb-12">
              <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Get In Touch
              </h2>
              <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
                Company Details
              </h3>
            </div>
            
            <div className="space-y-8 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1.5 uppercase text-sm tracking-wide">Address</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1.5 uppercase text-sm tracking-wide">Phone (Landline)</h4>
                  <a href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">{PHONE_NUMBER}</a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-green-50 p-3 rounded-full text-green-600 mt-1">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1.5 uppercase text-sm tracking-wide">Mobile / WhatsApp</h4>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-600 font-medium hover:text-green-600 transition-colors">{WHATSAPP_NUMBER}</a>
                </div>
              </div>

              <div className="flex gap-4 items-start border-b border-slate-100 pb-8">
                <div className="bg-slate-100 p-3 rounded-full text-slate-600 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1.5 uppercase text-sm tracking-wide">Email</h4>
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">{EMAIL_ADDRESS}</a>
                </div>
              </div>

              <div className="pt-2">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">Company Name</h4>
                    <p className="font-extrabold text-lg text-slate-900 uppercase">A.A Linkers</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">NTN Number</h4>
                    <p className="font-mono text-slate-600 border border-slate-200 bg-slate-50 px-3 py-1.5 rounded inline-block text-sm font-medium">{NTN_NUMBER}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Input Form Simulation */}
          <div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-xl shadow-blue-900/5 p-8 relative overflow-hidden h-full flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] pointer-events-none"></div>
              <h3 className="text-2xl font-extrabold uppercase text-slate-900 mb-4">Send an Inquiry</h3>
              <p className="text-sm text-slate-500 font-medium mb-8">Fill out the form below or use our direct contact buttons for quicker responses.</p>
              
              <form className="space-y-4 mb-8 flex-1">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Name</label>
                    <input type="text" className="w-full border border-slate-300 rounded px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm font-medium" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Company</label>
                    <input type="text" className="w-full border border-slate-300 rounded px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm font-medium" placeholder="ABC Industries" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email</label>
                  <input type="email" className="w-full border border-slate-300 rounded px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm font-medium" placeholder="john@example.com" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Requirements</label>
                  <textarea rows={4} className="w-full border border-slate-300 rounded px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none text-sm font-medium" placeholder="We need bulk ball valves..."></textarea>
                </div>
                <button type="button" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded font-bold uppercase tracking-widest flex justify-center items-center gap-2 transition-all shadow-md shadow-blue-200">
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
