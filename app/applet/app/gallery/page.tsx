'use client';
import { useEffect } from "react";
import { Factory } from "lucide-react";
import DynamicImage from "@/components/DynamicImage";

export default function GalleryPage() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = "Visual Gallery | A.A Linkers";
    }
  }, []);

  const totalSlots = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col min-h-screen pt-16 bg-white w-full">
      {/* Hero Section */}
      <section className="industrial-gradient py-24 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tight mb-4">Product Gallery</h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto font-medium">A visual overview of our industrial supplies and setups.</p>
      </section>

      {/* Main Content Area */}
      <section className="py-20 max-w-7xl mx-auto px-6 w-full flex-grow">
        <div className="accent-border pl-6 mb-12">
          <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-2 flex items-center gap-2">
            <Factory className="w-4 h-4" /> Visual Tour
          </h2>
          <p className="text-slate-500 max-w-xl text-sm leading-relaxed">
            Take a closer look at our vast inventory of silver valves, painted actuators, and various bulk deliveries sourced from major container shipments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {totalSlots.map((i) => (
            <div 
              key={i}
              className="group relative overflow-hidden bg-slate-100 rounded-xl border border-slate-200 shadow-sm aspect-square"
            >
              <DynamicImage 
                section={`gallery_image_${i}`}
                fallbackSrc={`https://picsum.photos/seed/gallery${i}/800/800`}
                alt={`Gallery Image ${i}`}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 opacity-95 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-white font-bold text-sm">
                  Gallery Spot {i}
                </span>
                <span className="text-blue-300 text-xs font-semibold">Verified Product Shot</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
