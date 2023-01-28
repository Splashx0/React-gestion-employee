import "./App.css";
import { Route, Routes } from "react-router-dom";
import EmployeeDetails from "./pages/EmployeeDetails";
import EmloyeeCreate from "./pages/EmloyeeCreate";
import EmloyeeList from "./pages/EmloyeeList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<EmloyeeList />} />
          <Route path="/:id" element={<EmployeeDetails />} />
          <Route path="/create" element={<EmloyeeCreate />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
