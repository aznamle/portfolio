const projects = [

    {
        id: 1,
        icon: "CF",
        title: "Carbnforme",
        subtitle: "quis nostrud exercitation ullamco laboris nisi ut aliquip",
        description: "quis nostrud exercitation ullamco laboris nisi ut aliquip quis nostrud exercitation ullamco laboris nisi ut aliquip quis nostrud exercitation ullamco laboris nisi ut aliquip quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        url: "https://carbnforme.vercel.app/",
        github_url: "",
        technology: ["React", "Next.js", "Prismic", "TailwindCSS"],
        images: ["/projects/carbnforme/carbnforme.jpg", "/projects/carbnforme/carbnforme.jpg", "/projects/carbnforme/carbnforme.jpg", ]
    },
    {
        id: 2,
        title: "Brandcreative Inc.",
        icon: "BC",
        subtitle: "quis nostrud exercitation ullamco laboris nisi ut aliquip",
        description: "des2",
        url: "https://brandcreativeinc.com/",
        github_url: "",
        technology: ["React", "Next.js", "Prismic", "TailwindCSS"],
        images: ["", ]

    },
    {
        id: 3,
        title: "title3",
        icon: "P3",
        subtitle: "quis nostrud exercitation ullamco laboris nisi ut aliquip",
        description: "des3",
        url: "",
        github_url: "",
        technology: ["React", "TailwindCSS"],
        images: ["", ]

    },
    {
        id: 4,
        title: "title4",
        icon: "P4",
        subtitle: "quis nostrud exercitation ullamco laboris nisi ut aliquip",
        description: "des4",
        url: "",
        github_url: "",
        technology: ["React", "TailwindCSS"],
        images: ["", ]
    },
]

export default function handler(req, res) {
    res.status(200).json(projects)
}