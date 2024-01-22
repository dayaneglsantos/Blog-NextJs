'use client'
import { useState } from 'react'
import Heading from '../Heading'
import Logo from '../Logo'
import { Details, HeaderContainer, HeaderContent } from './styles'
import { BsChevronDoubleRight } from 'react-icons/bs'
import { BsChevronDoubleLeft } from 'react-icons/bs'

export type HeaderType = {
  blogName: string
  blogDescription: string
  url: string
  altText: string
}

const Header = ({ blogDescription, blogName, url, altText }: HeaderType) => {
  const [showText, setShowText] = useState(false)

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo url={url} altText={altText} />
        {showText ? (
          <BsChevronDoubleLeft
            onClick={() => setShowText(false)}
            className="text-close"
          />
        ) : (
          <BsChevronDoubleRight
            onClick={() => setShowText(true)}
            className="text-open"
          />
        )}

        <Details showText={showText}>
          <Heading as="h1" size="small" uppercase={true}>
            {blogName}
          </Heading>
          <p>{blogDescription}</p>
        </Details>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
