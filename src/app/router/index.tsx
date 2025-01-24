import { Routes, Route } from 'react-router';

import App from '@/app/App';

const Home = () => (
  <div>
    <App />
  </div>
);
const About = () => <div>AboutPage</div>;
const AuthLayout = () => <div>AuthLayout</div>;
const Login = () => <div>LoginPage</div>;
const Register = () => <div>RegisterPage</div>;
const ConcertsHome = () => <div>ConcertsHomePage</div>;
const City = () => <div>CityPage</div>;
const Trending = () => <div>TrendingPage</div>;

const AppRouter = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />

    <Route element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>

    <Route path="concerts">
      <Route index element={<ConcertsHome />} />
      <Route path=":city" element={<City />} />
      <Route path="trending" element={<Trending />} />
    </Route>
  </Routes>
);

export { AppRouter };
