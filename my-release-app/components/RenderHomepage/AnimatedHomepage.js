import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import WelcomePage from '../WelcomePage';
import Headline from '../Headline';
import ReleaseAction from '../ReleaseAction';
import ChampionDisplay from '../ChampionDisplay';

export default function RenderHomepage({ startAndStopAnimation }) {
  const [showComponent, setShowComponent] = useState(true);
  const [developer, setDeveloper] = useState(null);
  const [showDev, setShowDev] = useState(true);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const onfadeOut = () => {
    setShowComponent(false);
  };

  const handleButtonClick = (toggleStart) => {
    setShowDev(toggleStart);
    fadeIn();
  };

  return (
    <View style={styles.container}>
      {showComponent ? (
        <WelcomePage onfadeOut={onfadeOut} />
      ) : (
        <View style={styles.contentContainer}>
          <Headline />
          <View style={styles.imageContainer}>
            <ChampionDisplay
              developer={developer}
              showDev={showDev}
              fadeAnim={fadeAnim}
            />
            <ReleaseAction
              startAndStopAnimation={startAndStopAnimation}
              setDeveloper={setDeveloper}
              handleButtonClick={handleButtonClick}
            />
          </View>
          <StatusBar style="auto" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    maxWidth: 400,
  },
});
