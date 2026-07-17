'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function DynamicText({ 
  section, 
  fallback, 
  className, 
  as: Component = 'span' 
}: { 
  section: string, 
  fallback: string | React.ReactNode, 
  className?: string, 
  as?: any 
}) {
  const [text, setText] = useState<string | React.ReactNode>(fallback);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchText = async () => {
      try {
        const { data } = await supabase.from('site_content').select('content').eq('section', section).order('id', { ascending: false }).limit(1);
        if (data && data.length > 0 && isMounted) {
          setText(data[0].content);
        }
      } catch (err) {
        // Ignore error
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    fetchText();
    return () => { isMounted = false; };
  }, [section]);

  return <Component className={`${className || ''} transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>{text}</Component>;
}
