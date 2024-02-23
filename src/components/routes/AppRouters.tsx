import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import { Home } from "../home/Home";
import { Form } from "../item-form/Form";

export default function AppRouters() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-menu" element={<Form />} />
            <Route path="/update-menu" element={<Form />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}
