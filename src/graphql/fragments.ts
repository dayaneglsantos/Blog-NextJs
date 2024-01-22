import { gql } from 'graphql-request'

export const GRAPHQL_FRAGMENTS = gql`
  fragment post on PostEntity {
    id
    attributes {
      title
      slug
      cover {
        data {
          attributes {
            alternativeText
            url
          }
        }
      }
      excerpt
      content
      allowComments
      publishedAt
      tags {
        data {
          attributes {
            displayName
            slug
          }
        }
      }
      categories {
        data {
          attributes {
            displayName
            slug
          }
        }
      }
      author {
        data {
          attributes {
            displayName
            slug
          }
        }
      }
    }
  }

  fragment image on UploadFileEntityResponse {
    data {
      attributes {
        alternativeText
        url
      }
    }
  }

  fragment menuLink on ComponentMenuMenuLink {
    link
    text
    newTab
  }

  fragment settings on SettingEntityResponse {
    data {
      attributes {
        blogName
        blogDescription
        logo {
          ...image
        }
        menuLink {
          ...menuLink
        }
        footer
      }
    }
  }
`
