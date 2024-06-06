import React, { useState, useEffect } from 'react';
import UploadAvatar from './UploadAvatar';
import api from '../../../services/api';
import defaultAvatar from '../../Assets/user-default.png';
import './Profile.css';

const Profile = ({ token }) => {
    const [name, setName] = useState({});
    const [isNameUpdated, setIsNameUpdated] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        console.log('Token en Profile:', token);
        const getProfileData = async () => {
            try {
                const { data } = await api.get('/user/profile');
                setName(data);
                setIsNameUpdated(false);
            } catch (error) {
                console.error('Error al obtener perfil:', error);
            }
        };

        getProfileData();
    }, [token, isNameUpdated]);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`profile ${isExpanded ? 'expanded' : ''}`}>
            <div className="avatar" onClick={toggleExpanded}>
                <div className="avatar-wrapper">
                    {name.avatarUrl ? (
                        <img src={`http://localhost:3001${name.avatarUrl}`} alt={`${name.nombre} avatar`} />
                    ) : (
                        <img src={defaultAvatar} alt="Default Avatar" />
                    )}
                </div>
            </div>
            {isExpanded && (
                <div className="body">
                    <p>Name: {name.nombre}</p>
                    <p>Email: {name.email}</p>
                    <p>Account created at: {new Date(name.createdAt).toLocaleDateString()}</p>
                </div>
            )}
            {isExpanded && (
                <UploadAvatar
                    token={token}
                    userId={name.id}
                    username={name.nombre}
                    avatarUrl={name.foto}
                    setIsUserUpdated={setIsNameUpdated}
                />
            )}
        </div>
    );
};

export default Profile;
