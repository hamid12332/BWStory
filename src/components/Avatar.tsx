import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'; // ← add Image

interface AvatarProps {
  label: string;
  colors: string[];
  size?: number;
  fontSize?: number;
  uri?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  label,
  colors,
  size = 36,
  fontSize = 14,
  uri, // ← was missing here!
}) => {
  return (
    <View
      style={[
        styles.avatar,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: colors[0],
        },
      ]}>
      {uri ? (
        <Image
          source={{ uri }}
          style={{ width: size, height: size, borderRadius: size / 2 }}
          resizeMode="cover"
        />
      ) : (
        <Text style={[styles.label, { fontSize }]}>{label}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  label: {
    color: '#fff',
    fontWeight: '800',
  },
});

export default Avatar;