export const Nav = ({ logo }) => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav__links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  )
}
