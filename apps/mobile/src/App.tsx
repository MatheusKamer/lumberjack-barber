import { Text, View } from 'react-native';
import { somar } from '@barber/core'

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>My App {somar(4, 5)}</Text>
    </View>
  );
}