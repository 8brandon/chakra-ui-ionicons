import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const NuclearOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <circle  cx='256' cy='256' r='192' fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32'/>
    <circle  cx='256' cy='256' r='64' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32' d='M224 192L171 85M288 192l53-107M327.55 255.81l119.41.13M299.09 313.13l72.25 95.06M184.45 255.81l-119.41.13M212.91 313.13l-72.25 95.06'/>
  </Icon>
);