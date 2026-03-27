
import { Star, StarHalf } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const googleReviews = [
  {
    rating: 5,
    author: 'Procurement Manager',
    text: "Anabyn's attention to detail and commitment to quality is unmatched. They are our go-to partner for all our hotel linen needs. The process was seamless from start to finish.",
  },
  {
    rating: 5,
    author: 'Supply Chain Head',
    text: 'The quality of the uniforms and the efficiency of their export process have made them an invaluable part of our supply chain. Highly recommended for international sourcing.',
  },
  {
    rating: 5,
    author: 'General Manager',
    text: 'Reliable, professional, and always on time. Anabyn Global Ventures truly understands the needs of the international hospitality market. A pleasure to work with.',
  },
  {
    rating: 5,
    author: 'F&B Director',
    text: "We sourced our entire range of restaurant and buffetware from Anabyn. The quality exceeded our expectations, and the pricing was very competitive. Will definitely order again.",
  },
  {
    rating: 4,
    author: 'Hotel Owner',
    text: 'Great product quality and excellent communication. There was a slight delay in shipping, but the team was transparent throughout the process and resolved it quickly.',
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-amber-500">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-5 w-5 fill-current" />
      ))}
      {halfStar && <StarHalf key="half" className="h-5 w-5 fill-current" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />
      ))}
    </div>
  );
};

export function Testimonials() {
  const overallRating = 4.9;
  return (
    <section id="testimonials" className="py-12 md:py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Our commitment to quality and reliability has earned us the trust of
            premier hotels and institutions worldwide.
          </p>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://g.co/kgs/anabyn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 mb-12 hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-bold">{overallRating}</span>
                    <StarRating rating={overallRating} />
                  </div>
                  <p className="text-muted-foreground flex items-center gap-1">
                    Based on real Google Reviews ↗
                  </p>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>View our Google reviews</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {googleReviews.slice(0, 3).map((review, index) => (
            <Card key={index} className="bg-background flex flex-col">
              <CardContent className="pt-6 flex-grow flex flex-col">
                <div className="flex items-center mb-2">
                   <StarRating rating={review.rating} />
                </div>
                <blockquote className="text-base font-medium leading-relaxed flex-grow">
                  "{review.text}"
                </blockquote>
                <div className="mt-4 flex items-center">
                  <div>
                    <p className="font-semibold">{review.author}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild>
                <Link href="https://share.google/Icw2FF4giN0LJdQcz" target="_blank" rel="noopener noreferrer">
                    <FaGoogle className="mr-2 h-4 w-4" />
                    Read More Reviews on Google
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
