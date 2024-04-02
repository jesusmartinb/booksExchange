import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar,  IonCard, IonImg, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonCol, IonRow, IonGrid } from '@ionic/react';
import { search, repeat, cart } from 'ionicons/icons';
import { data } from '../data/data';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {

  const exchangeIcon = <IonIcon icon={repeat}>Intercambio</IonIcon>
  const cartIcon = <IonIcon icon={cart}>Venta</IonIcon>

  let [results, setResults] = useState([...data]);

  const handleInput = (e: Event) => {
    let query = '';
    const target = e.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setResults(data.filter((d) => d.title.toLowerCase().indexOf(query) > -1 || d.author.toLowerCase().indexOf(query) > -1));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Libros cerca de ti</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar searchIcon={search} placeholder="Buscar por título o autor" debounce={1000} onIonInput={(e) => handleInput(e)}></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {results.map((item) => (
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
