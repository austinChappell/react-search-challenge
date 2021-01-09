import styled from '@emotion/styled';
import React, { FC } from 'react';

interface Props {
  photoCount: number;
}

const Span = styled.span({
  marginRight: 4,
});

const PhotoCount: FC<Props> = ({ photoCount }) =>
  photoCount > 1 ? <Span>{photoCount}</Span> : null;

export default PhotoCount;
