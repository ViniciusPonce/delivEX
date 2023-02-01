import { 
  IonContent,
  IonPage,
  IonItem,
  IonIcon,
  IonLabel,
  IonNavLink,
  IonButton
} from '@ionic/react';
import { 
  ticketOutline,
  locationOutline,
  readerOutline 
} from 'ionicons/icons';
import '../Tab1.css';
import User from '../../components/profile/User';
import '../css/profile/Profile.css'

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <User name="Vinicius Ponce"/>

        
          <IonItem button detail={true} routerLink="/profile/coupon">
            <IonIcon icon={ticketOutline} slot="start"></IonIcon>
            <IonLabel>
              <h2>Cupom</h2>
              <p>Meus cupons de desconto</p>
            </IonLabel>
          </IonItem>
        

        <IonItem button detail={true} routerLink="/profile/address">
          <IonIcon icon={locationOutline} slot="start"></IonIcon>
          <IonLabel>
            <h2>Endereços</h2>
            <p>Meus endereços de entrega</p>
          </IonLabel>
        </IonItem>

        <IonItem button detail={true}>
          <IonIcon icon={readerOutline} slot="start"></IonIcon>
          <IonLabel>
            <h2>Meus dados</h2>
            <p>Minhas informações da conta</p>
          </IonLabel>
        </IonItem>

        {/* <IonNavLink routerDirection="forward" component={() => <Coupon />}>
          <IonButton>Go to Page Two</IonButton>
        </IonNavLink> */}

      </IonContent>
    </IonPage>
  );
};

export default Profile;
