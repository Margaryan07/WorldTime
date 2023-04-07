import { BrowserRouter } from "react-router-dom";
import RoutesProvider from "./routes/RoutesProvider";

function App() {
  return (
    <BrowserRouter >
      <RoutesProvider />
    </BrowserRouter>
  );
}

export default App;
