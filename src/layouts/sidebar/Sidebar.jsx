
import './sidebar.css'

export const Sidebar = ({ linkSide, backgroundColor }) => {
  return (
    <div className="sidebar" style={backgroundColor && { backgroundColor }}>
      <div className="sidebar__nav">
        <ul className="sidebar__list">
          {linkSide.map((item, index) => (
            <li key={index} className="sidebar__item">
              <a href="/" className="sidebar__link">
                <i className="sidebar__icon "></i>
                <span className="sidebar__text">{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
