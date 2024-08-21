import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import React from "react";

interface PostObject {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  posts: PostObject[];
}

const PostCard = ({ posts }: Props) => {
  if (!posts) return null;
  return (
    <Grid
      container
      spacing={2}
      display="flex"
      sx={{ height: "inherit" }}
      alignContent="center"
      alignItems="center"
      justifyContent="center"
    >
      {posts.map((item) => (
        <Grid item xs={4} key={item.id}>
          <Card
            sx={{
              padding: "5px",
              height: "200px",
            }}
            variant="outlined"
          >
            <span>Post # {item.id}</span>
            <CardHeader>{item.title}</CardHeader>
            <CardContent>{item.body}</CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostCard;
