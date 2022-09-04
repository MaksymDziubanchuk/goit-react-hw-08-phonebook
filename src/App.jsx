import { Routes, Route, Navigate } from 'react-router-dom';

import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import LayOut from './pages/LayOut';
import { withPrivateRoute } from './HOC/withPivateRoute';

const ProtectedContacts = withPrivateRoute(Contacts);

export default function App() {
  // console.log(user)
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<ProtectedContacts />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
