import React from 'react';

interface ExperienceItem {
  id: number;
  title: string;
  subtitle: string;
  time: string;
  location: string;
  description?: string;
}

const experience: ExperienceItem[] = [
  {
    id: 1,
    title: "Front End Developer",
    subtitle: "Brandcreative Inc.",
    time: "April 2019 - November 2021",
    location: "Ontario, California",
    description: ""
  },
  {
    id: 2,
    title: "Internship",
    subtitle: "Brandcreative Inc.",
    time: "December 2018 - April 2019",
    location: "Ontario, California",
    description: ""
  },
];

const education: ExperienceItem[] = [
  {
    id: 1,
    title: "California State Polytechnic University, Pomona",
    subtitle: "B.S. Computer Information Systems, App Development",
    time: "2016-2021",
    location: "Pomona, California",
    description: ""
  },
  {
    id: 2,
    title: "Alta Loma High School",
    subtitle: "",
    time: "2012-2016",
    location: "Alta Loma, California",
    description: ""
  },
];

interface ExperienceProps {
  props: ExperienceItem[];
  head: string;
}

const Experience: React.FC<ExperienceProps> = ({ props, head }) => {
  const itemslen = props.length;

  return (
    <div className="md:w-1/2">
      <h1 className="text-gray-900 text-3xl font-bold">{head}</h1>
      <div className="py-6">
        {props.map((item, i) => (
          <div key={item.id} className="flex relative pb-10">
            <div className="h-full w-3 mt-2  absolute inset-0 flex items-center justify-center">
              <div className={`h-full ${itemslen === i + 1 ? 'w-0' : 'w-1'} bg-gray-200 pointer-events-none`}></div>
            </div>
            <div className="flex-shrink-0 w-3 h-3 rounded-full mt-2 inline-flex items-center justify-center bg-gray-400 text-white relative z-10 title-font font-medium text-sm">
            </div>
            <div className="flex-grow pl-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h2>
              <h2 className="text-lg text-gray-800">
                {item.subtitle}
              </h2>
              <p className="leading-relaxed text-gray-600">
                {item.time}
              </p>
              <p className="leading-relaxed text-gray-600">
                {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TimeLine: React.FC = () => {
  return (
    <div className="md:flex max-w-5xl mx-auto py-6 px-4 md:px-0">
      <Experience props={experience} head="Experience" />
      <Experience props={education} head="Education" />
    </div>
  );
};

export default TimeLine;
