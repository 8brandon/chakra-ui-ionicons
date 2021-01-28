import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const ReceiptOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32' d='M160 336V48l32 16 32-16 31.94 16 32.37-16L320 64l31.79-16 31.93 16L416 48l32.01 16L480 48v224'/>
    <path  d='M480 272v112a80 80 0 01-80 80h0a80 80 0 01-80-80v-48H48a15.86 15.86 0 00-16 16c0 64 6.74 112 80 112h288' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M224 144h192M288 224h128'/>
  </Icon>
);