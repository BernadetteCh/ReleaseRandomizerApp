import { StyleSheet, View } from 'react-native';
import ReleaseButton from './ReleaseButton/ReleaseButton';

export default function ReleaseAction({
  startAndStopAnimation,
  setDeveloper,
  handleButtonClick,
}) {
  return (
    <View style={styles.buttonContainer}>
      <ReleaseButton
        startAndStopAnimation={startAndStopAnimation}
        setDeveloper={setDeveloper}
        handleButtonClick={handleButtonClick}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
