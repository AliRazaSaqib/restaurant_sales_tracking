import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import { Home } from "../home/Home";
import { MenuItemForm } from "../item-form/MenuItemForm";

export default function AppRouters() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-menu" element={<MenuItemForm />} />
            <Route path="/update-menu" element={<MenuItemForm />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}
