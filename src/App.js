import { Routes, Route } from "react-router-dom";
import CardsCollection from "./Components/CardsCollection/CardsCollection";
import DatForm from "./Components/Form/DatForm";
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
        <Route path="/RickAndMortyCollection" element={<CardsCollection />} />
        <Route path="/formData" element={<DatForm />} />
        <Route path="*" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
