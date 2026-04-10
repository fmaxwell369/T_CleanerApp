import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView, Platform,
  ScrollView,
  StyleSheet,
  Text, TextInput, TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.replace('/registration');
    }, 1500);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">

        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoEmoji}>♻️</Text>
          </View>
          <Text style={styles.appName}>T-Cleaner</Text>
          <Text style={styles.tagline}>Connectez-vous à votre compte</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <Image source={require('../assets/icons/mail.png')} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="votre@email.com"
              placeholderTextColor="#A5D6A7"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <Text style={styles.label}>Mot de passe</Text>
          <View style={styles.inputContainer}>
            <Image source={require('../assets/icons/password.png')} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#A5D6A7"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
              source={showPassword ? require('../assets/icons/eye_on.png') : require('../assets/icons/eye_lock.png')}
              style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.loginButtonText}>Se connecter</Text>}
          </TouchableOpacity>

          <View style={styles.separator}>
            <View style={styles.separatorLine} />
            <Text style={styles.separatorText}>ou</Text>
            <View style={styles.separatorLine} />
          </View>

          <TouchableOpacity style={styles.googleButton}>
            <Image source={require('../assets/icons/google.png')} style={styles.googleIcon} />
            <Text style={styles.googleButtonText}>Continuer avec Google</Text>
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Pas encore de compte ? </Text>
            <TouchableOpacity onPress={() => router.push('/registration')}>
              <Text style={[styles.registerLink, { textDecorationLine: 'underline' }]}>S'inscrire</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1B5E20' },
  scroll: { flexGrow: 1, paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40 },
  logoContainer: { alignItems: 'center', marginBottom: 40 },
  logo: { width: 90, height: 90, borderRadius: 45, backgroundColor: '#FF6D00', justifyContent: 'center', alignItems: 'center', marginBottom: 12, elevation: 8 },
  logoEmoji: { fontSize: 40 },
  appName: { fontSize: 32, fontWeight: '800', color: '#FFFFFF', letterSpacing: 1 },
  tagline: { fontSize: 14, color: '#A5D6A7', marginTop: 4 },
  form: { backgroundColor: '#2E7D32', borderRadius: 24, padding: 24, elevation: 4 },
  label: { color: '#C8E6C9', fontSize: 13, fontWeight: '600', marginBottom: 8, marginTop: 8 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1B5E20', borderRadius: 12, paddingHorizontal: 12, marginBottom: 8, borderWidth: 1, borderColor: '#388E3C' },
  icon: { width: 22, height: 22, tintColor: '#A5D6A7', marginRight: 8 },
  input: { flex: 1, color: '#FFFFFF', fontSize: 15, paddingVertical: 14 },
  forgotContainer: { alignItems: 'flex-end', marginBottom: 20, marginTop: 4 },
  forgotText: { color: '#FF6D00', fontSize: 13, fontWeight: '600' },
  loginButton: { backgroundColor: '#FF6D00', borderRadius: 12, paddingVertical: 16, alignItems: 'center', elevation: 4 },
  loginButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700', letterSpacing: 0.5 },
  separator: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  separatorLine: { flex: 1, height: 1, backgroundColor: '#388E3C' },
  separatorText: { color: '#A5D6A7', paddingHorizontal: 12, fontSize: 13 },
  googleButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', borderRadius: 12, paddingVertical: 14, elevation: 2 },
  googleIcon: { width: 22, height: 22, marginRight: 10 },
  googleButtonText: { color: '#1B5E20', fontSize: 15, fontWeight: '600' },
  registerContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
  registerText: { color: '#A5D6A7', fontSize: 14 },
  registerLink: { color: '#FF6D00', fontSize: 14, fontWeight: '700' },
});