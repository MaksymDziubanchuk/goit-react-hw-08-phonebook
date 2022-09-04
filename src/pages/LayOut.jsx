import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';

export default function LayOut() {
  const user = useSelector(state => state.auth.user);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
            )}
            {!user && (
              <li>
                <NavLink to="/login">login</NavLink>
              </li>
            )}
            {user && <UserMenu />}
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
