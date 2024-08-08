import CountUp from "react-countup";
import { Container } from "@/components/ui/Container";

const progress = [
  {
    metric: "Total Downloads",
    value: 100000,
    postfix: "+",
  },
  {
    metric: "Staff",
    value: 20,
    postfix: "+",
  },
  {
    metric: "Years",
    value: 2,
    postfix: "+",
  },
];

export default function Progress() {
  return (
    <div className="py-12 bg-gray-800">
      <div className="rounded-md py-8 px-4 lg:px-32 flex gap-4 sm:flex-row flex-col justify-between">
        {progress.map((progress, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <Container>
                <h2 className="text-yellow-300 text-4xl font-bold flex flex-row">
                  <CountUp
                    start={0}
                    end={progress.value}
                    duration={4}
                    separator=","
                    className="text-red-500 text-4xl font-bold"
                  />
                  {progress.postfix}
                </h2>
              </Container>
              <p className="text-white text-base text-center">{progress.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}