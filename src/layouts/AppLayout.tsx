import { Outlet } from 'react-router-dom'
import AppHeader from '../components/AppHeader'

function AppLayout() {
  return (
    <div className="min-h-screen bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text-primary))]">
      <AppHeader />
      <Outlet />
    </div>
  )
}

export default AppLayout
