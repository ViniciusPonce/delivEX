import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import '../Tab1.css';
import SigninContainer from '../../components/login/SigninContainer';

const Signin: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Signin</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SigninContainer name="Login" />
      </IonContent>
    </IonPage>
  );
};

export default Signin;
