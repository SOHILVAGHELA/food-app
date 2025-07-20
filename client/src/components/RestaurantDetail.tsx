import { Timer } from "lucide-react";
import Pizza from "../assets/1.jpg";
import { Badge } from "./ui/badge";
import AvailableMenu from "./AvailableMenu";
const RestaurantDetail = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto my-10">
        <div className="w-full">
          <div className=" relative h-32  w-full md:h-64 lg:h-72">
            <img
              src={Pizza}
              className="object-cover w-full h-full rounded-lg"
              alt=""
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="my-5">
              <h1 className="font-medium text-2xl"> Tandoori Tadka</h1>
              <div className="flex gap-2 my-5">
                {["Momos", "Biryani"].map((cuisine: string, index: number) => (
                  <Badge key={index}>{cuisine}</Badge>
                ))}
              </div>
              <div className="flex flex-col md:flex-row gap-2 my-5">
                <div className="flex items-center gap-2">
                  <Timer></Timer>
                  <h1 className="flex items-center gap-2 font-medium">
                    Delivery Time:{" "}
                    <span className="text-orange-300">35 mins</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <AvailableMenu />
        </div>
      </div>
    </>
  );
};

export default RestaurantDetail;
