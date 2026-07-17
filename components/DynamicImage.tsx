'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

export default function DynamicImage({ section, fallbackSrc, alt, fill, className }: { section: string, fallbackSrc: string, alt: string, fill?: boolean, className?: string }) {
  const [src, setSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchImage = async () => {
      try {
        const { data } = await supabase.from('site_images').select('image_url').eq('section', section).order('id', { ascending: false }).limit(1);
        if (data && data.length > 0 && isMounted) {
          setSrc(data[0].image_url);
        }
      } catch (err) {
        // Ignore errors, it just means no custom image
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    fetchImage();
    return () => { isMounted = false; };
  }, [section]);

  if (isLoading) {
    return <div className={`animate-pulse bg-slate-200 ${className || ''}`} style={fill ? { width: '100%', height: '100%' } : { width: 800, height: 600, maxWidth: '100%' }} />;
  }

  const finalSrc = src || fallbackSrc;

  if (fill) {
    return <Image src={finalSrc} alt={alt} fill className={`object-contain md:object-cover ${className || ''}`} referrerPolicy="no-referrer" />;
  }

  return (
    <Image src={finalSrc} alt={alt} width={800} height={600} className={`max-w-full h-auto object-contain ${className || ''}`} referrerPolicy="no-referrer" />
  );
}
