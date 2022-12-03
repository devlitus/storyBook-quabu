export const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="dashboard__sidebar">
        <Sidebar />
      </div>
      <div className="dashboard__content">{children}</div>
    </div>
  )
}
