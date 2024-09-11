import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onNavigate }) => {
  return (
    <div className="sidebar">
      <button className="sidebar-button" onClick={() => onNavigate('comport')}>Com.Port</button>
      <button className="sidebar-button" onClick={() => onNavigate('iosettings')}>I/O Settings</button>
      <button className="sidebar-button" onClick={() => onNavigate('modbusrtu')}>Modbus RTU</button>
      <button className="sidebar-button" onClick={() => onNavigate('modbustcp')}>Modbus TCP</button>
      <button className="sidebar-button" onClick={() => onNavigate('wifi')}>WiFi / GPRS / 4G / LTE</button>
      <button className="sidebar-button" onClick={() => onNavigate('offlinedata')}>Offline Data</button>
      <button className="sidebar-button" onClick={() => onNavigate('devicesettings')}>Device Settings</button>
      <button className="sidebar-button" onClick={() => onNavigate('debug')}>Debug</button>
      <button className="sidebar-button" onClick={() => onNavigate('changepassword')}>Change Password</button>
      <button className="sidebar-button" onClick={() => onNavigate('analyze')}>Analyze</button>
      <button className="sidebar-button" onClick={() => onNavigate('logout')}>Logout</button>
      <button className="sidebar-button" onClick={() => onNavigate('help')}>Help</button>
    </div>
  );
};

export default Sidebar;
