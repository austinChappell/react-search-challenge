import styled from '@emotion/styled';
import { AnimationEvent, FC } from 'react';

// Local Typings
interface BarProps {
  direction: 'forward' | 'reverse';
  intervalInSeconds: number;
  isPaused: boolean;
}
interface Props extends BarProps {
  onRepeat: (evt: AnimationEvent<HTMLDivElement>) => void;
}

const Container = styled.div({
  border: '1px solid black',
  borderRadius: 4,
  width: 100,
});

const Bar = styled.div<BarProps>(({ direction, intervalInSeconds, isPaused }) => ({
  backgroundColor: 'blue',
  height: 6,
  ...(!isPaused && {
    animation: `progress ${intervalInSeconds}s linear infinite`,

    '@keyframes progress': {
      from: {
        width: direction === 'forward' ? 0 : '100%',
      },
      to: {
        width: direction === 'forward' ? '100%' : 0,
      },
    },
  }),
}));

const InfiniteProgressBar: FC<Props> = ({ direction, intervalInSeconds, isPaused, onRepeat }) => {
  return (
    <Container>
      <Bar
        direction={direction}
        intervalInSeconds={intervalInSeconds}
        isPaused={isPaused}
        onAnimationIteration={onRepeat}
      />
    </Container>
  );
};

export default InfiniteProgressBar;
