import {
    FaNodeJs,
    FaReact,
    FaJs,
    FaWordpressSimple,
  } from "react-icons/fa";

import {
    SiNextDotJs,
} from "react-icons/si";

import {
    GrGraphQl,
} from "react-icons/gr";
  
const skills = [
    {
        id: 1,
        title: "Javascript",
        icon: <FaJs fontSize='30px' />,
    },
    {
        id: 2,
        title: "React",
        icon: <FaReact fontSize='30px' />,
    },
    {
        id: 3,
        title: "Next.js",
        icon: <SiNextDotJs fontSize='30px' />,
    },
    {
        id: 4,
        title: "Node.js",
        icon: <FaNodeJs fontSize='30px' />,
    },
    {
        id: 5,
        title: "WordPress",
        icon: <FaWordpressSimple fontSize='30px' />,
    },
    {
        id: 6,
        title: "GraphQL",
        icon: <GrGraphQl fontSize='30px' />,
    },
]

export default function handler(req, res) {
    res.status(200).json(skills)
}