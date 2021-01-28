import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const ReaderOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <rect  x='96' y='48' width='320' height='416' rx='48' ry='48' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M176 128h160M176 208h160M176 288h80'/>
  </Icon>
);