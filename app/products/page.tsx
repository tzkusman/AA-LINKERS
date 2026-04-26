import Image from "next/image";
import { Settings } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export const metadata = {
  title: "Inventory & Products | A.A Linkers",
  description: "Browse our extensive inventory of new and used industrial valves.",
};

const INVENTORY = [
  { title: "Ball Valves", size: "40mm (DN40)", state: "NEW", img: "valve1", badgeColor: "bg-blue-100 text-blue-700", desc: "High-grade ball valves suitable for isolation in industrial pipelines." },
  { title: "Pneumatic Actuators", size: "Custom Actuator", state: "USED", img: "valve2", badgeColor: "bg-amber-100 text-amber-700", desc: "Inspected and tested pneumatic systems for automated control." },
  { title: "Control Valve", size: "2-inch ANSI", state: "NEW", img: "valve3", badgeColor: "bg-blue-100 text-blue-700", desc: "Precision control valves for managing flow rate and pressure." },
  { title: "Gate Valve", size: "80mm Class 150", state: "USED", img: "valve4", badgeColor: "bg-amber-100 text-amber-700", desc: "Heavy-duty gate valves salvaged and refurbished for bulk supply." },
  { title: "Globe Valve", size: "50mm Flanged", state: "NEW", img: "valve5", badgeColor: "bg-blue-100 text-blue-700", desc: "Excellent throttling capabilities for high-demand environments." },
  { title: "Check Valve", size: "100mm Swing Type", state: "USED", img: "valve6", badgeColor: "bg-amber-100 text-amber-700", desc: "Prevents backflow in large industrial pipeline setups." },
  { title: "Butterfly Valve", size: "DN150", state: "NEW", img: "valve7", badgeColor: "bg-blue-100 text-blue-700", desc: "Compact and reliable butterfly valves for quick shut-off." },
  { title: "Safety Relief Valve", size: "Various Sizes", state: "USED", img: "valve8", badgeColor: "bg-amber-100 text-amber-700", desc: "Crucial overpressure protection mechanisms." }
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16 bg-slate-50 w-full">
      <section className="industrial-gradient py-24 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tight mb-4">Our Inventory</h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto font-medium">A wide range of new and carefully inspected used valves.</p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 w-full">
        <div className="accent-border pl-6 mb-12">
          <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-2 flex items-center gap-2">
            <Settings className="w-4 h-4" /> Comprehensive Catalog
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
            Available In Stock
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INVENTORY.map((product, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-3 rounded-lg overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-48 bg-slate-200 rounded mb-3 overflow-hidden relative shrink-0">
                <Image 
                  src={`https://picsum.photos/seed/${product.img}/600/600`}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-sm text-slate-800 uppercase">{product.title}</h3>
                <span className={`text-[10px] px-1.5 rounded font-bold ${product.badgeColor}`}>
                  {product.state}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mb-2 font-medium">Size: {product.size}</p>
              <p className="text-xs text-slate-600 mb-6 flex-1">{product.desc}</p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded uppercase hover:bg-blue-50 hover:text-blue-700 transition-colors mt-auto"
              >
                Contact for Price
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
