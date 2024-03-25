import * as React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import Stack, { type StackProps } from './Stack';

interface PositionProps {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

const AbsoluteStack: React.FC<StackProps & Partial<PositionProps>> = (
  props
) => {
  const positionStyles: StyleProp<ViewStyle> = {
    position: 'absolute',
    top: props.top,
    bottom: props.bottom,
    left: props.left,
    right: props.right,
  };

  return <Stack {...props} style={[positionStyles, props.style]} />;
};

export default AbsoluteStack;
