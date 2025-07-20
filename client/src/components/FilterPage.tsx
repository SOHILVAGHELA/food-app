import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

export type filterOptions = {
  id: string;
  label: string;
};
const filterOptions: filterOptions[] = [
  {
    id: "burger",
    label: "Burger",
  },
  {
    id: "thali",
    label: "Thali",
  },
  {
    id: "biryani",
    label: "Biryani",
  },
];
const FilterPage = () => {
  const appliedFilterHanler = (value: string) => {
    console.log("filterd", value);
  };
  return (
    <>
      <div className="md:w-72">
        <div className="flex justify-between items-center p-2">
          <h1 className="font-medium text-lg">Filter by Cuisines</h1>
          <Button variant={"link"}>Reset</Button>
        </div>
        {filterOptions?.map((option) => (
          <div className=" flex items-center space-x-2 my-3" key={option.id}>
            <Checkbox
              className="peer"
              id={option.id}
              onClick={() => appliedFilterHanler(option?.label)}
            ></Checkbox>
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
              {option?.label}
            </Label>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterPage;
