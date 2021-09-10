const experience = [
    {
        id: 1,
        title: "Junior Web Developer",
        subtitle: "Brandcreative Inc.",
        time: "April 2020 - Present",
        description: ""
    },
    {
        id: 2,
        title: "Internship",
        subtitle: "Brandcreative Inc.",
        time: "December 2019 - April 2020",
        description: ""
    },

]

export default function handler(req, res) {
    res.status(200).json(experience)
}