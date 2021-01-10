// External Dependencies
import { FC } from 'react';

// Internal Dependencies
import LoadingScreen from 'components/LoadingScreen';

// Local Typings
interface Props {
  isLoading: boolean;
  title: string;
}

// Component Definition
const Page: FC<Props> = ({ children, isLoading, title }) => {
  document.title = `Match | ${title}`;

  return isLoading ? <LoadingScreen /> : <>{children}</>;
};

export default Page;
