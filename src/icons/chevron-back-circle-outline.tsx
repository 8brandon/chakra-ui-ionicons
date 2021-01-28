import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const ChevronBackCircleOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  d='M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M296 352l-96-96 96-96'/>
  </Icon>
);