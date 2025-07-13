import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import Pizza from "../assets/hero_pizza.png";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row max-w-7xl md:p-10  rounded-lg items-center justify-center m-4 gap-20">
      <div className="flex  flex-col  gap-20 md:w-[40%]">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">
            Order food any time & any where
          </h1>
          <p className="text-gray-500">
            Hey! Our Delicious food is waiting for you, we are always near to
            you
          </p>
        </div>
        <div className="relative flex items-center gap-2 w-full">
          <Input
            type="text"
            value={searchText}
            className="pl-10 shadow-2xl"
            placeholder="Search  restaurant by  name, city & country"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Search className="absolute inset-y-2 left-2 text-gray-500"></Search>
          <Button
            onClick={() => navigate(`/search/${searchText}`)}
            className="bg-orange-400 hover:bg-orange-300"
          >
            Search
          </Button>
        </div>
      </div>
      <div className="flex">
        <img
          src={Pizza}
          className="object-cover  w-full max-h-[500px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
