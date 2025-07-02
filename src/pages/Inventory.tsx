import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Filter } from "lucide-react";

// Mock property data
const properties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: "$2,500/month",
    location: "New York",
    type: "Apartment",
    image: "/src/assets/property-1.jpg",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sq ft"
  },
  {
    id: 2,
    title: "Luxury Family Villa",
    price: "$850,000",
    location: "Los Angeles",
    type: "Villa",
    image: "/src/assets/property-2.jpg",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,800 sq ft"
  },
  {
    id: 3,
    title: "Cozy Suburban House",
    price: "$450,000",
    location: "Chicago",
    type: "House",
    image: "/src/assets/property-3.jpg",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,800 sq ft"
  },
  {
    id: 4,
    title: "Downtown Condo",
    price: "$3,200/month",
    location: "New York",
    type: "Condo",
    image: "/src/assets/property-1.jpg",
    bedrooms: 1,
    bathrooms: 1,
    area: "900 sq ft"
  },
  {
    id: 5,
    title: "Spacious Townhouse",
    price: "$650,000",
    location: "Houston",
    type: "Townhouse",
    image: "/src/assets/property-2.jpg",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,200 sq ft"
  },
  {
    id: 6,
    title: "Elegant Apartment",
    price: "$1,800/month",
    location: "Phoenix",
    type: "Apartment",
    image: "/src/assets/property-3.jpg",
    bedrooms: 2,
    bathrooms: 1,
    area: "1,100 sq ft"
  }
];

export default function Inventory() {
  const [filters, setFilters] = useState({
    city: "",
    propertyType: "",
    minPrice: "",
    maxPrice: ""
  });
  const [showFilters, setShowFilters] = useState(false);

  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"];
  const propertyTypes = ["Apartment", "House", "Condo", "Townhouse", "Villa"];

  const filteredProperties = properties.filter(property => {
    if (filters.city && property.location !== filters.city) return false;
    if (filters.propertyType && property.type !== filters.propertyType) return false;
    // Add price filtering logic here if needed
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <motion.div 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Property Inventory</h1>
          <p className="text-muted-foreground">Browse our extensive collection of premium properties</p>
        </div>

        {/* Filter Panel */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">Filters</h2>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                {showFilters ? "Hide" : "Show"} Filters
              </Button>
            </div>
            
            <motion.div 
              className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${showFilters ? "block" : "hidden md:grid"}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: showFilters ? 1 : 0, height: showFilters ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <Label>City</Label>
                <Select value={filters.city} onValueChange={(value) => setFilters({ ...filters, city: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All cities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All cities</SelectItem>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>Property Type</Label>
                <Select value={filters.propertyType} onValueChange={(value) => setFilters({ ...filters, propertyType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All types</SelectItem>
                    {propertyTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="minPrice">Min Price</Label>
                <Input
                  id="minPrice"
                  placeholder="Min price"
                  value={filters.minPrice}
                  onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                />
              </div>
              
              <div>
                <Label htmlFor="maxPrice">Max Price</Label>
                <Input
                  id="maxPrice"
                  placeholder="Max price"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                />
              </div>
            </motion.div>
          </CardContent>
        </Card>

        {/* Properties Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PropertyCard
                title={property.title}
                price={property.price}
                location={property.location}
                image={property.image}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
                id={property.id.toString()}
              />
            </motion.div>
          ))}
        </motion.div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No properties found matching your criteria.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}