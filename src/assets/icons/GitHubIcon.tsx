import React from 'react';
import styled from '@emotion/styled';

function GitHubIcon() {
  return (
    <GitHubIconWrapper width="32" height="32" viewBox="0 0 32 32">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.0347 2.66667C8.68936 2.66667 2.73602 8.62 2.73602 15.9653C2.73602 21.84 6.54536 26.8253 11.8307 28.5853C12.496 28.7053 12.736 28.296 12.736 27.944C12.736 27.628 12.7254 26.7907 12.7214 25.6827C9.02136 26.4853 8.24002 23.8987 8.24002 23.8987C7.63736 22.3627 6.76402 21.9533 6.76402 21.9533C5.55736 21.128 6.85602 21.1467 6.85602 21.1467C8.19202 21.24 8.89202 22.5173 8.89202 22.5173C10.0787 24.5493 12.0067 23.9627 12.7614 23.6227C12.8827 22.7627 13.2294 22.176 13.608 21.844C10.656 21.5093 7.55202 20.368 7.55202 15.2707C7.55202 13.8213 8.07069 12.632 8.91736 11.704C8.78269 11.3667 8.32269 10.0133 9.04936 8.184C9.04936 8.184 10.1654 7.82533 12.7054 9.54533C13.7694 9.25067 14.904 9.10267 16.0334 9.09733C17.1654 9.10267 18.3014 9.25067 19.3614 9.54533C21.9027 7.824 23.0174 8.184 23.0174 8.184C23.744 10.0133 23.288 11.3667 23.1494 11.704C24.0027 12.632 24.5147 13.82 24.5147 15.2707C24.5147 20.3813 21.408 21.504 18.4454 21.8333C18.9187 22.244 19.3454 23.0547 19.3454 24.2947C19.3454 26.0733 19.3294 27.508 19.3294 27.944C19.3294 28.3 19.5667 28.7133 20.2454 28.5827C25.528 26.82 29.3334 21.8387 29.3334 15.9653C29.3334 8.62 23.38 2.66667 16.0347 2.66667Z"
        fill="currentColor"
      />
    </GitHubIconWrapper>
  );
}

const GitHubIconWrapper = styled.svg`
  display: flex;
  align-items: center;
  vertical-align: middle;
  width: 100%;
  height: 100%;
`;

export { GitHubIcon };
