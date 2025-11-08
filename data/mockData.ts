
import React from 'react';
import { User, ProfileData, Theme, AnalyticsData } from '../types';
import { Github, Youtube, Twitter, Instagram, Linkedin, Twitch, Globe, Dribbble } from 'lucide-react';

export const mockUser: User = {
  uid: '12345',
  name: 'Kabir Gagneja',
  email: 'kabir@example.com',
  photoURL: 'https://picsum.photos/id/237/200',
};

export const mockProfileData: ProfileData = {
  name: 'Kabir Gagneja',
  username: '@kabir',
  bio: 'Developer, creator, and tech enthusiast. Building the future.',
  photoURL: 'https://picsum.photos/id/237/200',
  themeId: 'pulse',
  accentColor: '#4f46e5',
  links: [
    { id: '1', title: 'GitHub', url: 'https://github.com/kabir', icon: 'Github', order: 1 },
    { id: '2', title: 'YouTube Channel', url: 'https://youtube.com/kabir', icon: 'Youtube', order: 2 },
    { id: '3', title: 'Twitter / X', url: 'https://twitter.com/kabir', icon: 'Twitter', order: 3 },
    { id: '4', title: 'Personal Portfolio', url: 'https://kabir.dev', icon: 'Globe', order: 4 },
  ],
};

export const themes: Theme[] = [
    {
      id: 'pulse',
      name: 'Pulse Default',
      styles: {
        background: 'bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900',
        card: 'bg-black/20 backdrop-blur-xl border border-white/10',
        text: 'text-gray-100',
        button: 'bg-indigo-600/80 border border-indigo-500/50',
        buttonText: 'text-white',
        buttonHover: 'hover:bg-indigo-500 hover:shadow-indigo-500/50',
        shadow: 'shadow-indigo-700/50',
      },
    },
    {
      id: 'glass',
      name: 'Glass Glow',
      styles: {
        background: 'bg-gray-800',
        card: 'bg-white/10 backdrop-blur-2xl border border-white/20',
        text: 'text-white',
        button: 'bg-white/20 border border-white/30',
        buttonText: 'text-white',
        buttonHover: 'hover:bg-white/30 hover:shadow-white/20',
        shadow: 'shadow-white/20',
      },
    },
    {
      id: 'arctic',
      name: 'Arctic Light',
      styles: {
        background: 'bg-gray-100',
        card: 'bg-white/80 backdrop-blur-lg border border-gray-200/80',
        text: 'text-gray-800',
        button: 'bg-gray-800 border border-gray-900',
        buttonText: 'text-white',
        buttonHover: 'hover:bg-gray-700 hover:shadow-gray-900/20',
        shadow: 'shadow-gray-500/30',
      },
    },
    {
        id: 'cyber',
        name: 'Cyber Night',
        styles: {
          background: 'bg-black',
          card: 'bg-gray-900/50 backdrop-blur-md border border-cyan-400/30',
          text: 'text-cyan-300',
          button: 'bg-cyan-500/20 border border-cyan-400',
          buttonText: 'text-cyan-300',
          buttonHover: 'hover:bg-cyan-400/30 hover:shadow-cyan-400/40',
          shadow: 'shadow-cyan-500/50',
        },
    },
];

export const mockAnalytics: AnalyticsData = {
    views: 12345,
    linkClicks: {
        '1': 2501,
        '2': 1840,
        '3': 987,
        '4': 3012,
    },
    dailyViews: [
        { date: 'Mon', views: 300 },
        { date: 'Tue', views: 450 },
        { date: 'Wed', views: 600 },
        { date: 'Thu', views: 520 },
        { date: 'Fri', views: 800 },
        { date: 'Sat', views: 1100 },
        { date: 'Sun', views: 950 },
    ],
};

// Fix: Add React import for React.FC type.
export const ICONS: { [key: string]: React.FC<any> } = {
    Github,
    Youtube,
    Twitter,
    Instagram,
    Linkedin,
    Twitch,
    Globe,
    Dribbble,
};

export const getIconForUrl = (url: string): string => {
    if (url.includes('github.com')) return 'Github';
    if (url.includes('youtube.com')) return 'Youtube';
    if (url.includes('twitter.com') || url.includes('x.com')) return 'Twitter';
    if (url.includes('instagram.com')) return 'Instagram';
    if (url.includes('linkedin.com')) return 'Linkedin';
    if (url.includes('twitch.tv')) return 'Twitch';
    if (url.includes('dribbble.com')) return 'Dribbble';
    return 'Globe';
};