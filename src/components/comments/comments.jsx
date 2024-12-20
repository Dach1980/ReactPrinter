import React from "react";
import { Ul } from "./../elements";
import { CommentsLi, CommentsButton, Name, Text } from "./styled";

function Comments({ comments }) {
    return (
        <>
            <Ul>
                {comments.map((comment) => (
                    <CommentsLi key={comment.id}>
                        <Name>{comment.author}</Name>
                        <Text>{comment.text}</Text>
                    </CommentsLi>
                ))}
            </Ul>
            <CommentsButton>Показать ещё</CommentsButton>
        </>
    );
}

export default Comments;
