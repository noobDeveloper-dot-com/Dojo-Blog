const Navbar = () => {
  return (
    <>
      <nav className="navbar flexB">
        <h1>The Dojo Blog</h1>
        <ul className="primary-navigation flexB">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/create">New Blog</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
