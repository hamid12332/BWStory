import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import Icon from 'react-native-vector-icons/Feather';
import YoutubePlayer from 'react-native-youtube-iframe';
import Video from 'react-native-video';

interface VideoThumbnailProps {
  isPlaying: boolean;
  progress: number;
  currentTime: string;
  duration: string;
  onPlayPause: () => void;
  onRewind: () => void;
  onForward: () => void;

  uri: string; 
  videoType: 'youtube' | 'mp4';
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  isPlaying,
  progress,
  currentTime,
  duration,
  onPlayPause,
  onRewind,
  onForward,
  uri,
  videoType,
}) => {
  return (
    <View style={styles.container}>
      
      {/* VIDEO */}
      {videoType === 'youtube' ? (
        <YoutubePlayer
          height={220}
          play={isPlaying}
          videoId={uri}
        />
      ) : (
        <Video
          source={{ uri }}
          style={styles.video}
          paused={!isPlaying}
          resizeMode="cover"
        />
      )}

      {/* 3-dot menu */}
      <TouchableOpacity style={styles.menuBtn}>
        <Icon name="more-vertical" size={18} color="white" />
      </TouchableOpacity>

      {/* Controls */}
      <View style={styles.controlsOverlay}>
       

      

      
      </View>


 

      {/* Progress */}
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 220,
    backgroundColor: '#000',
    position: 'relative',
    overflow: 'hidden',
  },
  video: {
    ...StyleSheet.absoluteFillObject,
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
  },
  ctrlBtn: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  ctrlBtnLarge: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  menuBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  soundBtn: {
    position: 'absolute',
    bottom: 32,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
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
  },
});

export default VideoThumbnail;