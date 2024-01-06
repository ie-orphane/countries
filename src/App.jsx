import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Country } from "./pages/Country";
import { NoPage } from "./pages/nopage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<Country />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  )
}

export default App


