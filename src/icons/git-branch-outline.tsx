import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const GitBranchOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <circle  cx='160' cy='96' r='48' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <circle  cx='160' cy='416' r='48' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M160 368V144'/>
    <circle  cx='352' cy='160' r='48' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <path  d='M352 208c0 128-192 48-192 160' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
  </Icon>
);