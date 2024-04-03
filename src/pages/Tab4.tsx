import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Avatar, MyBooksInfo } from '../components/Profile';

import './Tab4.css';

const Tab4: React.FC = () => {



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Avatar />
        <MyBooksInfo />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
