import HistoryChart from "@/components/HistoryChart";
import { getUserByClerkID } from "@/util/auth";
import { prisma } from "@/util/db";

const getData = async () => {
  const user = await getUserByClerkID();
  const analyses = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  const sum = analyses.reduce(
    (all, current) => all + current.sentimentScore,
    0
  );
  const avg = Math.round(sum / analyses.length);
  return { analyses, avg };
};

const History = async () => {
  const { avg, analyses } = await getData();
  // console.log(analyses);

  return (
    <div className="w-full h-full">
      <div>{`Avg. Stentiment ${avg}`}</div>
      <div className="w-full h-full">
        <HistoryChart data={analyses} />
      </div>
    </div>
  );
};

export default History;
