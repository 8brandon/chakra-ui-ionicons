import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const DesktopOutlineIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <rect
      x="32"
      y="64"
      width="448"
      height="320"
      rx="32"
      ry="32"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M304 448l-8-64h-80l-8 64h96z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M368 448H144"
    />
    <path d="M32 304v48a32.09 32.09 0 0032 32h384a32.09 32.09 0 0032-32v-48zm224 64a16 16 0 1116-16 16 16 0 01-16 16z" />
  </Icon>
);
