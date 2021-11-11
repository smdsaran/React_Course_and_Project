import classes from "./VideoItem.module.css";

const VideoItem = (props) => {
  const btnClickHandler = () => {
    const videoUrl = props.url;
    const videoId = props.id;
    props.onReceiveData({
      url: videoUrl,
      id: videoId,
    });
  };

  return (
    <button className={classes.video} onClick={btnClickHandler}>
      {props.name}
    </button>
  );
};

export default VideoItem;
