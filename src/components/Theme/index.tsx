import { useContext } from 'react'
import Image from 'next/image'
import { ThemeContainer, ThemeItem } from './styles'
import dark from '../../assets/images/dark.png'
import light from '../../assets/images/light.png'
import { ThemeContext } from '../../app/theme-provider'

const Theme = () => {
  const themeContext = useContext(ThemeContext)
  return (
    <ThemeContainer>
      <ThemeItem>
        <Image
          src={dark.src}
          alt="Dark Theme"
          height={24}
          width={24}
          onClick={() => themeContext.setTheme('dark')}
        />
      </ThemeItem>
      <ThemeItem>
        <Image
          src={light.src}
          alt="Light Theme"
          height={24}
          width={24}
          onClick={() => themeContext.setTheme('light')}
        />
      </ThemeItem>
    </ThemeContainer>
  )
}
export default Theme
