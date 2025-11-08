
import React from 'react';
import { useParams } from 'react-router-dom';
import { mockProfileData } from '../data/mockData';
import PublicProfileCard from '../components/profile/PublicProfileCard';

const PublicProfilePage: React.FC = () => {
    const { username } = useParams<{ username: string }>();

    // In a real application, you would fetch the user's profile data
    // based on the username from the URL. Here, we'll use mock data.
    const profile = mockProfileData;

    if (!profile || profile.username !== username) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
                <h1 className="text-4xl font-bold font-poppins">Profile not found</h1>
                <p className="mt-2 text-gray-400">The Kard for "{username}" could not be found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4">
            <PublicProfileCard profile={profile} isPreview={false} />
        </div>
    );
};

export default PublicProfilePage;
