# react-native-layout-primitives

[![npm](https://img.shields.io/npm/v/react-native-layout-primitives?color=brightgreen)](https://www.npmjs.com/package/react-native-layout-primitives)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-native-layout-primitives)](https://bundlephobia.com/result?p=react-native-layout-primitives)
[![supports iOS](https://img.shields.io/badge/iOS-999999.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)](https://github.com/expo/expo)
[![supports Android](https://img.shields.io/badge/Android-A4C639.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)](https://github.com/expo/expo)
[![supports web](https://img.shields.io/badge/Web-4285F4.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff)](https://github.com/expo/expo)
[![license MIT](https://img.shields.io/badge/license-MIT-brightgreen)](https://github.com/rgommezz/react-native-layout-primitives/blob/master/LICENSE)

A set of primitive components built on top of `View` that allow you to supercharge your UI development

![](./assets/banner.png)

- [Motivation](#motivation)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Motivation

If you would like to know the motivation behind this library, check out this piece: [Rethinking Layout Practices](https://www.reactnative.university/blog/rethinking-layout-practices).

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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
