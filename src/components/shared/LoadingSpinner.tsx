// External Dependencies
import { FC } from 'react';

// Internal Dependencies
import { getPublichPath } from 'utils/getPublicPath';

// Local Dependencies
import Spin from './Spin';

// Local Typings
interface Props {
  size?: number;
}

// Component Definition
const LoadingSpinner: FC<Props> = ({ size = 22 }) => {
  return (
    <Spin>
      <img alt="loading" width={size} src={getPublichPath('/loading.svg')} />
    </Spin>
  );
};

export default LoadingSpinner;
