import { SafeAreaView, StyleSheet } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import RenderHomepage from './components/RenderHomepage/RenderHomepage';
import Confetti from './components/Confetti/Confetti';

export default function App() {
  const [animationStart, setAnimationStart] = useState(false);

  const startAndStopAnimation = () => {
    setAnimationStart((data) => !data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <RenderHomepage startAndStopAnimation={startAndStopAnimation} />
      <Confetti animation={animationStart} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
