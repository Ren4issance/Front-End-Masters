import Editor from "@/components/Editor";
import { analyze } from "@/util/ai";
import { getUserByClerkID } from "@/util/auth";
import { prisma } from "@/util/db";

const getEntry = async (id) => {
  const user = await getUserByClerkID();
  const entries = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
  });

  return entries;
};

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id);
  const analysisData = [
    { name: "Subject", value: "" },
    { name: "Summary", value: "" },
    { name: "Mood", value: "" },
    { name: "Negative", value: false },
  ];
  return (
    <div className="h-full w-full grid grid-cols-3">
      <div className="col-span-2">
        <Editor entry={entry} />
      </div>
      <div className="border-l border-black/10">
        <div className="bg-blue-300 px-6 py-10">
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((item) => (
              <li
                key={item.name}
                className="px-2 py-4 flex ites-center justify-between border-b border-t border-black/10"
              >
                <span className="text-lg font-semibold">{item.name}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
