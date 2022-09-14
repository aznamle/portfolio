const education = [
    {
        id: 1,
        title: "California State Polytechnic University, Pomona",
        subtitle: "Computer Information Systems, Applications Development",
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
]

export default function handler(req, res) {
    res.status(200).json(education)
}