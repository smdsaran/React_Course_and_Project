import VideoItem from "../Video/VideoItem";
import classes from "./SideMenu.module.css";
import Modal from "./Modal";
import VideoForm from "../Video/VideoForm";

import LoadingSpinner from "./LoadingSpinner";
import styles from "./LoadingSpinner.module.css";

const SideMenu = (props) => {
  const videos = props.retrievedVideos.map((video) => (
    <VideoItem
      name={video.name}
      key={video._id}
      id={video._id}
      url={video.url}
      onReceiveData={props.onReceiveData}
    />
  ));
  return (
    <div className={classes["side-bar"]}>
      <button className={classes.button} onClick={props.formHandle}>
        Add Video
      </button>

      {props.formOpen && (
        <Modal onClose={props.onClose}>
          {props.isLoading && (
            <div className={styles.loading}>
              <LoadingSpinner />
            </div>
          )}
          <VideoForm
            onClose={props.onClose}
            data={props.data}
            // signals={videoAddedHandler}
          />
        </Modal>
      )}

      <div className={classes.box}>
        {videos}
        {props.isLoading && (
          <div className={styles.loading}>
            <LoadingSpinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default SideMenu;
