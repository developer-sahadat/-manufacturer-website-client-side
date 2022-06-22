import { ToastContainer } from "react-toastify";
import AllRoutes from "./Component/Routes/AllRoutes";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useState } from "react";
import LoadingSpinner from "./Component/Shear/LoadingSpinner";

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);
  return (
    <>
      {!isLoading ? (
        <QueryClientProvider client={queryClient}>
          <AllRoutes />

          <ToastContainer />
        </QueryClientProvider>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}

export default App;
