import Grid from '../../assets/svgs/grid';
import BookOpen from '../../assets/svgs/BookOpen';
import Gift from '../../assets/svgs/gift';
import Settings from '../../assets/svgs/settings';

export const authorRoutes = [
  {
    to: '/dashboard',
    routeIcon: <Grid />,
    routeName: 'Dashboard',
  },
  {
    to: '/dashboard/library',
    routeIcon: <BookOpen />,
    routeName: 'My library',
  },
  {
    to: '/dashboard',
    routeIcon: <Gift />,
    routeName: 'Rewards',
  },
  {
    to: '/dashboard',
    routeIcon: <Settings />,
    routeName: 'Settings',
  },
];
