import Grid from '../../assets/svgs/grid';
import Fire from '../../assets/svgs/fire';
import BookOpen from '../../assets/svgs/BookOpen';
import Gift from '../../assets/svgs/gift';
import Settings from '../../assets/svgs/settings';

export const authorRoutes = [
  {
    to: '/author/overview',
    routeIcon: <Grid />,
    routeName: 'Dashboard',
    tag: 'overview',
  },
  {
    to: '/author/library',
    routeIcon: <BookOpen />,
    routeName: 'My library',
    tag: 'library',
  },
  {
    to: '/author',
    routeIcon: <Gift />,
    routeName: 'Rewards',
    tag: 'rewards',
  },
  {
    to: '/author/settings',
    routeIcon: <Settings />,
    routeName: 'Settings',
    tag: 'settings',
  },
];

export const readerRoutes = [
  {
    to: '/reader/home',
    routeIcon: <Grid />,
    routeName: 'Home',
    tag: 'home',
  },
  {
    to: '/reader/browse',
    routeIcon: <Fire />,
    routeName: 'Browse',
    tag: 'browse',
  },
  {
    to: '/reader/library',
    routeIcon: <BookOpen />,
    routeName: 'My library',
    tag: 'library',
  },
  {
    to: '/reader',
    routeIcon: <Gift />,
    routeName: 'Rewards',
    tag: 'rewards',
  },
  {
    to: '/reader',
    routeIcon: <Settings />,
    routeName: 'Settings',
    tag: 'settings',
  },
];
