import React, { memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: 'App Design',
    description: 'Crafting intuitive and visually stunning user interfaces that enhance user experience and engagement across all platforms.',
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'Web Development',
    description: 'Building robust, scalable, and high-performance websites and web applications with modern technologies.',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Mobile Apps',
    description: 'Developing native and cross-platform mobile applications for iOS and Android to bring your ideas to life.',
  },
];

const ServicesSection = memo(function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-4xl font-headline font-bold text-primary tracking-tight">Services</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I offer a range of creative and technical services to bring your digital products to life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-border/50 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col rounded-lg">
              <CardHeader className="items-center text-center">
                {service.icon}
                <CardTitle className="pt-4 text-2xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground flex-grow">
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ServicesSection;
