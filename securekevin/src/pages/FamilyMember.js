
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarDays, CreditCard, FileText, FileMinus, FilePlus } from "lucide-react";

const FamilyMember = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for the family member dashboard
  const patientInfo = {
    name: "Michael Johnson",
    age: 72,
    condition: "Heart Disease",
    roomNumber: "205",
    assignedDoctor: "Dr. Emily Wilson",
    assignedNurse: "Sarah Johnson, RN"
  };

  // Medical overview data
  const currentWeekOverview = {
    heartRate: { average: 78, min: 72, max: 92 },
    bloodPressure: { average: "132/85", min: "120/80", max: "145/90" },
    oxygenSaturation: { average: 97, min: 95, max: 99 },
    medicationCompliance: 85,
    sleepQuality: 70,
    mobility: 65,
    meals: [
      { day: "Monday", breakfast: "Oatmeal with fruit", lunch: "Chicken salad", dinner: "Fish with vegetables" },
      { day: "Tuesday", breakfast: "Yogurt with granola", lunch: "Vegetable soup", dinner: "Grilled chicken" },
      { day: "Wednesday", breakfast: "Whole grain toast with eggs", lunch: "Turkey sandwich", dinner: "Pasta with tomato sauce" },
      { day: "Thursday", breakfast: "Fruit smoothie", lunch: "Quinoa salad", dinner: "Baked salmon" },
      { day: "Friday", breakfast: "Cereal with milk", lunch: "Lentil soup", dinner: "Vegetable stir-fry" },
      { day: "Saturday", breakfast: "Pancakes", lunch: "Grilled cheese sandwich", dinner: "Roast chicken" },
      { day: "Sunday", breakfast: "Scrambled eggs", lunch: "Caesar salad", dinner: "Vegetable lasagna" },
    ],
    appointments: [
      { date: "2025-05-15", time: "10:30 AM", type: "Physical Therapy" },
      { date: "2025-05-18", time: "2:00 PM", type: "Cardiologist Check-up" }
    ],
    activities: [
      { date: "2025-05-12", activity: "Morning walk", duration: "15 minutes", notes: "Completed without assistance" },
      { date: "2025-05-13", activity: "Group exercise", duration: "30 minutes", notes: "Participated enthusiastically" },
      { date: "2025-05-14", activity: "Physical therapy", duration: "45 minutes", notes: "Showed improvement in range of motion" },
    ]
  };

  const previousWeekOverview = {
    heartRate: { average: 80, min: 75, max: 95 },
    bloodPressure: { average: "135/88", min: "125/82", max: "148/92" },
    oxygenSaturation: { average: 96, min: 94, max: 98 },
    medicationCompliance: 80,
    sleepQuality: 65,
    mobility: 60,
    meals: [
      { day: "Monday", breakfast: "Scrambled eggs", lunch: "Vegetable soup", dinner: "Grilled chicken" },
      { day: "Tuesday", breakfast: "Oatmeal", lunch: "Tuna sandwich", dinner: "Pasta with meat sauce" },
      { day: "Wednesday", breakfast: "Yogurt with berries", lunch: "Chicken salad", dinner: "Baked fish" },
      { day: "Thursday", breakfast: "Toast with jam", lunch: "Bean soup", dinner: "Roast beef" },
      { day: "Friday", breakfast: "Fruit and yogurt", lunch: "Egg salad sandwich", dinner: "Vegetable curry" },
      { day: "Saturday", breakfast: "French toast", lunch: "Chicken noodle soup", dinner: "Grilled salmon" },
      { day: "Sunday", breakfast: "Cereal with banana", lunch: "Turkey wrap", dinner: "Beef stew" },
    ],
    appointments: [
      { date: "2025-05-08", time: "11:00 AM", type: "Blood Test" },
      { date: "2025-05-10", time: "3:30 PM", type: "Nutrition Consultation" }
    ],
    activities: [
      { date: "2025-05-05", activity: "Morning walk", duration: "10 minutes", notes: "Needed assistance" },
      { date: "2025-05-06", activity: "Group exercise", duration: "30 minutes", notes: "Participated partially" },
      { date: "2025-05-07", activity: "Physical therapy", duration: "45 minutes", notes: "Some difficulty with exercises" },
    ]
  };

  // Payment details data
  const billingDetails = {
    plan: "Comprehensive Care",
    monthlyCost: 3500,
    nextBillingDate: "2025-06-01",
    paymentMethod: {
      type: "Credit Card",
      lastFour: "4242",
      expiryDate: "09/27"
    },
    billingAddress: "123 Main Street, Anytown, CA 12345"
  };

  const previousTransactions = [
    { date: "2025-05-01", description: "Monthly Care Fee", amount: 3500 },
    { date: "2025-04-15", description: "Specialist Consultation", amount: 250 },
    { date: "2025-04-01", description: "Monthly Care Fee", amount: 3500 },
    { date: "2025-03-22", description: "Physical Therapy Sessions", amount: 350 },
    { date: "2025-03-01", description: "Monthly Care Fee", amount: 3500 },
  ];

  const upcomingTransactions = [
    { date: "2025-06-01", description: "Monthly Care Fee", amount: 3500 },
    { date: "2025-06-10", description: "Quarterly Health Assessment", amount: 500 },
    { date: "2025-07-01", description: "Monthly Care Fee", amount: 3500 },
  ];

  // Render medical overview section
  const renderMedicalOverview = () => (
    <Tabs defaultValue="current-week" className="w-full">
      <TabsList className="grid w-full max-w-md grid-cols-2">
        <TabsTrigger value="current-week">Current Week</TabsTrigger>
        <TabsTrigger value="previous-week">Previous Week</TabsTrigger>
      </TabsList>
      
      <TabsContent value="current-week" className="space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              Current Week Overview
            </CardTitle>
            <CardDescription>
              Medical data for the current week
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Vital Signs</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Heart Rate</span>
                      <span className="text-sm text-muted-foreground">{currentWeekOverview.heartRate.average} bpm (Range: {currentWeekOverview.heartRate.min}-{currentWeekOverview.heartRate.max})</span>
                    </div>
                    <Progress value={currentWeekOverview.heartRate.average} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Blood Pressure</span>
                      <span className="text-sm text-muted-foreground">{currentWeekOverview.bloodPressure.average}</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Oxygen Saturation</span>
                      <span className="text-sm text-muted-foreground">{currentWeekOverview.oxygenSaturation.average}%</span>
                    </div>
                    <Progress value={currentWeekOverview.oxygenSaturation.average} className="h-2" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Wellness Metrics</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Medication Compliance</span>
                      <span className="text-sm text-muted-foreground">{currentWeekOverview.medicationCompliance}%</span>
                    </div>
                    <Progress value={currentWeekOverview.medicationCompliance} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Sleep Quality</span>
                      <span className="text-sm text-muted-foreground">{currentWeekOverview.sleepQuality}%</span>
                    </div>
                    <Progress value={currentWeekOverview.sleepQuality} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Mobility</span>
                      <span className="text-sm text-muted-foreground">{currentWeekOverview.mobility}%</span>
                    </div>
                    <Progress value={currentWeekOverview.mobility} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Weekly Meal Plan</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Day</TableHead>
                      <TableHead>Breakfast</TableHead>
                      <TableHead>Lunch</TableHead>
                      <TableHead>Dinner</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentWeekOverview.meals.map((meal, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{meal.day}</TableCell>
                        <TableCell>{meal.breakfast}</TableCell>
                        <TableCell>{meal.lunch}</TableCell>
                        <TableCell>{meal.dinner}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Upcoming Appointments</h3>
                <div className="space-y-2">
                  {currentWeekOverview.appointments.map((appointment, index) => (
                    <div key={index} className="p-3 border rounded-md">
                      <div className="flex justify-between">
                        <div className="font-medium">{appointment.type}</div>
                        <div className="text-sm text-muted-foreground">{appointment.date}</div>
                      </div>
                      <div className="text-sm text-muted-foreground">{appointment.time}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Recent Activities</h3>
                <div className="space-y-2">
                  {currentWeekOverview.activities.map((activity, index) => (
                    <div key={index} className="p-3 border rounded-md">
                      <div className="flex justify-between">
                        <div className="font-medium">{activity.activity}</div>
                        <div className="text-sm text-muted-foreground">{activity.date}</div>
                      </div>
                      <div className="text-sm">{activity.duration}</div>
                      <div className="text-sm text-muted-foreground">{activity.notes}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="previous-week" className="space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              Previous Week Overview
            </CardTitle>
            <CardDescription>
              Medical data for the previous week
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Vital Signs</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Heart Rate</span>
                      <span className="text-sm text-muted-foreground">{previousWeekOverview.heartRate.average} bpm (Range: {previousWeekOverview.heartRate.min}-{previousWeekOverview.heartRate.max})</span>
                    </div>
                    <Progress value={previousWeekOverview.heartRate.average} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Blood Pressure</span>
                      <span className="text-sm text-muted-foreground">{previousWeekOverview.bloodPressure.average}</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Oxygen Saturation</span>
                      <span className="text-sm text-muted-foreground">{previousWeekOverview.oxygenSaturation.average}%</span>
                    </div>
                    <Progress value={previousWeekOverview.oxygenSaturation.average} className="h-2" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Wellness Metrics</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Medication Compliance</span>
                      <span className="text-sm text-muted-foreground">{previousWeekOverview.medicationCompliance}%</span>
                    </div>
                    <Progress value={previousWeekOverview.medicationCompliance} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Sleep Quality</span>
                      <span className="text-sm text-muted-foreground">{previousWeekOverview.sleepQuality}%</span>
                    </div>
                    <Progress value={previousWeekOverview.sleepQuality} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Mobility</span>
                      <span className="text-sm text-muted-foreground">{previousWeekOverview.mobility}%</span>
                    </div>
                    <Progress value={previousWeekOverview.mobility} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Weekly Meal Plan</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Day</TableHead>
                      <TableHead>Breakfast</TableHead>
                      <TableHead>Lunch</TableHead>
                      <TableHead>Dinner</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {previousWeekOverview.meals.map((meal, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{meal.day}</TableCell>
                        <TableCell>{meal.breakfast}</TableCell>
                        <TableCell>{meal.lunch}</TableCell>
                        <TableCell>{meal.dinner}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Appointments</h3>
                <div className="space-y-2">
                  {previousWeekOverview.appointments.map((appointment, index) => (
                    <div key={index} className="p-3 border rounded-md">
                      <div className="flex justify-between">
                        <div className="font-medium">{appointment.type}</div>
                        <div className="text-sm text-muted-foreground">{appointment.date}</div>
                      </div>
                      <div className="text-sm text-muted-foreground">{appointment.time}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Activities</h3>
                <div className="space-y-2">
                  {previousWeekOverview.activities.map((activity, index) => (
                    <div key={index} className="p-3 border rounded-md">
                      <div className="flex justify-between">
                        <div className="font-medium">{activity.activity}</div>
                        <div className="text-sm text-muted-foreground">{activity.date}</div>
                      </div>
                      <div className="text-sm">{activity.duration}</div>
                      <div className="text-sm text-muted-foreground">{activity.notes}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );

  // Render payment details section
  const renderPaymentDetails = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Current Billing Details
          </CardTitle>
          <CardDescription>Your current payment plan and method</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Care Plan</p>
                <p className="font-medium">{billingDetails.plan}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Monthly Cost</p>
                <p className="font-medium">${billingDetails.monthlyCost.toLocaleString()}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Next Billing Date</p>
                <p className="font-medium">{billingDetails.nextBillingDate}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Payment Method</p>
                <p className="font-medium">{billingDetails.paymentMethod.type} ending in {billingDetails.paymentMethod.lastFour}</p>
                <p className="text-xs text-muted-foreground">Expires {billingDetails.paymentMethod.expiryDate}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Billing Address</p>
                <p className="font-medium">{billingDetails.billingAddress}</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Update Payment Method</Button>
        </CardFooter>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileMinus className="h-5 w-5" />
              Previous Transactions
            </CardTitle>
            <CardDescription>Your payment history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {previousTransactions.map((transaction, index) => (
                <div key={index} className="flex justify-between p-3 border rounded-md">
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${transaction.amount.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline">View All History</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FilePlus className="h-5 w-5" />
              Upcoming Transactions
            </CardTitle>
            <CardDescription>Scheduled future payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {upcomingTransactions.map((transaction, index) => (
                <div key={index} className="flex justify-between p-3 border rounded-md">
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${transaction.amount.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Family Member Dashboard</h1>
            <p className="text-muted-foreground">Monitor your loved one's care and manage payments</p>
          </div>
          
          <Card className="w-full md:w-auto">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Patient</p>
                  <p className="font-bold">{patientInfo.name}</p>
                  <p className="text-xs text-muted-foreground">Room {patientInfo.roomNumber} | {patientInfo.condition}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardContent className="p-0">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full border-b rounded-none p-0 h-auto bg-transparent">
                <div className="flex overflow-x-auto">
                  <TabsTrigger 
                    value="overview" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3"
                  >
                    Medical Overview
                  </TabsTrigger>
                  <TabsTrigger 
                    value="payments" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3"
                  >
                    Payment Details
                  </TabsTrigger>
                </div>
              </TabsList>
              
              <div className="p-4 md:p-6">
                <TabsContent value="overview" className="m-0">
                  {renderMedicalOverview()}
                </TabsContent>
                
                <TabsContent value="payments" className="m-0">
                  {renderPaymentDetails()}
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Patient Info</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-muted-foreground">Age</p>
                  <p className="font-medium">{patientInfo.age} years</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Medical Condition</p>
                  <p className="font-medium">{patientInfo.condition}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Room Number</p>
                  <p className="font-medium">{patientInfo.roomNumber}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Care Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-muted-foreground">Primary Doctor</p>
                  <p className="font-medium">{patientInfo.assignedDoctor}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Primary Nurse</p>
                  <p className="font-medium">{patientInfo.assignedNurse}</p>
                </div>
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full">Contact Care Team</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full">Schedule Visit</Button>
                <Button variant="outline" size="sm" className="w-full">Request Medical Records</Button>
                <Button variant="outline" size="sm" className="w-full">Update Emergency Contact</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FamilyMember;
