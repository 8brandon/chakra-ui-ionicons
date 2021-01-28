import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const BarbellOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M48 256h416'/>
    <rect  x='384' y='128' width='32' height='256' rx='16' ry='16' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <rect  x='96' y='128' width='32' height='256' rx='16' ry='16' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <rect  x='32' y='192' width='16' height='128' rx='8' ry='8' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <rect  x='464' y='192' width='16' height='128' rx='8' ry='8' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
  </Icon>
);