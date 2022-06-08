import { useLocation, matchRoutes } from 'react-router-dom';

export default function useIsHomePage() {
  const location = useLocation();
  const matches = matchRoutes([{ path: '/' }], location);
  return matches?.length > 0;
}
