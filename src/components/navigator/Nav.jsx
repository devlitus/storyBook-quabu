import './nav.css'

export const Nav = ({ linkNav }) => {
  return (
    <div className="nav">
      <div className="nav__links">
        {linkNav.map((item, index) => (
          <a href="/" key={index} className='nav__links__link'>
            {item}
          </a>
        ))}
      </div>
    </div>
  )
}
