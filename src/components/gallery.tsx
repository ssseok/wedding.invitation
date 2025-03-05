import { useState } from 'react';
import { Dialog, DialogContent } from '@/common/components/ui/dialog';
import { Button } from '@/common/components/ui/button';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import Intersect from '@/common/components/intersect';

const SLICE_SIZE = 9;

export default function Gallery({ images }: { images: string[] }) {
  const [displayCount, setDisplayCount] = useState<number>(SLICE_SIZE);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div>
      <h2 className='text-center text-xl font-en'>gallery</h2>
      <div className='flex justify-center my-4'>
        <img
          src='/src/assets/wedding-3.png'
          alt='반지'
          className='w-6 h-6 aspect-square'
        />
      </div>

      {/* 이미지 그리드 */}
      <div className='grid grid-cols-3 gap-2'>
        {images.slice(0, displayCount).map((image, index) => (
          <Intersect key={index} type='data-animate'>
            <div
              className='aspect-square cursor-pointer overflow-hidden rounded-lg'
              onClick={() => handleImageClick(image, index)}
              data-animate-stage={(index % SLICE_SIZE) + 1}
            >
              <img
                src={image}
                alt={`Wedding photo ${index + 1}`}
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
              />
            </div>
          </Intersect>
        ))}
      </div>

      {/* 더보기 버튼 */}
      {displayCount < images.length && (
        <div className='flex justify-center mt-6'>
          <Button
            variant='outline'
            onClick={() => setDisplayCount((prev) => prev + SLICE_SIZE)}
          >
            <ChevronDown className='h-6 w-6' />
            사진 더보기
          </Button>
        </div>
      )}

      {/* 이미지 모달 */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className='max-w-4xl p-0 bg-transparent border-none'>
          <div className='relative'>
            <img
              src={images[currentIndex]}
              alt={`Wedding photo ${currentIndex + 1}`}
              className='w-full h-auto rounded-lg'
            />
            <Button
              variant='ghost'
              size='icon'
              className='absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background'
              onClick={handlePrevious}
            >
              <ChevronLeft className='h-6 w-6' />
            </Button>
            <Button
              variant='ghost'
              size='icon'
              className='absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background'
              onClick={handleNext}
            >
              <ChevronRight className='h-6 w-6' />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
