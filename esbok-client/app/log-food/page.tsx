'use client'
import { useState } from 'react';
import { ArrowLeft, Camera, X } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { availablePantries, availableTags } from '@/lib/data';
import { useRouter } from 'next/navigation';

export default function LogFoodPage() {
  const router = useRouter();
  const [foodForm, setFoodForm] = useState({
    name: '',
    expiry: '',
    pantry: '',
    isShareable: false,
    description: '',
    tags: [] as string[],
    image: null as File | null,
  });

  const handleTagToggle = (tag: string) => {
    setFoodForm((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag) ? prev.tags.filter((t) => t !== tag) : [...prev.tags, tag],
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFoodForm((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', foodForm);
    router.push('/home');
  };

  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen flex flex-col">
      <div className="flex items-center justify-between p-5 border-b border-esbok-border">
        <Button variant='ghost' size='icon' onClick={() => router.back()} className="text-gray-600 hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-bold text-gray-800">Log Food</h1>
        <div className="w-10" />
      </div>
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        <div>
          <Label className="text-sm font-semibold text-gray-800 mb-3 block">Photo</Label>
          <div className="relative">
            <input type='file' accept='image/*' onChange={handleImageUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" id='image-upload' />
            <div className="w-full h-48 border-2 border-dashed border-esbok-border rounded-lg flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
              {foodForm.image ? (
                <div className="relative w-full h-full">
                  <img src={URL.createObjectURL(foodForm.image)} alt='Food preview' className="w-full h-full object-cover rounded-lg" />
                  <Button variant='ghost' size='icon' className="absolute top-2 right-2 bg-white/80 hover:bg-white" onClick={() => setFoodForm((p) => ({ ...p, image: null }))}>
                    <X className='w-4 h-4' />
                  </Button>
                </div>
              ) : (
                <>
                  <Camera className='w-8 h-8 text-gray-400 mb-2' />
                  <p className='text-sm text-gray-600'>Tap to add photo</p>
                  <p className='text-xs text-gray-400'>Optional</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div>
          <Label htmlFor='name' className='text-sm font-semibold text-gray-800 mb-2 block'>Name *</Label>
          <Input id='name' value={foodForm.name} onChange={(e) => setFoodForm((p) => ({ ...p, name: e.target.value }))} placeholder='Enter food name' className='border-esbok-border focus:border-esbok-primary' />
        </div>
        <div>
          <Label htmlFor='expiry' className='text-sm font-semibold text-gray-800 mb-2 block'>Expiry Date *</Label>
          <Input id='expiry' type='date' value={foodForm.expiry} onChange={(e) => setFoodForm((p) => ({ ...p, expiry: e.target.value }))} className='border-esbok-border focus:border-esbok-primary' />
        </div>
        <div>
          <Label htmlFor='pantry' className='text-sm font-semibold text-gray-800 mb-2 block'>Pantry *</Label>
          <select id='pantry' value={foodForm.pantry} onChange={(e) => setFoodForm((p) => ({ ...p, pantry: e.target.value }))} className='w-full px-3 py-2 border border-esbok-border rounded-md focus:outline-none focus:border-esbok-primary text-sm'>
            <option value=''>Select a pantry</option>
            {availablePantries.map((p) => (
              <option key={p.id} value={p.name}>{p.name}</option>
            ))}
          </select>
        </div>
        <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-esbok-border'>
          <div>
            <Label className='text-sm font-semibold text-gray-800'>Make Shareable</Label>
            <p className='text-xs text-gray-600 mt-1'>Allow others to see and take this item</p>
          </div>
          <Switch checked={foodForm.isShareable} onCheckedChange={(c) => setFoodForm((p) => ({ ...p, isShareable: c }))} className='data-[state=checked]:bg-esbok-primary' />
        </div>
        {foodForm.isShareable && (
          <div className='space-y-6 border-t border-esbok-border pt-6'>
            <div>
              <Label htmlFor='description' className='text-sm font-semibold text-gray-800 mb-2 block'>Description</Label>
              <Textarea id='description' value={foodForm.description} onChange={(e) => setFoodForm((p) => ({ ...p, description: e.target.value }))} placeholder='Add details about your food item...' className='border-esbok-border focus:border-esbok-primary min-h-[80px]' />
            </div>
            <div>
              <Label className='text-sm font-semibold text-gray-800 mb-3 block'>Food Tags</Label>
              <div className='flex flex-wrap gap-2'>
                {availableTags.map((tag) => (
                  <Button key={tag} variant={foodForm.tags.includes(tag) ? 'default' : 'outline'} size='sm' className={`rounded-full text-xs px-3 py-1 h-auto ${foodForm.tags.includes(tag) ? 'bg-esbok-primary text-gray-800 hover:bg-esbok-primary/90' : 'border-esbok-border text-gray-600 hover:bg-gray-50'}`} onClick={() => handleTagToggle(tag)}>
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='p-5 border-t border-esbok-border'>
        <Button onClick={handleSubmit} disabled={!foodForm.name || !foodForm.expiry || !foodForm.pantry} className='w-full bg-esbok-primary hover:bg-esbok-primary/90 text-gray-800 font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>
          Add Food Item
        </Button>
      </div>
    </div>
  );
}
