import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const CalendarOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <rect  fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32' x='48' y='80' width='416' height='384' rx='48'/>
    <circle  cx='296' cy='232' r='24'/>
    <circle  cx='376' cy='232' r='24'/>
    <circle  cx='296' cy='312' r='24'/>
    <circle  cx='376' cy='312' r='24'/>
    <circle  cx='136' cy='312' r='24'/>
    <circle  cx='216' cy='312' r='24'/>
    <circle  cx='136' cy='392' r='24'/>
    <circle  cx='216' cy='392' r='24'/>
    <circle  cx='296' cy='392' r='24'/>
    <path  fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32' stroke-linecap='round' d='M128 48v32M384 48v32'/>
    <path  fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32' d='M464 160H48'/>
  </Icon>
);