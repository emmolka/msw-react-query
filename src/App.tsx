import Crud from "./pages/crud";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Crud />
    </QueryClientProvider>
  );
};

export default App;
