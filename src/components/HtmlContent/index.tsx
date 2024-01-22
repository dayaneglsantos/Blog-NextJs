import { HtmlContainer } from './styles'

export type TextProps = {
  html: string
}

const HtmlContent = ({ html }: TextProps) => {
  return (
    <HtmlContainer
      dangerouslySetInnerHTML={{ __html: html }}
      className={`html`}
    />
  )
}
export default HtmlContent

// ${darkTheme ? 'lightText' : 'darkText'}
