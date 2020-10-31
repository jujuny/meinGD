import React from 'react';
import { IonCard, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

type Item = {
  src: string;
  text: string;
};
const items: Item[] = [{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' }];



const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MeinGD: Hilfe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          
          <IonToolbar>
            <IonTitle size="large">MeinGD  <AmplifySignOut></AmplifySignOut></IonTitle> 
          </IonToolbar>
         
        </IonHeader>
        <IonCard>Willkommen zu MeinGD, dem ShortURL-Dienst für Gottesdienst-Streaming! 
          <IonImg ></IonImg>
        </IonCard>
        <IonCard>Status:</IonCard>
        <IonCard> <AmplifySignOut></AmplifySignOut></IonCard>
        <IonList>
        <IonItem><IonThumbnail><IonImg src='icon.png' /></IonThumbnail></IonItem>
      {items.map((image, i) => (
        <IonItem key={i}>
          <IonThumbnail slot="start">
            <IonImg src={image.src} />
          </IonThumbnail>
          <IonLabel>{image.text}</IonLabel>
        </IonItem>
      ))}
    </IonList>
   
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
