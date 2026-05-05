import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../theme/colors';

interface VideoThumbnailProps {
  isPlaying: boolean;
  progress: number;
  currentTime: string;
  duration: string;
  onPlayPause: () => void;
  onRewind: () => void;
  onForward: () => void;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  isPlaying,
  progress,
  currentTime,
  duration,
  onPlayPause,
  onRewind,
  onForward,
}) => {
  return (
    <View style={styles.container}>
      {/* Dark background placeholder */}
      <View style={styles.placeholder} />

      {/* Controls overlay */}
      <View style={styles.controlsOverlay}>
        <TouchableOpacity style={styles.ctrlBtn} onPress={onRewind}>
          <Text style={styles.ctrlIcon}>↺</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.ctrlBtn, styles.ctrlBtnLarge]} onPress={onPlayPause}>
          <Text style={styles.ctrlIcon}>{isPlaying ? '⏸' : '▶'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ctrlBtn} onPress={onForward}>
          <Text style={styles.ctrlIcon}>↻</Text>
        </TouchableOpacity>
      </View>

      {/* Sound icon */}
      <View style={styles.soundBtn}>
        <Text style={styles.soundIcon}>🔊</Text>
      </View>

      {/* Time */}
      <Text style={styles.timeText}>
        {currentTime} / {duration}
      </Text>

      {/* Progress bar */}
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, {width: `${progress * 100}%`}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: '#1a1a2e',
    position: 'relative',
    overflow: 'hidden',
  },
  placeholder: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#16213e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlsOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 28,
  },
  ctrlBtn: {
    width: 36,
    height: 36,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  ctrlBtnLarge: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  ctrlIcon: {
    color: Colors.white,
    fontSize: 16,
  },
  soundBtn: {
    position: 'absolute',
    bottom: 32,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  soundIcon: {
    fontSize: 13,
  },
  timeText: {
    position: 'absolute',
    bottom: 18,
    left: 12,
    color: Colors.white,
    fontSize: 11,
    fontWeight: '700',
  },
  progressBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: Colors.progressBg,
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.accent2,
    borderRadius: 2,
  },
});

export default VideoThumbnail;
