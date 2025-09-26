
'use client';

import { useState, ChangeEvent } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { UploadCloud, Image as ImageIcon, X } from 'lucide-react';
import { Label } from '@/components/ui/label';

export default function UploadPage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setFileName('');
    // Also clear the input value if needed, requires a ref
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 animate-fade-in-up">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold font-headline">Image Uploader</CardTitle>
          <CardDescription>Select an image file from your device to preview it here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-2 border-dashed border-muted rounded-lg p-8 flex flex-col items-center justify-center text-center">
              {preview ? (
                <div className="relative w-full max-w-sm">
                  <Image
                    src={preview}
                    alt="Image preview"
                    width={400}
                    height={300}
                    className="rounded-md object-contain"
                  />
                   <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 rounded-full h-8 w-8"
                    onClick={handleRemoveImage}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove image</span>
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-full text-primary">
                    <UploadCloud className="w-12 h-12" />
                  </div>
                  <p className="text-muted-foreground">
                    Drag & drop your image here, or click to browse.
                  </p>
                </div>
              )}
            </div>
             <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
                <Label htmlFor="picture" className="sr-only">Picture</Label>
                <Input id="picture" type="file" accept="image/*" onChange={handleFileChange} className="file:text-primary file:font-semibold" />
                {fileName && !preview && <p className="text-sm text-muted-foreground mt-2">Selected: {fileName}</p>}
             </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end">
            <Button disabled={!preview}>
                <ImageIcon className="mr-2 h-4 w-4" />
                Upload Image
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
