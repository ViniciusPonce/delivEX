import '../ExploreContainer.css';
import React from 'react';
import { IonCol, IonGrid, IonInput, IonRow, IonImg } from '@ionic/react';
import '../css/profile/User.css';

interface ContainerProps {
  name: string;
}

const User: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonGrid className='user-container'>
      <IonRow>
        <IonCol size="auto" className='user-col'>
          <img src="https://avatars.githubusercontent.com/u/54123624?v=4" alt="Profile"></img>
        </IonCol>
        <IonCol className='user-col'><strong>{name}</strong></IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default User;