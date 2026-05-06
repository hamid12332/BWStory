import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Alert,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Colors} from '../theme/colors';

const {width} = Dimensions.get('window');
const COVER_HEIGHT = 230;
const ProfilePhoto = require('../../assets/image/profile.jpeg');

const ProfileScreen: React.FC = () => {
  const [name, setName] = useState('Anamika Sharma');
  const [gender, setGender] = useState('Female');
  const [location, setLocation] = useState('Delhi, India');
  const [profession, setProfession] = useState('Developer');
  const [bio, setBio] = useState(
    '"Once you have everything set on your bio, you can use this tailn Instagram Schedule',
  );

  const wordCount = bio.trim().split(/\s+/).filter(Boolean).length;

  const handleUpdate = () => {
    Alert.alert('Success', 'Account updated successfully!');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.header} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} hitSlop={{top:10,bottom:10,left:10,right:10}}>
          <Icon name="chevron-left" size={26} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleUpdate}>
          <Text style={styles.updateText}>Update Account</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        bounces={false}>

        {/* ── Cover / Profile Photo ── */}
        <View style={styles.coverContainer}>
          <Image
            source={ProfilePhoto}
            style={styles.coverImage}
            resizeMode="cover"
          />
          {/* Camera button - bottom right */}
          <TouchableOpacity style={styles.cameraBtn} activeOpacity={0.85}>
            <Icon name="camera" size={20} color="#333" />
          </TouchableOpacity>
        </View>

        {/* ── Form ── */}
        <View style={styles.form}>

          {/* Name */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Name</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholderTextColor={Colors.muted}
                selectionColor={Colors.accent}
              />
            </View>
          </View>

          {/* Gender */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={gender}
                onChangeText={setGender}
                placeholderTextColor={Colors.muted}
                selectionColor={Colors.accent}
              />
            </View>
          </View>

          {/* Location */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Location</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={location}
                onChangeText={setLocation}
                placeholderTextColor={Colors.muted}
                selectionColor={Colors.accent}
              />
            </View>
          </View>

          {/* Profession */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Profession</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={profession}
                onChangeText={setProfession}
                placeholderTextColor={Colors.muted}
                selectionColor={Colors.accent}
              />
            </View>
          </View>

          {/* Bio */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Bio</Text>
            <View style={[styles.inputWrapper, styles.textareaWrapper]}>
              <TextInput
                style={styles.textarea}
                value={bio}
                onChangeText={setBio}
                multiline
                numberOfLines={5}
                placeholderTextColor={Colors.muted}
                textAlignVertical="top"
                selectionColor={Colors.accent}
              />
              <Text style={styles.wordCount}>({wordCount} words)</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  // ── Header ──
  header: {
    backgroundColor: Colors.header,    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  backBtn: {
    padding: 2,
  },
  updateText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0.2,
  },

  // ── Scroll ──
  scroll: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  // ── Cover photo ──
  coverContainer: {
    width: width,
    height: COVER_HEIGHT,
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  cameraBtn: {
    position: 'absolute',
    bottom: -20,
    right: 16,
    width: 48,
    height: 48,
    backgroundColor: Colors.white,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 5,
    zIndex: 999,       
  },

  // ── Form ──
  form: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: Colors.white,
  },
  formGroup: {
    marginBottom: 35,
  },
  label: {
    fontSize: 13,
    fontWeight: '400',
    color: Colors.muted,       
    marginBottom: 8,
  },
  inputWrapper: {
    backgroundColor: '#e9ecee',
    borderRadius: 8,
    overflow: 'hidden',
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    fontWeight: '400',
    color: Colors.text,
    backgroundColor: 'transparent',
  },
  textareaWrapper: {
    paddingBottom: 8,
  },
  textarea: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 4,
    fontSize: 15,
    color: Colors.text,
    minHeight: 120,
    lineHeight: 22,
    backgroundColor: 'transparent',
  },
  wordCount: {
    textAlign: 'right',
    paddingRight: 14,
    paddingBottom: 10,
    marginTop: 4,
    fontSize: 12,
    color: Colors.muted,
    fontWeight: '500',
  },
});

export default ProfileScreen;
