import { useState, useEffect, createContext } from 'react';
import { ENV } from '../../utils';
import { logo } from '../../assets';
import { UserContextType } from './UserContext.type';

export const UserContext = createContext<UserContextType.Context>({
    username: '',
    avatar: '',
    onChangeUsername: () => {},
    onChangeAvatar: () => {}
});

export function UserProvider(props: UserContextType.Props) {

    const { children } = props;

    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        const responseUsername = localStorage.getItem(ENV.LOCAL_STORAGE.USERNAME);
        setUsername(responseUsername || 'Anónimo');
        
        const responseAvatar = localStorage.getItem(ENV.LOCAL_STORAGE.AVATAR);
        setAvatar(responseAvatar || logo);
    }, []);

    const onChangeUsername = (username: string) => {
        localStorage.setItem(ENV.LOCAL_STORAGE.USERNAME, username);
        setUsername(username);
    };

    const onChangeAvatar = (avatar: string) => {
        localStorage.setItem(ENV.LOCAL_STORAGE.AVATAR, avatar);
        setAvatar(avatar);
    };

    const valueContext: UserContextType.Context = {
        username,
        avatar,
        onChangeUsername,
        onChangeAvatar
    };

    return (
        <UserContext.Provider value={valueContext}>
        {children}
        </UserContext.Provider>
    )
}