import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Quote from "./components/Quote";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./assets/images/background.jpg";

function App() {
  const style: React.CSSProperties = {
    backgroundImage: `url(${Background})`,
  };

  return (
    <div className="App container-fluid">
      <div
        className="d-flex flex-column justify-content-between align-items-end quote-background"
        style={style}
      >
        <Header />
        <Quote />
        <Footer />
      </div>
    </div>
  );
}

export default App;
