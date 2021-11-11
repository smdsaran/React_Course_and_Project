import classes from "./MainPage.module.css";

const MainPage = (props) => {
  // console.log(props.videoUrl);

  return (
    <div className={classes.mainPage}>
      <iframe
        width="560"
        height="315"
        src={props.videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default MainPage;

//{`${props.videoUrl}?autoplay=1`}
