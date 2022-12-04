import './nav.css'

export const Nav = ({ logo }) => {
  return (
    <div className="nav">
      <div className="nav__links">
        <a className='nav__links__link' href="#">Home</a>
        <a className='nav__links__link' href="#">About</a>
        <a className='nav__links__link' href="#">Contact</a>
      </div>
    </div>
  )
}
