import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const BarChartOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  d='M32 32v432a16 16 0 0016 16h432' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <rect  x='96' y='224' width='80' height='192' rx='20' ry='20' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <rect  x='240' y='176' width='80' height='240' rx='20' ry='20' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <rect  x='383.64' y='112' width='80' height='304' rx='20' ry='20' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
  </Icon>
);