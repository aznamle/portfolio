const projects = [

    {
        id: 1,
        title: "Carbnforme",
        subtitle: "quis nostrud exercitation ullamco laboris nisi ut aliquip",
        description: "Carbnforme",
        technology: ["NextJS", "Prismic", "TailwindCSS"],
        images: ["/projects/carbnforme/carbnforme.jpg", "/projects/carbnforme/carbnforme2.jpg", "/projects/carbnforme/carbnforme3.jpg"]
    },
    {
        id: 2,
        title: "title2",
        subtitle: "quis nostrud exercitation ullamco laboris nisi ut aliquip",
        description: "des2",
        technology: ["NextJS", "Prismic", "TailwindCSS"],
        images: ["", ]

    },
    {
        id: 3,
        title: "title3",
        subtitle: "quis nostrud exercitation ullamco laboris nisi ut aliquip",
        description: "des3",
        technology: ["NextJS", "Prismic", "TailwindCSS"],
        images: ["", ]

    },
    {
        id: 3,
        title: "title3",
        subtitle: "quis nostrud exercitation ullamco laboris nisi ut aliquip",
        description: "des3",
        technology: ["NextJS", "Prismic", "TailwindCSS"],
        images: ["", ]
    },
]

export default function handler(req, res) {
    res.status(200).json(projects)
}