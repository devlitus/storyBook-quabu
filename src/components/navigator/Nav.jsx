import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './nav.css'

export const Nav = ({ linkNav }) => {
  return (
    <div className="nav">
      <div className="nav__links">
        <div className='nav__links-movile'>
          <button><FontAwesomeIcon icon={faXmark} /></button>
        </div>
        {linkNav.map((item, index) => (
          <a href="/" key={index} className='nav__links__link'>
            {item}
          </a>
        ))}
      </div>
    </div>
  )
}
