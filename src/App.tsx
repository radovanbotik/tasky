import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {
  CreateTask,
  Root,
  Tasks,
  ErrorPage,
  LandingPage,
  Protected,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="tasks"
        element={
          <Protected>
            <Root />
          </Protected>
        }
      >
        <Route index element={<Tasks />} />
        <Route path="create-task" element={<CreateTask />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
