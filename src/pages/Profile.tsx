
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Lightbulb, TrendingUp, Award, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const user = {
    name: 'John Anderson',
    role: 'Senior Business Analyst',
    department: 'Operations',
    lob: 'GCC',
    email: 'john.anderson@canadalife.com',
    phone: '+1 (555) 123-4567',
    location: 'Toronto, ON',
    joinDate: 'January 2022',
    totalIdeas: 12,
    ideasImplemented: 4,
    totalVotes: 156,
    rank: 'Innovation Champion'
  };

  const myIdeas = [
    {
      id: 1,
      title: 'Digital Document Verification',
      status: 'Implemented',
      votes: 45,
      submittedDate: '2025-03-15',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Customer Feedback Loop Enhancement',
      status: 'In Progress',
      votes: 32,
      submittedDate: '2025-04-20',
      category: 'Quality'
    },
    {
      id: 3,
      title: 'Automated Email Templates',
      status: 'Under Review',
      votes: 28,
      submittedDate: '2025-05-10',
      category: 'Efficiency'
    },
    {
      id: 4,
      title: 'Mobile Expense Reporting',
      status: 'New',
      votes: 15,
      submittedDate: '2025-05-25',
      category: 'Operations'
    }
  ];

  const achievements = [
    { title: 'Innovation Champion', description: 'Submitted 10+ ideas', icon: Award, color: 'text-yellow-500' },
    { title: 'Top Contributor', description: 'Most voted ideas this quarter', icon: TrendingUp, color: 'text-green-500' },
    { title: 'Implementation Expert', description: '3+ ideas implemented', icon: Lightbulb, color: 'text-blue-500' },
    { title: 'Community Builder', description: 'Active in discussions', icon: User, color: 'text-purple-500' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Under Review': return 'bg-yellow-100 text-yellow-800';
      case 'In Progress': return 'bg-purple-100 text-purple-800';
      case 'Implemented': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarFallback className="text-2xl bg-canada-red text-white">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{user.name}</h2>
                <p className="text-gray-600 mb-2">{user.role}</p>
                <Badge className="bg-canada-red text-white">{user.rank}</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{user.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{user.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{user.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">Joined {user.joinDate}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-canada-red">{user.totalIdeas}</div>
                    <div className="text-sm text-gray-600">Ideas Submitted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{user.ideasImplemented}</div>
                    <div className="text-sm text-gray-600">Implemented</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{user.totalVotes}</div>
                    <div className="text-sm text-gray-600">Total Votes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">8.4</div>
                    <div className="text-sm text-gray-600">Avg Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                      <div>
                        <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* My Ideas */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5" />
                    My Ideas
                  </CardTitle>
                  <Link to="/submit">
                    <Button size="sm" className="bg-canada-red hover:bg-red-700">
                      Submit New Idea
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myIdeas.map((idea) => (
                    <div key={idea.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <Link to={`/idea/${idea.id}`} className="hover:text-canada-red transition-colors">
                            <h4 className="font-semibold text-gray-900">{idea.title}</h4>
                          </Link>
                          <p className="text-sm text-gray-600 mt-1">Submitted on {idea.submittedDate}</p>
                        </div>
                        <Badge className={getStatusColor(idea.status)}>
                          {idea.status}
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline">{idea.category}</Badge>
                          <span className="text-sm text-gray-500">{idea.votes} votes</span>
                        </div>
                        <Link to={`/idea/${idea.id}`}>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Activity Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-canada-red rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Submitted "Mobile Expense Reporting" idea</p>
                      <p className="text-sm text-gray-600">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Your idea "Customer Feedback Loop Enhancement" moved to In Progress</p>
                      <p className="text-sm text-gray-600">1 week ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Received 5 new votes on "Automated Email Templates"</p>
                      <p className="text-sm text-gray-600">2 weeks ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Commented on "Digital Transformation Initiative"</p>
                      <p className="text-sm text-gray-600">3 weeks ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
