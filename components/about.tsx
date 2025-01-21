import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-24 bg-background md:min-h-screen">
      <div className="container mx-auto px-4 flex items-center justify-center min-h-[calc(100vh-12rem)]">
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {/* Image Card */}
          <Card className="overflow-hidden rounded-3xl border-none shadow-xl h-full md:min-h-[600px]">
            <CardContent className="p-0 h-full">
              <div className="relative h-full w-full">
                <Image
                  src="/cabin2.jpg"
                  alt="Hoogeland's Cabins exterior view"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </CardContent>
          </Card>

          {/* Content Card */}
          <Card className="rounded-3xl border-none shadow-xl bg-white/50 backdrop-blur-sm md:min-h-[600px]">
            <CardContent className="flex flex-col justify-center h-full p-8 md:p-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-primary">
                  Experience Nature&apos;s
                  <span className="block font-bold mt-2">Tranquility</span>
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                  Our rustic Cabins are designed to give you a different scenery
                  and experience.
                </p>
                <p className="text-lg text-muted-foreground/80 leading-relaxed">
                  Come and experience nature&apos;s tranquility within 30
                  minutes from most major suburbs. Less travel time means more
                  time to enjoy your Holiday!
                </p>
                <a
                  href="https://book.nightsbridge.com/31928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Book Now
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
