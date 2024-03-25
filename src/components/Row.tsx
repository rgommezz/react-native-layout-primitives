import * as React from 'react';
import Stack, { type StackProps } from './Stack';

const Row: React.FC<StackProps> = (props) => {
  return <Stack direction="row" {...props} />;
};

export default Row;
