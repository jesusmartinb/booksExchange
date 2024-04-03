import {IonGrid, IonRow, IonCol, IonText, IonHeader, IonTitle, IonToolbar, IonSearchbar} from '@ionic/react';
import {search} from 'ionicons/icons';
import './MyBooksInfo.css';

export function MyBooksInfo() {

    const totalBooks = 7;

  return (
    <div className="books-info-container">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mi Librería</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonGrid>
        <IonRow>
            <IonCol>
                <IonText color="dark">{totalBooks}</IonText>
                <IonText color="dark">Libros</IonText>
            </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  )
}
