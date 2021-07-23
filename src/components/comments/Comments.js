import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
  const params = useParams();

  const [isAddingComment, setIsAddingComment] = useState(false);

  const {
    sendRequest,
    status,
    data: loadedComments,
    error,
  } = useHttp(getAllComments, true);

  const { quoteId } = params;
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const commentsHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  console.log(loadedComments);

  let content;

  if (status === "pending") {
    content = (
      <div className="centered">
        ;
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (loadedComments && status === "completed") {
    content = <CommentsList comments={loadedComments} />;
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    content = <p className="centered">No comments were added yet!</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm quoteId={quoteId} LoadedComments={commentsHandler} />
      )}
      {content}
    </section>
  );
};

export default Comments;
