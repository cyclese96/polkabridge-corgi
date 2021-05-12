import React, { Fragment } from 'react';
import Partnerships from './Partnerships';
import About from './About';
import Features from './Features';
import HowItWorks from './HowItWorks';
import PBRToken from './PBRToken';
import Roadmap from './Roadmap';
import SocialLinks from './SocialLinks';
import Footer from '../../common/Footer';
import Listings from './Listings';
import Tokenomics from './Tokenomics';
import ReleaseSchedule from './ReleaseSchedule';
import Header from './Header';
import HowToBuy from './HowToBuy';

export default function Home() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <section id="header">
        <Header />
      </section>
      {/* <section id="partnerships">
        <Partnerships />
      </section> */}
      <hr style={{ color: '#e9e9e9' }} />
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>

      <section id="tokenomics">
        <Tokenomics />
      </section>

      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="roadmap">
        <HowToBuy />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
