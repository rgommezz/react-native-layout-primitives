import * as React from 'react';
import Stack, { type StackProps } from './Stack';
import type { PropsWithChildren } from 'react';

const Row = (props: PropsWithChildren<StackProps>) => {
  return <Stack direction="row" {...props} />;
};

export default Row;
