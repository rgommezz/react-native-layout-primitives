import * as React from 'react';
import type { PropsWithChildren } from 'react';
import {
  type DimensionValue,
  type FlexStyle,
  type StyleProp,
  View,
  type ViewProps,
  type ViewStyle,
} from 'react-native';
import { type GridValue, mapPaddingToStyleObject } from '../utils';

export interface StackProps extends ViewProps {
  flex?: number;
  direction?: FlexStyle['flexDirection'];
  padding?:
    | GridValue
    | [GridValue]
    | [GridValue, GridValue]
    | [GridValue, GridValue, GridValue, GridValue];
  spacing?: GridValue;
  justify?: FlexStyle['justifyContent'];
  align?: FlexStyle['alignItems'];
  wrap?: FlexStyle['flexWrap'];
  borderRadius?: number;
  background?: string;
  grow?: number;
  shrink?: number;
  basis?: number;
  width?: number | DimensionValue;
  height?: number | DimensionValue;
  children?: React.ReactNode;
}

const Stack: React.FC<StackProps> = ({
  flex,
  direction = 'column',
  borderRadius,
  background,
  align = 'stretch',
  justify = 'flex-start',
  padding = 0,
  spacing,
  wrap = 'nowrap',
  grow,
  shrink,
  basis,
  width,
  height,
  style,
  children,
  ...rest
}: PropsWithChildren<StackProps>) => {
  const paddingStyle = mapPaddingToStyleObject(padding);

  const stackStyles: StyleProp<ViewStyle> = {
    flexDirection: direction as FlexStyle['flexDirection'],
    flexWrap: wrap,
    justifyContent: justify,
    alignItems: align,
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis,
    width,
    height,
    borderRadius,
    flex,
    backgroundColor: background,
    ...paddingStyle,
  };

  if (direction === 'column' && spacing) {
    stackStyles.rowGap = spacing;
  } else if (direction === 'row' && spacing) {
    stackStyles.gap = spacing;
    stackStyles.flexWrap = 'wrap';
  }

  return (
    <View {...rest} style={[stackStyles, style]}>
      {children}
    </View>
  );
};

export default Stack;
