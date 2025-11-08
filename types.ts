
export interface User {
  uid: string;
  name: string;
  email: string;
  photoURL: string;
}

export interface Link {
  id: string;
  title: string;
  url: string;
  icon: string;
  order: number;
}

export interface Theme {
  id: string;
  name: string;
  styles: {
    background: string;
    card: string;
    text: string;
    button: string;
    buttonText: string;
    buttonHover: string;
    shadow: string;
  };
}

export interface ProfileData {
  username: string;
  name: string;
  bio: string;
  photoURL: string;
  themeId: string;
  accentColor: string;
  links: Link[];
}

export interface AnalyticsData {
    views: number;
    linkClicks: { [linkId: string]: number };
    dailyViews: { date: string; views: number }[];
}
