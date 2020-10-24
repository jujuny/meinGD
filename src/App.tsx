import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { withAuthenticator, AmplifySignOut,AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { IonReactRouter } from '@ionic/react-router';
import { home, wifi, settings} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Logout from './pages/Logout'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

/* Theme variables */
import './theme/variables.css';
Amplify.configure(awsconfig);

const signUpConfig = {
  header: 'Registrierung für meinGD',
  hideAllDefaults: true,
  defaultCountryCode: '49',
  signUpFields: [

    {
      label: 'Passwort',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    },

    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string'
    }
  ]
};

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Tab1} exact={true} />
          <Route path="/shorturls" component={Tab2} exact={true} />
          <Route path="/settings" component={Tab3} />
          <Route path="/logout" component={Logout} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <AmplifyAuthenticator usernameAlias="email"></AmplifyAuthenticator>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/shorturls">
            <IonIcon icon={wifi} />
            <IonLabel>ShortURLs</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/settings">
            <IonIcon icon={settings} />
            <IonLabel>Einstellungen</IonLabel>
          </IonTabButton>
          <IonTabButton tab="logout" href="/logout">
            <IonIcon icon={home} />
            <IonLabel>Logout</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);


export default withAuthenticator (App);