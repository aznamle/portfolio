const about = [

    {
        id: 1,
        name: "name",
        description: "desLOL"
    },
]

export default function handler(req, res) {
    res.status(200).json(about)
}