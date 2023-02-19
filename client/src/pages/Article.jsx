import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// pages
import NotFound from './NotFound'

// Components
import Articles from '../components/Articles';
import CommentList from '../components/CommentList';

const Article = ({ article }) => {
    const { name } = useParam();

    return (
        <>
            <h1>
                {article.title}
            </h1>
            {article.content.map((paragraph, index) => (
                <p key={index} className=''>
                    {paragraph}
                </p>
            ))}
            <CommentList />
            <AddCommentComponentGoesHere />
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
