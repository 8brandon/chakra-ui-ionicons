import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const PauseCircle = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-32 272a16 16 0 01-32 0V192a16 16 0 0132 0zm96 0a16 16 0 01-32 0V192a16 16 0 0132 0z'/>
  </Icon>
);