import {
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { UserMenu } from './components/UserMenu/UserMenu';
import { withPrivateRoute } from './HOC/withPivateRoute';

const ProtectedContacts = withPrivateRoute(Contacts)

export default function App() {
  const user = useSelector(state => state.auth.user);
// console.log(user)
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {user && <li><Link to="/contacts">Contacts</Link></li>}
          {!user && <li><Link to="/login">login</Link></li>}
          {user && <UserMenu />}
        </ul>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<ProtectedContacts />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
