import React, { useState } from "react";
import "./App.scss";

const App: React.FC = () => {
  const [sideNavStatus, setSideNavStatus] = useState("show");
  const [dropDownStatus, setDropDownStatus] = useState("");
  const [selectedSite, setSelectedSite] = useState("1");
  const [menuStatus, setMenuStatus] = useState("");

  const sites = [
    { id: "1", name: "Allen, Dallas" },
    { id: "2", name: "Apple, California" },
    { id: "3", name: "CBRE, London" },
    { id: "4", name: "Amazon, New York" },
    { id: "5", name: "Allen, Dallas" },
    { id: "6", name: "Apple, California" },
    { id: "7", name: "CBRE, London" },
    { id: "8", name: "Amazon, New York" },
    { id: "9", name: "Allen, Dallas" },
    { id: "10", name: "Apple, California" },
    { id: "11", name: "CBRE, London" },
    { id: "12", name: "Amazon, New York" },
    { id: "13", name: "Allen, Dallas" },
    { id: "14", name: "Apple, California" },
    { id: "15", name: "CBRE, London" },
    { id: "16", name: "Amazon, New York" }
  ];

  const getSiteName = () => {
    const site = sites.find(site => site.id === selectedSite);
    return site ? <>{site.name}</> : null;
  };

  const onSideNavClick = () => {
    setSideNavStatus(sideNavStatus === "show" ? "" : "show");
  };

  const onDropDownClick = () => {
    setDropDownStatus(dropDownStatus === "show" ? "" : "show");
  };

  const onDropDownBlur = (e: any) => {
    if (!e.currentTarget.parentNode.contains(e.relatedTarget)) {
      setDropDownStatus("");
    }
  };

  const onDropDownItemClick = (
    siteId: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setSelectedSite(siteId);
    setDropDownStatus("");
    e.preventDefault();
  };

  const onMenuClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setMenuStatus(menuStatus === "show" ? "" : "show");
    e.preventDefault();
  };

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
        <div className={"sidenav " + sideNavStatus}>
          <div className="sidenav-toggle" onClick={onSideNavClick}>
            <button>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
          <div className="sidenav-content">
            <div className="site-select">
              <div className={"dropdown " + dropDownStatus}>
                <button
                  className="dropdown-toggle"
                  onClick={onDropDownClick}
                  onBlur={onDropDownBlur}
                >
                  {getSiteName()}
                </button>
                <div className="dropdown-menu">
                  {sites.map(site => {
                    return (
                      <a
                        href="#"
                        key={site.id}
                        className={
                          "dropdown-item " +
                          (site.id === selectedSite ? "active" : "")
                        }
                        onClick={event => onDropDownItemClick(site.id, event)}
                      >
                        {site.name}
                      </a>
                    );
                  })}
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
                <li className={menuStatus}>
                  <a
                    href="#"
                    className="sidenav-menu-toggle"
                    onClick={onMenuClick}
                  >
                    Risks
                    <span className="badge"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        Risk Register <span className="badge">3</span>
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
          <div className="sidenav-vertical">{getSiteName()}</div>
        </div>
        <div className="main">
          <h1>{getSiteName()}</h1>
        </div>
      </div>
    </>
  );
};

export default App;
