"use client";

import ModalAll from "@/components/modalForAll/ModalForAll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CREATE_PARKINGLOT } from "@/graphql/mutation/parkingLot.mutation";
import {
  GET_DISTRICT_BY_DIVISIONID,
  GET_DIVISION,
  GET_DIVISIONS_FOR_FILTER,
} from "@/graphql/query/location.query";
import {
  GET_PARKINGLOTS,
  GET_PARKINGLOTS_CATEGORY,
} from "@/graphql/query/parkingLot.query";
import FileUploader from "@/utils/FileUploader";
import { useMutation, useQuery } from "@apollo/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const AddLot = () => {
  const { status, data: userData } = useSession();
  const clientId = userData?.user?.email;
  const [open, setOpen] = useState(false);
  const [_photo, setPhoto] = useState("");
  const [image, setimage] = useState(null);
  const [errors, seterrors] = useState("");
  const [categoryId, setcategoryId] = useState("");
  const [location, setlocation] = useState("");
  const [name, setname] = useState("");
  const [address, setaddress] = useState({
    area: "",
    _map: "",
  });
  const [avilableLot, setavailableLot] = useState([]);
  const [price, setprice] = useState([]);
  const [lotType, setLotType] = useState("");

  const [createParkingLot, { loading, data, error }] = useMutation(
    CREATE_PARKINGLOT,
    {
      variables: {
        name: name,
        clientId: clientId,
        categoryId: categoryId,
        address: address,
        image: _photo,
        price: price,
        lotType: lotType,
        avilableLot: avilableLot,
        location: location,
      },
      refetchQueries: [{ query: GET_PARKINGLOTS }],
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

  const handleCreate = async () => {
    let image = _photo;

    if (!clientId) {
      return alert("login first");
    }

    console.log({
      name,
      clientId,
      categoryId,
      address,
      image,
      price,
      lotType,
      avilableLot,
      location,
    });
    try {
      await createParkingLot(
        name,
        clientId,
        categoryId,
        address,
        image,
        price,
        lotType,
        avilableLot,
        location
      );
    } catch (error) {
      seterrors(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (error) {
      console.log("error: ");
    }
  }, [errors, error]);

  // console.log(clientId);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        className="bg-violet-800 text-white"
      >
        AddLot
      </Button>

      <ModalAll open={open} setOpen={setOpen} title={"Add ParkingLot"}>
        {errors ? <span> {errors} </span> : ""}
        <div className="flex flex-col gap-4 mt-3">
          <Input
            type="text"
            name=""
            placeholder="Name"
            id=""
            className=""
            value={name}
            onChange={(e) => setname(e.target.value)}
          />

          <GetCategoryInput
            categoryId={categoryId}
            setcategoryId={setcategoryId}
          />

          <GetLocationInput location={location} setlocation={setlocation} />

          <GetAddressInput address={address} setaddress={setaddress} />

          <select
            onChange={(e) => setLotType(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value={"casual"}>Casual</option>
            <option value={"longTerm"}>longTerm</option>
          </select>

          <GetAvailableLotInput
            avilableLot={avilableLot}
            setavailableLot={setavailableLot}
          />

          <GetPriceInput price={price} setprice={setprice} />

          <FileUploader
            image={image}
            setimage={setimage}
            handleOnFileUpload={handleOnFileUpload}
            photo={_photo}
          />

          <Button
            onClick={handleCreate}
            className="uppercase bg-violet-800 text-white"
            type="submit"
          >
            Create
          </Button>
        </div>
      </ModalAll>
    </>
  );
};

function GetCategoryInput({ categoryId, setcategoryId }) {
  const { data, loading, error } = useQuery(GET_PARKINGLOTS_CATEGORY) || {};
  if (error) return <div> {error?.message} </div>;
  return (
    <>
      <select
        className="border p-2 rounded-md"
        onChange={(e) => setcategoryId(e.target.value)}
        value={categoryId}
      >
        {loading ? (
          <div className="text-xs text-green-400">loading...</div>
        ) : (
          data?.getParkingLotCategories?.map((category) => (
            <option value={category?.id} key={category?.id}>
              {category?.name}
            </option>
          ))
        )}
      </select>
    </>
  );
}

function GetLocationInput({ location, setlocation }) {
  const { data, loading, error } = useQuery(GET_DIVISIONS_FOR_FILTER) || {};
  // const [_di, set_di] = useState("");
  // const {
  //   data: districts,
  //   loading: districtLoading,
  //   error: distError,
  // } = useQuery(GET_DISTRICT_BY_DIVISIONID, { variables: { name: _di } });

  //
  // useEffect(() => {
  //   if (distError) {
  //     console.log(_di, distError);
  //   }
  // }, [_di, distError]);
  return (
    <>
      <select
        className="border p-2 rounded-md"
        onChange={(e) => setlocation(e.target.value)}
        value={location}
      >
        {error ? (
          <div> {`error from division: ${error?.message}`} </div>
        ) : loading ? (
          <div className="text-xs text-green-400">loading...</div>
        ) : (
          data?.divisions?.map((division) => (
            <option value={division?.id} key={division?.id}>
              {division?.name}
            </option>
          ))
        )}
      </select>
      {/* <select className="border p-2 rounded-md">
        {distError ? (
          <div> {`error from division: ${error?.message}`} </div>
        ) : districtLoading ? (
          <div className="text-xs text-green-400">loading...</div>
        ) : (
          districts?.division?.map((district) => {
            console.log(district);
            return (
              <option value={district?.id} key={district?.id}>
                {district?.name}
              </option>
            );
          })
        )}
      </select> */}
    </>
  );
}

function GetAddressInput({ address, setaddress }) {
  return (
    <div className="flex gap-3">
      <div>
        <label htmlFor="">Area Name</label>
        <Input
          className=""
          type="text"
          name=""
          placeholder="Area"
          id=""
          value={address.area}
          onChange={(e) => setaddress({ ...address, area: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="">Map link</label>
        <Input
          className=""
          type="text"
          name=""
          placeholder="map"
          id=""
          value={address._map}
          onChange={(e) => setaddress({ ...address, _map: e.target.value })}
        />
      </div>
    </div>
  );
}

function GetAvailableLotInput({ avilableLot, setavailableLot }) {
  const [token, settoken] = useState("");
  const [bay, setbay] = useState(0);

  const formdata = { token, bay };

  const handleavilableLot = () => {
    if (token === "") {
      return alert("token are empty not allow");
    } else if (bay == 0) {
      return alert("bay are 0 not allow");
    }

    setavailableLot([...avilableLot, formdata]);
  };

  return (
    <>
      <label htmlFor="">Available Lot:</label>
      <div className="flex gap-2">
        <div>
          <label htmlFor="">Token Name</label>
          <Input
            className="w-full"
            type="text"
            name=""
            placeholder="Token"
            id=""
            value={token}
            onChange={(e) => settoken(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Bay No</label>
          <Input
            className="w-full"
            type="text"
            name=""
            placeholder="Bay"
            id=""
            value={bay}
            onChange={(e) => setbay(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleavilableLot}>
          Add{" "}
        </button>
      </div>
      <div className="flex gap-1 overflow-x-auto">
        {avilableLot &&
          avilableLot?.map((item, index) => (
            <div key={index} className="flex gap-2 text-xs text-green-600">
              <h4>{item?.token}</h4>
              <h4>{item?.bay}</h4>
            </div>
          ))}
      </div>
    </>
  );
}

function GetPriceInput({ price, setprice }) {
  const [cost, setcost] = useState(0);
  const [_time, set_time] = useState("");

  const formdata = { cost, _time };

  const handleprice = () => {
    if (cost == 0) {
      return alert("cost are empty not allow");
    } else if (_time == "") {
      return alert("_time are 0 not allow");
    }

    setprice([...price, formdata]);
  };

  return (
    <>
      <div className="flex gap-2">
        <div>
          <label htmlFor="">{`Cost (Based On Time)`}</label>
          <Input
            className="w-full"
            type="text"
            name=""
            placeholder="cost"
            id=""
            value={cost}
            onChange={(e) => setcost(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">{`Time (* Hour)`} </label>
          <Input
            className="w-full"
            type="text"
            name=""
            placeholder="_time"
            id=""
            value={_time}
            onChange={(e) => set_time(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleprice}>
          Add{" "}
        </button>
      </div>
      <div className="flex gap-1 overflow-x-auto">
        {price &&
          price?.map((item, index) => (
            <div key={index} className="flex gap-2 text-xs text-green-600">
              <h4>{item?.cost}</h4>
              <h4 className="text-zinc-700">{item?._time}</h4>
            </div>
          ))}
      </div>
    </>
  );
}

export default AddLot;
