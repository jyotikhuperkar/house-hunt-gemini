import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";

export default function Procurement() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    budget: "",
    preferredCity: "",
    propertyType: "",
    additionalNotes: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"];
  const propertyTypes = ["Apartment", "House", "Condo", "Townhouse", "Villa", "Commercial"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store in localStorage for now
    const requests = JSON.parse(localStorage.getItem("procurementRequests") || "[]");
    requests.push({ ...formData, id: Date.now(), date: new Date().toISOString() });
    localStorage.setItem("procurementRequests", JSON.stringify(requests));
    
    setShowSuccess(true);
    setFormData({
      fullName: "",
      email: "",
      budget: "",
      preferredCity: "",
      propertyType: "",
      additionalNotes: ""
    });
    
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <motion.div 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Property Procurement</h1>
            <p className="text-muted-foreground">Tell us what you're looking for and we'll help you find the perfect property</p>
          </div>

          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg text-success text-center"
            >
              Request submitted successfully! We'll contact you soon.
            </motion.div>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Procurement Request</CardTitle>
              <CardDescription>Fill out the form below to submit your property request</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <Input
                    id="budget"
                    name="budget"
                    placeholder="e.g., $500,000 - $750,000"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Preferred City</Label>
                    <Select value={formData.preferredCity} onValueChange={(value) => setFormData({ ...formData, preferredCity: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a city" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Property Type</Label>
                    <Select value={formData.propertyType} onValueChange={(value) => setFormData({ ...formData, propertyType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="additionalNotes">Additional Notes</Label>
                  <Textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    placeholder="Any specific requirements or preferences..."
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" variant="hero">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}