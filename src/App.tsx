import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Obrigado from "./pages/Obrigado";
import GetAndPreserveUTMs from "./hooks/GetAndPreserveUtm";

function App() {

  return (

    <Router>

      <Routes>
        <Route element={<GetAndPreserveUTMs> <Home /> </GetAndPreserveUTMs>} path="/" />
        <Route element={<GetAndPreserveUTMs> <Obrigado /> </GetAndPreserveUTMs>} path="/obrigado" />
      </Routes>

    </Router>


  );
}

export default App;
