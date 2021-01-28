import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const FileTrayOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  d='M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48V272l-32-152c-5-27-23-40-48-40z' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M48 272h144M320 272h144M192 272a64 64 0 00128 0'/>
  </Icon>
);