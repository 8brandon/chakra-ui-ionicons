import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const ListCircleOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M224 184h128M224 256h128M224 327h128'/>
    <path  d='M448 258c0-106-86-192-192-192S64 152 64 258s86 192 192 192 192-86 192-192z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
    <circle  cx='168' cy='184' r='8' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <circle  cx='168' cy='257' r='8' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <circle  cx='168' cy='328' r='8' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
  </Icon>
);