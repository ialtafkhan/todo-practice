import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import PageNotFound from "./Pages/PageNotFound";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Todo from "./Pages/Todo";
import Protected from "./Protected";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/todo" element={<Todo />} /> */}
        <Route path="/todo" element={<Protected element={<Todo />} />} />

        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
