import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, requirements } = body;

    if (!name || !email || !phone || !requirements) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('quotes')
      .insert([{ name, company, phone, email, requirements }]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: 'Failed to submit quote' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Quote submitted successfully' });
  } catch (err) {
    console.error('API Route error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
