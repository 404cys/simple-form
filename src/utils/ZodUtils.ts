 import { z } from "zod";

 export const nonEmptyString = z
  .string()
  .min(1, "This field cannot be empty");

 export const maxLengthString = (maxLength: number) =>
  z
    .string()
    .max(maxLength, `The input is too long, maximum ${maxLength} characters`);

 export const emailString = z
  .string()
  .email("Please enter a valid email address");

 export const numberString = z
  .string()
  .regex(/^[0-9]+$/, "Please enter a valid number");

 export const dateString = z
  .string()
  .refine((val) => !isNaN(Date.parse(val)), {
    message: "Please enter a valid date",
  });

 export const integerString = z
  .string()
  .refine((val) => Number.isInteger(Number(val)), {
    message: "Please enter a valid integer",
  });

