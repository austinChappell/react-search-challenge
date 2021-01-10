// External Dependencies
import { FC, useEffect } from 'react';

// Local Dependencies
import LoadingScreen from './LoadingScreen';

// Local Typings
interface Props {
  isLoading: boolean;
  title: string;
}

// Component Definition
const Page: FC<Props> = ({ children, isLoading, title }) => {
  useEffect(() => {
    document.title = `Match | ${title}`;
  }, [title]);

  return isLoading ? <LoadingScreen /> : <>{children}</>;
};

export default Page;
