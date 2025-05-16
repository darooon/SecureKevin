import { Badge } from 'some-ui-library'; // if you need Badge from here
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Container, Row, Col, Card, Nav, Tab, Button, 
  ProgressBar, Table, Badge
} from 'react-bootstrap';

const FamilyMember = () => {
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

  return (
    <Container fluid className="py-4 bg-light min-vh-100">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="h3 mb-1">Family Member Dashboard</h1>
            <p className="text-muted">Monitor your loved one's care and manage payments</p>
          </Col>
          <Col md="auto">
            <Card className="p-3">
              <div className="d-flex align-items-center">
                <div className="me-3 p-2 bg-primary bg-opacity-10 rounded-circle">
                  <i className="bi bi-file-text text-primary fs-4"></i>
                </div>
                <div>
                  <p className="mb-0 small">Patient</p>
                  <p className="mb-0 fw-bold">{patientInfo.name}</p>
                  <p className="mb-0 small text-muted">Room {patientInfo.roomNumber} | {patientInfo.condition}</p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Card className="mb-4">
          <Card.Body>
            <Tab.Container defaultActiveKey="overview">
              <Nav variant="tabs" className="mb-3 border-bottom-0">
                <Nav.Item>
                  <Nav.Link eventKey="overview">Medical Overview</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="payments">Payment Details</Nav.Link>
                </Nav.Item>
              </Nav>
              
              <Tab.Content>
                <Tab.Pane eventKey="overview">
                  <Tab.Container defaultActiveKey="current-week">
                    <Nav variant="pills" className="mb-3">
                      <Nav.Item>
                        <Nav.Link eventKey="current-week">Current Week</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="previous-week">Previous Week</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    
                    <Tab.Content>
                      <Tab.Pane eventKey="current-week">
                        <Card className="mb-4">
                          <Card.Header>
                            <h5 className="mb-0">
                              <i className="bi bi-calendar me-2"></i>
                              Current Week Overview
                            </h5>
                            <p className="text-muted mb-0 small">Medical data for the current week</p>
                          </Card.Header>
                          <Card.Body>
                            <Row className="mb-4">
                              <Col md={6}>
                                <h5 className="mb-3">Vital Signs</h5>
                                <div className="mb-3">
                                  <div className="d-flex justify-content-between mb-1">
                                    <span className="small fw-medium">Heart Rate</span>
                                    <span className="small text-muted">{currentWeekOverview.heartRate.average} bpm (Range: {currentWeekOverview.heartRate.min}-{currentWeekOverview.heartRate.max})</span>
                                  </div>
                                  <ProgressBar now={currentWeekOverview.heartRate.average} className="progress-sm" />
                                </div>
                                
                                <div className="mb-3">
                                  <div className="d-flex justify-content-between mb-1">
                                    <span className="small fw-medium">Blood Pressure</span>
                                    <span className="small text-muted">{currentWeekOverview.bloodPressure.average}</span>
                                  </div>
                                  <ProgressBar now={75} className="progress-sm" />
                                </div>
                                
                                <div className="mb-3">
                                  <div className="d-flex justify-content-between mb-1">
                                    <span className="small fw-medium">Oxygen Saturation</span>
                                    <span className="small text-muted">{currentWeekOverview.oxygenSaturation.average}%</span>
                                  </div>
                                  <ProgressBar now={currentWeekOverview.oxygenSaturation.average} className="progress-sm" />
                                </div>
                              </Col>
                              
                              <Col md={6}>
                                <h5 className="mb-3">Wellness Metrics</h5>
                                <div className="mb-3">
                                  <div className="d-flex justify-content-between mb-1">
                                    <span className="small fw-medium">Medication Compliance</span>
                                    <span className="small text-muted">{currentWeekOverview.medicationCompliance}%</span>
                                  </div>
                                  <ProgressBar now={currentWeekOverview.medicationCompliance} className="progress-sm" />
                                </div>
                                
                                <div className="mb-3">
                                  <div className="d-flex justify-content-between mb-1">
                                    <span className="small fw-medium">Sleep Quality</span>
                                    <span className="small text-muted">{currentWeekOverview.sleepQuality}%</span>
                                  </div>
                                  <ProgressBar now={currentWeekOverview.sleepQuality} className="progress-sm" />
                                </div>
                                
                                <div className="mb-3">
                                  <div className="d-flex justify-content-between mb-1">
                                    <span className="small fw-medium">Mobility</span>
                                    <span className="small text-muted">{currentWeekOverview.mobility}%</span>
                                  </div>
                                  <ProgressBar now={currentWeekOverview.mobility} className="progress-sm" />
                                </div>
                              </Col>
                            </Row>
                            
                            <div className="mb-4">
                              <h5 className="mb-3">Weekly Meal Plan</h5>
                              <div className="table-responsive">
                                <Table bordered hover>
                                  <thead>
                                    <tr>
                                      <th>Day</th>
                                      <th>Breakfast</th>
                                      <th>Lunch</th>
                                      <th>Dinner</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {currentWeekOverview.meals.map((meal, index) => (
                                      <tr key={index}>
                                        <td className="fw-medium">{meal.day}</td>
                                        <td>{meal.breakfast}</td>
                                        <td>{meal.lunch}</td>
                                        <td>{meal.dinner}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </Table>
                              </div>
                            </div>
                            
                            <Row>
                              <Col md={6}>
                                <h5 className="mb-3">Upcoming Appointments</h5>
                                <div className="d-flex flex-column gap-2">
                                  {currentWeekOverview.appointments.map((appointment, index) => (
                                    <div key={index} className="border rounded p-3">
                                      <div className="d-flex justify-content-between">
                                        <div className="fw-medium">{appointment.type}</div>
                                        <div className="small text-muted">{appointment.date}</div>
                                      </div>
                                      <div className="small text-muted">{appointment.time}</div>
                                    </div>
                                  ))}
                                </div>
                              </Col>
                              
                              <Col md={6}>
                                <h5 className="mb-3">Recent Activities</h5>
                                <div className="d-flex flex-column gap-2">
                                  {currentWeekOverview.activities.map((activity, index) => (
                                    <div key={index} className="border rounded p-3">
                                      <div className="d-flex justify-content-between">
                                        <div className="fw-medium">{activity.activity}</div>
                                        <div className="small text-muted">{activity.date}</div>
                                      </div>
                                      <div className="small">{activity.duration}</div>
                                      <div className="small text-muted">{activity.notes}</div>
                                    </div>
                                  ))}
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Tab.Pane>
                      
                      <Tab.Pane eventKey="previous-week">
                        <Card className="mb-4">
                          <Card.Header>
                            <h5 className="mb-0">
                              <i className="bi bi-calendar me-2"></i>
                              Previous Week Overview
                            </h5>
                            <p className="text-muted mb-0 small">Medical data for the previous week</p>
                          </Card.Header>
                          <Card.Body>
                            <Row className="mb-4">
                              <Col md={6}>
                                <h5 className="mb-3">Vital Signs</h5>
                                <div className="mb-3">
                                  <div className="d-flex justify-content-between mb-1">
                                    <span className="small fw-medium">Heart Rate</span>
                                    <span className="small text-muted">{previousWeekOverview.heartRate.average} bpm (Range: {previousWeekOverview.heartRate.min}-{previousWeekOverview.heartRate.max})</span>
                                  </div>
                                  <ProgressBar now={previousWeekOverview.heartRate.average} className="progress-sm" />
                                </div>
                                
                                <div className="mb-3">
                                  <div className="d-flex justify-content-between mb-1">
                                    <span className="small fw-medium">Blood Pressure</span>
                                    <span className="small text-muted">{previousWeekOverview.bloodPressure.average}</span>
                                  </div>
                                  <ProgressBar now={78} className="progress-sm" />
                                </div>
                                
                                <div className="mb-3">
                                  <div className="d-flex justify-content-between mb-1">
                                    <span className="small fw-medium">Oxygen Saturation</span>
                                    <span className="small text-muted">{previousWeekOverview.oxygenSaturation.average}%</span>
                                  </div>
                                  <ProgressBar now={previousWeekOverview.oxygenSaturation.average} className="progress-sm" />
                                </div>
                              </Col>
                              
                              <Col md={6}>
                                <h5 className="mb-3">Wellness Metrics</h5>
                                <div className="mb-3">
                                  <div className="d-flex justify-content-between mb-1">
                                    <span className="small fw-medium">Medication Compliance</span>
                                    <span className="small text-muted">{previousWeekOverview.medicationCompliance}%</span>
                                  </div>
                                  <ProgressBar now={previousWeekOverview.medicationCompliance} className="progress-sm" />
                                </div>
                                
                                <div className="mb-3">
                                  <div className="d-flex justify-content-between mb-1">
                                    <span className="small fw-medium">Sleep Quality</span>
                                    <span className="small text-muted">{previousWeekOverview.sleepQuality}%</span>
                                  </div>
                                  <ProgressBar now={previousWeekOverview.sleepQuality} className="progress-sm" />
                                </div>
                                
                                <div className="mb-3">
                                  <div className="d-flex justify-content-between mb-1">
                                    <span className="small fw-medium">Mobility</span>
                                    <span className="small text-muted">{previousWeekOverview.mobility}%</span>
                                  </div>
                                  <ProgressBar now={previousWeekOverview.mobility} className="progress-sm" />
                                </div>
                              </Col>
                            </Row>
                            
                            <div className="mb-4">
                              <h5 className="mb-3">Weekly Meal Plan</h5>
                              <div className="table-responsive">
                                <Table bordered hover>
                                  <thead>
                                    <tr>
                                      <th>Day</th>
                                      <th>Breakfast</th>
                                      <th>Lunch</th>
                                      <th>Dinner</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {previousWeekOverview.meals.map((meal, index) => (
                                      <tr key={index}>
                                        <td className="fw-medium">{meal.day}</td>
                                        <td>{meal.breakfast}</td>
                                        <td>{meal.lunch}</td>
                                        <td>{meal.dinner}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </Table>
                              </div>
                            </div>
                            
                            <Row>
                              <Col md={6}>
                                <h5 className="mb-3">Appointments</h5>
                                <div className="d-flex flex-column gap-2">
                                  {previousWeekOverview.appointments.map((appointment, index) => (
                                    <div key={index} className="border rounded p-3">
                                      <div className="d-flex justify-content-between">
                                        <div className="fw-medium">{appointment.type}</div>
                                        <div className="small text-muted">{appointment.date}</div>
                                      </div>
                                      <div className="small text-muted">{appointment.time}</div>
                                    </div>
                                  ))}
                                </div>
                              </Col>
                              
                              <Col md={6}>
                                <h5 className="mb-3">Activities</h5>
                                <div className="d-flex flex-column gap-2">
                                  {previousWeekOverview.activities.map((activity, index) => (
                                    <div key={index} className="border rounded p-3">
                                      <div className="d-flex justify-content-between">
                                        <div className="fw-medium">{activity.activity}</div>
                                        <div className="small text-muted">{activity.date}</div>
                                      </div>
                                      <div className="small">{activity.duration}</div>
                                      <div className="small text-muted">{activity.notes}</div>
                                    </div>
                                  ))}
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Tab.Pane>
                
                <Tab.Pane eventKey="payments">
                  <Card className="mb-4">
                    <Card.Header>
                      <h5 className="mb-0">
                        <i className="bi bi-credit-card me-2"></i>
                        Current Billing Details
                      </h5>
                      <p className="text-muted mb-0 small">Your current payment plan and method</p>
                    </Card.Header>
                    <Card.Body>
                      <Row className="mb-3">
                        <Col md={6}>
                          <div className="mb-3">
                            <p className="text-muted small mb-1">Care Plan</p>
                            <p className="fw-medium mb-0">{billingDetails.plan}</p>
                          </div>
                          
                          <div className="mb-3">
                            <p className="text-muted small mb-1">Monthly Cost</p>
                            <p className="fw-medium mb-0">${billingDetails.monthlyCost.toLocaleString()}</p>
                          </div>
                          
                          <div className="mb-3">
                            <p className="text-muted small mb-1">Next Billing Date</p>
                            <p className="fw-medium mb-0">{billingDetails.nextBillingDate}</p>
                          </div>
                        </Col>
                        
                        <Col md={6}>
                          <div className="mb-3">
                            <p className="text-muted small mb-1">Payment Method</p>
                            <p className="fw-medium mb-0">{billingDetails.paymentMethod.type} ending in {billingDetails.paymentMethod.lastFour}</p>
                            <p className="text-muted small mb-0">Expires {billingDetails.paymentMethod.expiryDate}</p>
                          </div>
                          
                          <div className="mb-3">
                            <p className="text-muted small mb-1">Billing Address</p>
                            <p className="fw-medium mb-0">{billingDetails.billingAddress}</p>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="primary">Update Payment Method</Button>
                    </Card.Footer>
                  </Card>
                  
                  <Row>
                    <Col md={6}>
                      <Card className="mb-4">
                        <Card.Header>
                          <h5 className="mb-0">
                            <i className="bi bi-file-minus me-2"></i>
                            Previous Transactions
                          </h5>
                          <p className="text-muted mb-0 small">Your payment history</p>
                        </Card.Header>
                        <Card.Body>
                          <div className="d-flex flex-column gap-2">
                            {previousTransactions.map((transaction, index) => (
                              <div key={index} className="d-flex justify-content-between border rounded p-3">
                                <div>
                                  <p className="fw-medium mb-0">{transaction.description}</p>
                                  <p className="text-muted small mb-0">{transaction.date}</p>
                                </div>
                                <div className="text-end">
                                  <p className="fw-medium mb-0">${transaction.amount.toLocaleString()}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </Card.Body>
                        <Card.Footer>
                          <Button variant="outline-primary">View All History</Button>
                        </Card.Footer>
                      </Card>
                    </Col>
                    
                    <Col md={6}>
                      <Card className="mb-4">
                        <Card.Header>
                          <h5 className="mb-0">
                            <i className="bi bi-file-plus me-2"></i>
                            Upcoming Transactions
                          </h5>
                          <p className="text-muted mb-0 small">Scheduled future payments</p>
                        </Card.Header>
                        <Card.Body>
                          <div className="d-flex flex-column gap-2">
                            {upcomingTransactions.map((transaction, index) => (
                              <div key={index} className="d-flex justify-content-between border rounded p-3">
                                <div>
                                  <p className="fw-medium mb-0">{transaction.description}</p>
                                  <p className="text-muted small mb-0">{transaction.date}</p>
                                </div>
                                <div className="text-end">
                                  <p className="fw-medium mb-0">${transaction.amount.toLocaleString()}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>
        
        <Row>
          <Col md={4}>
            <Card className="mb-4 mb-md-0">
              <Card.Header>
                <h5 className="mb-0">Patient Info</h5>
              </Card.Header>
              <Card.Body>
                <div className="mb-2">
                  <p className="text-muted small mb-1">Age</p>
                  <p className="fw-medium mb-0">{patientInfo.age} years</p>
                </div>
                <div className="mb-2">
                  <p className="text-muted small mb-1">Medical Condition</p>
                  <p className="fw-medium mb-0">{patientInfo.condition}</p>
                </div>
                <div className="mb-2">
                  <p className="text-muted small mb-1">Room Number</p>
                  <p className="fw-medium mb-0">{patientInfo.roomNumber}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card className="mb-4 mb-md-0">
              <Card.Header>
                <h5 className="mb-0">Care Team</h5>
              </Card.Header>
              <Card.Body>
                <div className="mb-2">
                  <p className="text-muted small mb-1">Primary Doctor</p>
                  <p className="fw-medium mb-0">{patientInfo.assignedDoctor}</p>
                </div>
                <div className="mb-2">
                  <p className="text-muted small mb-1">Primary Nurse</p>
                  <p className="fw-medium mb-0">{patientInfo.assignedNurse}</p>
                </div>
                <div className="mt-3">
                  <Button variant="outline-secondary" size="sm" className="w-100">Contact Care Team</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card>
              <Card.Header>
                <h5 className="mb-0">Quick Actions</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-grid gap-2">
                  <Button variant="outline-secondary" size="sm">Schedule Visit</Button>
                  <Button variant="outline-secondary" size="sm">Request Medical Records</Button>
                  <Button variant="outline-secondary" size="sm">Update Emergency Contact</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default FamilyMember;