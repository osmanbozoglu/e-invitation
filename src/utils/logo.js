import React from 'react';
import { Image } from 'react-native';

import LogoImg from '../../assets/images/logo.png';
const LogoTitle = () => (
  <Image
    source={LogoImg}
    style={{ width: 70, height: 35 }}
    resizeMode="contain"
  />
);

export default LogoTitle;
