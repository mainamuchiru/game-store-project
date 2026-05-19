import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AdminPanelLayout from "./components/AdminPanelLayout";
import AddNewGame from "./pages/adminpanel/AddNewGame";
import EditGame from "./pages/adminpanel/EditGame";
import AdminLandingPage from "./pages/adminpanel/AdminLandingPage";
import EditGameForm from "./pages/adminpanel/EditGameForm";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />

        <Route path="adminpanel" element={<AdminPanelLayout />}>
          <Route index element={<AdminLandingPage />} />
          <Route path="addnewgame" element={<AddNewGame />} />
          <Route path="editgame" element={<EditGame />} />
          <Route path="editgame/:id" element={<EditGameForm />} />
        </Route>

        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;