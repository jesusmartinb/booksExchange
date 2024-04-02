import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar,  IonCard, IonImg, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonCol, IonRow, IonGrid } from '@ionic/react';
import { search, repeat, cart } from 'ionicons/icons';
import { data } from '../data/data';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {

  const exchangeIcon = <IonIcon icon={repeat}>Intercambio</IonIcon>
  const cartIcon = <IonIcon icon={cart}>Venta</IonIcon>

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Libros cerca de ti</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar searchIcon={search} placeholder="Buscar por título o autor"></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {data.map((item) => (
              <IonCol size="6" size-md="4" size-lg="2" key={item.id}>
                <IonCard>
                  <IonImg
                    src={item.image}
                  />
                  <IonCardHeader>
                    <IonCardSubtitle>{item.author}</IonCardSubtitle>
                    <IonCardTitle>{item.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent className="price">
                    {item.price} € - {item.exchange ? exchangeIcon  : cartIcon }
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
