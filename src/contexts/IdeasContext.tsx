
import React, { createContext, useContext, useState, ReactNode } from 'react';

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
  businessCase?: string;
  expectedBenefits?: string;
}

interface IdeasContextType {
  ideas: Idea[];
  addIdea: (idea: Omit<Idea, 'id' | 'votes' | 'comments' | 'views' | 'submittedDate' | 'status'>) => void;
}

const IdeasContext = createContext<IdeasContextType | undefined>(undefined);

export const useIdeas = () => {
  const context = useContext(IdeasContext);
  if (!context) {
    throw new Error('useIdeas must be used within an IdeasProvider');
  }
  return context;
};

export const IdeasProvider = ({ children }: { children: ReactNode }) => {
  const [ideas, setIdeas] = useState<Idea[]>([
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
  ]);

  const addIdea = (newIdeaData: Omit<Idea, 'id' | 'votes' | 'comments' | 'views' | 'submittedDate' | 'status'>) => {
    const newIdea: Idea = {
      ...newIdeaData,
      id: Math.max(...ideas.map(i => i.id)) + 1,
      votes: 0,
      comments: [],
      views: 0,
      submittedDate: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    setIdeas(prev => [newIdea, ...prev]);
  };

  return (
    <IdeasContext.Provider value={{ ideas, addIdea }}>
      {children}
    </IdeasContext.Provider>
  );
};
