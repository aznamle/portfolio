const projects = [

    {
        id: 1,
        icon: "CF",
        title: "CarbnForme",
        subtitle: "Front-end website to promote CarbnForme designed products.",
        description: "CarbnForme is about creating ideas from the foundation and fundamentals that they have amassed throughout the years of combined experience makes us, and others, believe in what we do. Passion and pride in design are what is at the heart of CARBN FORME.",
        url: "https://carbnforme.vercel.app/",
        github_url: "",
        technology: ["React", "Next.js", "Prismic", "TailwindCSS"],
        images: ["/projects/carbnforme/carbnforme1.png", "/projects/carbnforme/carbnforme2.png", "/projects/carbnforme/carbnforme3.png", "/projects/carbnforme/carbnforme4.png", ]
    },
    {
        id: 2,
        title: "Brandcreative Inc.",
        icon: "BC",
        subtitle: "Brandcreative Inc. front-end designed to inform clients about the marketing agency.",
        description: "Brandcreative Inc. is a marketing agency with diverse range of skills needed to build a brand's voice beyond promotion. The team is built of strategists, designers, and digital sociologists. In harnessing the power and speed of technology, their goal is to exceed the needs of clients in situations that require creative solutions.",
        url: "https://brandcreativeinc.com/",
        github_url: "",
        technology: ["React", "Next.js", "Prismic", "TailwindCSS"],
        images: ["", ]

    },
    {
        id: 3,
        title: "Cryptoverse",
        icon: "CV",
        subtitle: "Dashboard displaying information about cryptocurrencies and the market",
        description: "des3",
        url: "",
        github_url: "",
        technology: ["React", "Redux Toolkit", "Chart.js", "Antd", ],
        images: ["", ]

    },
    {
        id: 4,
        title: "Crown Store",
        icon: "P4",
        subtitle: "E-commerce app focusing on clothing apparel.",
        description: "",
        url: "",
        github_url: "",
        technology: ["React", "Redux", "Firebase", "Styled Components", ],
        images: ["", ]
    },
]

export default function handler(req, res) {
    res.status(200).json(projects)
}