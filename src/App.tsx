import React from "react";
import "./App.scss";

const App: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <div className="brand">Quantum</div>
        <div className="menu">
          <a href="#">Home</a>
          <a href="#">Links</a>
          <a href="#">About</a>
        </div>
      </nav>
      <div className="content">
        <div className="sidenav show">
          <div className="sidenav-toggle">
            <button>-</button>
          </div>
          <div className="sidenav-content">
            <div className="site-select">
              <div className="dropdown">
                <button className="dropdown-toggle">Allen, Dallas</button>
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item active">
                    Allen, Dallas
                  </a>
                  <a href="#" className="dropdown-item">
                    Apple, California
                  </a>
                  <a href="#" className="dropdown-item">
                    CBRE, London
                  </a>
                  <a href="#" className="dropdown-item">
                    Amazon, New York
                  </a>
                  <a href="#" className="dropdown-item">
                    Apple, California
                  </a>
                  <a href="#" className="dropdown-item">
                    CBRE, London
                  </a>
                  <a href="#" className="dropdown-item">
                    Amazon, New York
                  </a>
                  <a href="#" className="dropdown-item">
                    Apple, California
                  </a>
                  <a href="#" className="dropdown-item">
                    CBRE, London
                  </a>
                  <a href="#" className="dropdown-item">
                    Amazon, New York
                  </a>
                  <a href="#" className="dropdown-item">
                    Apple, California
                  </a>
                  <a href="#" className="dropdown-item">
                    CBRE, London
                  </a>
                  <a href="#" className="dropdown-item">
                    Amazon, New York
                  </a>
                  <a href="#" className="dropdown-item">
                    Apple, California
                  </a>
                  <a href="#" className="dropdown-item">
                    CBRE, London
                  </a>
                  <a href="#" className="dropdown-item">
                    Amazon, New York
                  </a>
                  <a href="#" className="dropdown-item">
                    Apple, California
                  </a>
                  <a href="#" className="dropdown-item">
                    CBRE, London
                  </a>
                  <a href="#" className="dropdown-item">
                    Amazon, New York
                  </a>
                  <a href="#" className="dropdown-item">
                    Apple, California
                  </a>
                  <a href="#" className="dropdown-item">
                    CBRE, London
                  </a>
                  <a href="#" className="dropdown-item">
                    Amazon, New York
                  </a>
                </div>
              </div>
            </div>
            <div className="sidenav-menu">
              <ul>
                <li>
                  <a href="#" className="active">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="sidenav-menu-toggle">
                    Risks
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        Risk Register <span className="tag">3</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Risk Questions</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="">
                    Actions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidenav-vertical">Allen, Dallas</div>
        </div>
        <div className="main"></div>
      </div>
    </>
  );
};

export default App;
