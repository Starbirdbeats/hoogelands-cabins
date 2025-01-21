"use client";

import { cabinSlides } from '@/lib/slidesData';
import ImageSlider from './image-slider';

export function FeaturedCabins() {
  return (
    <section id='cabins' className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Experience Our Cabins
        </h2>
        <div className="flex justify-center">
          <ImageSlider slides={cabinSlides} />
        </div>
      </div>
    </section>
  );
}
