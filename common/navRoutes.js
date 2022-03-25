export default [
  { label: 'Posts', href: '/posts' },
  { label: 'Users', href: '/users' },
  {
    label: 'Nested Menu',
    href: '/nested',
    children: [
      { label: 'To Dos', href: '/todos' },
      { label: 'User back new', href: '/users' },
    ],
  },
  { label: 'Posts back new', href: '/posts' },
  { label: 'Common reacstrap view', href: '/reacstrap-view' },
]