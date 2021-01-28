import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const Shapes = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  d='M336 336H32a16 16 0 01-14-23.81l152-272a16 16 0 0127.94 0l152 272A16 16 0 01336 336z'/>
    <path  d='M336 160a161.07 161.07 0 00-32.57 3.32l74.47 133.27A48 48 0 01336 368H183.33A160 160 0 10336 160z'/>
  </Icon>
);