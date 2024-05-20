import { StyleSheet } from 'react-native';
import Header from './Header/Header';

export default function Headline() {
  return (
    <>
      <Header headerStyle={styles.mainTitle} text={'Release-Roulette App'} />
      <Header
        headerStyle={styles.subTitle}
        text={'Who will do the next release? 🧑‍💻'}
      />
    </>
  );
}

const styles = StyleSheet.create({
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
});
