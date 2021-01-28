import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const CardOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <rect  x='48' y='96' width='416' height='320' rx='56' ry='56' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <path  fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='60' d='M48 192h416M128 300h48v20h-48z'/>
  </Icon>
);