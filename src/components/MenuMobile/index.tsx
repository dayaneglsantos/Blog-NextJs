'use client'
import { useState } from 'react'
import { MenuButton, MenuMobileContainer, Overlay } from './styles'
import MenuLink from '../MenuLink'
import Logo from '../Logo'

import Theme from '../Theme'
import { MenuType } from '../Menu'

const MenuMobile = ({ links, logo }: MenuType) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <div>
      <MenuButton>
        <label htmlFor="burger" className="burger">
          <input
            type="checkbox"
            id="burger"
            onClick={toggleMenu}
            checked={menuOpen}
            aria-label="Menu burger"
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </MenuButton>
      {menuOpen && (
        <>
          <Overlay
            onClick={() => setMenuOpen(false)}
            aria-label="overlay"
          ></Overlay>
          <MenuMobileContainer data-testid="menu">
            <Logo url={logo.url} altText={logo.altText} />
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <MenuLink
                    text={link.text}
                    newTab={link.newTab}
                    link={link.link}
                  />
                </li>
              ))}
            </ul>
            <Theme />
          </MenuMobileContainer>
        </>
      )}
    </div>
  )
}

export default MenuMobile
