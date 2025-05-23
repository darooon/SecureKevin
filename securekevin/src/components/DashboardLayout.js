import React, { useState } from 'react';
import { 
  Home, User, Calendar, CreditCard, Bell, Settings
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DashboardLayout = ({ children, activePage }) => {
  const [collapsed, setCollapsed] = useState(false);

  const navigationItems = [
    { name: 'Dashboard', icon: Home, href: '/' },
    { name: 'Patient Profile', icon: User, href: '/profile' },
    { name: 'Medical Records', icon: Calendar, href: '/records' },
    { name: 'Payments', icon: CreditCard, href: '/payments' },
    { name: 'Settings', icon: Settings, href: '/settings' }
  ];

  return (
    <div className="healthcare-dashboard">
      <header className="top-navigation">
        <div className="logo-container">
          <div className="logo">SecureKevin</div>
        </div>
        <Tabs defaultValue={activePage || "dashboard"}>
          <TabsList className="top-nav-tabs">
            {navigationItems.map((item) => (
              <TabsTrigger 
                key={item.name}
                value={item.name.toLowerCase()} 
                className={`top-nav-item ${activePage === item.name.toLowerCase() ? 'active' : ''}`}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="user-actions">
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
            NH
          </div>
        </div>
      </header>
      <main className="main-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Family Healthcare Dashboard</h1>
        </div>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
