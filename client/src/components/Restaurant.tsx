import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Loader2 } from "lucide-react";
import {
  restaurantFromSchema,
  type RestaurantFromSchema,
} from "@/schema/RestaurantSchema";

const Restaurant = () => {
  const [input, setInput] = useState<RestaurantFromSchema>({
    restaurantName: "",
    city: "",
    country: "",
    deliveryTime: 0,
    cuisines: [],
    imageFile: undefined,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Partial<RestaurantFromSchema>>({});
  const chnageEventHanler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: e.target.type === "number" ? Number(value) : value,
    });
  };
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log("data", input);
    const result = restaurantFromSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setError(fieldErrors as Partial<RestaurantFromSchema>);
    }
  };
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="">
        <div className="">
          <h1 className="font-extrabold text-2xl mb-5">Add Restaurant</h1>
          <form onSubmit={submitHandler}>
            <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0">
              <div>
                <Label className="p-1">Restaurant Name</Label>
                <Input
                  name="restaurantName"
                  type="text"
                  placeholder="Enter Restaurant Name"
                  value={input.restaurantName}
                  onChange={chnageEventHanler}
                />
                {error && (
                  <span className="text-sm text-red-600 font-medium">
                    {error.restaurantName}
                  </span>
                )}
              </div>
              <div>
                <Label className="p-1">City</Label>
                <Input
                  name="city"
                  type="text"
                  placeholder="Enter City"
                  value={input.city}
                  onChange={chnageEventHanler}
                />
                {error && (
                  <span className="text-sm text-red-600 font-medium">
                    {error.city}
                  </span>
                )}
              </div>
              <div>
                <Label className="p-1">Country</Label>
                <Input
                  name="country"
                  type="text"
                  value={input.country}
                  onChange={chnageEventHanler}
                  placeholder="Enter Country"
                />
                {error && (
                  <span className="text-sm text-red-600 font-medium">
                    {error.country}
                  </span>
                )}
              </div>
              <div>
                <Label className="p-1">Delivery Time</Label>
                <Input
                  name="deliveryTime"
                  type="number"
                  value={input.deliveryTime}
                  onChange={chnageEventHanler}
                  placeholder="Enter Delivery Time"
                />
                {error && (
                  <span className="text-sm text-red-600 font-medium">
                    {error.deliveryTime}
                  </span>
                )}
              </div>
              <div>
                <Label className="p-1">Cuisines</Label>
                <Input
                  name="cuisines"
                  type="text"
                  value={input.cuisines}
                  onChange={(e) =>
                    setInput({ ...input, cuisines: e.target.value.split(",") })
                  }
                  placeholder="e.g. Momos,Biryani"
                />
                {error && (
                  <span className="text-sm text-red-600 font-medium">
                    {error.cuisines}
                  </span>
                )}
              </div>
              <div>
                <Label className="p-1">Upload Restaurant Banner</Label>
                <Input
                  name="imageFile"
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      imageFile: e.target.files?.[0] || undefined,
                    })
                  }
                />
                {error && (
                  <span className="text-sm text-red-600 font-medium">
                    {error.imageFile?.name || "Imag File is Required"}
                  </span>
                )}
              </div>
            </div>
            <div className="my-5 w-fit">
              {loading ? (
                <Button
                  disabled
                  className=" bg-orange-400 hover:bg-orange-300 "
                >
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button className=" bg-orange-400 hover:bg-orange-300 ">
                  Add your Restaurant
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
