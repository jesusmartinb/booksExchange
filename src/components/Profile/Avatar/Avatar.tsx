import { IonAvatar, IonText } from '@ionic/react';
import { useUser } from '../../../hooks';
import './Avatar.css';


export function Avatar() {
    const { username, avatar } = useUser();
  return (
    <div className='avatar-container'>
      <IonAvatar>
        <img src={avatar} alt='avatar' />
      </IonAvatar>
      <IonText color='dark'>{username}</IonText>
    </div>
  )
}