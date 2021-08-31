const projects = [

    {
        id: 1,
        title: "title1",
        description: "des1"
    },
    {
        id: 2,
        title: "title2",
        description: "des2"
    },
    {
        id: 3,
        title: "title3",
        description: "des3"
    },
    {
        id: 3,
        title: "title3",
        description: "des3"
    },
]

export default function handler(req, res) {
    res.status(200).json(projects)
}