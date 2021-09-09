const experience = [
    {
        id: 1,
        role: "Junior Web Developer",
        company: "Brandcreative Inc.",
        time: "April 2020 - Present",
        description: ""
    },
    {
        id: 2,
        role: "Internship",
        company: "Brandcreative Inc.",
        time: "December 2019 - April 2020",
        description: ""
    },

]

export default function handler(req, res) {
    res.status(200).json(experience)
}