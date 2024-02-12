import React from 'react';
import EmailFooter from './EmailFooter/EmailFooter';
import FooterTile from './FooterTile/FooterTile';

const Footer: React.FC = () => {
  return (
    <div>
      <div className=" w-screen min-w-screen border-t pt-8">
        <EmailFooter />
        <FooterTile />
      </div>
    </div>
  );
};

export default Footer;
