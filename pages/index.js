import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import PluginShowcase from '../components/PluginShowcase';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <Layout title="BlackSky-MD - WhatsApp Multi-Device RPG Bot">
      <Hero />
      <Features />
      <Stats />
      <PluginShowcase />
      <Testimonials />
      <CTA />
    </Layout>
  );
}