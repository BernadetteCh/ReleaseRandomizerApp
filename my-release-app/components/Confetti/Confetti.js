import React, { startTransition, useCallback } from 'react';
import ConfettiCannon from 'react-native-confetti-cannon';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { useRef, useEffect } from 'react';

export default function Confetti({ animation }) {
  const confettiRef = useRef(null);

  useEffect(() => {
    if (animation && confettiRef.current) {
      confettiRef.current.start();
    }
  }, [animation]);

  return (
    <ConfettiCannon
      ref={confettiRef}
      count={200}
      explosionSpeed={350}
      fallSpeed={3000}
      origin={{ x: 0, y: 0 }}
      autoStart={false}
      fadeOut={false}
    />
  );
}
