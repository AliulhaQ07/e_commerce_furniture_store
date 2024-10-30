import "./App.css";
import Body from "./layout/Body.jsx";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import React from "react";

function App() {
  return (<>
    <div >
      <Header />
      <Body /> {/* This is where the routed pages will be rendered */}
      <Footer />
    </div >
  </>);
}

export default App;
