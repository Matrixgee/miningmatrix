import { RouterProvider } from "react-router-dom";
import { MainRoute } from "./Routes/Route";

function App() {
  return (
    <>
      <RouterProvider router={MainRoute} />
    </>
  );
}

export default App;
