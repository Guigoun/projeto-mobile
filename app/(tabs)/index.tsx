import { Image, StyleSheet, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/valorant.png')}
          style={styles.fullWidthImage}
        />
      }>
      <ThemedView style={styles.infoBox}>
        <ThemedText type="title" style={styles.textDark}>Valorant</ThemedText>
        <ThemedText type="subtitle" style={styles.textDark}>
          VALORANT é um FPS tático 5x5 competitivo focado em personagens com habilidades adaptativas. É um jogo que se passa no mundo todo, onde os jogadores devem usar suas habilidades para superar seus oponentes.{''}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.infoBox}>
        <ThemedText type='subtitle' style={styles.textDark}>
          Nome: Valorant{''}\n
          Desenvolvedora: Riot Games{''}\n
          Lançamento: 2 de junho de 2020{''}\n
          Plataformas: Windows (PC){''}\n
          Gênero: FPS (First-Person Shooter) tático{''}\n
          Motor Gráfico: Unreal Engine 4
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title" style={styles.textDark}>Agentes</ThemedText>
      </ThemedView>

      {valorantAgents.map((agent, index) => (
        <ThemedView key={index} style={styles.agentBox}>
          <View style={styles.row}>
            <Image source={agent.image} style={styles.image} />
            <ThemedText style={styles.textDark}>
              Nome: {agent.name}{'\n'}
              Classe: {agent.class}
            </ThemedText>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" style={styles.icon} />
        </ThemedView>
      ))}
    </ParallaxScrollView>
  );
}

const valorantAgents = [
  { name: 'Gekko', class: 'Iniciador', image: require('@/assets/images/gekoo.png') },
  { name: 'Reyna', class: 'Duelista', image: require('@/assets/images/reyna.jpg') },
  { name: 'Sage', class: 'Sentinela', image: require('@/assets/images/sage.jpg') },
  { name: 'Brimstone', class: 'Controlador', image: require('@/assets/images/brimstone.webp') },
  { name: 'Jett', class: 'Duelista', image: require('@/assets/images/Jett.webp') },
  { name: 'Kill Joy', class: 'Sentinela', image: require('@/assets/images/Killjoy.webp') }
];

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  infoBox: {
    backgroundColor: '#e0e0e0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  agentBox: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  fullWidthImage: {
    width: '100%',
    height: 250,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  icon: {
    marginTop: 5,
  },
  textDark: {
    color: '#333',
  },
});