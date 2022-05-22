import { ToastContainer } from "react-toastify";
import AllRoutes from "./Component/Routes/AllRoutes";
import Footer from "./Component/Shear/Footer/Footer";
import Header from "./Component/Shear/Header/Header";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
