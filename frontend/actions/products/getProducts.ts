import products from "@/mock/products";
import wait from "@/utils/wait";

type GetProductsParams = {
  page?: number;
  perPage?: number;
  search?: string;
};

export default async function getProducts({
  page = 1,
  perPage = products.length,
  search = "",
}: GetProductsParams = {}) {
  // محاكاة تأخير الشبكة
  await wait(3000);

  // فلترة المنتجات حسب كلمة البحث (باسم المنتج أو الوصف)
  let filtered = products;
  if (search) {
    const q = search.toLowerCase();
    filtered = products.filter((p) =>
      p.ProName.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // تطبيق التجزئة (Pagination)
  const offset = perPage * (page - 1);
  const paginated = filtered.slice(offset, offset + perPage);

  return paginated;
}
