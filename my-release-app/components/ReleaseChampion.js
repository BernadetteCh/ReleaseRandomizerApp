import { Animated, StyleSheet, View, Text } from 'react-native';

export default function ReleaseChampion({ developer, fadeAnim2 }) {
  return (
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
  );
}

const styles = StyleSheet.create({
  winner: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 40,
    marginBottom: 40,
    textAlign: 'center',
  },
});
