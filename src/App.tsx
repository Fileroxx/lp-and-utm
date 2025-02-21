import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Obrigado from "./pages/Obrigado";
import GetAndPreserveUTMs from "./hooks/GetAndPreserveUtm";

function App() {

  return (

    <Router>

      <Routes>
        <Route path="/" element={<GetAndPreserveUTMs> <Home /> </GetAndPreserveUTMs>}/>
        <Route path="/obrigado" element={<GetAndPreserveUTMs> <Obrigado /> </GetAndPreserveUTMs>}  />
      </Routes>

    </Router>


  );
}

export default App;
