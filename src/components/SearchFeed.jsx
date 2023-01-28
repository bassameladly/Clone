import { Box, Typography } from "@mui/material";
import { Videos } from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{ overflowY: "auto", height: "90vh", flex: 2, marginLeft: "120px" }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results :
        <span style={{ color: "#F31503", marginLeft: 10 }}>{searchTerm}</span>{" "}
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default Feed;
