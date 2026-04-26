import Image from "next/image";
import { Factory } from "lucide-react";

export const metadata = {
  title: "Visual Gallery | A.A Linkers",
  description: "Visual tour of our product inventory and industrial setups.",
};

export default function GalleryPage() {
  const items = Array.from({length: 12}, (_, i) => i + 1);

  return (
    <div className="flex flex-col min-h-screen pt-16 bg-white w-full">
      <section className="industrial-gradient py-24 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tight mb-4">Product Gallery</h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto font-medium">A visual overview of our industrial supplies.</p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 w-full">
        <div className="accent-border pl-6 mb-12">
          <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-2 flex items-center gap-2">
            <Factory className="w-4 h-4" /> Visual Tour
          </h2>
          <p className="text-slate-500 max-w-xl text-sm leading-relaxed">
            Take a closer look at our vast inventory of silver valves, painted actuators, and various bulk deliveries sourced from major container shipments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((i) => (
            <div 
              key={i}
              className={`group relative overflow-hidden bg-slate-100 rounded-lg ${i === 1 || i === 8 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-square'}`}
            >
              <Image 
                src={`https://picsum.photos/seed/gallery${i}/800/800`}
                alt={`Gallery Image ${i}`}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
