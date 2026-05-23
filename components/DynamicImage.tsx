'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function DynamicImage({ section, fallbackSrc, alt, fill, className }: { section: string, fallbackSrc: string, alt: string, fill?: boolean, className?: string }) {
  const [src, setSrc] = useState(fallbackSrc);

  useEffect(() => {
    let isMounted = true;
    const fetchImage = async () => {
      const { data } = await supabase.from('site_images').select('image_url').eq('section', section).single();
      if (data?.image_url && isMounted) {
        setSrc(data.image_url);
      }
    };
    fetchImage();
    return () => { isMounted = false; };
  }, [section]);

  if (fill) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`w-full h-full object-cover ${className || ''}`} referrerPolicy="no-referrer" />;
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img src={src} alt={alt} width={800} height={600} className={`max-w-full h-auto ${className || ''}`} referrerPolicy="no-referrer" />
  );
}
