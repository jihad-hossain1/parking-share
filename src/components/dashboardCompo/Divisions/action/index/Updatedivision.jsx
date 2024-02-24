"use client";

import ModalAll from "@/components/modalForAll/ModalForAll";
import { Button } from "@/components/ui/button";
import { UPDATE_DIVISION } from "@/graphql/mutation/location.mutation";
import { GET_DIVISIONS } from "@/graphql/query/location.query";
import FileUploader from "@/utils/FileUploader";
import { useMutation } from "@apollo/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

const Updatedivision = ({ division }) => {
  const [open, setOpen] = useState(false);
  const [about, setabout] = useState(division?.about);
  const [_photo, setPhoto] = useState(division?.image);
  const [image, setimage] = useState(null);
  const [errors, seterrors] = useState("");

  const [updatedivsion, { loading, data, error }] = useMutation(
    UPDATE_DIVISION,
    {
      variables: {
        id: division?.id,
        about: about,
        image: _photo,
      },
      refetchQueries: [{ query: GET_DIVISIONS }],
    }
  );

  const handleOnFileUpload = async (e) => {
    e.preventDefault();
    try {
      let data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "images_preset");

      let api = `https://api.cloudinary.com/v1_1/dqfi9zw3e/image/upload`;
      const res = await axios.post(api, data);
      let _up = await res?.data?.secure_url;
      setPhoto(_up);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    let image = _photo;
    try {
      await updatedivsion(about, image);
    } catch (error) {
      seterrors(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (error) {
      console.log("error: ");
    }
  }, [errors]);
  // console.log(error);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="hidden group-hover:block text-green-500 "
      >
        <FaPencilAlt />
      </button>

      <ModalAll open={open} setOpen={setOpen} title={"Update Division"}>
        <main className="flex flex-col gap-4">
          {errors ? errors : ""}
          <textarea
            type="text"
            name=""
            placeholder="About"
            id=""
            className="p-3 rounded shadow-sm "
            value={about}
            onChange={(e) => setabout(e.target.value)}
          />
          <FileUploader
            image={image}
            setimage={setimage}
            handleOnFileUpload={handleOnFileUpload}
            photo={_photo}
          />
          <Button
            className="text-right bg-violet-700"
            type="submit"
            onClick={handleUpdate}
          >
            Update
          </Button>
        </main>
      </ModalAll>
    </>
  );
};

export default Updatedivision;
