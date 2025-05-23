import React, { useState } from 'react';
import '../styles/family-dashboard.css';

const FamilyDashboard = () => {
  const [activeTab, setActiveTab] = useState('medical-overview');

  // Mock patient data
  const [patientInfo] = useState({
    name: 'Robert Johnson',
    age: 78,
    room: '205A',
    admissionDate: '2024-11-15',
    primaryNurse: 'Sarah Wilson, RN',
    primaryDoctor: 'Dr. Michael Chen'
  });

  // Mock medical overview data
  const [currentWeekOverview] = useState({
    weekOf: '2025-05-19',
    overallCondition: 'Stable and Improving',
    vitalSigns: {
      bloodPressure: '125/80 mmHg',
      heartRate: '72 bpm',
      temperature: '98.6°F',
      oxygenSaturation: '97%'
    },
    medications: [
      { name: 'Lisinopril 10mg', frequency: 'Once daily', lastGiven: '2025-05-22 08:00' },
      { name: 'Metformin 500mg', frequency: 'Twice daily', lastGiven: '2025-05-22 18:00' },
      { name: 'Aspirin 81mg', frequency: 'Once daily', lastGiven: '2025-05-22 08:00' }
    ],
    activities: [
      { date: '2025-05-22', activity: 'Physical Therapy Session', notes: 'Great progress with mobility exercises' },
      { date: '2025-05-21', activity: 'Doctor Consultation', notes: 'Reviewed treatment plan, adjusting medication' },
      { date: '2025-05-20', activity: 'Vital Signs Check', notes: 'All vitals within normal range' },
      { date: '2025-05-19', activity: 'Blood Work', notes: 'Lab results show improvement in blood sugar levels' }
    ],
    nurseNotes: [
      { date: '2025-05-22', note: 'Patient in good spirits, engaging well with staff and therapy' },
      { date: '2025-05-21', note: 'Appetite has improved, eating full meals' },
      { date: '2025-05-20', note: 'Sleeping well, no complaints of pain' }
    ]
  });

  const [previousWeeks] = useState([
    {
      weekOf: '2025-05-12',
      overallCondition: 'Stable',
      keyEvents: ['Started new physical therapy routine', 'Medication adjustment', 'Family visit on Sunday'],
      avgVitals: 'Blood pressure: 130/85, Heart rate: 75 bpm'
    },
    {
      weekOf: '2025-05-05',
      overallCondition: 'Good Progress',
      keyEvents: ['Successful mobility assessment', 'Dietary changes implemented', 'Social activities participation'],
      avgVitals: 'Blood pressure: 135/88, Heart rate: 78 bpm'
    },
    {
      weekOf: '2025-04-28',
      overallCondition: 'Recovering Well',
      keyEvents: ['Initial assessment completed', 'Care plan established', 'Family orientation meeting'],
      avgVitals: 'Blood pressure: 140/90, Heart rate: 80 bpm'
    }
  ]);

  // Mock billing data
  const [currentBilling] = useState({
    monthlyRate: 4500,
    additionalServices: [
      { service: 'Physical Therapy', cost: 300, frequency: 'Weekly' },
      { service: 'Medication Management', cost: 150, frequency: 'Monthly' },
      { service: 'Doctor Consultations', cost: 200, frequency: 'Bi-weekly' }
    ],
    currentBalance: 4850,
    nextPaymentDue: '2025-06-01',
    paymentMethod: 'Auto-pay (Bank Transfer)'
  });

  const [previousTransactions] = useState([
    { id: 1, date: '2025-05-01', description: 'Monthly Care Fee - May 2025', amount: 4500, status: 'Paid' },
    { id: 2, date: '2025-05-01', description: 'Physical Therapy - May 2025', amount: 300, status: 'Paid' },
    { id: 3, date: '2025-04-01', description: 'Monthly Care Fee - April 2025', amount: 4500, status: 'Paid' },
    { id: 4, date: '2025-04-01', description: 'Doctor Consultation', amount: 200, status: 'Paid' },
    { id: 5, date: '2025-03-01', description: 'Monthly Care Fee - March 2025', amount: 4500, status: 'Paid' }
  ]);

  const [upcomingTransactions] = useState([
    { id: 1, date: '2025-06-01', description: 'Monthly Care Fee - June 2025', amount: 4500, status: 'Scheduled' },
    { id: 2, date: '2025-06-01', description: 'Physical Therapy - June 2025', amount: 300, status: 'Scheduled' },
    { id: 3, date: '2025-06-15', description: 'Doctor Consultation', amount: 200, status: 'Scheduled' }
  ]);

  // Render medical overview section
  const renderMedicalOverview = () => (
    <div className="section-container">
      <h2 className="section-title">Medical Overview</h2>
      
      {/* Patient Information Card */}
      <div className="patient-info-card">
        <div className="patient-header">
          <div className="patient-avatar">
            <div className="avatar-placeholder">
              {patientInfo.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          <div className="patient-details">
            <h3 className="patient-name">{patientInfo.name}</h3>
            <div className="patient-meta">
              <div className="meta-item">
                <span className="meta-label">Age:</span>
                <span className="meta-value">{patientInfo.age}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Room:</span>
                <span className="meta-value">{patientInfo.room}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Admitted:</span>
                <span className="meta-value">{patientInfo.admissionDate}</span>
              </div>
            </div>
            <div className="care-team">
              <div className="team-member">
                <span className="team-label">Primary Nurse:</span>
                <span className="team-value">{patientInfo.primaryNurse}</span>
              </div>
              <div className="team-member">
                <span className="team-label">Primary Doctor:</span>
                <span className="team-value">{patientInfo.primaryDoctor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Week Overview */}
      <div className="overview-section">
        <h3 className="subsection-title">Current Week Overview - Week of {currentWeekOverview.weekOf}</h3>
        
        <div className="condition-banner">
          <div className="condition-indicator good"></div>
          <div className="condition-text">
            <span className="condition-label">Overall Condition:</span>
            <span className="condition-value">{currentWeekOverview.overallCondition}</span>
          </div>
        </div>

        <div className="overview-grid">
          {/* Vital Signs */}
          <div className="overview-card">
            <h4 className="card-title">Current Vital Signs</h4>
            <div className="vitals-grid">
              <div className="vital-item">
                <span className="vital-label">Blood Pressure</span>
                <span className="vital-value">{currentWeekOverview.vitalSigns.bloodPressure}</span>
              </div>
              <div className="vital-item">
                <span className="vital-label">Heart Rate</span>
                <span className="vital-value">{currentWeekOverview.vitalSigns.heartRate}</span>
              </div>
              <div className="vital-item">
                <span className="vital-label">Temperature</span>
                <span className="vital-value">{currentWeekOverview.vitalSigns.temperature}</span>
              </div>
              <div className="vital-item">
                <span className="vital-label">Oxygen Saturation</span>
                <span className="vital-value">{currentWeekOverview.vitalSigns.oxygenSaturation}</span>
              </div>
            </div>
          </div>

          {/* Current Medications */}
          <div className="overview-card">
            <h4 className="card-title">Current Medications</h4>
            <div className="medications-list">
              {currentWeekOverview.medications.map((med, index) => (
                <div key={index} className="medication-item">
                  <div className="med-name">{med.name}</div>
                  <div className="med-frequency">{med.frequency}</div>
                  <div className="med-last-given">Last given: {med.lastGiven}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="activities-section">
          <h4 className="card-title">Recent Medical Activities</h4>
          <div className="activities-table">
            <div className="table-header">
              <div className="header-cell">Date</div>
              <div className="header-cell">Activity</div>
              <div className="header-cell">Notes</div>
            </div>
            {currentWeekOverview.activities.map((activity, index) => (
              <div key={index} className="table-row">
                <div className="table-cell">{activity.date}</div>
                <div className="table-cell">{activity.activity}</div>
                <div className="table-cell">{activity.notes}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Nurse Notes */}
        <div className="nurse-notes-section">
          <h4 className="card-title">Recent Nurse Notes</h4>
          <div className="notes-list">
            {currentWeekOverview.nurseNotes.map((note, index) => (
              <div key={index} className="note-item">
                <div className="note-date">{note.date}</div>
                <div className="note-content">{note.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Previous Weeks Overview */}
      <div className="previous-weeks-section">
        <h3 className="subsection-title">Previous Weekly Overviews</h3>
        <div className="weeks-grid">
          {previousWeeks.map((week, index) => (
            <div key={index} className="week-card">
              <div className="week-header">
                <h4 className="week-title">Week of {week.weekOf}</h4>
                <div className="week-condition">{week.overallCondition}</div>
              </div>
              <div className="week-content">
                <div className="week-section">
                  <h5 className="week-section-title">Key Events</h5>
                  <ul className="events-list">
                    {week.keyEvents.map((event, eventIndex) => (
                      <li key={eventIndex} className="event-item">{event}</li>
                    ))}
                  </ul>
                </div>
                <div className="week-section">
                  <h5 className="week-section-title">Average Vitals</h5>
                  <p className="vitals-summary">{week.avgVitals}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Render payment details section
  const renderPaymentDetails = () => (
    <div className="section-container">
      <h2 className="section-title">Payment Details</h2>
      
      {/* Current Billing Information */}
      <div className="billing-overview">
        <h3 className="subsection-title">Current Billing Information</h3>
        
        <div className="billing-grid">
          <div className="billing-card primary">
            <h4 className="billing-title">Monthly Care Fee</h4>
            <div className="billing-amount">${currentBilling.monthlyRate.toLocaleString()}</div>
            <div className="billing-details">
              <div className="detail-item">
                <span className="detail-label">Current Balance:</span>
                <span className="detail-value">${currentBilling.currentBalance.toLocaleString()}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Next Payment Due:</span>
                <span className="detail-value">{currentBilling.nextPaymentDue}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Payment Method:</span>
                <span className="detail-value">{currentBilling.paymentMethod}</span>
              </div>
            </div>
          </div>

          <div className="billing-card">
            <h4 className="billing-title">Additional Services</h4>
            <div className="services-list">
              {currentBilling.additionalServices.map((service, index) => (
                <div key={index} className="service-item">
                  <div className="service-name">{service.service}</div>
                  <div className="service-cost">${service.cost}</div>
                  <div className="service-frequency">{service.frequency}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Previous Transactions */}
      <div className="transactions-section">
        <h3 className="subsection-title">Previous Transactions</h3>
        <div className="transactions-table">
          <div className="table-header">
            <div className="header-cell">Date</div>
            <div className="header-cell">Description</div>
            <div className="header-cell">Amount</div>
            <div className="header-cell">Status</div>
          </div>
          {previousTransactions.map((transaction) => (
            <div key={transaction.id} className="table-row">
              <div className="table-cell">{transaction.date}</div>
              <div className="table-cell">{transaction.description}</div>
              <div className="table-cell">${transaction.amount.toLocaleString()}</div>
              <div className="table-cell">
                <span className="status-badge paid">{transaction.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Transactions */}
      <div className="transactions-section">
        <h3 className="subsection-title">Upcoming Transactions</h3>
        <div className="transactions-table">
          <div className="table-header">
            <div className="header-cell">Date</div>
            <div className="header-cell">Description</div>
            <div className="header-cell">Amount</div>
            <div className="header-cell">Status</div>
          </div>
          {upcomingTransactions.map((transaction) => (
            <div key={transaction.id} className="table-row">
              <div className="table-cell">{transaction.date}</div>
              <div className="table-cell">{transaction.description}</div>
              <div className="table-cell">${transaction.amount.toLocaleString()}</div>
              <div className="table-cell">
                <span className="status-badge scheduled">{transaction.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Summary */}
      <div className="payment-summary">
        <h3 className="subsection-title">Payment Summary</h3>
        <div className="summary-grid">
          <div className="summary-card">
            <div className="summary-title">This Month</div>
            <div className="summary-amount">$4,850</div>
            <div className="summary-description">Total charges</div>
          </div>
          <div className="summary-card">
            <div className="summary-title">Next Month</div>
            <div className="summary-amount">$5,000</div>
            <div className="summary-description">Estimated charges</div>
          </div>
          <div className="summary-card">
            <div className="summary-title">Year to Date</div>
            <div className="summary-amount">$24,250</div>
            <div className="summary-description">Total paid</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="family-dashboard">
      <div className="dashboard-container">
        <header className="dashboard-header">
          <div className="header-content">
            <div className="header-main">
              <h1 className="header-title">Family Member Dashboard</h1>
              <p className="header-subtitle">Care updates and billing information for {patientInfo.name}</p>
            </div>
            <div className="header-status">
              <div className="status-indicator">
                <div className="status-dot active"></div>
                <div className="status-text">
                  <div className="status-label">Care Status</div>
                  <div className="status-value">Active Care</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <div className="navigation-tabs">
          <div className="tabs-container">
            <button 
              className={`nav-tab ${activeTab === 'medical-overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('medical-overview')}
            >
              Medical Overview
            </button>
            <button 
              className={`nav-tab ${activeTab === 'payment-details' ? 'active' : ''}`}
              onClick={() => setActiveTab('payment-details')}
            >
              Payment Details
            </button>
          </div>
        </div>
        
        {activeTab === 'medical-overview' && renderMedicalOverview()}
        {activeTab === 'payment-details' && renderPaymentDetails()}
      </div>
    </div>
  );
};

export default FamilyDashboard;
