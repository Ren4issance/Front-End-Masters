// "use server";

// import { revalidatePath } from "next/cache";

// // // export const update = (paths = []) => paths.forEach((p) => revalidatePath(p));
// // export const update = (paths = []) =>
// //   paths.forEach((p) => revalidatePath(p, "page"));
// export const update = (paths: string[] = []) => {
//   paths.forEach((p: string) => {
//     console.log(`Revalidating path: ${p}`); // Log before calling revalidatePath
//     revalidatePath(p)
//       .then(() => {
//         console.log(`Successfully revalidated path: ${p}`); // Log on success
//       })
//       .catch((err) => {
//         console.error(`Failed to revalidate path: ${p}`, err); // Log on error
//       });
//   });
// };
