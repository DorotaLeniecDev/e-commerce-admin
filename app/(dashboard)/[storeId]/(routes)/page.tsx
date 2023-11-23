import prismadb from "@/lib/prismadb";
import { Wrench } from "lucide-react";
import Link from "next/link";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex gap-4"></div>
      <Wrench className="h-10 w-10" />
      In construction...
      <span className="block">
        Check other{" "}
        <Link className="font-bold" href={`/${params.storeId}/billboards`}>
          pages
        </Link>
      </span>
    </div>
  );
};

export default DashboardPage;
