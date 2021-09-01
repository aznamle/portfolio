const projects = [

    {
        id: 1,
        title: "title1",
        subtitle: "quis nostrud exercitation ullamco laboris nisi ut aliquip",
        description: "des1",
        technology: ["NextJS", "Prismic", "TailwindCSS"],
    },
    {
        id: 2,
        title: "title2",
        subtitle: "quis nostrud exercitation ullamco laboris nisi ut aliquip",
        description: "des2",
        technology: ["NextJS", "Prismic", "TailwindCSS"],
    },
    {
        id: 3,
        title: "title3",
        subtitle: "quis nostrud exercitation ullamco laboris nisi ut aliquip",
        description: "des3",
        technology: ["NextJS", "Prismic", "TailwindCSS"],
    },
    {
        id: 3,
        title: "title3",
        subtitle: "quis nostrud exercitation ullamco laboris nisi ut aliquip",
        description: "des3",
        technology: ["NextJS", "Prismic", "TailwindCSS"],
    },
]

export default function handler(req, res) {
    res.status(200).json(projects)
}