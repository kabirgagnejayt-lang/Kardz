
import React, { useState } from 'react';
import { useProfile } from '../../contexts/ProfileContext';
import { Link as LinkIcon, Trash, GripVertical, PlusCircle } from 'lucide-react';
import { getIconForUrl, ICONS } from '../../data/mockData';
import { Link } from '../../types';

const LinkEditorCard: React.FC<{ link: Link; onUpdate: (link: Link) => void; onRemove: (id: string) => void }> = ({ link, onUpdate, onRemove }) => {
    const IconComponent = ICONS[link.icon] || LinkIcon;

    return (
        <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-start gap-4">
            <div className="flex flex-col items-center gap-2 text-gray-400 pt-2">
                <GripVertical className="cursor-grab" />
                <IconComponent size={24} />
            </div>
            <div className="flex-grow space-y-3">
                <input
                    type="text"
                    placeholder="Title"
                    value={link.title}
                    onChange={(e) => onUpdate({ ...link, title: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                    type="url"
                    placeholder="URL"
                    value={link.url}
                    onChange={(e) => onUpdate({ ...link, url: e.target.value, icon: getIconForUrl(e.target.value) })}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>
            <button onClick={() => onRemove(link.id)} className="text-gray-400 hover:text-red-500 transition-colors pt-2">
                <Trash size={20} />
            </button>
        </div>
    );
};

const LinkEditor: React.FC = () => {
    const { profile, dispatch } = useProfile();

    const handleAddLink = () => {
        const newLink: Link = {
            id: new Date().getTime().toString(),
            title: '',
            url: '',
            icon: 'Globe',
            order: profile.links.length + 1,
        };
        dispatch({ type: 'ADD_LINK', payload: newLink });
    };

    const handleUpdateLink = (updatedLink: Link) => {
        dispatch({ type: 'UPDATE_LINK', payload: updatedLink });
    };

    const handleRemoveLink = (id: string) => {
        dispatch({ type: 'REMOVE_LINK', payload: id });
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <button
                onClick={handleAddLink}
                className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition-colors duration-200"
            >
                <PlusCircle size={20} />
                Add New Link
            </button>
            <div className="space-y-4">
                {profile.links.sort((a,b) => a.order - b.order).map(link => (
                    <LinkEditorCard
                        key={link.id}
                        link={link}
                        onUpdate={handleUpdateLink}
                        onRemove={handleRemoveLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default LinkEditor;
