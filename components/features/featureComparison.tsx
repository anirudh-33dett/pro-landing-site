import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FeatureComparison = () => {
  return (
    <div
      className="w-full p-25"
      style={{
        background: "radial-gradient(circle at center, #7033FE, #C9B3FF )",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="relative z-10 gap-6 justify-between flex flex-col">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl pb-10 text-white">
            Lorem ipsum dolor sit amet consectetur. Integer augue.
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur. Arcu fames nunc pretium
            viverra turpis praesent. Magnis donec dui eu sit viverra vestibulum
            eu. Dignissim suspendisse mattis sagittis iaculis in in facilisi
            turpis.
          </p>
        </div>
        <div className="w-[1050px] h-[590px] bg-[#FFFFFFCC] rounded-lg overflow-hidden justify-center items-center">
          <div className="w-full h-full rounded-lg flex flex-col mt-3">
            <div className="flex">
              <div className="w-1/5 py-4"></div>
              <div className="flex flex-row justify-start w-4/5 mr-3">
                <div className="w-1/2 py-6 px-4 text-gray-700 text-center font-medium rounded-tl-lg border-l-3 border-t-3 border-r-3 border-white">
                  Manual Annotation
                </div>
                <div className="w-1/2 py-6 px-4 text-indigo-700 font-medium text-center rounded-tr-lg border-t-3 border-r-3 border-l-1 border-white">
                  Automated Annotation (Text Prompting)
                </div>
              </div>
            </div>
            <div className="flex flex-row divide-x divide-gray-200 ">
              <div className="w-1/5 flex flex-col">
                <div className="h-[80px] font-semibold p-4 flex items-center justify-center">
                  Speed
                </div>
                <div className="h-[80px] font-semibold p-4 flex items-center justify-center">
                  Ease of Use
                </div>
                <div className="h-[80px] font-semibold p-4 flex items-center justify-center">
                  Consistency
                </div>
                <div className="h-[80px] font-semibold p-4 flex items-center justify-center">
                  Cost
                </div>
                <div className="h-[80px] font-semibold p-4 flex items-center justify-center">
                  Scalability
                </div>
                <div className="h-[80px] font-semibold p-4 flex items-center justify-center">
                  Accuracy
                </div>
              </div>
              <div className="w-2/5 flex flex-col border-3 border-white rounded-bl-lg">
                <div className="h-[80px] p-4 text-center flex items-center justify-center border-b-3 border-white">
                  Slow; time-intensive
                </div>
                <div className="h-[80px] p-4 text-center flex items-center justify-center border-b-3 border-white">
                  Requires skilled human experts
                </div>
                <div className="h-[80px] p-4 text-center flex items-center justify-center border-b-3 border-white">
                  Variable; prone to human error
                </div>
                <div className="h-[80px] p-4 text-center flex items-center justify-center border-b-3 border-white">
                  High; requires large specialized teams
                </div>
                <div className="h-[80px] p-4 text-center flex items-center justify-center border-b-3 border-white">
                  Limited; bottleneck with larger datasets
                </div>
                <div className="h-[80px] p-4 text-center flex items-center justify-center rounded-bl-lg">
                  High; requires large specialized teams
                </div>
              </div>
              <div className="w-2/5 flex flex-col border-b-3 border-r-3 border-t-3 border-white rounded-br-lg mr-3">
                <div className="h-[80px] p-4 text-center flex items-center justify-center border-b-3 border-white">
                  Upto <span className="font-semibold">700x faster</span> than
                  manual annotations
                </div>
                <div className="h-[80px] p-4 text-center flex items-center justify-center border-b-3 border-white">
                  <span className="font-semibold">Intuitive</span>, uses natural
                  language prompts
                </div>
                <div className="h-[80px] p-4 text-center flex items-center justify-center border-b-3 border-white">
                  <span className="font-semibold">High</span>; AI ensures
                  consistent annotations
                </div>
                <div className="h-[80px] p-4 text-center flex items-center justify-center border-b-3 border-white">
                  <span className="font-semibold">Lower</span> operational costs
                </div>
                <div className="h-[80px] p-4 text-center flex items-center justify-center border-b-3 border-white">
                  <span className="font-semibold">Scalable</span> for enterprise
                  applications
                </div>
                <div className="h-[80px] p-4 text-center flex items-center justify-center border-white rounded-br-lg">
                  <span className="font-semibold">High</span> with domain
                  experts
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
