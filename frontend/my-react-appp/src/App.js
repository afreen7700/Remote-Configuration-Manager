import React from 'react';
import './App.css';

function App() {
  const handleRead = () => {
    console.log('Read button clicked');
  };

  return (
    <div className="App">
      <div className="sidebar">
        <button className="sidebar-button">Com.Port</button>
        <button className="sidebar-button">I/O Settings</button>
        <button className="sidebar-button">Modbus RTU</button>
        <button className="sidebar-button">Modbus TCP</button>
        <button className="sidebar-button">WiFi / GPRS / 4G / LTE</button>
        <button className="sidebar-button">Offline Data</button>
        <button className="sidebar-button">Device Settings</button>
        <button className="sidebar-button">Debug</button>
        <button className="sidebar-button">Change Password</button>
        <button className="sidebar-button">Analyze</button>
        <button className="sidebar-button">Logout</button>
        <button className="sidebar-button">Help</button>
      </div>
      <div className="content">
        <h1>Data Logger Configuration Manager</h1>
        <div className="settings">
          <div className="tab">
            <button className="tab-button">Settings</button>
            <button className="tab-button">Analog</button>
            <button className="tab-button">Digital Input</button>
          </div>
          <div className="settings-content">
            <div className="options">
              <label>
                <input type="radio" name="option" value="modbus" />
                Modbus
              </label>
              <label>
                <input type="radio" name="option" value="analog" />
                Analog
              </label>
              <label>
                <input type="radio" name="option" value="digital-input" />
                Digital Input
              </label>
              <label>
                <input type="radio" name="option" value="modbus-tcp" />
                Modbus TCP
              </label>
            </div>
            <button className="read-button" onClick={handleRead}>Read</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
