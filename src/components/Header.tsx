import { Button } from "@/components/ui/button";
import { Home, Phone, Mail, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <Home className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">EliteHomes</h1>
              <p className="text-xs text-muted-foreground">Premium Real Estate</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Buy
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Sell
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Rent
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Agents
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                (555) 123-4567
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                info@elitehomes.com
              </div>
            </div>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};