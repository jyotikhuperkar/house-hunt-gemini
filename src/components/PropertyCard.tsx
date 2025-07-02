import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Square, MapPin, Heart } from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  type: string;
  isNew?: boolean;
  onClick?: () => void;
}

export const PropertyCard = ({ 
  title, 
  price, 
  location, 
  beds, 
  baths, 
  sqft, 
  imageUrl, 
  type,
  isNew = false,
  onClick 
}: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] border-0 bg-card"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {isNew && (
            <Badge variant="default" className="bg-success text-success-foreground">
              New
            </Badge>
          )}
          <Badge variant="secondary" className="bg-background/90 text-foreground">
            {type}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 bg-background/90 hover:bg-background text-foreground"
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-2">
          <h3 className="font-semibold text-lg text-card-foreground line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
        </div>
        
        <div className="mb-4">
          <span className="text-2xl font-bold text-primary">{price}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              {beds} beds
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              {baths} baths
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              {sqft.toLocaleString()} sqft
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};