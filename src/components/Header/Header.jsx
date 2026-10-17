import { Search, Bell } from "lucide-react";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <form role="search" className="header__search">
        <button
          className="header__search-button"
          type="submit"
          aria-label="Search"
        >
          <Search size={18} strokeWidth={2} aria-hidden="true" />
        </button>
        <input
          type="search"
          className="header__search-input"
          name="search"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
      <button
        className="header__notification-button"
        type="button"
        aria-label="Notifications"
      >
        <Bell size={22} strokeWidth={1.8} />
      </button>
      <span className="header__avatar">RL</span>
    </header>
  );
}

export default Header;
