import { PostTemplateProps } from '.'
import mock from '../../components/Post/mock.json'

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
  post: mock
} as unknown as PostTemplateProps
