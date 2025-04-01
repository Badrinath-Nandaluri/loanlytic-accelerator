
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Download, 
  FileText, 
  CreditCard, 
  Search, 
  Check, 
  X, 
  Clock, 
  FileBar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

const LoanManagement = () => {
  // Mock data
  const loans = [
    {
      id: "L-2023-001",
      amount: 25000,
      disbursedDate: "2023-01-15",
      term: 12,
      status: "active",
      remainingAmount: 14583,
      nextPayment: {
        date: "2023-05-15",
        amount: 2250
      },
      purpose: "Working Capital",
      interestRate: 8.5,
      repaymentSchedule: [
        { date: "2023-02-15", amount: 2250, status: "paid" },
        { date: "2023-03-15", amount: 2250, status: "paid" },
        { date: "2023-04-15", amount: 2250, status: "paid" },
        { date: "2023-05-15", amount: 2250, status: "upcoming" },
        { date: "2023-06-15", amount: 2250, status: "upcoming" },
        { date: "2023-07-15", amount: 2250, status: "upcoming" },
        { date: "2023-08-15", amount: 2250, status: "upcoming" },
        { date: "2023-09-15", amount: 2250, status: "upcoming" },
        { date: "2023-10-15", amount: 2250, status: "upcoming" },
        { date: "2023-11-15", amount: 2250, status: "upcoming" },
        { date: "2023-12-15", amount: 2250, status: "upcoming" },
        { date: "2024-01-15", amount: 2250, status: "upcoming" }
      ]
    },
    {
      id: "L-2022-047",
      amount: 15000,
      disbursedDate: "2022-11-05",
      term: 6,
      status: "paid",
      remainingAmount: 0,
      purpose: "Inventory",
      interestRate: 7.9,
      repaymentSchedule: [
        { date: "2022-12-05", amount: 2650, status: "paid" },
        { date: "2023-01-05", amount: 2650, status: "paid" },
        { date: "2023-02-05", amount: 2650, status: "paid" },
        { date: "2023-03-05", amount: 2650, status: "paid" },
        { date: "2023-04-05", amount: 2650, status: "paid" },
        { date: "2023-05-05", amount: 2650, status: "paid" }
      ]
    },
    {
      id: "L-2023-018",
      amount: 7500,
      disbursedDate: "2023-04-15",
      term: 6,
      status: "active",
      remainingAmount: 6250,
      nextPayment: {
        date: "2023-05-15",
        amount: 1320
      },
      purpose: "Equipment",
      interestRate: 8.0,
      repaymentSchedule: [
        { date: "2023-05-15", amount: 1320, status: "upcoming" },
        { date: "2023-06-15", amount: 1320, status: "upcoming" },
        { date: "2023-07-15", amount: 1320, status: "upcoming" },
        { date: "2023-08-15", amount: 1320, status: "upcoming" },
        { date: "2023-09-15", amount: 1320, status: "upcoming" },
        { date: "2023-10-15", amount: 1320, status: "upcoming" }
      ]
    },
    {
      id: "L-2023-025",
      amount: 18000,
      applicationDate: "2023-05-02",
      term: 12,
      status: "pending",
      purpose: "Business Expansion",
      interestRate: null,
    }
  ];

  const renderStatusBadge = (status: string) => {
    if (status === "active") {
      return <div className="px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 text-xs">Active</div>;
    } else if (status === "paid") {
      return <div className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800 text-xs">Paid</div>;
    } else if (status === "pending") {
      return <div className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs">Pending</div>;
    } else if (status === "rejected") {
      return <div className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 text-xs">Rejected</div>;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Loan Management</h1>
          <p className="text-gray-500">Monitor and manage all your business loans</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search loans..." className="pl-9" />
          </div>
          <Link to="/loan-application">
            <Button>Apply for New Loan</Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="active">Active Loans</TabsTrigger>
          <TabsTrigger value="all">All Loans</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="space-y-6">
          {loans.filter(loan => loan.status === "active").map(loan => (
            <Card key={loan.id} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center">
                      <CreditCard className="mr-2 h-5 w-5 text-loan" />
                      Loan #{loan.id}
                    </CardTitle>
                    <CardDescription className="mt-1">{loan.purpose}</CardDescription>
                  </div>
                  {renderStatusBadge(loan.status)}
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Loan Amount</div>
                    <div className="font-semibold text-xl">${loan.amount.toLocaleString()}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Term: {loan.term} months at {loan.interestRate}% APR
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Payment Progress</div>
                    <Progress value={(1 - (loan.remainingAmount / loan.amount)) * 100} className="h-2 mt-2" />
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">
                        ${loan.remainingAmount.toLocaleString()} remaining
                      </span>
                      <span className="text-xs text-gray-500">
                        ${loan.amount.toLocaleString()} total
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Next Payment</div>
                    <div className="font-semibold">${loan.nextPayment.amount.toLocaleString()}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Due on {new Date(loan.nextPayment.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t flex justify-between pt-4">
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Payment Schedule
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download Statement
                  </Button>
                </div>
                <Button size="sm">Make Payment</Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          <div className="rounded-md border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="whitespace-nowrap py-3 px-4 text-left font-medium">Loan ID</th>
                    <th className="whitespace-nowrap py-3 px-4 text-left font-medium">Amount</th>
                    <th className="whitespace-nowrap py-3 px-4 text-left font-medium">Purpose</th>
                    <th className="whitespace-nowrap py-3 px-4 text-left font-medium">Date</th>
                    <th className="whitespace-nowrap py-3 px-4 text-left font-medium">Status</th>
                    <th className="whitespace-nowrap py-3 px-4 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loans.map((loan, index) => (
                    <tr key={loan.id} className={index % 2 === 0 ? "bg-white" : "bg-muted/20"}>
                      <td className="p-4 align-middle">{loan.id}</td>
                      <td className="p-4 align-middle">${loan.amount.toLocaleString()}</td>
                      <td className="p-4 align-middle">{loan.purpose}</td>
                      <td className="p-4 align-middle">
                        {loan.disbursedDate ? new Date(loan.disbursedDate).toLocaleDateString() : 
                         loan.applicationDate ? new Date(loan.applicationDate).toLocaleDateString() : "-"}
                      </td>
                      <td className="p-4 align-middle">{renderStatusBadge(loan.status)}</td>
                      <td className="p-4 align-middle">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <FileText className="h-4 w-4" />
                          <span className="sr-only">View Details</span>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          {loans.filter(loan => loan.status === "pending").length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <FileBar className="text-gray-400 h-12 w-12 mb-4" />
                <h3 className="text-lg font-medium">No pending applications</h3>
                <p className="text-gray-500 text-center mt-1 mb-4">
                  You don't have any pending loan applications at the moment
                </p>
                <Link to="/loan-application">
                  <Button>Apply for a New Loan</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            loans.filter(loan => loan.status === "pending").map(loan => (
              <Card key={loan.id}>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Loan Application #{loan.id}</CardTitle>
                      <CardDescription className="mt-1">
                        Submitted on {new Date(loan.applicationDate!).toLocaleDateString()}
                      </CardDescription>
                    </div>
                    {renderStatusBadge(loan.status)}
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Requested Amount</div>
                      <div className="font-semibold text-xl">${loan.amount.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Purpose</div>
                      <div className="font-medium">{loan.purpose}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Term</div>
                      <div className="font-medium">{loan.term} months</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-6 p-3 bg-amber-50 border border-amber-100 rounded-md">
                    <Clock className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-amber-800">
                        Your application is being reviewed by our AI system and loan specialists. 
                        We'll notify you once a decision has been made.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Application Details
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                    <X className="mr-2 h-4 w-4" />
                    Cancel Application
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoanManagement;
