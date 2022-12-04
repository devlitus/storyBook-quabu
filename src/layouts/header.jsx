import quabu from '../assets/quabu.jpg'
import { Logo } from '../components/logo/Logo'
import { Nav } from '../components/navigator/Nav'
import './header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo logo={quabu} />
      </div>
      <div className="header__nav">
        <Nav />
      </div>
    </header>
  )
}
