import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const FileUploader = ({ image, setimage, handleOnFileUpload, photo }) => {
  // console.log(photo);
  return (
    <>
      <div className="flex gap-2">
        <input
          type="file"
          name=""
          accept="image/*"
          id="image"
          onChange={(e) => setimage((prev) => e.target.files[0])}
        />

        <Button
          type="button"
          className="bg-green-600"
          onClick={handleOnFileUpload}
        >
          upLoad
        </Button>
      </div>
      {photo && (
        <Image
          src={photo}
          alt="image"
          height={100}
          width={300}
          className="w-full rounded"
        />
      )}
    </>
  );
};

export default FileUploader;
