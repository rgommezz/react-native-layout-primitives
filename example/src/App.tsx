import * as React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  AbsoluteStack,
  Row,
  Size,
  Stack,
} from 'react-native-layout-primitives';

const Box = () => {
  return (
    <Stack
      width={100}
      height={100}
      background="purple"
      align="center"
      justify="center"
    >
      <Text>✅</Text>
    </Stack>
  );
};

const Button = () => {
  return (
    <TouchableOpacity>
      <Stack
        background="lightblue"
        align="center"
        justify="center"
        padding={[Size.M, Size.L]}
      >
        <Text>Press me</Text>
      </Stack>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Stack flex={1} spacing={Size.L}>
        <Row
          background="lightblue"
          padding={[Size.M, Size.L]}
          spacing={Size.M}
          align="stretch"
        >
          <Row background="green" align="center" padding={Size.S}>
            <Text>Foo</Text>
          </Row>
          <Stack
            background="orange"
            justify="center"
            padding={Size.S}
            spacing={Size.XS}
          >
            <Text>Hello</Text>
            <Text>World</Text>
          </Stack>
          <Box />
          <Box />
          <Stack
            width="100%"
            height={100}
            background="red"
            borderRadius={Size.S}
          />
        </Row>
        <Row flex={1} background="gray" padding={Size.XS} spacing={Size.L}>
          <Stack grow={1}>
            <Button />
          </Stack>
          <Stack basis={120}>
            <Button />
          </Stack>
        </Row>
      </Stack>
      <AbsoluteStack
        width={100}
        height={100}
        bottom={Size.M}
        right={Size.M}
        background="black"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
