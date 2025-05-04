import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableContent {
  column1: string[];
  column2: string[];
  column3: string[];
}

interface FeatureComparisonProps {
  tableContent: TableContent;
}

const FeatureComparison = ({ tableContent }: FeatureComparisonProps) => {
  return (
    <div className="max-w-[1120px] mx-auto py-20">
      <div
        className="w-full rounded-2xl p-10 relative overflow-hidden"
        style={{
          background: "radial-gradient(circle at center, #7033FE, #C9B3FF)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative z-10 space-y-10">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Feature Comparison
            </h1>
            <p className="text-white text-lg">
              Compare the differences and advantages of our solution
            </p>
          </div>
          <div className="bg-white/80 rounded-xl overflow-hidden">
            <div className="w-full flex flex-col">
              <div className="flex">
                <div className="w-1/5"></div>
                <div className="flex flex-1">
                  <div className="w-1/2 py-6 px-4 text-gray-700 text-center font-medium border-b border-white">
                    {tableContent.column2[0]}
                  </div>
                  <div className="w-1/2 py-6 px-4 text-indigo-700 font-medium text-center border-b border-white">
                    {tableContent.column3[0]}
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-1/5 border-r border-gray-200">
                  {tableContent.column1.slice(1).map((item, index) => (
                    <div key={index} className="h-20 flex items-center justify-center font-semibold p-4 text-center">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="w-2/5">
                  {tableContent.column2.slice(1).map((item, index) => (
                    <div key={index} className="h-20 flex items-center justify-center p-4 text-center border-b border-white">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="w-2/5">
                  {tableContent.column3.slice(1).map((item, index) => (
                    <div key={index} className="h-20 flex items-center justify-center p-4 text-center border-b border-white">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparison;
