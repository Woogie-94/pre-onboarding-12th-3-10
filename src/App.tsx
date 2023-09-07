import { RouterProvider } from "react-router-dom";

import router from "./routes/route";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
}

export default App;
