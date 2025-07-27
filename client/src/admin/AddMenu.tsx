import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Loader2, Plus } from "lucide-react";
import { useState } from "react";
import Pizza from "../assets/1.jpg";
import EditMenu from "./EditMenu";

const AddMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="flex justify-between">
        <h1 className="font-bold md:font-extrabold text-lg md:text-2xl">
          Available Menu
        </h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <Button className="bg-orange-400 hover:bg-orange-300">
              <Plus />
              Add Menu
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a New Menu</DialogTitle>
              <DialogDescription>
                {" "}
                Create a menu that will make your restaurant stand out
              </DialogDescription>
            </DialogHeader>
            <form action="">
              <div className="mb-2">
                <Label className="p-1">Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="focus-visible:ring-0"
                />
              </div>
              <div className="mb-2">
                <Label className="p-1">Description</Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="Enter Description"
                  className="focus-visible:ring-0"
                />
              </div>
              <div className="mb-2">
                <Label className="p-1">Price in (Rupees)</Label>
                <Input
                  type="text"
                  name="price"
                  placeholder="Enter price"
                  className="focus-visible:ring-0"
                />
              </div>
              <div className="mb-2">
                <Label className="p-1">Upload Menu Image</Label>
                <Input
                  type="file"
                  name="image"
                  className="focus-visible:ring-0"
                />
              </div>
              <DialogFooter className="p-1">
                {loading ? (
                  <Button
                    disabled
                    className="bg-orange-400 hover:bg-orange-300 w-full"
                  >
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button className="bg-orange-400 hover:bg-orange-300 w-full">
                    Submit
                  </Button>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 border rounded-lg">
          <img
            src={Pizza}
            alt="image"
            className="md:h-24 md:w-24 h-16 w-full object-cover rounded-lg"
          />
          <div className="">
            <h1 className="text-lg  font-semibold text-gray-800">Biryani</h1>
            <p className="text-sm  text-gray-600 pt-1">
              Lorem ipsum dolor sit amet.
            </p>
            <h2 className="text-md font-semibold pt-1">
              Price: <span className="text-orange-400">80</span>{" "}
            </h2>
          </div>
          <Button className="bg-orange-400 hover:bg-orange-300 mt-2">
            Edit
          </Button>
        </div>
      </div>
      <EditMenu />
    </div>
  );
};

export default AddMenu;
