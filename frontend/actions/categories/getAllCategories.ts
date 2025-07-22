import categories from "@/mock/cetegories";
import wait from "@/utils/wait";

export default async function getAllCategories() {
  await wait(3000);
  return categories;
}
