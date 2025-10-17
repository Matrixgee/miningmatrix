import { RouterProvider } from "react-router-dom";
import { MainRoute } from "./Route/Route";

function App() {
  return (
    <>
      <RouterProvider router={MainRoute} />
    </>
  );
}

export default App;
