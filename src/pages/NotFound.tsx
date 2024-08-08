import { Box } from "@mui/material";

const NotFound = () => {
  return (
    <Box width={"100%"} height={"100%"}>
      <img
        src="/404.png" // Ensure this path is correct and the image is in the public folder
        alt="404 Not Found"
        style={{ width: "600px", display: "block", margin: "auto" }}
      />
    </Box>
  );
};

export default NotFound;
