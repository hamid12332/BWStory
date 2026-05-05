import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Post} from '../types';
import {Colors} from '../theme/colors';
import Avatar from './Avatar';
import VideoThumbnail from './VideoThumbnail';

interface PostCardProps {
  post: Post;
  onFollowToggle: (id: string) => void;
  onLikeToggle: (id: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({post, onFollowToggle, onLikeToggle}) => {
  const [isPlaying, setIsPlaying] = useState(post.isPlaying);
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userRow}>
          <Avatar
            label={post.avatarLabel}
            colors={post.avatarColor}
          />
          <Text style={styles.username}>{post.username}</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={post.isFollowing ? styles.followingBtn : styles.followBtn}
            onPress={() => onFollowToggle(post.id)}>
            <Text
              style={
                post.isFollowing ? styles.followingText : styles.followText
              }>
              {post.isFollowing ? 'Following' : 'Follow'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.threeDots}>⋮</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Video */}
      <VideoThumbnail
        isPlaying={isPlaying}
        progress={post.progress}
        currentTime={post.currentTime}
        duration={post.duration}
        onPlayPause={() => setIsPlaying(!isPlaying)}
        onRewind={() => {}}
        onForward={() => {}}
      />

      {/* Meta */}
      <View style={styles.meta}>
        <Text style={styles.metaText}>
          {post.date} | {post.location}
        </Text>
        <Text style={styles.metaText}>{post.views}</Text>
      </View>

      {/* Title */}
      <TouchableOpacity onPress={() => setShowMore(!showMore)}>
        <Text style={styles.title} numberOfLines={showMore ? 0 : 2}>
          {post.title}{' '}
          {!showMore && <Text style={styles.more}>more</Text>}
        </Text>
      </TouchableOpacity>

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => onLikeToggle(post.id)}>
          <Text style={styles.actionIcon}>{post.liked ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionIcon}>⇄</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionIcon}>💬</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  username: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
    marginLeft: 9,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  followBtn: {
    borderWidth: 1.5,
    borderColor: Colors.accent,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 14,
  },
  followText: {
    color: Colors.accent,
    fontSize: 12,
    fontWeight: '700',
  },
  followingBtn: {
    borderWidth: 1.5,
    borderColor: Colors.muted,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 14,
  },
  followingText: {
    color: Colors.muted,
    fontSize: 12,
    fontWeight: '700',
  },
  threeDots: {
    color: Colors.muted,
    fontSize: 20,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingBottom: 4,
  },
  metaText: {
    fontSize: 11,
    color: Colors.muted,
    fontWeight: '600',
  },
  title: {
    fontSize: 14,
    color: Colors.text,
    lineHeight: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  more: {
    color: Colors.accent,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  actionBtn: {
    padding: 4,
  },
  actionIcon: {
    fontSize: 20,
  },
});

export default PostCard;
