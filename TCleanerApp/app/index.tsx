import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { router } from 'expo-router';

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 4, tension: 40, useNativeDriver: true }),
    ]).start();

    setTimeout(() => {
      Animated.timing(slideAnim, { toValue: 0, duration: 600, useNativeDriver: true }).start();
    }, 800);

    const timer = setTimeout(() => {
      router.replace('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim, slideAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.circleTop} />
      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
        <View style={styles.logo}>
          <Text style={styles.logoIcon}>♻️</Text>
        </View>
        <Text style={styles.appName}>T-Cleaner</Text>
      </Animated.View>
      <Animated.Text style={[styles.slogan, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        Votre maison plus propre,{'\n'}en un seul clic
      </Animated.Text>
      <View style={styles.circleBottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1B5E20', justifyContent: 'center', alignItems: 'center' },
  circleTop: { position: 'absolute', top: -80, right: -80, width: 250, height: 250, borderRadius: 125, backgroundColor: '#FF6D00', opacity: 0.2 },
  circleBottom: { position: 'absolute', bottom: -100, left: -60, width: 300, height: 300, borderRadius: 150, backgroundColor: '#FF6D00', opacity: 0.15 },
  logoContainer: { alignItems: 'center', marginBottom: 30 },
  logo: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#FF6D00', justifyContent: 'center', alignItems: 'center', marginBottom: 16, elevation: 10 },
  logoIcon: { fontSize: 55 },
  appName: { fontSize: 42, fontWeight: '800', color: '#FFFFFF', letterSpacing: 2 },
  slogan: { fontSize: 16, color: '#A5D6A7', textAlign: 'center', lineHeight: 26, fontStyle: 'italic', paddingHorizontal: 40 },
});