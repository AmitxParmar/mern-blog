import { Link } from 'react-router-dom'

import React from 'react'

const Articles = ({ articles }) => {
    return (
        <>
            {articles.map((article, index) => (
                <div key={index} className=''>
                    <div className=''>
                        <Link to={`/articles/${article.name}`}>
                            <img
                                className=''
                                src={article.thumbnail}
                                alt='blog'
                            />
                        </Link>
                        <div>
                            <Link key={index}>
                                <h3>
                                    {article.title}
                                </h3>
                            </Link>
                            <p>
                                {article.content[0].substring(0, 110)}...
                            </p>
                            <div>
                                <Link
                                    className=''
                                    to={`/article/${article.name}`}
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Articles