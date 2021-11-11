import MainPage from "../components/MainPage/MainPage";
import NavBar from "../components/UI/NavBar";
import SideMenu from "../components/UI/SideMenu";
import axios from "axios";

import { useHistory } from "react-router";

import { useState, useEffect } from "react";

const Dashboard = () => {
  const [selectedVideo, setSelectedVideo] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [retrievedVideos, setRetrievedVideos] = useState([]);
  const [isVideoAdded, setIsVideoAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const dataReceiveHandler = (data) => {
    setSelectedVideo(data.url);
  };

  const formCloseHandler = () => {
    setFormOpen(false);
  };

  const modalFormHandler = () => {
    setFormOpen(true);
  };

  const id = localStorage.getItem("id");

  const sendDataToDB = async (videoData) => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3001/add-video", {
        name: videoData.name,
        url: videoData.url,
        id: id,
      });
      console.log(response);
      // setStatus("Success");
      setFormOpen(false);
      setIsVideoAdded(true);
    } catch (err) {
      console.log(err);
      // setStatus("Failure");
      setFormOpen(false);
      setIsVideoAdded(false);
    }
    setIsLoading(false);
  };

  const token = localStorage.getItem("token_id");

  const fetchVideos = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/dashboard", {
        headers: { authorization: `Bearer ${token}` },
      });
      console.log(response);

      const data = response.data;

      // console.log(data);
      // if (response.data.message === "New User") {
      //   setRetrievedVideos([]);
      // }

      setRetrievedVideos(data);

      // setRetrievedVideos(data);
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if (isVideoAdded) {
    fetchVideos();
    setIsVideoAdded(false);
  }

  console.log(isVideoAdded);

  return (
    <div>
      <NavBar />
      <SideMenu
        onReceiveData={dataReceiveHandler}
        onClose={formCloseHandler}
        data={sendDataToDB}
        formOpen={formOpen}
        isLoading={isLoading}
        retrievedVideos={retrievedVideos}
        formHandle={modalFormHandler}
      />
      <MainPage videoUrl={selectedVideo} />
    </div>
  );
};

export default Dashboard;
