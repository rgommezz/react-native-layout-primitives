import type { StackProps } from '../components/Stack';

export function mapPaddingToStyleObject(
  padding: NonNullable<StackProps['padding']>
) {
  if (!Array.isArray(padding)) {
    return {
      padding,
    };
  }

  if (padding.length === 1) {
    return {
      padding: padding[0],
    };
  }

  if (padding.length === 2) {
    return {
      paddingVertical: padding[0],
      paddingHorizontal: padding[1],
    };
  }

  if (padding.length === 4) {
    return {
      paddingTop: padding[0],
      paddingRight: padding[1],
      paddingBottom: padding[2],
      paddingLeft: padding[3],
    };
  }

  return {};
}

export enum Size {
  None = 0,
  XS = 4,
  S = 8,
  M = 16,
  L = 24,
  XL = 32,
}

export type GridValue = Size | 0;
