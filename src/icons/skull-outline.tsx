import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const SkullOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  d='M448 225.64v99a64 64 0 01-40.23 59.42l-23.68 9.47A32 32 0 00364.6 417l-10 50.14A16 16 0 01338.88 480H173.12a16 16 0 01-15.69-12.86L147.4 417a32 32 0 00-19.49-23.44l-23.68-9.47A64 64 0 0164 324.67V224c0-105.92 85.77-191.81 191.65-192S448 119.85 448 225.64z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32'/>
    <circle  cx='168' cy='280' r='40' fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32'/>
    <circle  cx='344' cy='280' r='40' fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32'/>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M256 336l-16 48h32l-16-48zM256 448v32M208 448v32M304 448v32'/>
  </Icon>
);