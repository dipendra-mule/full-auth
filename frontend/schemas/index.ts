import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string()
});

// export const registerSchema = z.object({
//   name: z.string(),
//   email: z.email(),
//   password: z.string()
// });

