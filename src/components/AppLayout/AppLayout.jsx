import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

import "./AppLayout.css";

function AppLayout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-layout__content">
        <Header />
        <main className="app-layout__main">
          <outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
