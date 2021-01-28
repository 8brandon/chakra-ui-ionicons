import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const StopwatchOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M256 232v-80'/>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M256 88V72M132 132l-12-12'/>
    <circle  cx='256' cy='272' r='32' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
    <path  d='M256 96a176 176 0 10176 176A176 176 0 00256 96z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
  </Icon>
);