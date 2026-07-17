'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { Factory, ImagePlus, CheckCircle, HelpCircle, ArrowRight, UploadCloud } from "lucide-react";
import Link from "next/link";
import DynamicImage from "@/components/DynamicImage";

export default function GalleryPage() {
  const [uploadedSections, setUploadedSections] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = "Visual Gallery | A.A Linkers";
    }

    const fetchUploaded = async () => {
      try {
        const { data, error } = await supabase
          .from('site_images')
          .select('section')
          .like('section', 'gallery_image_%');
        
        if (data && !error) {
          setUploadedSections(data.map(item => item.section));
        }
      } catch (err) {
        console.error("Error fetching uploaded gallery images:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUploaded();
  }, []);

  const totalSlots = Array.from({ length: 12 }, (_, i) => i + 1);
  const uploadedSlots = totalSlots.filter(i => uploadedSections.includes(`gallery_image_${i}`));
  const pendingSlots = totalSlots.filter(i => !uploadedSections.includes(`gallery_image_${i}`));

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

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4" />
            <p className="text-slate-500 font-medium text-sm">Loading visual gallery configuration...</p>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Section 1: Active Product Images */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Corporate Stock Portfolio</h3>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full ml-2">
                  {uploadedSlots.length} Active Photos
                </span>
              </div>

              {uploadedSlots.length === 0 ? (
                <div className="p-12 text-center bg-slate-50 border border-slate-200 rounded-xl max-w-2xl">
                  <UploadCloud className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <h4 className="text-slate-800 font-bold mb-1">No custom images uploaded yet</h4>
                  <p className="text-slate-500 text-sm mb-4">Upload actual high-quality product images from the administrator dashboard to showcase them in the live portfolio.</p>
                  <Link href="/admin?tab=images" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-sm">
                    Go to Admin Dashboard <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {uploadedSlots.map((i) => (
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
                        <span className="text-white font-bold text-sm flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-emerald-400" /> Gallery Spot {i}
                        </span>
                        <span className="text-blue-300 text-xs font-semibold">Verified Product Shot</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Section 2: Empty Slots / Pending Uploads */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Available Gallery Upload Slots</h3>
                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full ml-2">
                  {pendingSlots.length} Slots Available
                </span>
              </div>

              {pendingSlots.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-xl">
                  <p className="text-slate-500 text-sm">All gallery spots have been successfully configured with corporate photos!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {pendingSlots.map((i) => (
                    <Link
                      href={`/admin?tab=images&section=gallery_image_${i}`}
                      key={i}
                      className="group flex flex-col items-center justify-center p-8 bg-slate-50 border-2 border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50/50 rounded-xl transition-all duration-300 text-center aspect-square relative cursor-pointer"
                    >
                      <div className="p-4 bg-white rounded-full border border-slate-200 shadow-sm text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200 group-hover:scale-110 transition-all duration-300 mb-4">
                        <ImagePlus className="w-8 h-8" />
                      </div>
                      <span className="text-slate-800 font-bold text-sm mb-1 group-hover:text-blue-700">Gallery Slot {i}</span>
                      <span className="text-slate-400 text-xs font-medium px-2.5 py-1 bg-slate-200/50 group-hover:bg-blue-100 group-hover:text-blue-700 rounded-full transition-colors mb-4">
                        Empty Placeholder
                      </span>
                      <span className="text-blue-600 text-xs font-bold flex items-center gap-1 group-hover:underline">
                        Upload Image <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
