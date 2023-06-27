import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import WordList from "./components/WordList/WordList";
import words from "./words.json";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import Main from "./components/Main/Main";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/home" element={<WordList />} />
          <Route path="/train" element={<Card word={words} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
