
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle, CreditCard, BarChart3, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Nav */}
      <header className="border-b py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-loan rounded-md w-8 h-8 flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold text-loan">Loanlytic</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-loan">Login</Link>
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-16 md:py-24 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">AI-Powered</span> Business Lending Platform
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Get instant access to business capital with our AI-driven lending solution. Apply in minutes, receive funds quickly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register">
                <Button size="lg" className="px-8">
                  Apply Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="px-8">
                  Login
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <CheckCircle className="mr-2 h-4 w-4 text-loan" />
              No credit check required
              <span className="mx-2">•</span>
              <CheckCircle className="mr-2 h-4 w-4 text-loan" />
              Funds as soon as today
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-loan/20 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Business funding" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Loanlytic?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered lending platform offers the fastest, most accurate business funding decisions in the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-gradient border-none">
              <CardContent className="pt-6">
                <div className="mb-4 bg-loan/10 p-3 rounded-full w-fit">
                  <CreditCard className="h-6 w-6 text-loan" />
                </div>
                <h3 className="text-xl font-bold mb-2">Instant Decisions</h3>
                <p className="text-gray-600">
                  Get approved in minutes, not days. Our AI evaluates your application instantly.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-none">
              <CardContent className="pt-6">
                <div className="mb-4 bg-loan/10 p-3 rounded-full w-fit">
                  <BarChart3 className="h-6 w-6 text-loan" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flexible Funding</h3>
                <p className="text-gray-600">
                  Access credit lines from $2,000 to $250,000 based on your business performance.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-none">
              <CardContent className="pt-6">
                <div className="mb-4 bg-loan/10 p-3 rounded-full w-fit">
                  <Shield className="h-6 w-6 text-loan" />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Process</h3>
                <p className="text-gray-600">
                  Bank-level security with encrypted data and secure connections for your peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="bg-loan rounded-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to grow your business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already received over $2 billion in funding through our platform.
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary" className="px-8">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-white rounded-md w-8 h-8 flex items-center justify-center">
                  <span className="text-loan font-bold text-lg">L</span>
                </div>
                <span className="text-xl font-bold text-white">Loanlytic</span>
              </div>
              <p className="text-sm">
                AI-powered business lending platform providing fast, flexible funding solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white">About Us</a></li>
                <li><a href="#" className="text-sm hover:text-white">Careers</a></li>
                <li><a href="#" className="text-sm hover:text-white">Press</a></li>
                <li><a href="#" className="text-sm hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-sm hover:text-white">Loan Calculator</a></li>
                <li><a href="#" className="text-sm hover:text-white">Business Tips</a></li>
                <li><a href="#" className="text-sm hover:text-white">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-sm hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-sm hover:text-white">Loan Agreements</a></li>
                <li><a href="#" className="text-sm hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm">
            <p>&copy; {new Date().getFullYear()} Loanlytic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
