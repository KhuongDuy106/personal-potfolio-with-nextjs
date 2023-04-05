
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/router'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-6">
          <div>
            {/*<Link href="/" aria-label="Khuong Duy's website">
              <Logo className="h-50" />
            </Link>*/}
            <Link href="/" aria-label="Khuong Duy's website"
                  className="hover:dark:text-primary-color-dark hover:text-primary-color p-1 font-serif font-medium text-2xl text-gray-900 dark:text-gray-100 sm:p-4"
            >
              {siteMetadata.author}
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hover:dark:text-primary-color-dark hover:text-primary-color p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch theme={siteMetadata.theme} />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
