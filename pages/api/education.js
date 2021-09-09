const education = [
    {
        id: 1,
        school: "Cal Poly Pomona",
        major: "Computer Information Systems, Applications Development",
        time: "2016-2021",
        description: ""
    },
    {
        id: 2,
        school: "Alta Loma High School",
        major: "",
        time: "2012-2016",
        description: ""
    },
]

export default function handler(req, res) {
    res.status(200).json(education)
}