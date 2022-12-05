import quabu from '../../assets/quabu.jpg'
import { Logo } from '../../components/logo/Logo'
import { Nav } from '../../components/navigator/Nav'
import './header.css'

export const Header = ({ linkNav, backgroundColor }) => {
  return (
    <header className="header" style={backgroundColor && { backgroundColor }}>
      <div className="header__logo">
        <Logo logo={quabu} />
      </div>
      <div className="header__nav">
        <Nav linkNav={linkNav} />
      </div>
    </header>
  )
}
