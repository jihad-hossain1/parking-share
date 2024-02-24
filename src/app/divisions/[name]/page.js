"use client"

const District = ({ params }) => {
    console.log(params);
    return <div className="pt-20">{params?.name}</div>;
};

export default District;