import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Convertion } from "./pages/Convertion";
import { ToastContainer } from "react-toastify";
import { BinarySum } from "./pages/BinarySum";
import { GrayCode } from "./pages/GrayCode";
import { CyclicRedundancy } from "./pages/CyclicRedundancy";
import { NumericSystem } from "./pages/NumericSystem";
import { MenuLayout } from "./layout/MenuLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MenuLayout>
        <NumericSystem />
      </MenuLayout>
    ),
  },
  {
    path: "/problema-5",
    element: (
      <MenuLayout>
        <CyclicRedundancy />
      </MenuLayout>
    ),
  },
  {
    path: "/problema-4",
    element: (
      <MenuLayout>
        <GrayCode />
      </MenuLayout>
    ),
  },
  {
    path: "/problema-3",
    element: (
      <MenuLayout>
        <BinarySum />
      </MenuLayout>
    ),
  },
  {
    path: "/problema-2",
    element: (
      <MenuLayout>
        <Convertion />
      </MenuLayout>
    ),
  },
]);

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
