import { useState } from 'react'

const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState("")
    const [commentText, setCommentText] = useState("");

    const addComments = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comments`, {
            method: 'POST',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername("");
        setCommentText("");
    };

    return (
        <form>
            <h3>Add a comment</h3>
            <label htmlFor='username'>
                Name:
            </label>
            <input
                type='text'
                name='username'
                id='username'
                onChange={() => setUsername(e.target.value)}
                className=''
            />
            <label htmlFor='comment'>
                Comment:
            </label>
            <textarea
                rows='4'
                cols='50'
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
            />
            <button
                onClick={() => addComments()}
            >
                Submit
            </button>
        </form>
    );
};

export default AddCommentForm