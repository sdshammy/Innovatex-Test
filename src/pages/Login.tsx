
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Test credentials
    if (email === 'test@canadalife.com' && password === 'password123') {
      localStorage.setItem('isAuthenticated', 'true');
      toast({
        title: "Login Successful",
        description: "Welcome to Canada Life Ideation Portal!",
      });
      navigate('/');
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Use test@canadalife.com / password123",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-canada-red to-red-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/1a8814a4-10db-40a1-b8b8-36bbdfe08076.png" 
            alt="Canada Life" 
            className="h-16 mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-white mb-2">Ideation Portal</h1>
          <p className="text-red-100">Sign in to submit and explore ideas</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Welcome Back</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-canada-red hover:bg-red-700">
                Sign In
              </Button>
              
              <div className="text-sm text-gray-600 text-center mt-4">
                <p>Test Credentials:</p>
                <p>Email: test@canadalife.com</p>
                <p>Password: password123</p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
