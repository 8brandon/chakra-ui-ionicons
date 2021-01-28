import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const ManSharp = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <circle  cx='256' cy='56' r='56'/>
    <path  d='M336 128H176a32 32 0 00-32 32v160h48V192h8v320h52V328h8v184h52V192h8v128h48V160a32 32 0 00-32-32z'/>
  </Icon>
);