// External Dependencies
import { FC } from 'react';

// Internal Dependencies
import { getPublichPath } from 'utils/getPublicPath';

// Local Dependencies
import Spin from './Spin';

// Component Definition
const LoadingSpinner: FC = () => {
  return (
    <Spin>
      <img alt="loading" width={22} src={getPublichPath('/loading.svg')} />
    </Spin>
  );
};

export default LoadingSpinner;
