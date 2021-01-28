import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const CutOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <circle  cx='104' cy='152' r='56' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <circle  cx='104' cy='360' r='56' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <path  d='M157 175l-11 15 37 15s3.46-6.42 7-10z' fill='none' stroke='currentColor' stroke-linecap='square' stroke-miterlimit='10' stroke-width='32'/>
    <path  d='M154.17 334.43L460 162c-2.5-6.7-28-12-64-4-29.12 6.47-121.16 29.05-159.16 56.05C205.85 236.06 227 272 192 298c-25.61 19-44.43 22.82-44.43 22.82zM344.47 278.24L295 306.67c14.23 6.74 65.54 33.27 117 36.33 14.92.89 30 .39 39-6z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32'/>
    <circle  cx='256' cy='240' r='32' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
  </Icon>
);