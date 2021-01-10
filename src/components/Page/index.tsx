// External Dependencies
import { FC } from 'react';

// Internal Dependencies
import LoadingScreen from 'components/LoadingScreen';

// Local Typings
interface Props {
  isLoading: boolean;
}

// Component Definition
const Page: FC<Props> = ({ children, isLoading }) => {
  return isLoading ? <LoadingScreen /> : <>{children}</>;
};

export default Page;
