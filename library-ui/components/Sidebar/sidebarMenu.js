import Grid from '../../assets/svgs/grid';
import BookOpen from '../../assets/svgs/BookOpen';
import Gift from '../../assets/svgs/gift';
import Settings from '../../assets/svgs/settings';

export const authorRoutes = [
  {
    to: '/dashboard',
    routeIcon: <Grid />,
    routeName: 'Dashboard',
    tag:"overview"
  },
  {
    to: '/dashboard/library',
    routeIcon: <BookOpen />,
    routeName: 'My library',
    tag:"library"
  },
  {
    to: '/dashboard',
    routeIcon: <Gift />,
    routeName: 'Rewards',
    tag:"rewards"
  },
  {
    to: '/dashboard',
    routeIcon: <Settings />,
    routeName: 'Settings',
    tag:"settings"
  },
];
