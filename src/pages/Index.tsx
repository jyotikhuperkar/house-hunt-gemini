import { PropertyCard } from "@/components/PropertyCard";
import { PropertySearch } from "@/components/PropertySearch";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const Index = () => {
  const navigate = useNavigate();

  const featuredProperties = [
    {
      id: "1",
      title: "Modern Family Home",
      price: "$850,000",
      location: "Downtown District, CA",
      beds: 4,
      baths: 3,
      sqft: 2800,
      imageUrl: property1,
      type: "House",
      isNew: true,
      onClick: () => navigate('/property/1')
    },
    {
      id: "2",
      title: "Urban Luxury Apartment",
      price: "$425,000",
      location: "City Center, CA",
      beds: 2,
      baths: 2,
      sqft: 1200,
      imageUrl: property2,
      type: "Apartment",
      onClick: () => navigate('/property/2')
    },
    {
      id: "3",
      title: "Classic Townhouse",
      price: "$650,000",
      location: "Historic District, CA",
      beds: 3,
      baths: 2,
      sqft: 1800,
      imageUrl: property3,
      type: "Townhouse",
      onClick: () => navigate('/property/3')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Discover exceptional properties in the most desirable locations
          </p>
          <div className="max-w-2xl mx-auto">
            <PropertySearch />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">2,500+</h3>
              <p className="text-muted-foreground">Properties Sold</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">10,000+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">15+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Featured Properties
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Exceptional Properties
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our hand-picked selection of premium properties in prime locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Properties
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
