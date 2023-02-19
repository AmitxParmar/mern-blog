import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// pages
const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Article = lazy(() => import('./pages/Article'))
const ArticlesList = lazy(() => import('./pages/ArticlesList'))
const About = lazy(() => import('./pages/About'));

// component
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense className='container bg-transparent blur-sm flex flex-center justify-center absolute' fallback='Loading....'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article-list" element={<ArticlesList />} />
          <Route path="/articles/:name" element={<Article />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
