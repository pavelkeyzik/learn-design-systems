import React from 'react';
import { Post, Posts } from '../../src/components/Posts';
import { H2, P } from '../../src/components/Typography';
import { Avatar } from '../../src/components/Avatar';

export default {
  title: 'Components/Posts',
};

export function Default() {
  return (
    <Posts>
      <Post>
        <Post.Media src="https://picsum.photos/seed/picsum/400/250" />
        <H2 mt={4} mb={3}>
          Little Thinks Do Make
        </H2>
        <P>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </P>
        <Post.Footer mt={5}>
          <Post.UserInfo>
            <Avatar />
            <P ml={3}>User Name</P>
          </Post.UserInfo>
          <P>4 Oct, 2020</P>
        </Post.Footer>
      </Post>
      <Post>
        <Post.Media src="https://picsum.photos/seed/picsum/400/250" />
        <H2 mt={4} mb={3}>
          Little Thinks Do Make
        </H2>
        <P>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </P>
        <Post.Footer mt={5}>
          <Post.UserInfo>
            <Avatar />
            <P ml={3}>User Name</P>
          </Post.UserInfo>
          <P>4 Oct, 2020</P>
        </Post.Footer>
      </Post>
      <Post>
        <Post.Media src="" />
        <H2 mt={4} mb={3}>
          Little Thinks Do Make
        </H2>
        <P>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </P>
        <Post.Footer mt={5}>
          <Post.UserInfo>
            <Avatar />
            <P ml={3}>User Name</P>
          </Post.UserInfo>
          <P>4 Oct, 2020</P>
        </Post.Footer>
      </Post>
    </Posts>
  );
}
