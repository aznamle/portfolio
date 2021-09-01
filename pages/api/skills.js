const skills = [
    {
        id: 1,
        title: "Javascript (ES6+)",
        icon: "",
    },
    {
        id: 2,
        title: "React",
        icon: "",
    },
    {
        id: 3,
        title: "Next.js",
        icon: "",
    },
    {
        id: 4,
        title: "Node.js",
        icon: "",
    },
    {
        id: 5,
        title: "WordPress",
        icon: "",
    },
    {
        id: 6,
        title: "GraphQL",
        icon: "",
    },
]

export default function handler(req, res) {
    res.status(200).json(skills)
}