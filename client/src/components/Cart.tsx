import { Minus, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const Cart = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto my-10">
      <div className="flex justify-end">
        <Button variant="link" className="hover:no-underline">
          Clear All
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Items</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="text-center">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Avatar>
                <AvatarImage src="" alt="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>Tandoori</TableCell>
            <TableCell>$80</TableCell>
            <TableCell>
              <div className="w-fit flex items-center rounded-full border border-gray-100 dark:border-gray-800">
                <Button
                  size={"icon"}
                  variant={"outline"}
                  className="rounded-full bg-gray-200"
                >
                  <Minus />
                </Button>
                <Button
                  size={"icon"}
                  variant={"outline"}
                  disabled
                  className="font-bold border-none"
                >
                  1
                </Button>
                <Button
                  size={"icon"}
                  variant={"outline"}
                  className="rounded-full bg-orange-400 hover:bg-orange-300"
                >
                  {" "}
                  <Plus />
                </Button>
              </div>
            </TableCell>
            <TableCell>160</TableCell>
            <TableCell className="text-center">
              <Button className="bg-orange-400 hover:bg-orange-300">
                Remove
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className="text-center">$80</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="flex justify-end my-5">
        <Button className="bg-orange-400 hover:bg-orange-300">
          Proceed To Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
