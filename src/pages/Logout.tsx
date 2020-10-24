import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Logout.css';

const Logout: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>meinGD - Abgemeldet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Abgemeldet</IonTitle>
          </IonToolbar>
        </IonHeader>
        Wieder anmelden
      </IonContent>
    </IonPage>
  );
};

export default Logout;
