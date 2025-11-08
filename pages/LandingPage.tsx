
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Chrome } from 'lucide-react';

const LandingPage: React.FC = () => {
    const { login } = useAuth();

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gray-900 font-inter p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-gray-900/50 bg-[length:200%_200%] animate-gradient-pulse"></div>
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-500/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full filter blur-3xl opacity-50 animate-pulse delay-2000"></div>

            <main className="relative z-10 flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full mb-8 shadow-lg">
                    <h1 className="text-5xl md:text-7xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 tracking-tight">
                        Kardz
                    </h1>
                </div>

                <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 max-w-3xl leading-tight font-poppins animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    All your links, one digital card.
                </h2>
                <p className="mt-4 text-md md:text-lg text-gray-400 max-w-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    Create your personalized page in seconds. Share everything you are and everything you do, with just one link.
                </p>

                <button
                    onClick={login}
                    className="mt-10 flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/30 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50 focus:outline-none focus:ring-4 focus:ring-indigo-300 animate-slide-up"
                    style={{ animationDelay: '0.6s' }}
                >
                    <Chrome size={24} />
                    Sign in with Google
                </button>
            </main>

            <footer className="absolute bottom-4 text-gray-500 text-sm z-10 animate-fade-in" style={{ animationDelay: '1s' }}>
                <p>Made with ❤️ by Kabir Gagneja Invents</p>
            </footer>
        </div>
    );
};

export default LandingPage;
