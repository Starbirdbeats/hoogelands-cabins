import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column: Contact information */}
          <Card className="p-6 flex flex-col justify-between h-full">
            <CardContent className="space-y-4 flex-grow flex flex-col justify-center">
              <div className="flex items-start space-x-4">
                <MapPin className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl">Address</h3>
                  <p className="text-muted-foreground text-lg">
                    9 Hillcrest Avenue, Penhill, South Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl">Phone</h3>
                  <p className="text-muted-foreground text-lg">078 944 1936</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl">Email</h3>
                  <p className="text-muted-foreground text-lg">
                    hwc042021@gmail.com
                  </p>
                </div>
              </div>
            </CardContent>
            <div className="flex justify-center space-x-4 mt-0 md:mb-4">
              <a
                href="https://www.instagram.com/hoogelandscabins/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="https://www.facebook.com/HoogelandsCabins"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <Facebook className="w-8 h-8" />
              </a>
            </div>
          </Card>

          {/* Right column: Google Map */}
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.2533681117057!2d18.85972661521762!3d-33.98881628062803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc43c578f28b13%3A0x7f4f56a47d3bae11!2s9%20Hillcrest%20Ave%2C%20Penhill%2C%20Cape%20Town%2C%207100%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1653395185316!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
