
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Lightbulb, BarChart3, User, LogOut } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/1a8814a4-10db-40a1-b8b8-36bbdfe08076.png" 
                alt="Canada Life" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-semibold text-gray-900">Ideation Portal</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-canada-red bg-red-50' 
                  : 'text-gray-700 hover:text-canada-red hover:bg-red-50'
              }`}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            
            <Link 
              to="/submit" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/submit') 
                  ? 'text-canada-red bg-red-50' 
                  : 'text-gray-700 hover:text-canada-red hover:bg-red-50'
              }`}
            >
              <Lightbulb size={18} />
              <span>Submit Idea</span>
            </Link>
            
            <Link 
              to="/dashboard" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/dashboard') 
                  ? 'text-canada-red bg-red-50' 
                  : 'text-gray-700 hover:text-canada-red hover:bg-red-50'
              }`}
            >
              <BarChart3 size={18} />
              <span>Dashboard</span>
            </Link>
            
            <Link 
              to="/profile" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/profile') 
                  ? 'text-canada-red bg-red-50' 
                  : 'text-gray-700 hover:text-canada-red hover:bg-red-50'
              }`}
            >
              <User size={18} />
              <span>Profile</span>
            </Link>
            
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <LogOut size={16} />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
