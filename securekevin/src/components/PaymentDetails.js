import React, { useState } from 'react';
import { CreditCard, Clock, Check, AlertCircle } from 'lucide-react';

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

  // Status indicator component
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
            <button style={{ 
              backgroundColor: 'hsl(var(--primary))', 
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius)',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Update Payment Method
            </button>
            <button style={{ 
              backgroundColor: 'transparent', 
              border: '1px solid hsl(var(--border))',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius)',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
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
          <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', backgroundColor: 'hsl(var(--secondary))', borderRadius: 'var(--radius)' }}>
            <AlertCircle size={18} />
            <p style={{ fontSize: '0.875rem' }}>Automatic payments will be processed on the scheduled dates using your default payment method.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PaymentDetails;
