import { Image, LogoContainer } from './styles'

export type LogoProps = {
  altText: string
  url: string
}

const Logo = ({ url, altText }: LogoProps) => {
  return (
    <LogoContainer>
      <Image src={url} alt={altText} />
    </LogoContainer>
  )
}
export default Logo
