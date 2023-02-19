import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './article-content'

// pages
import NotFound from './NotFound'

// Components
import Articles from '../components/Articles';
import CommentList from '../components/CommentList';
import AddCommentForm from './../components/AddCommentForm';

const Article = () => {
    const { name } = useParams();
    const article = articleContent.find((article) => article.name === name);
    const [articleInfo, setArticleInfo] = useState({ comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        };
        fetchData();
    }, [name]);

    // if there are no articles available return NotFound Page
    if (!article) return <NotFound />;
    // if there are no articles available in database use the local demo articles

    const otherArticles = articleContent.filter(
        (article) => article.name !== name
    )

    return (
        <>
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
                {article.title}
            </h1>
            {article.content.map((paragraph, index) => (
                <p key={index} className='' >
                    {paragraph}
                </p>
            ))}
            <CommentList comments={articleInfo.comments} />
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
            <h1 className='sm:text-2xl text-xl'>
                Other Articles
            </h1>
            <div className=''>
                <Articles articles={otherArticles} />
            </div>
        </>
    )
}

export default Article;
