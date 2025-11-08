
import React from 'react';
import { ProfileData, Theme } from '../../types';
import { themes, ICONS } from '../../data/mockData';
import { Link as LinkIcon, Globe } from 'lucide-react';

const LinkButton: React.FC<{ link: ProfileData['links'][0], theme: Theme }> = ({ link, theme }) => {
    const IconComponent = ICONS[link.icon] || Globe;
    return (
        <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-full p-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${theme.styles.button} ${theme.styles.buttonText} ${theme.styles.buttonHover} shadow-lg ${theme.styles.shadow}`}
        >
            <IconComponent size={20} className="mr-3" />
            {link.title}
        </a>
    );
};

const PublicProfileCard: React.FC<{ profile: ProfileData; isPreview: boolean }> = ({ profile, isPreview }) => {
    const selectedTheme = themes.find(t => t.id === profile.themeId) || themes[0];

    const containerClasses = isPreview 
        ? 'w-full h-full' 
        : 'w-full max-w-md mx-auto rounded-3xl shadow-2xl shadow-black/50';

    return (
        <div className={`relative flex flex-col items-center p-6 text-center overflow-y-auto ${containerClasses} ${selectedTheme.styles.background} ${selectedTheme.styles.text}`}>
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-gray-900/10 bg-[length:200%_200%] animate-gradient-pulse"></div>
            
            <header className="w-full flex flex-col items-center z-10">
                <img
                    src={profile.photoURL}
                    alt={profile.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white/20 shadow-xl"
                />
                <h1 className="mt-4 text-2xl font-bold font-poppins">{profile.name}</h1>
                <p className="text-sm font-medium">{profile.username}</p>
                <p className="mt-2 text-sm max-w-xs">{profile.bio}</p>
            </header>

            <main className="w-full mt-8 flex-grow flex flex-col items-center gap-4 z-10">
                 {profile.links.sort((a,b) => a.order - b.order).map(link => (
                    <LinkButton key={link.id} link={link} theme={selectedTheme} />
                ))}
            </main>

            {!isPreview && (
                 <footer className="mt-8 text-xs text-gray-500 z-10">
                    Made with ❤️ on Kardz
                 </footer>
            )}
        </div>
    );
};

export default PublicProfileCard;
