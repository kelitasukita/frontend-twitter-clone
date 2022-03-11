import React from 'react';


import { Container, Banner, Avatar, ProfileData, EditButton, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Kelita Lamar</h1>
        <h2>@kelita_lamar</h2>

        <p>
          Delevoper at <a href="https://github.com/kelitsukita">@laraapps</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Amsterdam, Holanda
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 28 de Maio de 1983
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
}

export default ProfilePage;   