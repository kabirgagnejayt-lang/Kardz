
import React from 'react';
import { Eye, BarChart, Link as LinkIcon } from 'lucide-react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { mockAnalytics } from '../../data/mockData';
import { useProfile } from '../../contexts/ProfileContext';

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center gap-4">
        <div className="bg-indigo-500/20 p-3 rounded-lg text-indigo-400">
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-400">{title}</p>
            <p className="text-2xl font-bold text-white">{value}</p>
        </div>
    </div>
);

const Analytics: React.FC = () => {
    const { profile } = useProfile();

    const totalClicks = Object.values(mockAnalytics.linkClicks).reduce((sum, clicks) => sum + clicks, 0);

    const linkClickData = profile.links.map(link => ({
        name: link.title,
        clicks: mockAnalytics.linkClicks[link.id] || 0,
    }));

    return (
        <div className="animate-fade-in space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Total Views" value={mockAnalytics.views.toLocaleString()} icon={<Eye size={24} />} />
                <StatCard title="Total Link Clicks" value={totalClicks.toLocaleString()} icon={<BarChart size={24} />} />
                <StatCard title="Total Links" value={profile.links.length.toString()} icon={<LinkIcon size={24} />} />
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 font-poppins">Views This Week</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={mockAnalytics.dailyViews}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                        <XAxis dataKey="date" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #4f46e5' }} />
                        <Legend />
                        <Line type="monotone" dataKey="views" stroke="#6366f1" strokeWidth={2} activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 font-poppins">Link Clicks Breakdown</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <RechartsBarChart data={linkClickData} layout="vertical">
                         <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                        <XAxis type="number" stroke="#9ca3af" />
                        <YAxis type="category" dataKey="name" width={150} stroke="#9ca3af" />
                        <Tooltip cursor={{fill: 'rgba(79, 70, 229, 0.2)'}} contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #4f46e5' }} />
                        <Bar dataKey="clicks" fill="#4f46e5" />
                    </RechartsBarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Analytics;
