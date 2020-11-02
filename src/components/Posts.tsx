import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../theme';
import { useIsImageBroken } from '../hooks/use-is-image-broken';
import { ImageIcon } from '../assets';
import { COMMON, CommonProps } from './constants';

const Posts = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  // TODO: Add this gap to theme.ts and DesignSystem
  grid-gap: 56px;
`;

const PostContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

type PostProps = {
  children?: React.ReactNode;
};

function Post(props: PostProps) {
  return <PostContainer>{props.children}</PostContainer>;
}

type PostMediaProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const PostMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${theme.colors.neutral[300]};
  color: ${theme.colors.neutral[400]};
  width: 100%;
  height: 280px;
  overflow: hidden;
`;

const PostMediaImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

function PostMedia(props: PostMediaProps) {
  const { isBroken, onSrcError } = useIsImageBroken();

  if (isBroken) {
    return (
      <PostMediaContainer>
        <ImageIcon />
      </PostMediaContainer>
    );
  }

  return (
    <PostMediaContainer>
      <PostMediaImage
        {...props}
        alt={props.alt || 'Post image'}
        onError={props.onError || onSrcError}
      />
    </PostMediaContainer>
  );
}

const PostFooter = styled.div<CommonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${COMMON}
`;

const PostUserInfo = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:first-child) {
    // TODO: Add as property "ml" or something
    margin-left: ${theme.spacing[3]};
  }
`;

Post.Media = PostMedia;
Post.Footer = PostFooter;
Post.UserInfo = PostUserInfo;

export { Posts, Post };
