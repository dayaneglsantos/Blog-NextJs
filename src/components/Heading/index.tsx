import { Title } from './styles'

export type HeadingProps = {
  children: React.ReactNode
  dark?: boolean
  uppercase?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'small' | 'medium' | 'big' | 'huge'
}

const Heading = ({
  children,
  dark = false,
  size = 'huge',
  as = 'h1',
  uppercase = false
}: HeadingProps) => {
  return (
    <Title as={as} size={size} dark={dark} uppercase={uppercase}>
      {children}
    </Title>
  )
}
export default Heading
