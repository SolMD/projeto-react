import { UserProvider } from "./context/UserContext";
import AppRoutes from "./routes";

export default function App() {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}