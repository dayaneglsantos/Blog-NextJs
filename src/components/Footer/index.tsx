import { FooterContainer } from './styles'

export type FooterProps = {
  children: string
}

const Footer = ({ children }: FooterProps) => {
  return <FooterContainer>{children}</FooterContainer>
}
export default Footer
