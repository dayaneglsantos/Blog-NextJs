/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuLinkProps } from '../components/MenuLink'
import { Author } from '../shared-types/author'
import { Category } from '../shared-types/category'
import { Post } from '../shared-types/post'
import { Settings } from '../shared-types/settings'
import { Tag } from '../shared-types/tags'
import { PostAndSettings } from './load-posts'

export const mapData = (pageData = {} as any): PostAndSettings => {
  const {
    setting = {},
    posts: { data: posts = [] }
  } = pageData

  return {
    setting: mapSettings(setting),
    posts: mapPosts(posts)
  }
}

export const mapSettings = (settings = {} as any): Settings => {
  const {
    data: {
      attributes: {
        blogName = '',
        blogDescription = '',
        logo: {
          data: {
            attributes: { alternativeText: altText = '', url = '' }
          }
        },
        menuLink: links = [],
        footer: [
          {
            children: [{ text: footerText = '' }]
          }
        ]
      }
    }
  } = settings

  return {
    blogName,
    url,
    altText,
    blogDescription,
    links: mapMenuLinks(links),
    footerText
  }
}

const mapMenuLinks = (links = []): MenuLinkProps[] => {
  return links.map((menuLink: MenuLinkProps) => {
    const { link = '', text = '', newTab = true } = menuLink

    return {
      link,
      text,
      newTab
    }
  })
}

export const mapPosts = (posts = [] as any): Post[] => {
  return posts.map((post: any): Post => {
    const {
      id = '',
      attributes: {
        title = '',
        slug = '',
        cover: {
          data: {
            attributes: { alternativeText: altText = '', url: cover = '' }
          }
        },
        excerpt = '',
        content: [
          {
            children: [{ text: textContent = '' }]
          }
        ],
        publishedAt = '',
        allowComments = true,
        tags: { data: tags = [] },
        author: { data: author = {} },
        categories: { data: categories = [] }
      }
    } = post

    return {
      id,
      altText,
      cover,
      title,
      slug,
      textContent,
      excerpt,
      publishedAt,
      allowComments,
      tags: mapTags(tags),
      author: mapAuthor(author),
      categories: mapCategories(categories)
    }
  })
}

const mapTags = (tags = [] as any): Tag[] => {
  return tags.map((tag: any) => {
    const {
      attributes: { displayName = '', slug = '' }
    } = tag

    return {
      slug,
      displayName
    }
  })
}
const mapCategories = (categories = [] as any): Category[] => {
  return categories.map((category: any) => {
    const {
      attributes: { displayName = '', slug = '' }
    } = category

    return {
      slug,
      displayName
    }
  })
}

const mapAuthor = (author = {} as any): Author => {
  const {
    attributes: { displayName = '', slug = '' }
  } = author

  return {
    slug,
    displayName
  }
}
