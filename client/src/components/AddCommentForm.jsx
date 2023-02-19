import { useState } from 'react'

const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState("")
    const [comment, setCommentText] = useState("");

    const addComments = async = () => {
        // empty for now
    }

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