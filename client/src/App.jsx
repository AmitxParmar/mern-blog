import { lazy, suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Article from './pages/Article'
import ArticlesList from './pages/ArticlesList'
import About from './pages/About';

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
