export interface Post {
  id: string;
  username: string;
  avatarLabel: string;
  avatarColor: string[];
  isFollowing: boolean;
  date: string;
  location: string;
  views: string;
  title: string;
  duration: string;
  currentTime: string;
  progress: number; // 0 to 1
  isPlaying: boolean;
  liked: boolean;
}

export interface UserProfile {
  name: string;
  gender: string;
  location: string;
  profession: string;
  bio: string;
}
