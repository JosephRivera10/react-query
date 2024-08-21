import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import PostCard from "../../components/PostCard";
import PaginationComponent from "../../components/Pagination";
import callAPI from "../../utils/apiCalls";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import { Grid } from "@mui/material";
// interface {

// }

const mockData = [
  {
    userId: 1,
    id: 1,
    title: "jkfl;",
    body: "jkl;jkl;jkl;jkl;",
  },
  {
    userId: 2,
    id: 2,
    title: "jkfl;",
    body: "jkl;jkl;jkl;jkl;",
  },
  {
    userId: 3,
    id: 3,
    title: "jkfl;",
    body: "jkl;jkl;jkl;jkl;",
  },
];

const Posts = () => {
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 6;
  const baseUrl = "https://jsonplaceholder.typicode.com/posts?_page=";
  // const fetchProjects = (page = 0) =>
  //   fetch("https://jsonplaceholder.typicode.com/posts?_page1/" + page).then(
  //     (res) => res.json()
  //   );

  // const testCall = async () => {
  //   const getPosts = await callAPI(`${baseUrl}${page}&_limit=${limit}`);
  //   console.log("data 1", getPosts);
  // };
  // useEffect(() => {
  //   testCall();
  // });

  const { isLoading, isFetching, isError, error, data } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => callAPI(`${baseUrl}${page}&_limit=${limit}`),
    placeholderData: keepPreviousData,
  });
  console.log("data 2", data);

  const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log("value", value);
    setPage(value);
  };

  const getTotalCount = () => {
    if (data?.total) {
      setTotalCount(Math.ceil(parseInt(data?.total) / limit));
    }
  };

  useEffect(() => {
    getTotalCount();
  }, []);

  return (
    <>
      <Typography variant="h2">Posts</Typography>
      <Grid
        container
        sx={{
          height: "75vh",
          width: "96vw",
        }}
      >
        {isFetching && <Loading />}
        {isError && <Typography variant="body1">{error.message}</Typography>}
        <PostCard posts={data?.data} />
      </Grid>
      <PaginationComponent
        pageCount={Math.ceil(parseInt(data?.total!) / limit)}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default Posts;
