import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text, Pressable, Image, View } from 'react-native';
import { chooseElementByRandom } from '../Randomizer/Randomizer';
import { createTeam } from '../../create-team';

export default function ReleaseButton({
  startAndStopAnimation,
  setDeveloper,
  handleButtonClick,
}) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const chooseTeamMember = () => {
    const chosenDeveloper = selectRandomTeamMember();
    setDeveloper(chosenDeveloper);
    startAndStopAnimation(true);
    handleButtonClick(true);
    setButtonClicked(true);
  };

  const selectRandomTeamMember = () => {
    return chooseElementByRandom(createTeam);
  };

  return (
    <Pressable
      style={[styles.button, buttonClicked && styles.disabledButton]}
      onPress={!buttonClicked ? chooseTeamMember : undefined}
      disabled={buttonClicked}
    >
      <Text style={styles.text}>Show chosen Dev !</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 22,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  disabledButton: {
    backgroundColor: 'grey', // Change the background color to grey when the button is disabled
  },
});
