import React, { useState } from 'react';

import api from './services/api';

import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

import './styles/global.css';

import logo from './assets/logoIagoDeveloper.png';
import notebookImage from './assets/notebookDeveloper.jpg';
import personalImage from './assets/imagePessoal.jpg';

import Header from './components/Header';
import HeaderContainer from './components/HeaderContainer';
import Logo from './components/Logo';
import Nav from './components/Nav';
import UlContainer from './components/UlContainer';
import LiElement from './components/LiElement';
import AncorNavigation from './components/AncorNavigation';

import Section from './components/Section';
import SectionContainer from './components/SectionContainer';
import TextsContainer from './components/TextsContainer';
import FullStackWebDeveloper from './components/FullStackWebDeveloper';
import DescriptionDeveloper from './components/DescriptionDeveloper';
import NotebookImage from './components/NotebookImage';

import NameDeveloper from './components/NameDeveloper';
import PersonalImage from './components/PersonalImage';
import SocialsNetworksContainer from './components/SocialsNetworksContainer';
import SocialNetwork from './components/SocialNetwork';
import GithubButton from './components/GithubButton';

import FormContact from './components/FormContact';
import TextMessageContainer from './components/TextMessageContainer';
import MessageContact from './components/MessageContact';
import Input from './components/Input';
import TextareaMessage from './components/TextareaMessage';
import SendMessageButton from './components/SendMessageButton';

import Footer from './components/Footer';

function App() {
  const styleIcon = {
    color: "white",
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function sendMessageContact(event) {
    event.preventDefault();

    if(name === '' || email === '' || message === '') {
      console.log('vazio');
      return;
    }

    const data = {
      name,
      email,
      message
    }

    await api.post('http://localhost:3333/', data);
  }

  return (
    <>
      <Header>
        <HeaderContainer>
          <Logo src={logo}/>
          <Nav>
            <UlContainer>
              <LiElement>
                <AncorNavigation href="#home">
                  Home
                </AncorNavigation>
              </LiElement>
              <LiElement>
                <AncorNavigation href="#sobre">
                  Sobre
                </AncorNavigation>
              </LiElement>
              <LiElement>
                <AncorNavigation href="#contato">
                  Contato
                </AncorNavigation>
              </LiElement>
            </UlContainer>
          </Nav>
        </HeaderContainer>
      </Header>

      <Section id="home">
        <SectionContainer>
          <TextsContainer>
            <FullStackWebDeveloper>
              Lorem ipsum
            </FullStackWebDeveloper>
            <DescriptionDeveloper>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat
            </DescriptionDeveloper>
          </TextsContainer>
          <NotebookImage  src={notebookImage}/>
        </SectionContainer>
      </Section>

      <Section className="twoSection" id="sobre">
        <SectionContainer>
          <PersonalImage src={personalImage}/>
          <TextsContainer>
            <NameDeveloper>
            Lorem ipsum dolor sit amet
            </NameDeveloper> 
            <DescriptionDeveloper>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat
            </DescriptionDeveloper>
            <SocialsNetworksContainer>
              <SocialNetwork 
                href="http://www.linkedin.com" 
                target="_blank" 
                alt="Link Linkedin">
                  <FaLinkedin 
                    size={25}
                    style={styleIcon}
                  />  
              </SocialNetwork>
              <SocialNetwork 
                href="http://www.twitter.com" 
                target="_blank" 
                alt="Link Twitter">
                  <FaTwitter 
                    size={25}
                    style={styleIcon}
                  />  
              </SocialNetwork> 
              <SocialNetwork 
                href="http://www.facebook.com" 
                target="_blank" 
                alt="Link Facebook">
                  <FaFacebook 
                    size={25}
                    style={styleIcon}
                  />  
              </SocialNetwork>
              <SocialNetwork 
                href="http://www.instagram.com" 
                target="_blank" 
                alt="Link Instagram">
                  <FaInstagram 
                    size={25}
                    style={styleIcon}
                  />  
              </SocialNetwork>
            </SocialsNetworksContainer>
            <GithubButton 
              href="http://www.github.com/iago-s"
              target="_blank"
              alt="Link Github"  
            >
              Portfolio
            </GithubButton>
          </TextsContainer>
        </SectionContainer>
      </Section>

      <Section id="contato">
          <FormContact onSubmit={sendMessageContact}>
            <TextMessageContainer>
              <MessageContact>
                Entre em <span>contato</span>
              </MessageContact>
            </TextMessageContainer>
            <Input  
              placeholder="Nome" 
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <Input 
              placeholder="Email" 
              name="email" 
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <TextareaMessage 
              placeholder="Mensagem"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
            <SendMessageButton type="submit">
              Enviar
            </SendMessageButton>
          </FormContact>
      </Section>

      <Footer>
        <Logo src={logo}/>
      </Footer>
    </>
  );
}

export default App;
