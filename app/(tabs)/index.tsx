import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/majin.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Birujuice OudrenKadalahai</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
        <Image
            source={require('@/assets/images/fuscao.jpg')}
            style={styles.reactLogo}
          />          
        </ThemedText>
        <ThemedText>
          VW - Fusca{'\n'}
          Ano: 1978{'\n'}
          Cor: Preto
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <ThemedText>
        <Image
            source={require('@/assets/images/gol-10.jpg')}
            style={styles.reactLogo}
          />          
        </ThemedText>
        <ThemedText>
          VW - Gol{'\n'}
          Ano: 2010{'\n'}
          Cor: Vermelho
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <ThemedText>
        <Image
            source={require('@/assets/images/ponchi.jpg')}
            style={styles.reactLogo}
          />          
        </ThemedText>
        <ThemedText>
          Porshe - 911{'\n'}
          Ano: 2021{'\n'}
          Cor: Amarelo
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <ThemedText>
        <Image
            source={require('@/assets/images/compass.jpg')}
            style={styles.reactLogo}
          />          
        </ThemedText>
        <ThemedText>
          Jeep - Compass{'\n'}
          Ano: 2024{'\n'}
          Cor: Branco
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 450,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
