import React from "react";
import { Pagination } from "@mui/material";

interface Props {
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  pageCount: number;
}

const PaginationComponent = ({ onPageChange, pageCount }: Props) => {
  if (!pageCount) return null;
  return (
    <Pagination
      sx={{
        color: "#fff",
      }}
      color="primary"
      count={pageCount}
      onChange={onPageChange}
    />
  );
};

export default PaginationComponent;
