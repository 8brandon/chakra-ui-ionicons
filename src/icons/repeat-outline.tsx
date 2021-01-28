import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const RepeatOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M320 120l48 48-48 48'/>
    <path  d='M352 168H144a80.24 80.24 0 00-80 80v16M192 392l-48-48 48-48' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <path  d='M160 344h208a80.24 80.24 0 0080-80v-16' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
  </Icon>
);