import React from 'react';
import { graphql } from 'gatsby';
import Typical from 'react-typical';

import {
  Button,
  HeaderBack,
  HeadingContact,
  HeadingXL,
  Image,
  Layout,
  SEO,
  TextBody,
} from '../components';

const About1 = ({ data }) => {
  return (
    <>
      <SEO title="Contact" />
      <HeaderBack />
      <Layout>
        <HeadingXL>
          <Typical
                steps={['Contact ... ', 1000, 'Contact-me.', 500]}
                loop={Infinity}
                wrapper="p"
              />
        </HeadingXL>
        <HeadingContact>
        Name:
        </HeadingContact>
          <TextBody>
          Diogo Ferreira
          <br />
        </TextBody>
 
        <HeadingContact>
        Email:
        </HeadingContact>
        <TextBody>
          diogo.santos134@etec.sp.gov.br
          <br />
          or
          <br />
          diogobartzadok@bk.ru
        </TextBody>

        <HeadingContact>
        Social Medias:
        </HeadingContact>
        <TextBody>
          @dhiogo_fer
          <br />
        </TextBody>

        <HeadingContact>
        Location:
        </HeadingContact>
        <TextBody>
          Mogi-Guaçu, São Paulo - Brazil
        </TextBody>

        <Button href="mailto:diogo.santos134&#64;etec.sp.gov.br">Get in touch</Button>
      </Layout>
    </>
  );
};

export default About1;

export const query = graphql`
  query {
    RandomPhoto: file(relativePath: { eq: "assets/images/RandomPhoto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
