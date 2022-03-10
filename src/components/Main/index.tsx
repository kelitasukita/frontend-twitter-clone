import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Kelita Lamar</strong>
          <span>715 Tweets</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage /> */}
{/* 
      <BottonMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottonMenu> */}

    </Container>
  );
}

export default Main;