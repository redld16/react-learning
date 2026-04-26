const Sidebar = ({ setSelectedTab, selectedTab }) => {
  const sidebarItems = [
    {
      id: "Home",
      label: "Home",
      icon: "🏠", // ✅ Using emoji instead of broken SVG
    },
    {
      id: "CreatePost",
      label: "Create Post",
      icon: "➕", // ✅ Using emoji
    },
  ];

  const handleClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="sidebar-container d-flex flex-column flex-shrink-0 p-3 bg-secondary" >
      <ul className="nav nav-pills flex-column mb-auto gap-2">
        {sidebarItems.map((item) => (
          <li className="nav-item" key={item.id}>
            <a
              href="#"
              className={`nav-link text-white d-flex align-items-center gap-2 ${
                selectedTab === item.id ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.id);
              }}
              aria-current={selectedTab === item.id ? "page" : undefined}
            >
              <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
