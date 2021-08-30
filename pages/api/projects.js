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
]

export default function handler(req, res) {
    res.status(200).json(projects)
}