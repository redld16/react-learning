const header = () => {
  return (
    <>
      <header className="d-flex justify-content-center py-2 bg-dark">
        <ul className="nav nav-pills">
          <li className="nav-item ">
            <a
              href="#"
              className="nav-link text-white active "
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white ">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              About
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default header;
