export default [
  { label: 'Posts', href: '/posts' },
  { label: 'Users', href: '/users' },
  {
    label: 'Nested Users',
    // href: '/nested',
    children: [
      { label: 'Activos', href: '/nested-users/active' },
      { label: 'Expirados', href: '/nested-users/expirated' },
    ],
  },
  { label: 'Posts back new', href: '/posts' },
  { label: 'Common reacstrap view', href: '/reacstrap-view' },
];
