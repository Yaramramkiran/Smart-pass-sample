import ReactDOM from "react-dom/client"; // Import from the new ReactDOM client
import "./index.css";
import { Contextprovider } from "./context/appcontext.tsx";
import Appnavigation from "./navigators/Appnavigation.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

// Use ReactDOM.createRoot to render your app
const root = ReactDOM.createRoot(document.getElementById("root")!);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <Contextprovider>
      <Appnavigation />
    </Contextprovider>
  </QueryClientProvider>
);
