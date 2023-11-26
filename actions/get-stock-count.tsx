import prismadb from "@/lib/prismadb";

export const getStockCount = async (storeId: string) => {
  const salesCount = await prisma?.product.count({
    where: {
      storeId,
      isArchived: false,
    },
  });
  return salesCount;
};
