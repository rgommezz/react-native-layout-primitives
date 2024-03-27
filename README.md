# react-native-layout-primitives

[![npm](https://img.shields.io/npm/v/react-native-layout-primitives?color=brightgreen)](https://www.npmjs.com/package/react-native-layout-primitives)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-native-layout-primitives)](https://bundlephobia.com/result?p=react-native-layout-primitives)
[![supports iOS](https://img.shields.io/badge/iOS-999999.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)](https://github.com/expo/expo)
[![supports Android](https://img.shields.io/badge/Android-A4C639.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)](https://github.com/expo/expo)
[![supports web](https://img.shields.io/badge/Web-4285F4.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff)](https://github.com/expo/expo)
[![license MIT](https://img.shields.io/badge/license-MIT-brightgreen)](https://github.com/rgommezz/react-native-layout-primitives/blob/master/LICENSE)

A set of primitive components built on top of `View` that allow you to supercharge your UI development.

![](./assets/banner.png)

- [Motivation](#motivation)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Motivation

Layout is one of the most overlooked areas of design systems. React Native ships with the `View` component as the foundational block to build user interfaces.
It is a low-level primitive that offers a lot of flexibility (50+ style props). But when you have that degree of flexibility it's easy to get things messy,
and it's a breeze to end up with code that:

- Mixes inline styles with `StyleSheet` defined styles
- Uses arbitrary values ("magic numbers")
- Margins, the devil of layout
- Disrupts the top-to-bottom flow, due to styles being placed at the bottom of the file
- Lacks separation of concerns, with `Text` also taking on layout duties
- Doesn't adhere to design system conventions

This library aims to implement the right abstractions on top of `View`, by fixing all of the problems outlined above,
and establishing a clear set of rules and guidelines that are backed by some of the most renowned figures in the industry:

- **Components should be free of surrounding white space.**
- **Layout components take ownership of white space.**
- **Margins are forbidden, with the exception of negative ones.**
  
That way you can approach layout with the precision of a designer.

If you appreciate deep dives, you will also enjoy this piece: [Rethinking Layout Practices](https://www.reactnative.university/blog/rethinking-layout-practices).

## Installation

```sh
npm install react-native-layout-primitives
```

## Usage

```jsx
import {
  Stack,
  Row,
  AbsoluteStack,
  Size,
} from 'react-native-layout-primitives';

const App = () => (
  <Stack flex={1}>
    <Row background="lightblue" padding={[Size.M, Size.L]} spacing={Size.M}>
      <Row align="center" padding={Size.S}>
        <Text>Foo</Text>
      </Row>
      <Stack justify="center" padding={Size.S} spacing={Size.Xs}>
        <Text>Hello</Text>
        <Text>World</Text>
      </Stack>
      <Stack width="100%" height={100} background="red" borderRadius={Size.S} />
    </Row>
    <Row flex={1} background="gray" padding={Size.Xl} spacing={Size.L}>
      <Stack grow={1}>
        <Button />
      </Stack>
      <Stack basis={120}>
        <Button />
      </Stack>
    </Row>
    <AbsoluteStack
      width={100}
      height={100}
      bottom={Size.M}
      right={Size.M}
      background="black"
    />
  </Stack>
);
```

## API
This library exposes 3 Layout components and a useful enum for grid-based spacing.

### `Stack`
The primary component to perform layout. It stacks children vertically by default, similar to `View`.
It extends the `ViewProps` interface, meaning it can take all the props that `View` can. In addition, it exposes
the following props to control layout:

```ts
interface StackProps extends ViewProps {
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
```

As a last resort, you can always use the `style` prop to pass custom styles.

### `Row`
A container that stacks children horizontally. It's syntactic sugar for `Stack` with `direction="row"`.
By default it wraps them into multiple lines, and presents the same props as the `Stack` component.

### `AbsoluteStack`
A container with absolute positioning. It's syntactic sugar for `Stack` with `position="absolute"`.
Besides all `Stack` props, it presents 4 new ones: `top`, `right`, `bottom` and `left`.

### `Size`
A useful enum that follows t-shirt convention. This approached has been favoured over strings ('s', 'm', etc) to allow
for math operations in special cases, such as:
- Multiples of a size, like `XXl` or `XXXl` values
- Adding or subtracting sizes to create custom spacing: `Size.M + Size.Xs`

```ts
enum Size {
  None = 0,
  Xs = 4,
  S = 8,
  M = 16,
  L = 24,
  Xl = 32,
}

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
