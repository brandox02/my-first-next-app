import { NavbarBrand, Navbar, NavItem, Nav } from 'reactstrap';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import navRoutes from 'common/navRoutes';

export default () => {
  const router = useRouter();

  // console.log(router.pathname.trim().split('/'));

  useEffect(() => {
    const result = () =>
      router.pathname
        .split('/')
        .filter((x) => x !== '')
        .map((x) => `/${x}`)
        .map((x) => {
          return navRoutes.find((y) => {
            if (x === y.href) return { label: y.lable, href: x };
            else if (y.children) {
              const founded = y.children.find((z) => z.href === x);
              if (founded)
                return { label: founded.label, href: `/${founded.href}` };
              else console.log('Ruta no encontrada!');
            }
          });
        });

    console.log(result());
  });

  return (
    <Navbar
      color="light"
      expand="md"
      light
      style={{
        zIndex: 2,
        display: 'flex',
        justifyContent: 'flex-end',
        border: '0.1px solid #2E3138',
      }}
    >
      <NavbarBrand href="/">Colmando de Katanga</NavbarBrand>
      <Nav className="me-auto" navbar style={{ borderLeft: '2px solid grey' }}>
        <NavItem style={{ marginLeft: 30 }}>
          <Link href="/components/">
            <a>{'nested routes'}</a>
          </Link>
          {' / '}
          <Link href="/components/">
            <a>{'Climax'}</a>
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
