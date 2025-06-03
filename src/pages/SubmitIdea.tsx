
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Lightbulb, Send } from 'lucide-react';

const SubmitIdea = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    lob: '',
    department: '',
    category: '',
    impactLevel: '',
    businessCase: '',
    expectedBenefits: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting idea:', formData);
    
    toast({
      title: "Idea Submitted Successfully!",
      description: "Your idea has been submitted for review. You'll receive notifications about its progress.",
    });

    // Reset form
    setFormData({
      title: '',
      description: '',
      lob: '',
      department: '',
      category: '',
      impactLevel: '',
      businessCase: '',
      expectedBenefits: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Lightbulb className="h-12 w-12 text-canada-red" />
            </div>
            <CardTitle className="text-2xl">Submit Your Innovative Idea</CardTitle>
            <CardDescription>
              Share your solution to improve operations, quality, or efficiency across Canada Life
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Idea Title *</Label>
                  <Input
                    id="title"
                    placeholder="Brief, descriptive title for your idea"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lob">Line of Business *</Label>
                  <Select value={formData.lob} onValueChange={(value) => handleInputChange('lob', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select LOB" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gcc">GCC</SelectItem>
                      <SelectItem value="underwriting">Underwriting</SelectItem>
                      <SelectItem value="transport">Transport</SelectItem>
                      <SelectItem value="wealth-management">Wealth Management</SelectItem>
                      <SelectItem value="insurance-solutions">Insurance Solutions</SelectItem>
                      <SelectItem value="bpo">BPO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Department/Function *</Label>
                  <Select value={formData.department} onValueChange={(value) => handleInputChange('department', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="operations">Operations</SelectItem>
                      <SelectItem value="training">Training</SelectItem>
                      <SelectItem value="learning">Learning</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="wfm">Workforce Management</SelectItem>
                      <SelectItem value="reporting">Reporting</SelectItem>
                      <SelectItem value="quality">Quality</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="operations">Operations</SelectItem>
                      <SelectItem value="quality">Quality</SelectItem>
                      <SelectItem value="transport">Transport</SelectItem>
                      <SelectItem value="efficiency">Efficiency</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="process">Process Improvement</SelectItem>
                      <SelectItem value="customer-experience">Customer Experience</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="impactLevel">Impact Level *</Label>
                  <Select value={formData.impactLevel} onValueChange={(value) => handleInputChange('impactLevel', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Impact Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High Impact</SelectItem>
                      <SelectItem value="medium">Medium Impact</SelectItem>
                      <SelectItem value="low">Low Impact</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Detailed Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your idea in detail. What problem does it solve? How would it work?"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessCase">Business Case</Label>
                <Textarea
                  id="businessCase"
                  placeholder="Explain the business justification and potential ROI"
                  value={formData.businessCase}
                  onChange={(e) => handleInputChange('businessCase', e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expectedBenefits">Expected Benefits</Label>
                <Textarea
                  id="expectedBenefits"
                  placeholder="What specific benefits would this idea bring? (efficiency, quality, cost savings, etc.)"
                  value={formData.expectedBenefits}
                  onChange={(e) => handleInputChange('expectedBenefits', e.target.value)}
                  rows={3}
                />
              </div>

              <div className="flex justify-end space-x-4 pt-6">
                <Button type="button" variant="outline">
                  Save as Draft
                </Button>
                <Button type="submit" className="bg-canada-red hover:bg-red-700">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Idea
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SubmitIdea;
