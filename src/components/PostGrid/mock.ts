import { PostGridType } from '.'

export default {
  posts: [
    {
      id: '1',
      slug: 'slug-1',
      excerpt:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      title: 'Neque porro quisquam est qui dolorem',
      cover:
        'https://images.unsplash.com/photo-1682687982502-1529b3b33f85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: '2',
      slug: 'slug-2',
      excerpt:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
      title: 'There are many variations of passages of Lorem',
      cover:
        'https://images.unsplash.com/photo-1703877048317-c74856d65c42?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: '3',
      slug: 'slug-3',
      excerpt:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      title: 'Sed ut perspiciatis unde omnis iste natus error',
      cover:
        'https://images.unsplash.com/photo-1703701008461-ce64767019d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: '1',
      slug: 'slug-1',
      excerpt:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      title: 'Neque porro quisquam est qui dolorem',
      cover:
        'https://images.unsplash.com/photo-1682687982502-1529b3b33f85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: '2',
      slug: 'slug-2',
      excerpt:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
      title: 'There are many variations of passages of Lorem',
      cover:
        'https://images.unsplash.com/photo-1703877048317-c74856d65c42?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: '3',
      slug: 'slug-3',
      excerpt:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      title: 'Sed ut perspiciatis unde omnis iste natus error',
      cover:
        'https://images.unsplash.com/photo-1703701008461-ce64767019d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ],
  disabled: false,
  noMorePosts: false,
  onclick: jest.fn()
} as PostGridType
