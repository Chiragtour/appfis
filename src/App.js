import "./App.css";
import Download from "./components/common/Download";
import Features from "./components/features/Features";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Features />
      <div className="overview-wrap">
        <div className="how-it-works-wrap">
          <h1 className="how-it-works">How does this app works</h1>
          <div className="download-steps">
            <div className="steps">
              <span className="index">1</span>
              <div className="step-text">
                <h2 className="step-title">Download app</h2>
                <p className="step-desc">
                  Download App either for Windows, Mac or Android
                </p>
              </div>
            </div>
            <div className="steps">
              <span className="index">2</span>
              <div className="step-text">
                <h2 className="step-title">Create account</h2>
                <p className="step-desc">Sign up free for App account</p>
              </div>
            </div>
            <div className="steps">
              <span className="index">3</span>
              <div className="step-text">
                <h2 className="step-title">It's done, enjoy the app</h2>
                <p className="step-desc">
                  Get most amazing app experience, Explore and shate the app
                </p>
              </div>
            </div>
          </div>
          <Download
            parentClass={"download-app-centered"}
            imgClass={"store-image"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
