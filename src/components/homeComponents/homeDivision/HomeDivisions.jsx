"use client";

import { GET_DIVISIONS } from "@/graphql/query/location.query";
import { useQuery } from "@apollo/client";

const HomeDivisions = () => {
  const { data, loading, error } = useQuery(GET_DIVISIONS) || {};

  if (loading) {
    return <div>loading ....</div>;
  }
  if (error) {
    return <div> {error.message} </div>;
  }

  return <div>HomeDivisions : {data?.divisions?.length || 0}</div>;
};

export default HomeDivisions;
