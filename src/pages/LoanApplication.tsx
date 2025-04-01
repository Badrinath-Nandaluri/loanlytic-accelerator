
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle, 
  ChevronRight, 
  FileText, 
  CreditCard, 
  Building, 
  Calendar,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const LoanApplication = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Business Information
    businessName: '',
    businessType: '',
    foundedYear: '',
    employeeCount: '',
    industry: '',
    
    // Loan Details
    loanAmount: '',
    loanPurpose: '',
    loanTerm: '',
    
    // Financial Information
    annualRevenue: '',
    monthlyExpenses: '',
    existingDebt: '',
    
    // Bank Information
    bankName: '',
    accountNumber: '',
    routingNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.businessName || !formData.businessType || !formData.industry) {
        toast({
          title: "Please complete the form",
          description: "All required fields must be filled",
          variant: "destructive",
        });
        return;
      }
    } else if (step === 2) {
      if (!formData.loanAmount || !formData.loanPurpose || !formData.loanTerm) {
        toast({
          title: "Please complete the form",
          description: "All required fields must be filled",
          variant: "destructive",
        });
        return;
      }
    } else if (step === 3) {
      if (!formData.annualRevenue || !formData.monthlyExpenses) {
        toast({
          title: "Please complete the form",
          description: "All required fields must be filled",
          variant: "destructive",
        });
        return;
      }
    }
    
    setStep(prevStep => prevStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
    window.scrollTo(0, 0);
  };

  const submitApplication = () => {
    if (!formData.bankName || !formData.accountNumber || !formData.routingNumber) {
      toast({
        title: "Please complete the form",
        description: "All required fields must be filled",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // In a real app, this would make an API call to submit the loan application
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted!",
        description: "Your loan application has been received and is being processed.",
      });
      navigate("/dashboard");
    }, 2000);
  };

  const renderStepIndicator = () => {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div 
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  step === i 
                    ? "border-loan bg-loan text-white" 
                    : step > i 
                      ? "border-loan bg-loan text-white" 
                      : "border-gray-300 bg-white text-gray-400"
                }`}
              >
                {step > i ? <CheckCircle className="h-5 w-5" /> : i}
              </div>
              <div className="text-xs mt-2 text-gray-600">
                {i === 1 && "Business Info"}
                {i === 2 && "Loan Details"}
                {i === 3 && "Financials"}
                {i === 4 && "Banking"}
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex items-center justify-between mt-1">
          <div className="absolute left-0 right-0 h-0.5 bg-gray-200">
            <div 
              className="absolute h-full bg-loan transition-all duration-300"
              style={{ width: `${(step - 1) * 33.33}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Apply for Business Funding</h1>
        <p className="text-gray-500">Complete the form below to apply for a new loan.</p>
      </div>

      {renderStepIndicator()}

      <Card className="border-2 border-muted">
        <CardHeader>
          <CardTitle>
            {step === 1 && "Business Information"}
            {step === 2 && "Loan Details"}
            {step === 3 && "Financial Information"}
            {step === 4 && "Banking Information"}
          </CardTitle>
          <CardDescription>
            {step === 1 && "Tell us about your business"}
            {step === 2 && "What kind of funding do you need?"}
            {step === 3 && "Provide financial details of your business"}
            {step === 4 && "Connect your business bank account"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {step === 1 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name*</Label>
                  <Input 
                    id="businessName" 
                    name="businessName" 
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your business name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type*</Label>
                  <Select 
                    value={formData.businessType} 
                    onValueChange={(value) => handleSelectChange("businessType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sole_proprietorship">Sole Proprietorship</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="llc">LLC</SelectItem>
                      <SelectItem value="corporation">Corporation</SelectItem>
                      <SelectItem value="non_profit">Non-profit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="foundedYear">Year Founded</Label>
                  <Input 
                    id="foundedYear" 
                    name="foundedYear"
                    value={formData.foundedYear}
                    onChange={handleChange}
                    placeholder="YYYY"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employeeCount">Number of Employees</Label>
                  <Input 
                    id="employeeCount" 
                    name="employeeCount"
                    value={formData.employeeCount}
                    onChange={handleChange}
                    placeholder="e.g. 10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry*</Label>
                <Select 
                  value={formData.industry} 
                  onValueChange={(value) => handleSelectChange("industry", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="food_service">Food Service</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="professional_services">Professional Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="loanAmount">Loan Amount*</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <Input 
                    id="loanAmount" 
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    className="pl-8"
                    placeholder="e.g. 25000"
                  />
                </div>
                <p className="text-xs text-gray-500">Enter amount between $5,000 and $250,000</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="loanPurpose">Loan Purpose*</Label>
                <Select 
                  value={formData.loanPurpose} 
                  onValueChange={(value) => handleSelectChange("loanPurpose", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select loan purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="working_capital">Working Capital</SelectItem>
                    <SelectItem value="equipment">Equipment Purchase</SelectItem>
                    <SelectItem value="expansion">Business Expansion</SelectItem>
                    <SelectItem value="inventory">Inventory Purchase</SelectItem>
                    <SelectItem value="refinance">Debt Refinancing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="loanTerm">Loan Term*</Label>
                <Select 
                  value={formData.loanTerm} 
                  onValueChange={(value) => handleSelectChange("loanTerm", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select loan term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6">6 months</SelectItem>
                    <SelectItem value="12">12 months</SelectItem>
                    <SelectItem value="18">18 months</SelectItem>
                    <SelectItem value="24">24 months</SelectItem>
                    <SelectItem value="36">36 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start">
                <AlertCircle className="text-amber-500 h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-amber-800">About our AI-powered assessment</h4>
                  <p className="text-sm text-amber-700">
                    Our AI will analyze your business data to provide a customized loan offer. The more information you provide, the better we can tailor our funding solution to your needs.
                  </p>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="annualRevenue">Annual Revenue*</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <Input 
                      id="annualRevenue" 
                      name="annualRevenue"
                      value={formData.annualRevenue}
                      onChange={handleChange}
                      className="pl-8"
                      placeholder="e.g. 100000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthlyExpenses">Monthly Expenses*</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <Input 
                      id="monthlyExpenses" 
                      name="monthlyExpenses"
                      value={formData.monthlyExpenses}
                      onChange={handleChange}
                      className="pl-8"
                      placeholder="e.g. 15000"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="existingDebt">Existing Business Debt</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <Input 
                    id="existingDebt" 
                    name="existingDebt"
                    value={formData.existingDebt}
                    onChange={handleChange}
                    className="pl-8"
                    placeholder="e.g. 50000"
                  />
                </div>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start">
                <FileText className="text-blue-500 h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-800">Enhanced AI Assessment</h4>
                  <p className="text-sm text-blue-700 mb-2">
                    Connect additional data sources for a faster approval and potentially higher loan amounts:
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="mr-2 bg-white">
                      <Building className="mr-2 h-4 w-4" />
                      Connect Accounting Software
                    </Button>
                    <Button variant="outline" size="sm" className="bg-white">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Connect Payment Processor
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="bankName">Bank Name*</Label>
                <Input 
                  id="bankName" 
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  placeholder="Your bank name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="accountNumber">Account Number*</Label>
                  <Input 
                    id="accountNumber" 
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    placeholder="Your account number"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="routingNumber">Routing Number*</Label>
                  <Input 
                    id="routingNumber" 
                    name="routingNumber"
                    value={formData.routingNumber}
                    onChange={handleChange}
                    placeholder="Your routing number"
                  />
                </div>
              </div>

              <div className="p-4 bg-loan/10 border border-loan/20 rounded-lg flex items-start">
                <Calendar className="text-loan h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-loan-dark">Next Steps</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    After submitting your application:
                  </p>
                  <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                    <li>Our AI system will analyze your business profile</li>
                    <li>You'll receive a decision typically within 24 hours</li>
                    <li>If approved, funds can be disbursed as quickly as the same day</li>
                  </ol>
                </div>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          {step > 1 ? (
            <Button variant="outline" onClick={prevStep}>
              Back
            </Button>
          ) : (
            <div></div> // Empty div to maintain layout with justify-between
          )}
          
          {step < 4 ? (
            <Button onClick={nextStep}>
              Continue
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={submitApplication} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoanApplication;
