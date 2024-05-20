import ReleaseChampion from './ReleaseChampion';

export default function ChampionDisplay({ developer, showDev, fadeAnim }) {
  return developer != null && showDev ? (
    <ReleaseChampion developer={developer} fadeAnim2={fadeAnim} />
  ) : (
    console.log('...loading')
  );
}
