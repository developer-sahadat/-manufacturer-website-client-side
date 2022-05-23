import { ToastContainer } from "react-toastify";
import AllRoutes from "./Component/Routes/AllRoutes";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AllRoutes />

        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
