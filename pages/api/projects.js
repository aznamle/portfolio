const projects = [

    {
        id: 1,
        title: "Carbnforme",
        subtitle: "quis nostrud exercitation ullamco laboris nisi ut aliquip",
        description: "Carbnforme",
        technology: ["Next.js", "Prismic", "TailwindCSS"],
        images: ["/projects/carbnforme/carbnforme.jpg", "/projects/carbnforme/carbnforme.jpg", "/projects/carbnforme/carbnforme.jpg", ]
    },
    {
        id: 2,
        title: "Brandcreative Inc.",
        subtitle: "quis nostrud exercitation ullamco laboris nisi ut aliquip",
        description: "des2",
        technology: ["Next.js", "Prismic", "TailwindCSS"],
        images: ["", ]

    },
    {
        id: 3,
        title: "title3",
        subtitle: "quis nostrud exercitation ullamco laboris nisi ut aliquip",
        description: "des3",
        technology: ["React", "TailwindCSS"],
        images: ["", ]

    },
    {
        id: 4,
        title: "title4",
        subtitle: "quis nostrud exercitation ullamco laboris nisi ut aliquip",
        description: "des4",
        technology: ["React", "TailwindCSS"],
        images: ["", ]
    },
]

export default function handler(req, res) {
    res.status(200).json(projects)
}