
import Layout from '@/components/Layout';
import IdeaCard from '@/components/IdeaCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart3, TrendingUp, Clock, Users, Search, Filter } from 'lucide-react';

const Dashboard = () => {
  const ideas = [
    {
      id: 1,
      title: 'Automated Report Generation System',
      author: 'Sarah Johnson',
      department: 'Finance',
      category: 'Efficiency',
      lob: 'GCC',
      status: 'Under Review',
      priority: 'High',
      submittedDate: '2025-05-28',
      votes: 15,
      comments: [
        {
          id: 1,
          author: 'Mike Chen',
          content: 'This is a great idea! We have similar automation tools that could be leveraged.',
          date: '2025-05-30',
          likes: 5
        },
        {
          id: 2,
          author: 'Emily Davis',
          content: 'The business case is solid. Have you considered the security implications?',
          date: '2025-05-29',
          likes: 3
        }
      ],
      views: 142,
      description: 'Implement an automated system to generate monthly financial reports, reducing manual effort by 80%.'
    },
    {
      id: 2,
      title: 'Mobile Training Application',
      author: 'Mike Chen',
      department: 'Learning',
      category: 'Technology',
      lob: 'GCC',
      status: 'In Progress',
      priority: 'Medium',
      submittedDate: '2025-05-25',
      votes: 23,
      comments: [
        {
          id: 1,
          author: 'David Wilson',
          content: 'This would be very helpful for field agents. Great initiative!',
          date: '2025-05-26',
          likes: 8
        }
      ],
      views: 289,
      description: 'Develop a mobile app for on-the-go training modules and assessments for field agents.'
    },
    {
      id: 3,
      title: 'Customer Portal Enhancement',
      author: 'Emily Davis',
      department: 'Operations',
      category: 'Customer Experience',
      lob: 'Wealth Management',
      status: 'Approved',
      priority: 'High',
      submittedDate: '2025-05-20',
      votes: 31,
      comments: [
        {
          id: 1,
          author: 'Sarah Johnson',
          content: 'Excellent work on the customer experience improvements.',
          date: '2025-05-22',
          likes: 12
        },
        {
          id: 2,
          author: 'Mike Chen',
          content: 'The chat integration will be a game-changer for customer support.',
          date: '2025-05-21',
          likes: 7
        }
      ],
      views: 456,
      description: 'Enhance the customer portal with real-time policy updates and chat support integration.'
    },
    {
      id: 4,
      title: 'Workforce Scheduling Optimization',
      author: 'David Wilson',
      department: 'WFM',
      category: 'Operations',
      lob: 'BPO',
      status: 'New',
      priority: 'Medium',
      submittedDate: '2025-06-01',
      votes: 7,
      comments: [],
      views: 89,
      description: 'AI-powered scheduling system to optimize workforce allocation based on historical data and predictions.'
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Ideas Dashboard</h1>
          <p className="text-gray-600">Track, review, and manage innovation ideas across the organization</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-canada-red" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Ideas</p>
                  <p className="text-2xl font-bold text-gray-900">247</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pending Review</p>
                  <p className="text-2xl font-bold text-gray-900">42</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">In Progress</p>
                  <p className="text-2xl font-bold text-gray-900">18</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-purple-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Contributors</p>
                  <p className="text-2xl font-bold text-gray-900">89</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search ideas..." className="pl-9" />
              </div>
              
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="under-review">Under Review</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="learning">Learning</SelectItem>
                  <SelectItem value="wfm">WFM</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Ideas List */}
        <div className="space-y-6">
          {ideas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
