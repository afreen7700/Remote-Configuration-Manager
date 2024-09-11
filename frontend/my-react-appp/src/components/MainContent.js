import React from 'react';

const MainContent = ({ currentSection }) => {
  switch (currentSection) {
    case 'comport':
      return <div>Com.Port Content</div>;
    case 'iosettings':
      return <div>I/O Settings Content</div>;
    case 'modbusrtu':
      return <div>Modbus RTU Content</div>;
    case 'modbustcp':
      return <div>Modbus TCP Content</div>;
    case 'wifi':
      return <div>WiFi / GPRS / 4G / LTE Content</div>;
    case 'offlinedata':
      return <div>Offline Data Content</div>;
    case 'devicesettings':
      return <div>Device Settings Content</div>;
    case 'debug':
      return <div>Debug Content</div>;
    case 'changepassword':
      return <div>Change Password Content</div>;
    case 'analyze':
      return <div>Analyze Content</div>;
    case 'logout':
      return <div>Logout Content</div>;
    case 'help':
      return <div>Help Content</div>;
    default:
      return <div>Welcome to Data Logger Configuration Manager</div>;
  }
};

export default MainContent;
