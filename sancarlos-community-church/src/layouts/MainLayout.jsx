import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import OrganizationSchema from '../seo/OrganizationSchema'

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen pt-[104px]">
      <OrganizationSchema />
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
