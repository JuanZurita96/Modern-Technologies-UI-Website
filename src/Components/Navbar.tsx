import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../Constants'

const Navbar = () => {
  const [active, setActive] = useState('Home')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="navbar flex w-full items-center justify-between py-6">
      <img src={logo} alt="hoobank" className="-mr-20 h-[32px] w-[128px]" />
      <p className="text-gradient flex-1 font-poppins text-[12px] font-semibold text-white ss:text-[32px]">
        [REDACTED-TITLE]
      </p>
      <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer font-poppins text-[16px] font-normal ${
              active === nav.title ? 'text-white' : 'text-dimWhite'
            } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex flex-1 items-center justify-end sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="h-[28px] w-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } bg-black-gradient sidebar absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
        >
          <ul className="flex flex-1 list-none flex-col items-start justify-end">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer font-poppins text-[16px] font-medium ${
                  active === nav.title ? 'text-white' : 'text-dimWhite'
                } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
