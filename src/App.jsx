import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import PageTransition from './components/layout/PageTransition'

import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './pages/PortfolioDetail'
import ContractLab from './pages/ContractLab'
import ContractDetail from './pages/ContractDetail'
import ClausePlaybook from './pages/ClausePlaybook'
import ClauseDetail from './pages/ClauseDetail'
import TechPolicy from './pages/TechPolicy'
import PolicyDetail from './pages/PolicyDetail'
import Research from './pages/Research'
import ArticleDetail from './pages/ArticleDetail'
import CaseBriefs from './pages/CaseBriefs'
import CaseBriefDetail from './pages/CaseBriefDetail'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index element={<PageTransition><Home /></PageTransition>} />
          <Route path="about" element={<PageTransition><About /></PageTransition>} />

          <Route path="portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
          <Route path="portfolio/:id" element={<PageTransition><PortfolioDetail /></PageTransition>} />

          <Route path="contract-lab" element={<PageTransition><ContractLab /></PageTransition>} />
          <Route path="contract-lab/playbook" element={<PageTransition><ClausePlaybook /></PageTransition>} />
          <Route path="contract-lab/playbook/:id" element={<PageTransition><ClauseDetail /></PageTransition>} />
          <Route path="contract-lab/:id" element={<PageTransition><ContractDetail /></PageTransition>} />

          <Route path="tech-policy" element={<PageTransition><TechPolicy /></PageTransition>} />
          <Route path="tech-policy/:id" element={<PageTransition><PolicyDetail /></PageTransition>} />

          <Route path="research" element={<PageTransition><Research /></PageTransition>} />
          <Route path="research/case-briefs" element={<PageTransition><CaseBriefs /></PageTransition>} />
          <Route path="research/case-briefs/:id" element={<PageTransition><CaseBriefDetail /></PageTransition>} />
          <Route path="research/:id" element={<PageTransition><ArticleDetail /></PageTransition>} />

          <Route path="resume" element={<PageTransition><Resume /></PageTransition>} />
          <Route path="contact" element={<PageTransition><Contact /></PageTransition>} />

          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
