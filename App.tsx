import { Button, Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import useStore from './src/store';

function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { count, inc } = useStore()
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Text style={{ fontSize: 28 }}>Content is in safe area.{count}</Text>
      <Button
        title="Press me"
        onPress={inc}
      />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}