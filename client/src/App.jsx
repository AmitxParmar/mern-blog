import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ArticlesList from './pages/ArticlesList';

// pages
const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Article = lazy(() => import('./pages/Article'))
const About = lazy(() => import('./pages/About'));

// components
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      {/*  Fallback passed to Suspense Component runs when the components inside Routes component are loading or you may call it data fetching */}
      <Suspense className='container bg-transparent blur-sm flex flex-center justify-center absolute' fallback='Loading....'>
        <div className='max-w-screen-md mx-auto pt-20'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article-list" element={<ArticlesList />} />
            <Route path="/articles/:name" element={<Article />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App
