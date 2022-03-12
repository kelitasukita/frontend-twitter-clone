import React from 'react';

import {
  Container,
  Retweeted,
  KelitaLamarIcon,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  Dot } from './styles';

const Tweets: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <KelitaLamarIcon />
        Você Retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Kelita Lamar</strong>
            <span>@kelita_lamar</span>
            <Dot />
            <time>12 de março</time>
          </Header>

          <Description>To de infinity and beyond</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              27
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons> 
        </Content>
      </Body>
    </Container>
  );
}

export default Tweets;