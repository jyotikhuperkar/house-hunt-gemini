import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { useState } from "react";

export const PropertySearch = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = () => {
    // Search functionality will be implemented later
    console.log("Searching for:", { location, propertyType, priceRange });
  };

  return (
    <div className="bg-background/95 backdrop-blur-sm rounded-lg shadow-[var(--card-shadow)] p-6 border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger>
            <Home className="h-4 w-4 mr-2 text-muted-foreground" />
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="townhouse">Townhouse</SelectItem>
            <SelectItem value="land">Land</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={priceRange} onValueChange={setPriceRange}>
          <SelectTrigger>
            <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-200000">Under $200K</SelectItem>
            <SelectItem value="200000-400000">$200K - $400K</SelectItem>
            <SelectItem value="400000-600000">$400K - $600K</SelectItem>
            <SelectItem value="600000-800000">$600K - $800K</SelectItem>
            <SelectItem value="800000-1000000">$800K - $1M</SelectItem>
            <SelectItem value="1000000+">$1M+</SelectItem>
          </SelectContent>
        </Select>
        
        <Button variant="hero" onClick={handleSearch} className="w-full">
          <Search className="h-4 w-4 mr-2" />
          Search Properties
        </Button>
      </div>
    </div>
  );
};