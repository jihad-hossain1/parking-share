import React from "react";
import Updatedivision from "./index/Updatedivision";
import Updatedistrict from "./index/Updatedistrict";
import UpatedUpazila from "./index/UpatedUpazila";
import UpdatedUnion from "./index/UpdatedUnion";

const DivisionAction = () => {
  return (
    <div>
      <Updatedivision />
      <Updatedistrict />
      <UpatedUpazila />
      <UpdatedUnion />
    </div>
  );
};

export default DivisionAction;
