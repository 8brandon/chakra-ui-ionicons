import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const AddCircleOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M256 176v160M336 256H176'/>
  </Icon>
);