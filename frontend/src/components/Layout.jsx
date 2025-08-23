
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useThemeStore } from "../store/useThemeStore";

const Layout = ({ children, showSidebar = false }) => {
  const { theme } = useThemeStore();

  return (
    <div className="h-screen w-screen flex" data-theme={theme}>
      {showSidebar && <Sidebar />}

      {/* Main content area */}
      <div className="flex-1 flex flex-col h-full">
        <Navbar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;