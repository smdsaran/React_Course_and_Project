import classes from "./VideoForm.module.css";
import { useRef } from "react";
// import axios from "axios";

const VideoForm = (props) => {
  const videoRef = useRef();
  const urlRef = useRef();

  // const [status, setStatus] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const videoData = {
      name: videoRef.current.value,
      url: urlRef.current.value,
    };

    props.data(videoData);
  };
  // let signal;
  // if (status === "Success") {
  //   signal = "Video Added Successfully.";
  // }

  // if (status === "Failure") {
  //   signal = "Failed to Add Video.";
  // }

  // const colour = status === "Success" ? "green" : "red";

  return (
    <form className={classes.addVideoForm} onSubmit={formSubmitHandler}>
      <div className={classes.control}>
        <input type="text" required placeholder="Video Name" ref={videoRef} />
      </div>

      <div className={classes.control}>
        <input type="text" required placeholder="Video URL" ref={urlRef} />
      </div>

      <div className={classes.actions}>
        <button className={classes.closebtn} onClick={props.onClose}>
          Close
        </button>
        {/* <p>{signal}</p> */}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default VideoForm;
