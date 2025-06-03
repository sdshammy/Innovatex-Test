
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Lightbulb, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';

const Index = () => {
  const stats = [
    { label: 'Ideas Submitted', value: '247', icon: Lightbulb },
    { label: 'Active Contributors', value: '89', icon: Users },
    { label: 'Ideas Implemented', value: '34', icon: TrendingUp },
    { label: 'Awards Given', value: '12', icon: Award },
  ];

  const recentIdeas = [
    {
      id: 1,
      title: 'Automated Report Generation',
      author: 'Sarah Johnson',
      category: 'Operations',
      votes: 15,
      status: 'Under Review'
    },
    {
      id: 2,
      title: 'Mobile Training App',
      author: 'Mike Chen',
      category: 'Learning',
      votes: 23,
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Customer Portal Enhancement',
      author: 'Emily Davis',
      category: 'Quality',
      votes: 31,
      status: 'Approved'
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to the Canada Life Ideation Portal
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empower innovation across operations. Submit your ideas, collaborate with teams, 
            and drive meaningful change across GCC, Underwriting, Wealth Management, and beyond.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/submit">
              <Button size="lg" className="bg-canada-red hover:bg-red-700 text-white">
                <Lightbulb className="mr-2 h-5 w-5" />
                Submit Your Idea
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="lg">
                View Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-canada-red" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Ideas Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-canada-red" />
                Recent Ideas
              </CardTitle>
              <CardDescription>
                Latest submissions from our innovation community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentIdeas.map((idea) => (
                  <div key={idea.id} className="border-l-4 border-canada-red pl-4 py-2">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{idea.title}</h4>
                        <p className="text-sm text-gray-600">By {idea.author}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-xs px-2 py-1 bg-gray-100 rounded">{idea.category}</span>
                          <span className="text-xs text-gray-500">{idea.votes} votes</span>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        idea.status === 'Approved' ? 'bg-green-100 text-green-800' :
                        idea.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {idea.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-canada-red" />
                How It Works
              </CardTitle>
              <CardDescription>
                Simple steps to submit and track your ideas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-canada-red text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Submit Your Idea</h4>
                    <p className="text-sm text-gray-600">Share your innovative solution with detailed description and classification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-canada-red text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Community Review</h4>
                    <p className="text-sm text-gray-600">Get feedback, votes, and comments from your colleagues</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-canada-red text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Expert Evaluation</h4>
                    <p className="text-sm text-gray-600">SPOC reviews feasibility and assigns priority</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-canada-red text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold">Implementation</h4>
                    <p className="text-sm text-gray-600">Track progress and see your idea come to life</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
