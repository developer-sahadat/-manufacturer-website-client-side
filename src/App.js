import { ToastContainer } from "react-toastify";
import AllRoutes from "./Component/Routes/AllRoutes";
import Footer from "./Component/Shear/Footer/Footer";
import Header from "./Component/Shear/Header/Header";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <AllRoutes />
        <Footer />
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
