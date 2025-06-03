
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ThumbsUp, MessageSquare, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
  likes: number;
}

interface Idea {
  id: number;
  title: string;
  author: string;
  department: string;
  category: string;
  lob: string;
  status: string;
  priority: string;
  submittedDate: string;
  votes: number;
  comments: Comment[];
  views: number;
  description: string;
}

interface IdeaCardProps {
  idea: Idea;
}

const IdeaCard = ({ idea }: IdeaCardProps) => {
  const { toast } = useToast();
  const [hasVoted, setHasVoted] = useState(false);
  const [currentVotes, setCurrentVotes] = useState(idea.votes);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(idea.comments);

  const handleVote = () => {
    if (hasVoted) {
      setCurrentVotes(currentVotes - 1);
      setHasVoted(false);
      toast({
        title: "Vote removed",
        description: "Your vote has been removed.",
      });
    } else {
      setCurrentVotes(currentVotes + 1);
      setHasVoted(true);
      toast({
        title: "Vote added",
        description: "You voted in favor of this idea.",
      });
    }
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: "Current User",
        content: newComment,
        date: new Date().toISOString().split('T')[0],
        likes: 0
      };
      setComments([...comments, comment]);
      setNewComment('');
      toast({
        title: "Comment added",
        description: "Your comment has been posted successfully.",
      });
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
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <Link to={`/idea/${idea.id}`} className="hover:text-canada-red transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{idea.title}</h3>
            </Link>
            <p className="text-gray-600 mb-3">{idea.description}</p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>By {idea.author}</span>
              <span>•</span>
              <span>{idea.department}</span>
              <span>•</span>
              <span>{idea.lob}</span>
              <span>•</span>
              <span>Submitted {idea.submittedDate}</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            <div className="flex space-x-2">
              <Badge className={getStatusColor(idea.status)}>
                {idea.status}
              </Badge>
              <Badge className={getPriorityColor(idea.priority)}>
                {idea.priority}
              </Badge>
            </div>
            <Badge variant="outline">{idea.category}</Badge>
          </div>
        </div>
        
        {/* Voting and Actions */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200 mb-4">
          <div className="flex items-center space-x-6">
            <Button
              variant={hasVoted ? 'default' : 'outline'}
              size="sm"
              onClick={handleVote}
              className={hasVoted ? 'bg-canada-red hover:bg-red-700' : ''}
            >
              <ThumbsUp className="h-4 w-4 mr-1" />
              {currentVotes}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowComments(!showComments)}
            >
              <MessageSquare className="h-4 w-4 mr-1" />
              {comments.length}
              {showComments ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
            </Button>
            
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Eye className="h-4 w-4" />
              <span>{idea.views}</span>
            </div>
          </div>
          
          <Link to={`/idea/${idea.id}`}>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </Link>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="pt-4 border-t border-gray-200 space-y-4">
            {/* Add Comment */}
            <div className="space-y-3">
              <Textarea
                placeholder="Share your thoughts or feedback..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={2}
              />
              <Button onClick={handleCommentSubmit} size="sm" className="bg-canada-red hover:bg-red-700">
                Post Comment
              </Button>
            </div>

            {/* Comments List */}
            {comments.length > 0 && (
              <div className="space-y-3">
                {comments.slice(0, 3).map((comment) => (
                  <div key={comment.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">
                        {comment.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-sm text-gray-900">{comment.author}</span>
                        <span className="text-xs text-gray-400">{comment.date}</span>
                      </div>
                      <p className="text-sm text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                ))}
                {comments.length > 3 && (
                  <Link to={`/idea/${idea.id}`} className="text-sm text-canada-red hover:underline">
                    View all {comments.length} comments
                  </Link>
                )}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default IdeaCard;
