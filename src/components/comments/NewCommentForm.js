import { useEffect } from "react";
import { useRef } from "react";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment);

  const { LoadedComments } = props;

  useEffect(() => {
    if (status === "completed") {
      LoadedComments();
    }
  }, [LoadedComments, status]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredComponent = commentTextRef.current.value;

    sendRequest({
      commentData: { text: enteredComponent },
      quoteId: props.quoteId,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && <LoadingSpinner />}
      {error && <p>Somethin Wrong ...</p>}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
