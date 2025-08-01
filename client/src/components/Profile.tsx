import {
  Loader2,
  LocateIcon,
  Mail,
  MapPin,
  MapPinHouse,
  Plus,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRef, useState, type FormEvent } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullname: "",
    email: "",

    address: "",
    city: "",
    country: "",
    profilePicture: "",
  });
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [selecteProfilePicture, setSelectedProfilePicture] =
    useState<string>("");
  const loading = false;
  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event", e);

    const file = e.target.files?.[0];
    console.log("file", file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setSelectedProfilePicture(result);
        setProfileData((profileData) => ({
          ...profileData,
          profilePicture: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  const updateProfileHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("profiledata", profileData);
  };
  return (
    <>
      <form onSubmit={updateProfileHandler} className="max-w-7xl mx-auto my-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="relative md:w-28 md:h-28 w-20 h-20 group">
              <AvatarImage src={selecteProfilePicture}></AvatarImage>
              <AvatarFallback>SV</AvatarFallback>
              <input
                ref={imageRef}
                type="file"
                accept="image/*"
                onChange={fileChangeHandler}
                className="hidden"
              />
              <div
                onClick={() => imageRef.current?.click()}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer"
              >
                <Plus className="text-white w-8 h-8" />
              </div>
            </Avatar>
            <Input
              type="text"
              name="fullname"
              value={profileData.fullname}
              onChange={changeHandler}
              className="font-bold  text-2xl  outline-none  border-none focus-visible:ring-transparent"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-4 md:gap-2 gap-3  my-10">
          <div className="flex items-center bg-gray-200 gap-4 rounded-sm p-2">
            <Mail className="text-gray-500" />
            <div className="w-full">
              <Label>Email</Label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={changeHandler}
                className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
              />
            </div>
          </div>
          <div className="flex items-center bg-gray-200 gap-4 rounded-sm p-2">
            <LocateIcon className="text-gray-500" />
            <div className="w-full">
              <Label>Address</Label>
              <input
                type="text"
                name="address"
                value={profileData.address}
                onChange={changeHandler}
                className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
              />
            </div>
          </div>
          <div className="flex items-center bg-gray-200 gap-4 rounded-sm p-2">
            <MapPin className="text-gray-500" />
            <div className="w-full">
              <Label>City</Label>
              <input
                type="text"
                name="city"
                value={profileData.city}
                onChange={changeHandler}
                className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
              />
            </div>
          </div>
          <div className="flex items-center bg-gray-200 gap-4 rounded-sm p-2">
            <MapPinHouse className="text-gray-500" />
            <div className="w-full">
              <Label>Country</Label>
              <input
                type="text"
                name="country"
                value={profileData.country}
                onChange={changeHandler}
                className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
              />
            </div>
          </div>
        </div>
        <div className=" ">
          {loading ? (
            <Button disabled className="bg-orange-400 hover:bg-orange-300">
              <Loader2 className="mr-2 h-4 w-4  animate-spin" /> Please wait
            </Button>
          ) : (
            <Button className="w-full bg-orange-400 hover:bg-orange-300">
              Update
            </Button>
          )}
        </div>
      </form>
    </>
  );
};

export default Profile;
