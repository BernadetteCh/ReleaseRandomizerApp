import { Text } from 'react-native';

export default function Header({ headerStyle, text }) {
  return <Text style={headerStyle}>{text}</Text>;
}
