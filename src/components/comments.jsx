function Comments({comments}) {
    return (
        <div>
            <h2>Коментарии</h2>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <b>{comment.author}</b>
                        <p>{comment.text}</p>
                    </li>
                ))

                }
            </ul>
        </div>
    )
}

export default Comments;
