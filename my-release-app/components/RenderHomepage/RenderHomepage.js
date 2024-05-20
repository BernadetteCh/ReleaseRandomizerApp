import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View, Text, Image } from 'react-native';
import Header from '../Header/Header';
import ReleaseButton from '../ReleaseButton/ReleaseButton';

export default function RenderHomepage({ startAndStopAnimation }) {
  const [showComponent, setShowComponent] = useState(true);
  const [developer, setDeveloper] = useState(null);
  const [showDev, setShowDev] = useState(true);

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      fadeOut();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const fadeIn = () => {
    Animated.timing(fadeAnim2, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      setShowComponent(false);
    });
  };

  const handleButtonClick = (toggle) => {
    setShowDev(toggle);
    fadeIn();
  };

  return (
    <View style={styles.container}>
      {showComponent ? (
        <Animated.Image
          source={require('../../assets/img/create-penguin-dark.svg')}
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
            },
          ]}
        />
      ) : (
        <View style={styles.contentContainer}>
          <Header
            headerStyle={styles.mainTitle}
            text={'Release-Roulette App'}
          />
          <Header
            headerStyle={styles.subTitle}
            text={'Who will do the next release? 🧑‍💻'}
          />
          <View style={styles.imageContainer}>
            {developer != null &&
              showDev && ( // Conditionally render image if developer is selected
                <View>
                  <Animated.View
                    style={[
                      {
                        opacity: fadeAnim2,
                      },
                    ]}
                  >
                    <Text style={styles.winner}>
                      🎉 Congratulations {developer.firstName} ! 🎉
                    </Text>
                    <Animated.Image
                      source={developer.imgSrc}
                      style={[
                        {
                          opacity: fadeAnim2,
                          width: 400,
                          height: 400,
                          marginBottom: 20,
                          borderRadius: '50%',
                        },
                      ]}
                    />
                  </Animated.View>
                </View>
              )}
            <View style={styles.buttonContainer}>
              <ReleaseButton
                startAndStopAnimation={startAndStopAnimation}
                setDeveloper={setDeveloper}
                handleButtonClick={handleButtonClick}
              />
            </View>
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
  mainTitle: {
    fontSize: 90,
    textAlign: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 45,
    textAlign: 'center',
    marginBottom: 20,
  },
  fadingContainer: {
    padding: 20,
    maxWidth: 800,
    maxHeight: 800,
  },
  winner: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 40,
    marginBottom: 40,
  },
  dev: {
    width: 400,
    height: 400,
    marginBottom: 40,
    borderRadius: '50%',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    maxWidth: 400,
  },
  buttonContainer: {
    width: '100%', // Set width to full width
    alignItems: 'center',
  },
});
