import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const TerminalOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <rect  x='32' y='48' width='448' height='416' rx='48' ry='48' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M96 112l80 64-80 64M192 240h64'/>
  </Icon>
);