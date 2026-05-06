import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../theme/colors';
import PostCard from '../components/PostCard';
import { POSTS } from '../data/posts';
import { Post } from '../types';

const DiscoverScreen: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(POSTS);
  const [searchText, setSearchText] = useState('');

  const handleFollowToggle = (id: string) => {
    setPosts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, isFollowing: !p.isFollowing } : p,
      ),
    );
  };

  const handleLikeToggle = (id: string) => {
    setPosts(prev =>
      prev.map(p => (p.id === id ? { ...p, liked: !p.liked } : p)),
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.header} />

      {/* App Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="menu" size={22} color={Colors.white} />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#5e5e5e"
            value={searchText}
            onChangeText={setSearchText}
          />

          <Icon name="search" size={15} color="#5e5e5e" />
        </View>

        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="sliders" size={20} color={Colors.white} style={{
            transform: [{ rotate: '90deg' }],
          }} />
        </TouchableOpacity>
      </View>

      {/* Feed */}
      <FlatList
        style={{ flex: 1 }}
        data={posts}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PostCard
            post={item}
            onFollowToggle={handleFollowToggle}
            onLikeToggle={handleLikeToggle}
          />
        )}
        contentContainerStyle={{
          paddingTop: 8,
          paddingBottom: 20, 
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.header,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 14,
    gap: 10,
  },
  iconBtn: {
    padding: 4,
  },
  searchBar: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  searchInput: {
    flex: 1,
    color: Colors.text,
    fontSize: 13,
    padding: 0,
    margin: 0,
  },
  listContent: {
    paddingTop: 8,
    paddingBottom: 20,
  },
});

export default DiscoverScreen;
