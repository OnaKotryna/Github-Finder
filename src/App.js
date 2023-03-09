import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>
          <h1 className="container mx-auto px-2 pb-12">Life is a joke</h1>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
