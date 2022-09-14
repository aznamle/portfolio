const experience = [
    {
        id: 1,
        title: "Front End Developer",
        subtitle: "Brandcreative Inc.",
        time: "April 2019 - November 2021",
        location: "Ontario, California",
        description: ""
    },
    {
        id: 2,
        title: "Front End Developer Internship",
        subtitle: "Brandcreative Inc.",
        time: "December 2018 - April 2019",
        location: "Ontario, California",
        description: ""
    },

]

export default function handler(req, res) {
    res.status(200).json(experience)
}