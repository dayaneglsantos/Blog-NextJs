import { BaseProps } from '.'

export default {
  settings: {
    blogName: 'Name',
    altText: 'Alt Text',
    blogDescription: 'Description',
    footerText: 'Footer',
    url: 'url',
    links: [
      {
        link: 'link.com',
        text: 'link text',
        newTab: true
      }
    ]
  },
  children: 'Aqui teremos o conteúdo'
} as BaseProps
