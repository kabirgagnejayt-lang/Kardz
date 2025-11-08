
import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { ProfileData, Link } from '../types';
import { mockProfileData } from '../data/mockData';
import { useAuth } from './AuthContext';

type ProfileAction =
  | { type: 'SET_PROFILE'; payload: ProfileData }
  | { type: 'UPDATE_DETAILS'; payload: { name: string; bio: string; username: string; } }
  | { type: 'ADD_LINK'; payload: Link }
  | { type: 'UPDATE_LINK'; payload: Link }
  | { type: 'REMOVE_LINK'; payload: string }
  | { type: 'REORDER_LINKS'; payload: Link[] }
  | { type: 'UPDATE_THEME'; payload: { themeId: string; accentColor: string } };

interface ProfileContextType {
  profile: ProfileData;
  dispatch: React.Dispatch<ProfileAction>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const profileReducer = (state: ProfileData, action: ProfileAction): ProfileData => {
  switch (action.type) {
    case 'SET_PROFILE':
      return action.payload;
    case 'UPDATE_DETAILS':
        return { ...state, ...action.payload };
    case 'ADD_LINK':
      return { ...state, links: [...state.links, action.payload] };
    case 'UPDATE_LINK':
      return {
        ...state,
        links: state.links.map(link => link.id === action.payload.id ? action.payload : link),
      };
    case 'REMOVE_LINK':
      return { ...state, links: state.links.filter(link => link.id !== action.payload) };
    case 'REORDER_LINKS':
        return { ...state, links: action.payload };
    case 'UPDATE_THEME':
        return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [profile, dispatch] = useReducer(profileReducer, mockProfileData);

  useEffect(() => {
    if (user) {
        // In a real app, you'd fetch the profile for the logged-in user
        dispatch({ type: 'SET_PROFILE', payload: mockProfileData });
    }
  }, [user]);

  return (
    <ProfileContext.Provider value={{ profile, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
