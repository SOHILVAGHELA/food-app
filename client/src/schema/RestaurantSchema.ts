import { z } from "zod";

export const restaurantFromSchema = z.object({
  restaurantName: z
    .string()
    .nonempty({ message: "Restaurant Name is Required" }),
  city: z.string().nonempty({ message: "City is Required" }),
  country: z.string().nonempty({ message: "Country is Required" }),
  deliveryTime: z
    .number()
    .min(0, { message: "Delivery Time can not be  negative" }),
  cuisines: z.array(z.string()),
  imageFile: z
    .instanceof(File)
    .optional()
    .refine((file) => file?.size !== 0, "image is Required"),
});
export type RestaurantFromSchema = z.infer<typeof restaurantFromSchema>;
