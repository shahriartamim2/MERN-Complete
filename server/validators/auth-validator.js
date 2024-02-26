const { z } = require("zod");



const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be of 3 characters" })
    .max(255,{message:"Name must not be more than 255 characters"}),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must be at least 5 characters" })
    .max(255, { message: "Email must not exceed 255 characters" }),
  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must not exceed 15 digits" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(255, { message: "Password must not exceed 255 characters" }),
});


module.exports = signupSchema;