import { Routes, Route } from "react-router-dom";
import Form from "./Components/Form/Form";
import Menu from "./Components/Menu/Menu";
import TableU from "./Components/Table/TableU";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/form" element={<Form />} />
        <Route path="/table" element={<TableU />} />
        <Route path="*" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
