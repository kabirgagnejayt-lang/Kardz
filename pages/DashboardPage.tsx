
import React, { useState } from 'react';
import { Link, Palette, BarChart2, QrCode, Settings, LogOut, ExternalLink } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useProfile } from '../contexts/ProfileContext';
import LinkEditor from '../components/dashboard/LinkEditor';
import AppearanceEditor from '../components/dashboard/AppearanceEditor';
import Analytics from '../components/dashboard/Analytics';
import PublicProfileCard from '../components/profile/PublicProfileCard';

type Tab = 'links' | 'appearance' | 'analytics';

const DashboardPage: React.FC = () => {
    const { user, logout } = useAuth();
    const { profile } = useProfile();
    const [activeTab, setActiveTab] = useState<Tab>('links');
    
    const publicProfileUrl = `${window.location.origin}${window.location.pathname}#/${profile.username}`;

    const renderTabContent = () => {
        switch (activeTab) {
            case 'links':
                return <LinkEditor />;
            case 'appearance':
                return <AppearanceEditor />;
            case 'analytics':
                return <Analytics />;
            default:
                return null;
        }
    };
    
    const TabButton = ({ tab, icon, label }: { tab: Tab, icon: React.ReactNode, label: string }) => (
         <button
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                activeTab === tab ? 'bg-indigo-500 text-white' : 'text-gray-300 hover:bg-white/10'
            }`}
        >
            {icon}
            <span className="font-medium">{label}</span>
        </button>
    );

    return (
        <div className="min-h-screen bg-gray-900 font-inter text-gray-200 flex flex-col lg:flex-row">
            {/* Sidebar */}
            <aside className="w-full lg:w-64 bg-gray-900/50 border-b lg:border-b-0 lg:border-r border-white/10 p-4 flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                     <img src={user?.photoURL} alt={user?.name} className="w-10 h-10 rounded-full border-2 border-indigo-500" />
                    <div>
                        <p className="font-semibold text-white">{user?.name}</p>
                        <p className="text-xs text-gray-400">{user?.email}</p>
                    </div>
                </div>

                <nav className="flex-grow space-y-2">
                   <TabButton tab="links" icon={<Link size={20} />} label="Links" />
                   <TabButton tab="appearance" icon={<Palette size={20} />} label="Appearance" />
                   <TabButton tab="analytics" icon={<BarChart2 size={20} />} label="Analytics" />
                </nav>
                
                <div className="mt-auto pt-4 border-t border-white/10 space-y-2">
                     <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10">
                         <Settings size={20} />
                         <span className="font-medium">Settings</span>
                     </button>
                     <button onClick={logout} className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-300 hover:bg-red-500/20 hover:text-red-400">
                         <LogOut size={20} />
                         <span className="font-medium">Log Out</span>
                     </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                <header className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-8 flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-400">Your Kardz is live at:</p>
                        <a href={publicProfileUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-medium flex items-center gap-2 group">
                            {publicProfileUrl.replace('https://', '').replace('http://', '')}
                            <ExternalLink size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition-colors">
                        Share
                    </button>
                </header>
                {renderTabContent()}
            </main>

            {/* Live Preview */}
            <div className="hidden xl:flex w-1/3 min-w-[400px] items-center justify-center p-8 bg-gray-800/50 border-l border-white/10">
                <div className="w-full max-w-sm mx-auto scale-90">
                    <div className="relative aspect-[9/19.5] rounded-3xl border-8 border-gray-700 bg-gray-900 shadow-2xl shadow-black/50 overflow-hidden">
                        <PublicProfileCard profile={profile} isPreview={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
