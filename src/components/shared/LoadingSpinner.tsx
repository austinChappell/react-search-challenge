import { FC } from 'react';
import { getPublichPath } from 'utils/getPublicPath';

import Spin from './Spin';

const LoadingSpinner: FC = () => {
  return (
    <Spin>
      <img alt="loading" width={22} src={getPublichPath('/loading.svg')} />
    </Spin>
  );
};

export default LoadingSpinner;
