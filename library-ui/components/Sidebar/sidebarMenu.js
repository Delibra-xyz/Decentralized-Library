import Grid from '../../assets/svgs/grid';
import BookOpen from '../../assets/svgs/BookOpen';
import Gift from '../../assets/svgs/gift';
import Settings from '../../assets/svgs/settings';

export const authorRoutes = [
  {
    to: '/',
    routeIcon: <Grid />,
    routeName: 'Dashboard',
  },
  {
    to: '/',
    routeIcon: <BookOpen />,
    routeName: 'My library',
  },
  {
    to: '/',
    routeIcon: <Gift />,
    routeName: 'Rewards',
  },
  {
    to: '/',
    routeIcon: <Settings />,
    routeName: 'Settings',
  },
];
