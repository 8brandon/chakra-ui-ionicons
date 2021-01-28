import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const QrCode = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <rect  x='336' y='336' width='80' height='80' rx='8' ry='8'/>
    <rect  x='272' y='272' width='64' height='64' rx='8' ry='8'/>
    <rect  x='416' y='416' width='64' height='64' rx='8' ry='8'/>
    <rect  x='432' y='272' width='48' height='48' rx='8' ry='8'/>
    <rect  x='272' y='432' width='48' height='48' rx='8' ry='8'/>
    <path  d='M448 32H304a32 32 0 00-32 32v144a32 32 0 0032 32h144a32 32 0 0032-32V64a32 32 0 00-32-32zm-32 136a8 8 0 01-8 8h-64a8 8 0 01-8-8v-64a8 8 0 018-8h64a8 8 0 018 8zM208 32H64a32 32 0 00-32 32v144a32 32 0 0032 32h144a32 32 0 0032-32V64a32 32 0 00-32-32zm-32 136a8 8 0 01-8 8h-64a8 8 0 01-8-8v-64a8 8 0 018-8h64a8 8 0 018 8zM208 272H64a32 32 0 00-32 32v144a32 32 0 0032 32h144a32 32 0 0032-32V304a32 32 0 00-32-32zm-32 136a8 8 0 01-8 8h-64a8 8 0 01-8-8v-64a8 8 0 018-8h64a8 8 0 018 8z'/>
  </Icon>
);