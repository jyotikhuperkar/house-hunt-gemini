import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { ArrowLeft, Bed, Bath, Square, MapPin, Calendar, Heart, Share, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";

export default function PropertyDetail() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Properties
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative mb-6">
              <img 
                src={heroImage}
                alt="Luxury Modern Home"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge variant="default" className="bg-success text-success-foreground">
                  New Listing
                </Badge>
                <Badge variant="secondary" className="bg-background/90 text-foreground">
                  House
                </Badge>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="ghost" size="sm" className="bg-background/90 hover:bg-background">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="bg-background/90 hover:bg-background">
                  <Share className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Luxury Modern Home with Stunning Views
                </h1>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  123 Elite Drive, Beverly Hills, CA 90210
                </div>
                <div className="text-4xl font-bold text-primary mb-4">$2,750,000</div>
                
                <div className="flex items-center gap-6 text-lg">
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 mr-2 text-muted-foreground" />
                    5 beds
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 mr-2 text-muted-foreground" />
                    4 baths
                  </div>
                  <div className="flex items-center">
                    <Square className="h-5 w-5 mr-2 text-muted-foreground" />
                    4,200 sqft
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                    Built 2023
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Property Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This stunning modern luxury home offers an unparalleled living experience with breathtaking 
                    panoramic views. Featuring an open-concept design with floor-to-ceiling windows, this property 
                    seamlessly blends indoor and outdoor living. The gourmet kitchen boasts premium appliances 
                    and custom cabinetry, while the master suite includes a spa-like bathroom and private balcony. 
                    Additional amenities include a home theater, wine cellar, and resort-style backyard with 
                    infinity pool and outdoor kitchen.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Property Type:</span>
                        <span className="font-medium">Single Family Home</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Year Built:</span>
                        <span className="font-medium">2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Lot Size:</span>
                        <span className="font-medium">0.75 acres</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Parking:</span>
                        <span className="font-medium">3-car garage</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Pool:</span>
                        <span className="font-medium">Infinity Pool</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">View:</span>
                        <span className="font-medium">Ocean & Mountain</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fireplace:</span>
                        <span className="font-medium">Gas Fireplace</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">HOA:</span>
                        <span className="font-medium">$450/month</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg">
                      JS
                    </div>
                    <div>
                      <h4 className="font-semibold">Jessica Smith</h4>
                      <p className="text-muted-foreground text-sm">Senior Real Estate Agent</p>
                      <p className="text-muted-foreground text-sm">License #DRE 01234567</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button variant="hero" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Call (555) 123-4567
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Listed:</span>
                      <span>3 days ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span>MLS #:</span>
                      <span>EH2024001</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Property ID:</span>
                      <span>EH-123-456</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}