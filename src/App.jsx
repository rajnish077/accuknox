import DashboardProvider from "./context/DashboardContext";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
};

export default App;
