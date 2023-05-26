import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CreateMeetingPage from "./pages/CreateMeetingPage";
import ProfilePage from "./pages/ProfilePage";
import CalendarPage from "./pages/CalendarPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <LoginPage /> },
      { path: "home", element: <HomePage /> },
      { path: "create", element: <CreateMeetingPage />},
      { path: "profile", element: <ProfilePage />},
      { path: "calendar", element: <CalendarPage />},
    ],
  },
]);

export default router;
