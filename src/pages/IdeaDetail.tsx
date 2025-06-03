
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ThumbsUp, ThumbsDown, MessageSquare, Eye, Calendar, User, Building, Tag } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IdeaDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [newComment, setNewComment] = useState('');
  const [hasVoted, setHasVoted] = useState(false);
  const [voteType, setVoteType] = useState<'up' | 'down' | null>(null);

  // Mock data - in real app, this would be fetched based on ID
  const idea = {
    id: parseInt(id || '1'),
    title: 'Automated Report Generation System',
    description: 'Implement an automated system to generate monthly financial reports, reducing manual effort by 80%. This system would integrate with existing databases, apply predefined templates, and automatically distribute reports to stakeholders via email.',
    author: 'Sarah Johnson',
    authorRole: 'Senior Financial Analyst',
    department: 'Finance',
    category: 'Efficiency',
    lob: 'GCC',
    status: 'Under Review',
    priority: 'High',
    submittedDate: '2025-05-28',
    votes: { up: 15, down: 2 },
    comments: 8,
    views: 142,
    businessCase: 'Currently, generating monthly financial reports takes 3-4 days of manual work. Automation would reduce this to 2-3 hours, freeing up resources for analysis rather than data compilation.',
    expectedBenefits: 'Reduced processing time, improved accuracy, consistent formatting, faster decision-making capabilities, and reduced risk of human error.',
    implementationTimeline: '3-6 months',
    estimatedCost: 'Medium',
    stakeholders: ['Finance Team', 'IT Department', 'Operations Management']
  };

  const comments = [
    {
      id: 1,
      author: 'Mike Chen',
      role: 'IT Manager',
      date: '2025-05-30',
      content: 'This is a great idea! We have similar automation tools that could be leveraged. I would suggest integrating with our existing Power BI infrastructure.',
      likes: 5
    },
    {
      id: 2,
      author: 'Emily Davis',
      role: 'Operations Director',
      date: '2025-05-29',
      content: 'The business case is solid. Have you considered the security implications of automated report distribution?',
      likes: 3
    },
    {
      id: 3,
      author: 'David Wilson',
      role: 'Finance Manager',
      date: '2025-05-29',
      content: 'As someone who manually creates these reports, I strongly support this initiative. The time savings would be significant.',
      likes: 7
    }
  ];

  const handleVote = (type: 'up' | 'down') => {
    if (hasVoted && voteType === type) {
      // Remove vote
      setHasVoted(false);
      setVoteType(null);
      toast({
        title: "Vote removed",
        description: "Your vote has been removed.",
      });
    } else {
      // Add or change vote
      setHasVoted(true);
      setVoteType(type);
      toast({
        title: `Vote ${type === 'up' ? 'added' : 'changed'}`,
        description: `You voted ${type === 'up' ? 'in favor' : 'against'} this idea.`,
      });
    }
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      toast({
        title: "Comment added",
        description: "Your comment has been posted successfully.",
      });
      setNewComment('');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Under Review': return 'bg-yellow-100 text-yellow-800';
      case 'In Progress': return 'bg-purple-100 text-purple-800';
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-orange-100 text-orange-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{idea.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{idea.author} - {idea.authorRole}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{idea.submittedDate}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{idea.views} views</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Badge className={getStatusColor(idea.status)}>
                      {idea.status}
                    </Badge>
                    <Badge className={getPriorityColor(idea.priority)}>
                      {idea.priority}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                    <p className="text-gray-700">{idea.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Business Case</h3>
                    <p className="text-gray-700">{idea.businessCase}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expected Benefits</h3>
                    <p className="text-gray-700">{idea.expectedBenefits}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Implementation Timeline</h3>
                      <p className="text-gray-700">{idea.implementationTimeline}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Estimated Cost</h3>
                      <p className="text-gray-700">{idea.estimatedCost}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Stakeholders</h3>
                    <div className="flex flex-wrap gap-2">
                      {idea.stakeholders.map((stakeholder, index) => (
                        <Badge key={index} variant="outline">{stakeholder}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Voting Section */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <Button
                      variant={voteType === 'up' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => handleVote('up')}
                      className={voteType === 'up' ? 'bg-green-600 hover:bg-green-700' : ''}
                    >
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      {idea.votes.up} {voteType === 'up' && hasVoted && '(+1)'}
                    </Button>
                    <Button
                      variant={voteType === 'down' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => handleVote('down')}
                      className={voteType === 'down' ? 'bg-red-600 hover:bg-red-700' : ''}
                    >
                      <ThumbsDown className="h-4 w-4 mr-2" />
                      {idea.votes.down} {voteType === 'down' && hasVoted && '(+1)'}
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span>{comments.length} comments</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card>
              <CardHeader>
                <CardTitle>Comments & Discussion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Add Comment */}
                  <div className="space-y-3">
                    <Textarea
                      placeholder="Share your thoughts, suggestions, or feedback..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      rows={3}
                    />
                    <Button onClick={handleCommentSubmit} className="bg-canada-red hover:bg-red-700">
                      Post Comment
                    </Button>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className="border-l-4 border-canada-red pl-4 py-3">
                        <div className="flex items-start space-x-3">
                          <Avatar>
                            <AvatarFallback>{comment.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-medium text-gray-900">{comment.author}</span>
                              <span className="text-sm text-gray-500">{comment.role}</span>
                              <span className="text-sm text-gray-400">•</span>
                              <span className="text-sm text-gray-400">{comment.date}</span>
                            </div>
                            <p className="text-gray-700 mb-2">{comment.content}</p>
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-canada-red">
                                <ThumbsUp className="h-3 w-3 mr-1" />
                                {comment.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-canada-red">
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Tag className="mr-2 h-5 w-5" />
                  Idea Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">Department</span>
                  <p className="font-medium">{idea.department}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Line of Business</span>
                  <p className="font-medium">{idea.lob}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Category</span>
                  <Badge variant="outline">{idea.category}</Badge>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Priority</span>
                  <Badge className={getPriorityColor(idea.priority)}>{idea.priority}</Badge>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Status</span>
                  <Badge className={getStatusColor(idea.status)}>{idea.status}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full">
                  Follow Updates
                </Button>
                <Button variant="outline" className="w-full">
                  Share Idea
                </Button>
                <Button variant="outline" className="w-full">
                  Export Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IdeaDetail;
