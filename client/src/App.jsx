import { lazy, suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// pages
const Home = lazy(() =>) './pages/Home'
const NotFound = lazy(() =>) './pages/NotFound'
const Article = lazy(() =>) './pages/Article'
const ArticlesList = lazy(() =>) './pages/ArticlesList'
const About = lazy(() =>) './pages/About';

// component
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article-list" element={<ArticlesList />} />
        <Route path="/articles/:name" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
