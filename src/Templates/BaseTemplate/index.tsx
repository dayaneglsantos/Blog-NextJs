import { ReactNode } from 'react'
import Menu from '../../components/Menu'
import { Settings } from '../../shared-types/settings'
import { BaseContainer } from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export type BaseProps = {
  settings: Settings
  children: ReactNode
}

const BaseTemplate = ({ children, settings }: BaseProps) => {
  return (
    <BaseContainer>
      <Menu
        links={settings.links}
        logo={{ url: settings.url, altText: settings.altText }}
      />
      <Header
        blogDescription={settings.blogDescription}
        blogName={settings.blogName}
        url={settings.url}
        altText={settings.altText}
      />
      {children}
      <Footer>{settings.footerText}</Footer>
    </BaseContainer>
  )
}

export default BaseTemplate
