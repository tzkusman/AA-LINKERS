'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { WHATSAPP_LINK } from '@/lib/constants';
import { MessageCircle, ArrowRight, Wrench, Settings } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen pt-16 w-full">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden industrial-gradient flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-5 rounded-full -mr-32 -mt-32 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded mb-4 uppercase tracking-widest border border-blue-500/10">
              Industrial Valve Supplier
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Reliable Bulk Supply <br />
              <span className="text-blue-400">For Global Industries.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl font-normal leading-relaxed">
              Direct traders and suppliers of premium new and used industrial valves. Sourcing directly from bulk container shipments to provide cost-effective engineering solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded font-bold flex items-center gap-2 hover:bg-green-700 transition-all shadow-xl shadow-green-900/20 uppercase tracking-wide text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                Contact on WhatsApp
              </a>
              <Link 
                href="/products"
                className="border border-slate-600 text-white px-6 py-3 rounded font-bold hover:bg-white/10 transition-all uppercase tracking-wide text-sm flex items-center gap-2"
              >
                View Stock
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT US SUMMARY */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-lg bg-slate-100 overflow-hidden"
            >
              <Image 
                src="https://picsum.photos/seed/valvesetup/800/600" 
                alt="Industrial Setup" 
                fill 
                className="object-cover hover:scale-105 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="accent-border pl-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-2 uppercase tracking-tight flex items-center gap-2">
                <Wrench className="w-5 h-5 text-blue-500" /> Business Model
              </h2>
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                Cost-Effective Bulk Procurement
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                Unlike standard importers, we specialize in <strong className="text-slate-900">bulk purchasing</strong> from already shipped containers, allowing us to offer aggressive pricing to factories and contractors. We bridge the gap between heavy imports and industrial end-users.
              </p>
              
              <Link href="/about" className="inline-flex items-center gap-2 text-blue-700 font-bold uppercase tracking-wider text-sm hover:text-blue-800 group mt-4">
                Read Our Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS PREVIEW */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
              <Settings className="w-4 h-4" /> Our Inventory
            </h2>
            <h3 className="text-4xl font-extrabold text-slate-900 leading-tight">
              Featured Valve Categories
            </h3>
            <p className="mt-4 text-slate-600 text-sm">
              We stock a wide range of new and carefully inspected used valves, ready for bulk dispatch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Ball Valves", size: "40mm (DN40)", state: "NEW", img: "valve1", badgeColor: "bg-blue-100 text-blue-700" },
              { title: "Pneumatic", size: "Custom Actuator", state: "USED", img: "valve2", badgeColor: "bg-amber-100 text-amber-700" },
              { title: "Control Valve", size: "2-inch ANSI", state: "NEW", img: "valve3", badgeColor: "bg-blue-100 text-blue-700" },
              { title: "Gate Valve", size: "80mm Class 150", state: "USED", img: "valve4", badgeColor: "bg-amber-100 text-amber-700" }
            ].map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-200 p-3 rounded-lg overflow-hidden group shadow-sm flex flex-col"
              >
                <div className="h-48 bg-slate-200 rounded mb-3 overflow-hidden relative shrink-0">
                  <Image 
                    src={`https://picsum.photos/seed/${product.img}/600/600`}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-sm text-slate-800 uppercase">{product.title}</h3>
                  <span className={`text-[10px] px-1.5 rounded font-bold ${product.badgeColor}`}>
                    {product.state}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mb-4 font-medium">Size: {product.size}</p>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-auto w-full text-center py-2.5 bg-slate-50 border border-slate-300 text-slate-700 text-[10px] font-bold rounded uppercase hover:bg-white transition-colors"
                >
                  Contact for Price
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/products" className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-800 transition-all uppercase tracking-wider text-sm">
              View Full Inventory <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-24 bg-white relative text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">Need A Custom Quote?</h2>
          <p className="text-slate-600 mb-8 font-medium">Get in touch directly to discuss your specific factory requirements or request pricing on bulk containers.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-slate-900 text-white px-8 py-3 rounded font-bold shadow-lg hover:bg-slate-800 transition-all uppercase tracking-wider text-sm">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
