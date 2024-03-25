# react-native-layout-primitives

A set of primitive components built on top of `View` that allow you to supercharge your UI development

![](./assets/banner.png)

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
