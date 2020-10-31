import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, IonBackButton, IonButton, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import {
    IonIcon, IonFab, IonFabButton

} from '@ionic/react';

import './Tab2.css';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';


const Tab2: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonImg src="/icon.png"></IonImg>
        <IonButtons slot="end">
          <AmplifySignOut>Abmelden</AmplifySignOut>
        </IonButtons>
        <IonTitle>MeinGD: Meine ShortURLs</IonTitle>
      </IonToolbar>
</IonHeader>
    {/*-- Header without a border --*/}

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ShortURLs</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard><IonCardHeader><IonCardTitle>Hier ist die Liste Deiner ShortURLs</IonCardTitle>
        <IonButtons slot="end">

        </IonButtons>
        </IonCardHeader>
        </IonCard>

     {/*-- fab placed to the (vertical) center and end --*/}
     <IonFab vertical="center" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
