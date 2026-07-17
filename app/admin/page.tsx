'use client';
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { Settings, Image as ImageIcon, MessageSquare, Trash2, Type } from 'lucide-react';

const AVAILABLE_SECTIONS = [
  { value: 'home_about_image', label: 'Home Page - About Section Image' },
  { value: 'home_product_valve1', label: 'Home Page - Featured Product 1 (valve1)' },
  { value: 'home_product_valve2', label: 'Home Page - Featured Product 2 (valve2)' },
  { value: 'home_product_valve3', label: 'Home Page - Featured Product 3 (valve3)' },
  { value: 'home_product_valve4', label: 'Home Page - Featured Product 4 (valve4)' },
  { value: 'inventory_product_valve1', label: 'Products Page - Inventory 1 (valve1)' },
  { value: 'inventory_product_valve2', label: 'Products Page - Inventory 2 (valve2)' },
  { value: 'inventory_product_valve3', label: 'Products Page - Inventory 3 (valve3)' },
  { value: 'inventory_product_valve4', label: 'Products Page - Inventory 4 (valve4)' },
  { value: 'inventory_product_valve5', label: 'Products Page - Inventory 5 (valve5)' },
  { value: 'inventory_product_valve6', label: 'Products Page - Inventory 6 (valve6)' },
  { value: 'inventory_product_valve7', label: 'Products Page - Inventory 7 (valve7)' },
  { value: 'inventory_product_valve8', label: 'Products Page - Inventory 8 (valve8)' },
  { value: 'about_page_image', label: 'About Page - Main Image' },
  { value: 'gallery_image_1', label: 'Gallery - Image 1' },
  { value: 'gallery_image_2', label: 'Gallery - Image 2' },
  { value: 'gallery_image_3', label: 'Gallery - Image 3' },
  { value: 'gallery_image_4', label: 'Gallery - Image 4' },
  { value: 'gallery_image_5', label: 'Gallery - Image 5' },
  { value: 'gallery_image_6', label: 'Gallery - Image 6' },
  { value: 'gallery_image_7', label: 'Gallery - Image 7' },
  { value: 'gallery_image_8', label: 'Gallery - Image 8' },
  { value: 'gallery_image_9', label: 'Gallery - Image 9' },
  { value: 'gallery_image_10', label: 'Gallery - Image 10' },
  { value: 'gallery_image_11', label: 'Gallery - Image 11' },
  { value: 'gallery_image_12', label: 'Gallery - Image 12' },
];

const AVAILABLE_TEXT_SECTIONS = [
  { value: 'home_hero_title', label: 'Home Page - Hero Title' },
  { value: 'home_hero_subtitle', label: 'Home Page - Hero Subtitle' },
  { value: 'home_about_title', label: 'Home Page - About Title' },
  { value: 'home_about_desc', label: 'Home Page - About Description' },
  { value: 'home_featured_title', label: 'Home Page - Featured Title' },
  { value: 'home_featured_desc', label: 'Home Page - Featured Description' },
  { value: 'home_cta_title', label: 'Home Page - CTA Title' },
  { value: 'home_cta_desc', label: 'Home Page - CTA Description' },
  { value: 'home_product_valve1_title', label: 'Home Page - Product 1 Title' },
  { value: 'home_product_valve1_size', label: 'Home Page - Product 1 Size' },
  { value: 'home_product_valve2_title', label: 'Home Page - Product 2 Title' },
  { value: 'home_product_valve2_size', label: 'Home Page - Product 2 Size' },
  { value: 'home_product_valve3_title', label: 'Home Page - Product 3 Title' },
  { value: 'home_product_valve3_size', label: 'Home Page - Product 3 Size' },
  { value: 'home_product_valve4_title', label: 'Home Page - Product 4 Title' },
  { value: 'home_product_valve4_size', label: 'Home Page - Product 4 Size' },
  { value: 'inventory_product_valve1_title', label: 'Inventory - Product 1 Title (Check Valve)' },
  { value: 'inventory_product_valve1_size', label: 'Inventory - Product 1 Size (Check Valve)' },
  { value: 'inventory_product_valve1_desc', label: 'Inventory - Product 1 Desc (Check Valve)' },
  { value: 'inventory_product_valve2_title', label: 'Inventory - Product 2 Title (Safety Valve)' },
  { value: 'inventory_product_valve2_size', label: 'Inventory - Product 2 Size (Safety Valve)' },
  { value: 'inventory_product_valve2_desc', label: 'Inventory - Product 2 Desc (Safety Valve)' },
  { value: 'inventory_product_valve3_title', label: 'Inventory - Product 3 Title (Control Valve)' },
  { value: 'inventory_product_valve3_size', label: 'Inventory - Product 3 Size (Control Valve)' },
  { value: 'inventory_product_valve3_desc', label: 'Inventory - Product 3 Desc (Control Valve)' },
  { value: 'inventory_product_valve4_title', label: 'Inventory - Product 4 Title (Gate Valve)' },
  { value: 'inventory_product_valve4_size', label: 'Inventory - Product 4 Size (Gate Valve)' },
  { value: 'inventory_product_valve4_desc', label: 'Inventory - Product 4 Desc (Gate Valve)' },
  { value: 'inventory_product_valve5_title', label: 'Inventory - Product 5 Title (Globe Valve)' },
  { value: 'inventory_product_valve5_size', label: 'Inventory - Product 5 Size (Globe Valve)' },
  { value: 'inventory_product_valve5_desc', label: 'Inventory - Product 5 Desc (Globe Valve)' },
  { value: 'inventory_product_valve6_title', label: 'Inventory - Product 6 Title (Check Valve)' },
  { value: 'inventory_product_valve6_size', label: 'Inventory - Product 6 Size (Check Valve)' },
  { value: 'inventory_product_valve6_desc', label: 'Inventory - Product 6 Desc (Check Valve)' },
  { value: 'inventory_product_valve7_title', label: 'Inventory - Product 7 Title (Butterfly Valve)' },
  { value: 'inventory_product_valve7_size', label: 'Inventory - Product 7 Size (Butterfly Valve)' },
  { value: 'inventory_product_valve7_desc', label: 'Inventory - Product 7 Desc (Butterfly Valve)' },
  { value: 'inventory_product_valve8_title', label: 'Inventory - Product 8 Title (Safety Relief Valve)' },
  { value: 'inventory_product_valve8_size', label: 'Inventory - Product 8 Size (Safety Relief Valve)' },
  { value: 'inventory_product_valve8_desc', label: 'Inventory - Product 8 Desc (Safety Relief Valve)' },
  { value: 'nav_link_home', label: 'Navigation - Home' },
  { value: 'nav_link_products', label: 'Navigation - Products' },
  { value: 'nav_link_about', label: 'Navigation - About' },
  { value: 'nav_link_gallery', label: 'Navigation - Gallery' },
  { value: 'nav_link_contact', label: 'Navigation - Contact' },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('tab') || 'quotes';
    }
    return 'quotes';
  });
  const [quotes, setQuotes] = useState<any[]>([]);
  const [images, setImages] = useState<any[]>([]);
  const [texts, setTexts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editImage, setEditImage] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      const sectionParam = params.get('section');
      if (sectionParam && tabParam === 'images') {
        const slotNum = sectionParam.split('_').pop();
        return {
          id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2),
          section: sectionParam,
          title: `Gallery - Image ${slotNum}`,
          image_url: ''
        };
      }
    }
    return null;
  });
  const [uploading, setUploading] = useState(false);
  const [editText, setEditText] = useState<any>(null);

  const fetchData = async () => {
    setLoading(true);
    if (activeTab === 'quotes') {
      const { data } = await supabase.from('quotes').select('*').order('created_at', { ascending: false });
      setQuotes(data || []);
    } else if (activeTab === 'images') {
      const { data } = await supabase.from('site_images').select('*').order('section', { ascending: true });
      setImages(data || []);
    } else if (activeTab === 'content') {
      const { data } = await supabase.from('site_content').select('*').order('section', { ascending: true });
      setTexts(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    let isMounted = true;
    const initialFetch = async () => {
      setLoading(true);
      if (activeTab === 'quotes') {
        const { data } = await supabase.from('quotes').select('*').order('created_at', { ascending: false });
        if (isMounted) setQuotes(data || []);
      } else if (activeTab === 'images') {
        const { data } = await supabase.from('site_images').select('*').order('section', { ascending: true });
        if (isMounted) setImages(data || []);
      } else if (activeTab === 'content') {
        const { data } = await supabase.from('site_content').select('*').order('section', { ascending: true });
        if (isMounted) setTexts(data || []);
      }
      if (isMounted) setLoading(false);
    };
    initialFetch();
    return () => { isMounted = false; };
  }, [activeTab]);

  const deleteQuote = async (id: string) => {
    if (!confirm('Delete this quote?')) return;
    await supabase.from('quotes').delete().eq('id', id);
    fetchData();
  };

  const deleteImage = async (id: string) => {
    if (!confirm('Delete this image configuration?')) return;
    await supabase.from('site_images').delete().eq('id', id);
    fetchData();
  };

  const deleteText = async (id: string) => {
    if (!confirm('Delete this text configuration?')) return;
    await supabase.from('site_content').delete().eq('id', id);
    fetchData();
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `images/${fileName}`;

      const { error: uploadError } = await supabase.storage.from('public').upload(filePath, file);
      
      if (uploadError) {
        alert('Upload Error: ' + uploadError.message + '\nNote: Ensure you have created a storage bucket named "public" in Supabase with public access.');
      } else {
        const { data } = supabase.storage.from('public').getPublicUrl(filePath);
        if (data?.publicUrl) {
          setEditImage((prev: any) => ({...prev, image_url: data.publicUrl}));
        }
      }
    } catch (err: any) {
      alert('Error uploading file: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleImageUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editImage) return;
    
    // Auto-resolve ID to existing row ID if we already have this section configured
    const existingImage = images.find(i => i.section === editImage.section);
    const targetId = existingImage ? existingImage.id : editImage.id;

    const { error } = await supabase.from('site_images').upsert({
      id: targetId,
      section: editImage.section,
      title: editImage.title,
      image_url: editImage.image_url
    });
    if (!error) {
      setEditImage(null);
      fetchData();
    } else {
      alert('Error saving image: ' + error.message);
    }
  };

  const handleTextUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editText) return;

    // Auto-resolve ID to existing row ID if we already have this section configured
    const existingText = texts.find(t => t.section === editText.section);
    const targetId = existingText ? existingText.id : editText.id;

    const { error } = await supabase.from('site_content').upsert({
      id: targetId,
      section: editText.section,
      title: editText.title,
      content: editText.content
    });
    if (!error) {
      setEditText(null);
      fetchData();
    } else {
      alert('Error saving text: ' + error.message);
    }
  };



  return (
    <div className="min-h-screen pt-20 bg-slate-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col h-[calc(100vh-5rem)] sticky top-20">
        <h2 className="text-sm font-extrabold text-blue-700 uppercase tracking-widest mb-8">Admin Dashboard</h2>
        <nav className="space-y-2 flex-1">
          <button 
            onClick={() => setActiveTab('quotes')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-bold transition-all ${activeTab === 'quotes' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <MessageSquare className="w-4 h-4" /> User Quotes
          </button>
          <button 
            onClick={() => setActiveTab('images')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-bold transition-all ${activeTab === 'images' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <ImageIcon className="w-4 h-4" /> Manage Images
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-bold transition-all ${activeTab === 'content' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <Type className="w-4 h-4" /> Manage Text Content
          </button>
        </nav>


      </div>

      {/* Content */}
      <div className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-8 uppercase tracking-tight">
            {activeTab === 'quotes' ? 'Inquiries & Quotes' : activeTab === 'images' ? 'Site Imagery' : 'Site Text Content'}
          </h1>
          
          {loading ? (
            <div className="text-slate-500 font-medium">Loading data from Supabase...</div>
          ) : activeTab === 'quotes' ? (
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-xs">
                  <tr>
                    <th className="p-4">Date</th>
                    <th className="p-4">Name / Company</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Requirements</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {quotes.length === 0 ? (
                    <tr><td colSpan={5} className="p-8 text-center text-slate-500">No quotes received yet.</td></tr>
                  ) : (
                    quotes.map(q => (
                      <tr key={q.id} className="hover:bg-slate-50">
                        <td className="p-4 text-slate-500">{new Date(q.created_at).toLocaleDateString()}</td>
                        <td className="p-4 font-medium text-slate-900">{q.name} <br/><span className="text-xs text-slate-500 font-normal">{q.company}</span></td>
                        <td className="p-4 text-slate-600">{q.email}<br/><span className="text-xs text-blue-600 font-medium">{q.phone}</span></td>
                        <td className="p-4 text-slate-600 max-w-sm"><p className="line-clamp-2">{q.requirements}</p></td>
                        <td className="p-4 text-right">
                          <button onClick={() => deleteQuote(q.id)} className="p-2 text-red-500 hover:bg-red-50 rounded">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          ) : activeTab === 'images' ? (
            <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <p className="text-slate-600 font-medium text-sm">
                  Manage dynamically loaded images across the website.
                </p>
                <button onClick={() => setEditImage({ id: crypto.randomUUID(), section: '', title: '', image_url: '' })} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-bold shadow-sm">
                  + Add Image
                </button>
              </div>

              {editImage && (
                <form onSubmit={handleImageUpdate} className="bg-slate-50 p-6 rounded border border-blue-200 mb-8">
                  <h3 className="font-bold text-slate-800 mb-4">{editImage.id && images.find(i => i.id === editImage.id) ? 'Edit Image' : 'New Image'}</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Section Key *</label>
                      <select 
                        required 
                        value={editImage.section} 
                        onChange={e => setEditImage({...editImage, section: e.target.value})} 
                        className="w-full border border-slate-300 rounded px-3 py-2 text-sm bg-white"
                      >
                        <option value="" disabled>Select a section to replace</option>
                        {AVAILABLE_SECTIONS.map(sec => (
                          <option key={sec.value} value={sec.value}>{sec.label} ({sec.value})</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Title / Description</label>
                      <input type="text" value={editImage.title} onChange={e => setEditImage({...editImage, title: e.target.value})} className="w-full border border-slate-300 rounded px-3 py-2 text-sm" placeholder="Hero Background" />
                    </div>
                    
                    <div className="md:col-span-2 bg-white border border-slate-200 p-4 rounded-lg flex flex-col md:flex-row gap-4 items-center">
                      <div className="flex-1 w-full">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Image URL</label>
                        <input type="url" required value={editImage.image_url} onChange={e => setEditImage({...editImage, image_url: e.target.value})} className="w-full border border-slate-300 rounded px-3 py-2 text-sm" placeholder="https://..." />
                      </div>
                      <div className="text-slate-400 font-bold uppercase text-xs pt-4">OR</div>
                      <div className="w-full md:w-64 pt-4">
                        <label className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded text-sm font-bold cursor-pointer border border-slate-300 transition-colors">
                          {uploading ? 'Uploading...' : 'Upload Image'}
                          <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} disabled={uploading} />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button type="submit" disabled={uploading} className="bg-blue-600 disabled:opacity-50 text-white px-4 py-2 rounded text-sm font-bold">Save Configuration</button>
                    <button type="button" onClick={() => setEditImage(null)} className="bg-slate-200 text-slate-700 px-4 py-2 rounded text-sm font-bold">Cancel</button>
                  </div>
                </form>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {images.length === 0 ? (
                  <div className="col-span-2 text-center py-12 text-slate-500 bg-slate-50 rounded border border-dashed border-slate-300">
                    No dynamic images configured in Supabase.
                  </div>
                ) : (
                  images.map(img => (
                    <div key={img.id} className="border border-slate-200 rounded p-4 flex gap-4 items-start group relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.image_url} alt={img.title} className="w-24 h-24 object-cover rounded bg-slate-100" />
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 text-sm uppercase">{img.section}</h4>
                        <p className="text-xs text-slate-500 mb-2">{img.title}</p>
                        <a href={img.image_url} target="_blank" className="text-xs text-blue-600 hover:underline break-all block mb-3 line-clamp-1">{img.image_url}</a>
                        <div className="flex gap-2">
                          <button onClick={() => setEditImage(img)} className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1.5 rounded hover:bg-slate-200 uppercase tracking-wider">Edit</button>
                          <button onClick={() => deleteImage(img.id)} className="text-xs font-bold bg-red-50 text-red-600 px-3 py-1.5 rounded hover:bg-red-100 uppercase tracking-wider">Delete</button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <p className="text-slate-600 font-medium text-sm">
                  Manage dynamically loaded text (headings, paragraphs) across the website.
                </p>
                <button onClick={() => setEditText({ id: crypto.randomUUID(), section: '', title: '', content: '' })} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-bold shadow-sm">
                  + Add Text
                </button>
              </div>

              {editText && (
                <form onSubmit={handleTextUpdate} className="bg-slate-50 p-6 rounded border border-blue-200 mb-8">
                  <h3 className="font-bold text-slate-800 mb-4">{editText.id && texts.find(t => t.id === editText.id) ? 'Edit Text' : 'New Text'}</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Section Key *</label>
                      <select 
                        required 
                        value={editText.section} 
                        onChange={e => setEditText({...editText, section: e.target.value})} 
                        className="w-full border border-slate-300 rounded px-3 py-2 text-sm bg-white"
                      >
                        <option value="" disabled>Select a section to edit text</option>
                        {AVAILABLE_TEXT_SECTIONS.map(sec => (
                          <option key={sec.value} value={sec.value}>{sec.label} ({sec.value})</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Title / Description</label>
                      <input type="text" value={editText.title} onChange={e => setEditText({...editText, title: e.target.value})} className="w-full border border-slate-300 rounded px-3 py-2 text-sm" placeholder="Hero Section Title" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Text Content *</label>
                      <textarea required rows={4} value={editText.content} onChange={e => setEditText({...editText, content: e.target.value})} className="w-full border border-slate-300 rounded px-3 py-2 text-sm resize-y" placeholder="The actual text content to display..." />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-bold">Save Configuration</button>
                    <button type="button" onClick={() => setEditText(null)} className="bg-slate-200 text-slate-700 px-4 py-2 rounded text-sm font-bold">Cancel</button>
                  </div>
                </form>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {texts.length === 0 ? (
                  <div className="col-span-2 text-center py-12 text-slate-500 bg-slate-50 rounded border border-dashed border-slate-300">
                    No dynamic text configured in Supabase.
                  </div>
                ) : (
                  texts.map(txt => (
                    <div key={txt.id} className="border border-slate-200 rounded p-4 flex flex-col group relative bg-white">
                      <div className="flex-1 mb-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-slate-900 text-sm uppercase">{txt.section}</h4>
                        </div>
                        <p className="text-xs text-slate-500 mb-2 font-medium bg-slate-50 p-1.5 rounded inline-block">{txt.title || 'No Title'}</p>
                        <div className="text-sm text-slate-700 bg-slate-50 border border-slate-100 p-3 rounded h-24 overflow-y-auto mt-2 whitespace-pre-wrap">{txt.content}</div>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => setEditText(txt)} className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1.5 rounded hover:bg-slate-200 uppercase tracking-wider">Edit</button>
                        <button onClick={() => deleteText(txt.id)} className="text-xs font-bold bg-red-50 text-red-600 px-3 py-1.5 rounded hover:bg-red-100 uppercase tracking-wider">Delete</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
