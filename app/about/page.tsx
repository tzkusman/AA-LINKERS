import Image from "next/image";
import Link from "next/link";
import { Wrench, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | A.A Linkers",
  description: "Learn about A.A Linkers, our business model, and how we supply industrial valves.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16 bg-slate-50 w-full">
      <section className="industrial-gradient py-24 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tight mb-4">About A.A Linkers</h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto font-medium">Delivering reliability through specialized industrial trading.</p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-square md:aspect-[4/3] rounded-lg bg-slate-100 overflow-hidden shadow-xl">
          <Image 
            src="https://picsum.photos/seed/valvesetup/800/600" 
            alt="Industrial Setup" 
            fill 
            className="object-cover hover:scale-105 transition-all duration-300"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="accent-border pl-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 uppercase tracking-tight flex items-center gap-2">
            <Wrench className="w-5 h-5 text-blue-500" /> Our Story
          </h2>
          <h3 className="text-xl font-bold text-slate-800 mb-6">
            Your Trustworthy Partner In Industrial Supply
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
            Established with the goal of bridging the gap between heavy imports and industrial end-users, <strong className="text-slate-900">A.A Linkers</strong> operates on a highly efficient business model. We are a specialized trading entity—not direct importers—which allows us to source the best materials available domestically from arriving container shipments.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
            By purchasing in bulk from these shipments, we secure aggressive pricing and pass those savings directly down to factories, industrial plants, and contractors for their pipeline and infrastructural needs.
          </p>
          
          <ul className="space-y-4 mb-8">
            {[
              "We purchase valves in bulk from shipped containers.",
              "We are a dedicated local trading supplier (Not Importers).",
              "We supply directly to factories, industries, and contractors.",
              "We prioritize maintaining a large and diverse inventory.",
              "Emphasis on highly cost-effective solutions for your pipeline needs."
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 text-slate-600 text-sm items-start font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5 shadow-[0_0_8px_#3B82F6]"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link href="/products" className="inline-flex items-center gap-2 text-blue-700 font-bold uppercase tracking-wider text-sm hover:text-blue-800 group border border-slate-200 px-6 py-3 rounded hover:bg-slate-100 transition-colors">
            Explore Our Inventory <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
