import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const OptionsOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80'/>
    <circle  cx='336' cy='128' r='32' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <circle  cx='176' cy='256' r='32' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <circle  cx='336' cy='384' r='32' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
  </Icon>
);