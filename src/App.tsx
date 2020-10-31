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
import { withAuthenticator, AmplifySignOut,AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from "@aws-amplify/ui-react";
import { IonReactRouter } from '@ionic/react-router';
import { home, wifi, settings, library, exit} from 'ionicons/icons';
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
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

import { I18n } from '@aws-amplify/core';

import { strings } from './strings';
import { Translations } from "@aws-amplify/ui-components";


/* Theme variables */
import './theme/variables.css';
Amplify.configure(awsconfig);

I18n.putVocabularies(strings);

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

const App: React.FunctionComponent = () => {
  const [authState, setAuthState] = React.useState<AuthState>();
  const [user, setUser] = React.useState<object | undefined>();

  React.useEffect(() => {
      return onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
      });
  }, []);

return authState === AuthState.SignedIn && user ? (
  <IonApp>
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/help" component={Tab1} exact={true} />
        <Route path="/shorturls" component={Tab2} exact={true} />
        <Route path="/settings" component={Tab3} />
        <Route path="/logout" component={Logout} />
        <Route path="/" render={() => <Redirect to="/shorturls" />} exact={true} />
      </IonRouterOutlet>
      <AmplifyAuthenticator usernameAlias="email"></AmplifyAuthenticator>
      <IonTabBar slot="bottom">
    
        <IonTabButton tab="tab2" href="/shorturls">
          <IonIcon icon={wifi} />
          <IonLabel>ShortURLs</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/settings">
          <IonIcon icon={settings} />
          <IonLabel>Einstellungen</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab1" href="/help">
          <IonIcon icon={library} />
          <IonLabel>Hilfe</IonLabel>
        </IonTabButton>
        <IonTabButton tab="logout" href="/logout">
          <IonIcon icon={exit} />
          <IonLabel>Abmelden</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
</IonApp>
) : (
  <AmplifyAuthenticator usernameAlias="email">
       <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: "email",
            label: "E-Mail",
            placeholder: "eMail",
            required: true,
          },
          {
            type: "password",
            label: "Passwort",
            placeholder: "password",
            required: true,
          },
          
        ]} 
      />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
      </AmplifyAuthenticator>
);
}

export default App;