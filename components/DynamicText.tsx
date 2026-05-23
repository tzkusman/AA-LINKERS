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

  useEffect(() => {
    let isMounted = true;
    const fetchText = async () => {
      const { data } = await supabase.from('site_content').select('content').eq('section', section).single();
      if (data?.content && isMounted) {
        setText(data.content);
      }
    };
    fetchText();
    return () => { isMounted = false; };
  }, [section]);

  return <Component className={className}>{text}</Component>;
}
