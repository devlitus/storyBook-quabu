import { Nav } from '../../components/navigator/Nav'
import './footer.css'

export const Footer = ({ linkNav }) => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__nav">
          <Nav linkNav={linkNav} />
        </div>
      </div>
    </footer>
  )
}
