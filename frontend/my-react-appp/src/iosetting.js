// import React from 'react';
// import './frontend/iosetting.css';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <button>Com.Port</button>
//       <button>I/O Settings</button>
//       <button>Modbus RTU</button>
//       <button>Modbus TCP</button>
//       <button>WiFi / GPRS / 4G / LTE</button>
//       <button>Offline Data</button>
//       <button>Device Settings</button>
//       <button>Debug</button>
//       <button>Change Password</button>
//       <button>Analyze</button>
//       <button>Logout</button>
//       <button>Help</button>
//     </div>
//   );
// };

// const MainContent = () => {
//   return (
//     <div className="main-content">
//       <div className="tabs">
//         <button>Settings</button>
//         <button>Analog</button>
//         <button>Digital Input</button>
//       </div>
//       <div className="content">
//         <input type="checkbox" id="modbus" name="modbus" value="modbus" />
//         <label htmlFor="modbus">Modbus</label>
//         <input type="checkbox" id="analog" name="analog" value="analog" />
//         <label htmlFor="analog">Analog</label>
//         <input type="checkbox" id="digital" name="digital" value="digital" />
//         <label htmlFor="digital">Digital Input</label>
//         <input type="checkbox" id="modbusTcp" name="modbusTcp" value="modbusTcp" />
//         <label htmlFor="modbusTcp">Modbus TCP</label>
//         <button className="read-button">Read</button>
//       </div>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="app">
//       <Sidebar />
//       <MainContent />
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './iosetting.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button>Com.Port</button>
      <button>I/O Settings</button>
      <button>Modbus RTU</button>
      <button>Modbus TCP</button>
      <button>WiFi / GPRS / 4G / LTE</button>
      <button>Offline Data</button>
      <button>Device Settings</button>
      <button>Debug</button>
      <button>Change Password</button>
      <button>Analyze</button>
      <button>Logout</button>
      <button>Help</button>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="tabs">
        <button>Settings</button>
        <button>Analog</button>
        <button>Digital Input</button>
      </div>
      <div className="content">
        <input type="checkbox" id="modbus" name="modbus" value="modbus" />
        <label htmlFor="modbus">Modbus</label>
        <input type="checkbox" id="analog" name="analog" value="analog" />
        <label htmlFor="analog">Analog</label>
        <input type="checkbox" id="digital" name="digital" value="digital" />
        <label htmlFor="digital">Digital Input</label>
        <input type="checkbox" id="modbusTcp" name="modbusTcp" value="modbusTcp" />
        <label htmlFor="modbusTcp">Modbus TCP</label>
        <button className="read-button">Read</button>
      </div>
    </div>
  );
};

const Login = () => {
  const handleLogin = () => {
    const password = document.getElementById('password').value;
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        window.location.href = '/iosetting';
      } else {
        alert(data.message);
      }
    });
  };

  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <h2>Login</h2>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Switch>
          <Route path="/iosetting" component={MainContent} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



