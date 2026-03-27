import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

function AppRoutes() {
  return (
    <main>
      <div className="min-h-screen  flex flex-col text-white">
        <Navbar />
      </div>
    </main>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
