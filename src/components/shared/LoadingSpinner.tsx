import { FC } from 'react';

import Spin from './Spin';

const LoadingSpinner: FC = () => {
  return (
    <Spin>
      <img alt="loading" width={22} src="loading.svg" />
    </Spin>
  );
};

export default LoadingSpinner;
