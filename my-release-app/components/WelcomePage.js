import { Animated, StyleSheet } from 'react-native';
import { useEffect, useRef } from 'react';

export default function WelcomePage({ onfadeOut }) {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      onfadeOut();
    });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      fadeOut();
    }, 2000);

    return () => clearTimeout(timer);
  }, [fadeOut]);

  return (
    <Animated.Image
      source={require('../assets/img/create-penguin-dark.svg')}
      style={[
        styles.fadingContainer,
        {
          opacity: fadeAnim,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  fadingContainer: {
    padding: 20,
    maxWidth: 800,
    maxHeight: 800,
  },
});
