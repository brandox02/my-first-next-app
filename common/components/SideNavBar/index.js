import Link from 'next/link';
import { useEffect } from 'react';
import Style from './Style';

export default ({ menus }) => {
  useEffect(() => {
    var dropdown = document.getElementsByClassName('dropdown-btn');
    var i;
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function () {
        // this.classNameList.toggle('active');
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      });
    }
  });

  return (
    <div>
      <div className="sidenav" style={{ marginTop: 40 }}>
        {menus.map((el) => {
          if (el?.children) {
            const children = el.children.map((x) => (
              <Link href={x.href}>
                <a>{x.label}</a>
              </Link>
            ));

            return (
              <>
                <button className="dropdown-btn">
                  {el.label}
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-container">{children}</div>
              </>
            );
          } else {
            return (
              <Link href={el.href}>
                <a>{el.label}</a>
              </Link>
            );
          }
        })}
      </div>
      <Style />
    </div>
  );
};
