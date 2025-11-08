
import React from 'react';
import { useProfile } from '../../contexts/ProfileContext';
import { themes } from '../../data/mockData';
import { CheckCircle } from 'lucide-react';
import { Theme } from '../../types';

const ThemeCard: React.FC<{ theme: Theme; isSelected: boolean; onSelect: () => void }> = ({ theme, isSelected, onSelect }) => {
    return (
        <button
            onClick={onSelect}
            className={`relative w-full aspect-[16/10] rounded-lg border-2 transition-all duration-200 ${
                isSelected ? 'border-indigo-500 scale-105' : 'border-white/10 hover:border-white/30'
            }`}
        >
            <div className={`w-full h-full rounded-md flex flex-col items-center justify-center p-2 ${theme.styles.background}`}>
                <div className={`w-3/4 h-1/2 rounded-md ${theme.styles.card} flex flex-col items-center justify-center gap-1 p-1`}>
                    <div className={`w-10/12 h-2 rounded ${theme.styles.button}`}></div>
                    <div className={`w-10/12 h-2 rounded ${theme.styles.button}`}></div>
                </div>
            </div>
            {isSelected && (
                <div className="absolute top-2 right-2 bg-indigo-500 text-white rounded-full">
                    <CheckCircle size={20} />
                </div>
            )}
            <p className="text-center mt-2 text-sm font-medium text-gray-300">{theme.name}</p>
        </button>
    );
};

const AppearanceEditor: React.FC = () => {
    const { profile, dispatch } = useProfile();

    const handleThemeSelect = (themeId: string) => {
        dispatch({ type: 'UPDATE_THEME', payload: { themeId, accentColor: profile.accentColor } });
    };

    return (
        <div className="animate-fade-in space-y-8">
            <div>
                <h3 className="text-xl font-semibold mb-4 text-white font-poppins">Themes</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {themes.map(theme => (
                        <ThemeCard
                            key={theme.id}
                            theme={theme}
                            isSelected={profile.themeId === theme.id}
                            onSelect={() => handleThemeSelect(theme.id)}
                        />
                    ))}
                </div>
            </div>
            {/* Future Accent Color Picker
            <div>
                 <h3 className="text-xl font-semibold mb-4 text-white font-poppins">Accent Color</h3>
                 <input type="color" ... />
            </div>
            */}
        </div>
    );
};

export default AppearanceEditor;
