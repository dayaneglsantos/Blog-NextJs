'use client'

import MenuMobile from '../MenuMobile'
import { MenuContainer, MenuLinks } from './styles'
import MenuLink, { MenuLinkProps } from '../MenuLink'
import Theme from '../Theme'
import { LogoProps } from '../Logo'

export type MenuType = {
  links: MenuLinkProps[]
  logo: LogoProps
}

const Menu = ({ links, logo }: MenuType) => {
  return (
    <>
      <MenuContainer data-testid="menu">
        <MenuLinks>
          {links.map((link, index) => (
            <li key={index}>
              <MenuLink
                link={link.link}
                newTab={link.newTab}
                text={link.text}
              />
            </li>
          ))}
        </MenuLinks>
        <Theme />
      </MenuContainer>

      <MenuMobile links={links} logo={logo} />
    </>
  )
}

export default Menu
