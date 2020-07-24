import LandingPage from './LandingPage.jsx';
import LoginPage from './Login.jsx';
import ProfileSetupPage from './ProfileSetup.jsx';
import ProfilePage from './Profile.jsx';
import BranchZoomPage from './BranchZoom.jsx';
import About from './About.jsx';
import NotFound from './NotFound.jsx';

const routes = [
  { path: '/home', component: LandingPage },
  { path: '/login', component: LoginPage },
  { path: '/profilesetup', component: ProfileSetupPage },
  { path: '/profile', component: ProfilePage },
  { path: '/zoom', component: BranchZoomPage },
  { path: '/about', component: About },
  { path: '*', component: NotFound },
];

export default routes;
