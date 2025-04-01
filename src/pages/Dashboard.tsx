
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Download, ArrowRight, TrendingUp, TrendingDown, DollarSign, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  // Mock data
  const loanData = {
    availableCredit: 42500,
    creditLimit: 50000,
    utilizationRate: 15,
    activeLoans: [
      { id: 1, amount: 7500, dateDue: '2023-05-15', status: 'current', description: 'Working capital' },
    ],
    recentTransactions: [
      { id: 1, type: 'deposit', amount: 2500, date: '2023-04-28', description: 'Loan repayment' },
      { id: 2, type: 'withdrawal', amount: 7500, date: '2023-04-15', description: 'Loan disbursement' },
      { id: 3, type: 'deposit', amount: 1500, date: '2023-04-01', description: 'Loan repayment' },
    ],
    riskScore: 82,
    cashFlowHealth: 'Positive',
    businessHealth: [
      { month: 'Jan', revenue: 45000, expenses: 38000 },
      { month: 'Feb', revenue: 48000, expenses: 39000 },
      { month: 'Mar', revenue: 52000, expenses: 40000 },
      { month: 'Apr', revenue: 49000, expenses: 41000 },
    ]
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, SmallBiz Inc.</h1>
          <p className="text-gray-500">Here's what's happening with your business today.</p>
        </div>
        <div className="hidden sm:flex space-x-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Link to="/loan-application">
            <Button>
              Apply for Loan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Credit Summary Section */}
      <section>
        <Card className="border-2 border-loan/20">
          <CardHeader className="pb-3">
            <CardTitle>Credit Summary</CardTitle>
            <CardDescription>Your current loan and credit status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Available Credit</span>
                  <span className="text-sm font-medium">${loanData.availableCredit.toLocaleString()}</span>
                </div>
                <div className="mb-1">
                  <Progress value={loanData.utilizationRate} className="h-2" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    ${loanData.availableCredit.toLocaleString()} Available
                  </span>
                  <span className="text-xs text-gray-500">
                    ${loanData.creditLimit.toLocaleString()} Limit
                  </span>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500 mb-2">Risk Score</div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-loan text-white flex items-center justify-center text-xl font-semibold mr-3">
                    {loanData.riskScore}
                  </div>
                  <div>
                    <div className="text-sm font-medium">Excellent</div>
                    <div className="text-xs text-green-600 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> 
                      Increased by 3 points
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500 mb-2">Cash Flow Health</div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Positive</div>
                    <div className="text-xs text-green-600">
                      Projected stable for next 30 days
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <div className="text-sm text-gray-500">
              AI-powered risk assessment updated daily
            </div>
            <Link to="/risk-insights" className="text-loan text-sm font-medium hover:underline flex items-center">
              View detailed risk insights
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </Link>
          </CardFooter>
        </Card>
      </section>

      {/* Active Loans & Transactions */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Loans</CardTitle>
            <CardDescription>
              Your current outstanding loans
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loanData.activeLoans.length > 0 ? (
              <ul className="space-y-4">
                {loanData.activeLoans.map(loan => (
                  <li key={loan.id} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between mb-1">
                      <div className="font-medium">${loan.amount.toLocaleString()}</div>
                      <div className="text-sm px-2 py-0.5 rounded-full bg-green-100 text-green-700">{loan.status}</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="text-gray-500">{loan.description}</div>
                      <div>Due: {new Date(loan.dateDue).toLocaleDateString()}</div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-500">No active loans</p>
                <Link to="/loan-application" className="mt-2 inline-block text-loan hover:underline">
                  Apply for a new loan
                </Link>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Link to="/loan-management">
              <Button variant="outline" size="sm">View All Loans</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              Your recent loan-related transactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {loanData.recentTransactions.map(transaction => (
                <li key={transaction.id} className="border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between mb-1">
                    <div className="font-medium flex items-center">
                      {transaction.type === 'deposit' ? (
                        <DollarSign className="h-4 w-4 text-green-600 mr-1" />
                      ) : (
                        <DollarSign className="h-4 w-4 text-blue-600 mr-1" />
                      )}
                      ${transaction.amount.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {transaction.description}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">View All Transactions</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Business Health & Insights */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Business Health</CardTitle>
            <CardDescription>
              AI-powered insights based on your financial data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="revenue">
              <TabsList className="mb-4">
                <TabsTrigger value="revenue">Revenue vs. Expenses</TabsTrigger>
                <TabsTrigger value="insights">AI Insights</TabsTrigger>
              </TabsList>
              
              <TabsContent value="revenue">
                <div className="h-64 flex items-end justify-between space-x-2">
                  {loanData.businessHealth.map((item, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div className="w-full flex space-x-1">
                        <div 
                          className="bg-loan rounded-t w-1/2" 
                          style={{ height: `${(item.revenue / 60000) * 180}px` }}
                        ></div>
                        <div 
                          className="bg-gray-300 rounded-t w-1/2" 
                          style={{ height: `${(item.expenses / 60000) * 180}px` }}
                        ></div>
                      </div>
                      <div className="text-xs mt-2">{item.month}</div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-4 space-x-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-loan rounded-full mr-2"></div>
                    <span className="text-sm">Revenue</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                    <span className="text-sm">Expenses</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="insights">
                <div className="space-y-4">
                  <div className="flex items-start p-4 border rounded-lg">
                    <TrendingUp className="text-green-600 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Positive Revenue Trend</h4>
                      <p className="text-sm text-gray-600">
                        Your business revenue has increased 15% over the last quarter, indicating healthy growth.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 border rounded-lg">
                    <TrendingDown className="text-amber-600 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Increasing Expense Ratio</h4>
                      <p className="text-sm text-gray-600">
                        Your expense to revenue ratio is trending upward. Consider reviewing operational costs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 border rounded-lg">
                    <AlertCircle className="text-blue-600 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Loan Utilization Opportunity</h4>
                      <p className="text-sm text-gray-600">
                        Based on your cash flow, you could benefit from utilizing more of your available credit line for growth.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* Mobile Apply Button (Only shows on small screens) */}
      <div className="sm:hidden">
        <Link to="/loan-application" className="block">
          <Button className="w-full">
            Apply for Loan
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
