import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import '../App.css';
import MainContent from './MainContent';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <Sidebar>
          {/* Contenu du tableau de bord */}
          <MainContent />
        </Sidebar>
      </div>
    </div>
  );
};

export default Dashboard;
