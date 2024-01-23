import { PostsTemplateProps } from '.'
import mock from '../../components/PostGrid/mock'

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
  posts: mock.posts
} as PostsTemplateProps
