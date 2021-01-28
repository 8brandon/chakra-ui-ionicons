import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const GridOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <rect  x='48' y='48' width='176' height='176' rx='20' ry='20' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <rect  x='288' y='48' width='176' height='176' rx='20' ry='20' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <rect  x='48' y='288' width='176' height='176' rx='20' ry='20' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <rect  x='288' y='288' width='176' height='176' rx='20' ry='20' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
  </Icon>
);