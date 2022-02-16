import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Import Files
import Home from "./components/home/allFiles/index";
import ConsumerRegister from "./components/consumer-register/allFiles/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/cadastro-consumidor" element={ <ConsumerRegister /> } />
      </Routes>
    </Router>
  )
}

export default App;
