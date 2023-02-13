import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Features from "./components/features/Features";
import Header from "./components/header/Header";
import Overview from "./components/overview/Overview";
import NavbarComponent from "./components/navbar/Navbar";
import { useRef } from "react";

function App() {
  const featuresRef = useRef(null);
  const homeRef = useRef(null);
  const overviewRef = useRef(null);

  return (
    <>
      <NavbarComponent refs={{ featuresRef, homeRef, overviewRef }} />
      <Header homeRef={homeRef} />
      <Features featuresRef={featuresRef} />
      <Overview overviewRef={overviewRef} />
    </>
  );
}

export default App;
