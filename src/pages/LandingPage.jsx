import HeroSection from '../components/landing/HeroSection'
import ProblemSection from '../components/landing/ProblemSection'
import HowItWorksSection from '../components/landing/HowItWorksSection'
import FeaturesSection from '../components/landing/FeaturesSection'
import PerformanceSection from '../components/landing/PerformanceSection'
import TechStackSection from '../components/landing/TechStackSection'
import CtaSection from '../components/landing/CtaSection'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PerformanceSection />
      <TechStackSection />
      <CtaSection />
    </>
  )
}
