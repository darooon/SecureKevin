
import React, { useState } from 'react';
import { 
  Home, User, Calendar, CreditCard, Menu, ChevronRight,
  ChevronLeft, Bell, Settings, Activity, Heart, Clock, Check, AlertCircle
} from 'lucide-react';
import '../family.css';

// Main Family Member Dashboard Component
const FamilyMember = () => {
  return (
    <div className="healthcare-dashboard">
      <Sidebar />
      <main className="main-content">
        <DashboardHeader />
        
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Medical Overview</h2>
          <MedicalOverview />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Payment Details</h2>
          <PaymentDetails />
        </div>
      </main>
    </div>
  );
};

// Sidebar Component
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const navigationItems = [
    { name: 'Dashboard', icon: Home, href: '/' },
    { name: 'Patient Profile', icon: User, href: '/profile' },
    { name: 'Medical Records', icon: Calendar, href: '/records' },
    { name: 'Payments', icon: CreditCard, href: '/payments' },
    { name: 'Settings', icon: Settings, href: '/settings' }
  ];

  return (
    <aside className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          {!collapsed && <span>MediCare</span>}
          {collapsed && <span>MC</span>}
        </div>
        <button 
          onClick={toggleSidebar} 
          style={{ 
            marginLeft: 'auto',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '4px'
          }}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
      <nav className="sidebar-nav">
        {navigationItems.map((item) => (
          <a 
            key={item.name}
            href={item.href}
            className={`sidebar-link ${item.name.toLowerCase() === 'dashboard' ? 'active' : ''}`}
          >
            <item.icon size={18} />
            <span className="sidebar-link-text">{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

// Dashboard Header Component
const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <h1 className="dashboard-title">Family Healthcare Dashboard</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <Bell size={20} />
        </button>
        <div style={{ 
          width: '36px', 
          height: '36px', 
          borderRadius: '50%', 
          backgroundColor: '#1E88E5', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'white',
          fontWeight: '500'
        }}>
          JD
        </div>
      </div>
    </div>
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

export default FamilyMember;