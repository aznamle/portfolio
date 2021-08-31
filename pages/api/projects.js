const projects = [

    {
        id: 1,
        title: "title1",
        subtitle: "subtitle1",
        description: "des1",
        technology: ["NextJS", "Prismic", "TailwindCSS"],
    },
    {
        id: 2,
        title: "title2",
        subtitle: "subtitle2",
        description: "des2",
        technology: ["NextJS", "Prismic", "TailwindCSS"],
    },
    {
        id: 3,
        title: "title3",
        subtitle: "subtitle3",
        description: "des3",
        technology: ["NextJS", "Prismic", "TailwindCSS"],
    },
    {
        id: 3,
        title: "title3",
        subtitle: "subtitle4",
        description: "des3",
        technology: ["NextJS", "Prismic", "TailwindCSS"],
    },
]

export default function handler(req, res) {
    res.status(200).json(projects)
}