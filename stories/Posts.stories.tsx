import React from 'react';
import { Post, Posts } from '../src/components/Posts';
import { H2, P } from '../src/components/Typography';

export default {
  title: 'Components/Posts',
};

export function Default() {
  return (
    <Posts>
      <Post>
        <Post.Media src="https://picsum.photos/seed/picsum/400/250" />
        <H2>Little Thinks Do Make</H2>
        <P>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </P>
      </Post>
      <Post>
        <Post.Media src="https://picsum.photos/seed/picsum/400/250" />
        <H2>Little Thinks Do Make</H2>
        <P>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </P>
      </Post>
      <Post>
        <Post.Media src="" />
        <H2>Little Thinks Do Make</H2>
        <P>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </P>
      </Post>
    </Posts>
  );
}