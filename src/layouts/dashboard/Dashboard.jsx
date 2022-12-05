import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import { Sidebar } from '../sidebar/Sidebar'
import './dashboard.css'

export const DashboardLayout = ({ children, linkSide, linkNav }) => {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <Header linkNav={linkNav}/>
      </div>
      <div className="dashboard__sidebar">
        <Sidebar linkSide={linkSide} />
      </div>
      <div className="dashboard__content">{children}</div>
      <div className="dashboard__footer">
        <Footer linkNav={linkNav} />
      </div>
    </div>
  )
}
