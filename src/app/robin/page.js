import Image from "next/image";
import Link from "next/link";

const districtsData = [
    {
        district: "Dhaka",
        image: "https://img.freepik.com/free-vector/dhaka-bangladesh-line-skyline-with-panorama-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-banner-website_596401-584.jpg?w=826&t=st=1708607049~exp=1708607649~hmac=687859fe393eb577ba63216d81adbbe5d1fc44b59da3cc47e1cd4fef6426a0ed",
        totalParkingLots: 100,
        totalAvailableLots: 75,
    },
    {
        district: "Chittagong",
        image: "https://img.freepik.com/free-vector/dhaka-bangladesh-line-skyline-with-panorama-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-banner-website_596401-584.jpg?w=826&t=st=1708607049~exp=1708607649~hmac=687859fe393eb577ba63216d81adbbe5d1fc44b59da3cc47e1cd4fef6426a0ed",
        totalParkingLots: 80,
        totalAvailableLots: 60,
    },
];

const Robin = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">Bangladesh Parking Districts</h1>
            <div className="container mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {districtsData.map((district, index) => (
                    <Link key={index} href={`/robin/${district?.district}`}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src={district?.image}
                                alt={district?.district}
                                width={300}
                                height={200}
                                layout="responsive"
                                objectFit="cover"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold">{district.district}</h2>
                                <p className="text-gray-600">
                                    Total Parking Lots: {district.totalParkingLots}
                                </p>
                                <p className="text-gray-600">
                                    Total Available Lots: {district.totalAvailableLots}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Robin;