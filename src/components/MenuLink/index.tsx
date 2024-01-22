import { MenuLinkContainer } from './styles'

export type MenuLinkProps = {
  text: string
  link: string
  newTab?: boolean
}

const MenuLink = ({ text, link, newTab = false }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self'

  return (
    <MenuLinkContainer href={link} target={target}>
      {text}
      <span></span>
    </MenuLinkContainer>
  )
}
export default MenuLink
