
/*
import React, { useState } from 'react';
import { 
  Home, User, Calendar, CreditCard, Bell, Settings, Activity, Heart, Clock, Check, AlertCircle
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import DashboardLayout from '../components/DashboardLayout';
import '../family.css';

// Main Family Member Dashboard Component
const FamilyMember = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <DashboardLayout activePage={activeTab}>
      <Tabs defaultValue={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsContent value="dashboard">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Medical Overview</h2>
            <MedicalOverview />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Payment Details</h2>
            <PaymentDetails />
          </div>
        </TabsContent>
        
        <TabsContent value="profile">
          <PatientProfile />
        </TabsContent>
        
        <TabsContent value="records">
          <MedicalRecords />
        </TabsContent>
        
        <TabsContent value="payments">
          <PaymentsPage />
        </TabsContent>
        
        <TabsContent value="settings">
          <SettingsPage />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

// Overview Card Component
const OverviewCard = ({ title, value, description, icon: Icon }) => (
  <div className="overview-card">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
      <h3 className="overview-title">{title}</h3>
      <Icon size={18} color="#1E88E5" />
    </div>
    <p className="overview-value">{value}</p>
    <p className="overview-description">{description}</p>
  </div>
);

// Weekly Overview Component
const WeeklyOverview = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          <Calendar size={20} />
          <span>{data.week}</span>
        </h2>
        <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>{data.dateRange}</span>
      </div>
      <div className="card-grid">
        {data.metrics.map((metric, index) => (
          <OverviewCard
            key={index}
            title={metric.title}
            value={metric.value}
            description={metric.description}
            icon={metric.icon}
          />
        ))}
      </div>
    </div>
  );
};

// Medical Overview Component
const MedicalOverview = () => {
  const [activeTab, setActiveTab] = useState('current');
  
  // Sample data
  const currentWeekData = {
    week: 'Current Week',
    dateRange: 'May 10 - May 16, 2025',
    metrics: [
      {
        title: 'Heart Rate',
        value: '72 bpm',
        description: 'Average resting heart rate',
        icon: Heart
      },
      {
        title: 'Blood Pressure',
        value: '120/80',
        description: 'Average systolic/diastolic',
        icon: Activity
      },
      {
        title: 'Medication Adherence',
        value: '95%',
        description: '19 out of 20 doses taken',
        icon: Clock
      },
      {
        title: 'Physical Activity',
        value: '8.2k',
        description: 'Average daily steps',
        icon: Activity
      }
    ]
  };

  const previousWeeks = [
    {
      week: 'Last Week',
      dateRange: 'May 3 - May 9, 2025',
      metrics: [
        {
          title: 'Heart Rate',
          value: '75 bpm',
          description: 'Average resting heart rate',
          icon: Heart
        },
        {
          title: 'Blood Pressure',
          value: '125/85',
          description: 'Average systolic/diastolic',
          icon: Activity
        },
        {
          title: 'Medication Adherence',
          value: '90%',
          description: '18 out of 20 doses taken',
          icon: Clock
        },
        {
          title: 'Physical Activity',
          value: '7.8k',
          description: 'Average daily steps',
          icon: Activity
        }
      ]
    },
    {
      week: 'Two Weeks Ago',
      dateRange: 'April 26 - May 2, 2025',
      metrics: [
        {
          title: 'Heart Rate',
          value: '78 bpm',
          description: 'Average resting heart rate',
          icon: Heart
        },
        {
          title: 'Blood Pressure',
          value: '130/88',
          description: 'Average systolic/diastolic',
          icon: Activity
        },
        {
          title: 'Medication Adherence',
          value: '85%',
          description: '17 out of 20 doses taken',
          icon: Clock
        },
        {
          title: 'Physical Activity',
          value: '6.5k',
          description: 'Average daily steps',
          icon: Activity
        }
      ]
    }
  ];

  return (
    <section>
      <div className="tab-group">
        <div 
          className={`tab ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => setActiveTab('current')}
        >
          Current Overview
        </div>
        <div 
          className={`tab ${activeTab === 'previous' ? 'active' : ''}`}
          onClick={() => setActiveTab('previous')}
        >
          Previous Overviews
        </div>
      </div>

      {activeTab === 'current' && (
        <WeeklyOverview data={currentWeekData} />
      )}

      {activeTab === 'previous' && (
        <>
          {previousWeeks.map((week, index) => (
            <WeeklyOverview key={index} data={week} />
          ))}
        </>
      )}
    </section>
  );
};

// Status Indicator Component for Payments
const StatusIndicator = ({ status }) => {
  let statusClass = '';
  let statusText = '';
  
  switch(status) {
    case 'completed':
      statusClass = 'status-dot-green';
      statusText = 'Completed';
      break;
    case 'pending':
      statusClass = 'status-dot-amber';
      statusText = 'Pending';
      break;
    case 'scheduled':
      statusClass = 'status-dot-amber';
      statusText = 'Scheduled';
      break;
    case 'failed':
      statusClass = 'status-dot-red';
      statusText = 'Failed';
      break;
    default:
      statusClass = '';
      statusText = status;
  }
  
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span className={`status-dot ${statusClass}`}></span>
      <span>{statusText}</span>
    </div>
  );
};

// Payment Details Component
const PaymentDetails = () => {
  const [activeTab, setActiveTab] = useState('current');

  // Sample billing details
  const billingDetails = {
    planName: "Family Health Plus",
    monthlyCost: "$299.99",
    nextBillingDate: "June 1, 2025",
    paymentMethod: "VISA ending in 4242",
    billingAddress: "123 Healthcare Ave, Medical City, MD 20814"
  };

  // Sample transactions data
  const transactions = [
    {
      id: "TX123456",
      date: "May 1, 2025",
      description: "Monthly subscription",
      amount: "$299.99",
      status: "completed"
    },
    {
      id: "TX123455",
      date: "April 1, 2025",
      description: "Monthly subscription",
      amount: "$299.99",
      status: "completed"
    },
    {
      id: "TX123454",
      date: "March 1, 2025",
      description: "Monthly subscription",
      amount: "$299.99",
      status: "completed"
    },
    {
      id: "TX123453",
      date: "February 1, 2025",
      description: "Monthly subscription",
      amount: "$274.99",
      status: "completed"
    }
  ];

  // Sample upcoming transactions
  const upcomingTransactions = [
    {
      id: "UTX12345",
      date: "June 1, 2025",
      description: "Monthly subscription",
      amount: "$299.99",
      status: "pending"
    },
    {
      id: "UTX12346",
      date: "June 15, 2025",
      description: "Specialist consultation fee",
      amount: "$150.00",
      status: "scheduled"
    }
  ];

  return (
    <section>
      <div className="tab-group">
        <div 
          className={`tab ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => setActiveTab('current')}
        >
          Billing Details
        </div>
        <div 
          className={`tab ${activeTab === 'previous' ? 'active' : ''}`}
          onClick={() => setActiveTab('previous')}
        >
          Previous Transactions
        </div>
        <div 
          className={`tab ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Payments
        </div>
      </div>

      {activeTab === 'current' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <CreditCard size={20} />
              <span>Current Billing Information</span>
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div className="overview-card">
              <h3 className="overview-title">Plan</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>{billingDetails.planName}</p>
              <p className="overview-description">Family coverage for 4 members</p>
            </div>
            
            <div className="overview-card">
              <h3 className="overview-title">Monthly Cost</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: '700' }}>{billingDetails.monthlyCost}</p>
              <p className="overview-description">Billed on the 1st of each month</p>
            </div>

            <div className="overview-card">
              <h3 className="overview-title">Next Billing Date</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>{billingDetails.nextBillingDate}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem' }}>
                <Clock size={16} />
                <p className="overview-description">Auto-payment scheduled</p>
              </div>
            </div>

            <div className="overview-card">
              <h3 className="overview-title">Payment Method</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>{billingDetails.paymentMethod}</p>
              <p className="overview-description">Expires 09/2026</p>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Billing Address</h3>
            <p>{billingDetails.billingAddress}</p>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
            <button className="primary-button">
              Update Payment Method
            </button>
            <button className="secondary-button">
              Billing History
            </button>
          </div>
        </div>
      )}

      {activeTab === 'previous' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <Check size={20} />
              <span>Transaction History</span>
            </h2>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                    <td>
                      <StatusIndicator status={transaction.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'upcoming' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <Clock size={20} />
              <span>Upcoming Payments</span>
            </h2>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {upcomingTransactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                    <td>
                      <StatusIndicator status={transaction.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="alert-box">
            <AlertCircle size={18} />
            <p>Automatic payments will be processed on the scheduled dates using your default payment method.</p>
          </div>
        </div>
      )}
    </section>
  );
};

// Patient Profile Page
const PatientProfile = () => {
  return (
    <div className="profile-page">
      <h1 className="page-title">Patient Profile</h1>
      
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">
            <User size={20} />
            <span>Personal Information</span>
          </h2>
        </div>
        
        <div className="profile-details">
          <div className="profile-avatar">
            <div className="avatar-placeholder">NH</div>
          </div>
          
          <div className="profile-info">
            <div className="info-group">
              <h3 className="info-label">Name</h3>
              <p className="info-value">namehere</p>
            </div>
            
            <div className="info-group">
              <h3 className="info-label">Date of Birth</h3>
              <p className="info-value">January 15, 1985</p>
            </div>
            
            <div className="info-group">
              <h3 className="info-label">Contact Number</h3>
              <p className="info-value">(555) 123-4567</p>
            </div>
            
            <div className="info-group">
              <h3 className="info-label">Email Address</h3>
              <p className="info-value">namehere@example.com</p>
            </div>
            
            <div className="info-group">
              <h3 className="info-label">Emergency Contact</h3>
              <p className="info-value">namehere (Spouse) - (555) 987-6543</p>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
          <button className="primary-button">
            Edit Profile
          </button>
          <button className="secondary-button">
            Change Password
          </button>
        </div>
      </div>
      
      <div className="card" style={{ marginTop: '2rem' }}>
        <div className="card-header">
          <h2 className="card-title">
            <Activity size={20} />
            <span>Health Information</span>
          </h2>
        </div>
        
        <div className="health-details">
          <div className="info-group">
            <h3 className="info-label">Blood Type</h3>
            <p className="info-value">A+</p>
          </div>
          
          <div className="info-group">
            <h3 className="info-label">Height</h3>
            <p className="info-value">5'10" (178 cm)</p>
          </div>
          
          <div className="info-group">
            <h3 className="info-label">Weight</h3>
            <p className="info-value">168 lbs (76 kg)</p>
          </div>
          
          <div className="info-group">
            <h3 className="info-label">Allergies</h3>
            <p className="info-value">Penicillin, Peanuts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Medical Records Page
const MedicalRecords = () => {
  const [activeTab, setActiveTab] = useState('visits');
  
  const medicalVisits = [
    {
      id: "VS123456",
      date: "April 15, 2025",
      doctor: "namehere",
      specialty: "Family Medicine",
      reason: "Annual Physical",
      notes: "Patient is in good health. Follow-up in 12 months."
    },
    {
      id: "VS123455",
      date: "March 3, 2025",
      doctor: "namehere",
      specialty: "Dermatology",
      reason: "Skin Rash",
      notes: "Prescribed topical cream. Rash should clear up in 7-10 days."
    },
    {
      id: "VS123454",
      date: "January 22, 2025",
      doctor: "namehere",
      specialty: "Orthopedics",
      reason: "Knee Pain",
      notes: "MRI scheduled. Physical therapy recommended twice weekly."
    }
  ];
  
  const prescriptions = [
    {
      id: "PR123456",
      medication: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      prescribed: "April 15, 2025",
      refills: "3 remaining",
      doctor: "namehere"
    },
    {
      id: "PR123455",
      medication: "Atorvastatin",
      dosage: "20mg",
      frequency: "Once daily at bedtime",
      prescribed: "April 15, 2025",
      refills: "3 remaining",
      doctor: "namehere"
    },
    {
      id: "PR123454",
      medication: "Triamcinolone Cream",
      dosage: "0.1%",
      frequency: "Apply to affected area twice daily",
      prescribed: "March 3, 2025",
      refills: "0 remaining",
      doctor: "namehere"
    }
  ];
  
  const testResults = [
    {
      id: "TR123456",
      test: "Complete Blood Count",
      date: "April 15, 2025",
      status: "completed",
      result: "Normal",
      notes: "All values within normal range."
    },
    {
      id: "TR123455",
      test: "Lipid Panel",
      date: "April 15, 2025",
      status: "completed",
      result: "Abnormal",
      notes: "LDL slightly elevated. Dietary changes recommended."
    },
    {
      id: "TR123454",
      test: "MRI - Right Knee",
      date: "January 24, 2025",
      status: "completed",
      result: "Abnormal",
      notes: "Minor meniscus tear. Physical therapy recommended."
    }
  ];
  
  return (
    <div className="records-page">
      <h1 className="page-title">Medical Records</h1>
      
      <div className="tab-group">
        <div 
          className={`tab ${activeTab === 'visits' ? 'active' : ''}`}
          onClick={() => setActiveTab('visits')}
        >
          Doctor Visits
        </div>
        <div 
          className={`tab ${activeTab === 'prescriptions' ? 'active' : ''}`}
          onClick={() => setActiveTab('prescriptions')}
        >
          Prescriptions
        </div>
        <div 
          className={`tab ${activeTab === 'tests' ? 'active' : ''}`}
          onClick={() => setActiveTab('tests')}
        >
          Test Results
        </div>
      </div>
      
      {activeTab === 'visits' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <Calendar size={20} />
              <span>Recent Doctor Visits</span>
            </h2>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Doctor</th>
                  <th>Specialty</th>
                  <th>Reason</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {medicalVisits.map((visit) => (
                  <tr key={visit.id}>
                    <td>{visit.date}</td>
                    <td>{visit.doctor}</td>
                    <td>{visit.specialty}</td>
                    <td>{visit.reason}</td>
                    <td>{visit.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
            <button className="secondary-button">View All Visits</button>
          </div>
        </div>
      )}
      
      {activeTab === 'prescriptions' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <Clock size={20} />
              <span>Current Prescriptions</span>
            </h2>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Medication</th>
                  <th>Dosage</th>
                  <th>Frequency</th>
                  <th>Prescribed</th>
                  <th>Refills</th>
                  <th>Doctor</th>
                </tr>
              </thead>
              <tbody>
                {prescriptions.map((prescription) => (
                  <tr key={prescription.id}>
                    <td>{prescription.medication}</td>
                    <td>{prescription.dosage}</td>
                    <td>{prescription.frequency}</td>
                    <td>{prescription.prescribed}</td>
                    <td>{prescription.refills}</td>
                    <td>{prescription.doctor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
            <button className="secondary-button">Request Refill</button>
          </div>
        </div>
      )}
      
      {activeTab === 'tests' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <Activity size={20} />
              <span>Test Results</span>
            </h2>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Test</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Result</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {testResults.map((test) => (
                  <tr key={test.id}>
                    <td>{test.test}</td>
                    <td>{test.date}</td>
                    <td>
                      <StatusIndicator status={test.status} />
                    </td>
                    <td>{test.result}</td>
                    <td>{test.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
            <button className="secondary-button">Download Results</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Payments Page
const PaymentsPage = () => {
  return (
    <div className="payments-page">
      <h1 className="page-title">Payments</h1>
      
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">
            <CreditCard size={20} />
            <span>Payment Methods</span>
          </h2>
        </div>
        
        <div className="payment-methods">
          <div className="payment-method-card">
            <div className="payment-method-header">
              <div className="payment-method-type">VISA</div>
              <div className="payment-method-default-badge">Default</div>
            </div>
            <div className="payment-method-number">**** **** **** 4242</div>
            <div className="payment-method-details">
              <div>namehere</div>
              <div>Expires 09/2026</div>
            </div>
          </div>
          
          <div className="payment-method-card add-new">
            <div className="add-payment-method">
              <div className="add-icon">+</div>
              <div>Add New Payment Method</div>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Recent Payments</h3>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>May 1, 2025</td>
                  <td>Monthly subscription</td>
                  <td>$299.99</td>
                  <td>VISA ending in 4242</td>
                  <td><StatusIndicator status="completed" /></td>
                </tr>
                <tr>
                  <td>April 15, 2025</td>
                  <td>Specialist consultation</td>
                  <td>$75.00</td>
                  <td>VISA ending in 4242</td>
                  <td><StatusIndicator status="completed" /></td>
                </tr>
                <tr>
                  <td>April 1, 2025</td>
                  <td>Monthly subscription</td>
                  <td>$299.99</td>
                  <td>VISA ending in 4242</td>
                  <td><StatusIndicator status="completed" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Settings Page
const SettingsPage = () => {
  return (
    <div className="settings-page">
      <h1 className="page-title">Settings</h1>
      
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">
            <Settings size={20} />
            <span>Account Settings</span>
          </h2>
        </div>
        
        <div className="settings-group">
          <h3 className="settings-group-title">Personal Information</h3>
          <div className="settings-item">
            <div className="settings-item-label">Name</div>
            <div className="settings-item-value">namehere</div>
            <button className="secondary-button settings-button">Edit</button>
          </div>
          <div className="settings-item">
            <div className="settings-item-label">Email</div>
            <div className="settings-item-value">namehere@example.com</div>
            <button className="secondary-button settings-button">Edit</button>
          </div>
          <div className="settings-item">
            <div className="settings-item-label">Phone</div>
            <div className="settings-item-value">(555) 123-4567</div>
            <button className="secondary-button settings-button">Edit</button>
          </div>
          <div className="settings-item">
            <div className="settings-item-label">Password</div>
            <div className="settings-item-value">••••••••••••</div>
            <button className="secondary-button settings-button">Change</button>
          </div>
        </div>
        
        <div className="settings-group">
          <h3 className="settings-group-title">Notifications</h3>
          <div className="settings-item">
            <div className="settings-item-label">Email Notifications</div>
            <div className="settings-item-value">Enabled</div>
            <div className="toggle-switch enabled"></div>
          </div>
          <div className="settings-item">
            <div className="settings-item-label">SMS Notifications</div>
            <div className="settings-item-value">Disabled</div>
            <div className="toggle-switch"></div>
          </div>
          <div className="settings-item">
            <div className="settings-item-label">Appointment Reminders</div>
            <div className="settings-item-value">24 hours before</div>
            <button className="secondary-button settings-button">Edit</button>
          </div>
        </div>
        
        <div className="settings-group">
          <h3 className="settings-group-title">Privacy</h3>
          <div className="settings-item">
            <div className="settings-item-label">Two-Factor Authentication</div>
            <div className="settings-item-value">Disabled</div>
            <button className="secondary-button settings-button">Enable</button>
          </div>
          <div className="settings-item">
            <div className="settings-item-label">Data Sharing</div>
            <div className="settings-item-value">Minimal</div>
            <button className="secondary-button settings-button">Edit</button>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem' }}>
          <button className="primary-button">
            Save Changes
          </button>
          <button className="secondary-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FamilyMember;
