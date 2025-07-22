import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CheckOutConfirmPage = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    country: "",
  });
  const changeEventHanlder = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const checkOutHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("inputs", input);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle>Review Your Order</DialogTitle>
          <DialogDescription className="text-xs">
            Double check your delivery detail ensure is fine when you are ready
            hit confirm button to finalize your order
          </DialogDescription>
          <form
            onSubmit={checkOutHandler}
            className="md:grid grid-cols-2 gap-5 space-y-1 md:space-y-0"
          >
            <div>
              <Label className="p-2">Name</Label>
              <Input
                type="text"
                placeholder="name"
                className=""
                name="name"
                value={input.name}
                onChange={changeEventHanlder}
              />
            </div>
            <div>
              <Label className="p-2">email</Label>
              <Input
                type="text"
                placeholder="email"
                className=""
                name="email"
                value={input.email}
                onChange={changeEventHanlder}
              />
            </div>
            <div>
              <Label className="p-2">contact</Label>
              <Input
                type="text"
                placeholder="contact"
                className=""
                name="contact"
                value={input.contact}
                onChange={changeEventHanlder}
              />
            </div>
            <div>
              <Label className="p-2">city</Label>
              <Input
                type="text"
                placeholder="city"
                className=""
                name="city"
                value={input.city}
                onChange={changeEventHanlder}
              />
            </div>
            <div>
              <Label className="p-2">address</Label>
              <Input
                type="text"
                placeholder="address"
                className=""
                name="address"
                value={input.address}
                onChange={changeEventHanlder}
              />
            </div>

            <DialogFooter className="col-span-2 pt-5">
              <Button className="bg-orange-400 hover:bg-orange-300">
                Continue To Payment
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CheckOutConfirmPage;
