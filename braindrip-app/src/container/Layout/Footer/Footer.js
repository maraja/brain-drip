import React from 'react';
import Logo from '#root/components/UI/Logo/Logo';
import Footers from '#root/components/Footer/Footer';
import LogoImage from '#root/assets/img/logo/logo_1.svg';
import FooterMenu from './FooterMenu';

const Footer = () => {
  return (
    <Footers
      logo={<Logo withLink linkTo="/" src={LogoImage} title="BrainDrip." />}
      copyright={`Copyright @ ${new Date().getFullYear()} Braindrip.`}
    />
  );
};

export default Footer;
