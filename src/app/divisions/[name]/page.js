"use client"

const District = ({ params }) => {
    console.log(params);
    return <div className="pt-20 min-h-[60vh]">{params?.name}</div>;
};

export default District;