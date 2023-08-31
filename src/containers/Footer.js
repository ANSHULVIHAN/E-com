import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';

const FooterContainer = styled.footer`
  background-color: #212121;
  color: white;
  padding: 40px 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 0 20px;
  margin-bottom: 20px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 20px;

  svg {
    font-size: 24px;
    margin-right: 15px;
    cursor: pointer;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 24px;
    margin-right: 10px;
  }
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ff5722;
  }
`;

const PaymentLogo = styled.img`
  max-width: 100%;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h2>Shop Categories</h2>
          <ul>
            <li><FooterLink to="/">Home</FooterLink></li>
            <li><FooterLink to="/products">Products</FooterLink></li>
            <li><FooterLink to="/about">About Us</FooterLink></li>
            <li><FooterLink to="/contact">Contact</FooterLink></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h2>Customer Service</h2>
          <ul>
            <li><FooterLink to="/faq">FAQs</FooterLink></li>
            <li><FooterLink to="/shipping">Shipping</FooterLink></li>
            <li><FooterLink to="/returns">Returns</FooterLink></li>
            <li><FooterLink to="/privacy">Privacy Policy</FooterLink></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h2>Contact Us</h2>
          <ContactInfo>
            <PhoneIcon />
            +913456789012
          </ContactInfo>
          <SocialIcons>
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </SocialIcons>
        </FooterSection>
      </FooterContent>
      <PaymentLogo src="https://i.ibb.co/Qfvn4z6/payment.png" alt="Payment" />
    </FooterContainer>
  );
};

export default Footer;
