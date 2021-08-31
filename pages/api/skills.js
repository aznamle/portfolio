const skills = [

    {
        id: 1,
        title: "ReactJS",
        description: "des1"
    },
    {
        id: 2,
        title: "NextJS",
        description: "des2"
    },
]

export default function handler(req, res) {
    res.status(200).json(skills)
}