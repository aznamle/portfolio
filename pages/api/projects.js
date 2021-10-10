const projects = [

    {
        id: 1,
        icon: "CF",
        title: "CarbnForme",
        subtitle: "Front-end website to promote CarbnForme designed products.",
        description: "CarbnForme is about creating ideas from the foundation and fundamentals that we have amassed throughout the years of combined experience makes us, and others, believe in what we do. Passion and pride in design are what is at the heart of CARBN FORME.",
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
        images: ["/projects/brandcreative/bc1.png", "/projects/brandcreative/bc2.png", "/projects/brandcreative/bc3.png", "/projects/brandcreative/bc4.png"]

    },
    {
        id: 3,
        title: "Cryptoverse",
        icon: "CV",
        subtitle: "Dashboard showing information about cryptocurrencies.",
        description: "Cryptoverse is an app that displays statistics, news, and trends about cryptocurrencies. It utilizes cryptocurrency API and Bing news API to show the latest stats and news.",
        url: "https://cryptoverse-aznamle.vercel.app/",
        github_url: "",
        technology: ["React", "Redux Toolkit", "Chart.js", "Antd", ],
        images: ["/projects/cryptoverse/cryptoverse1.png", "/projects/cryptoverse/cryptoverse2.png", "/projects/cryptoverse/cryptoverse3.png", "/projects/cryptoverse/cryptoverse4.png" ]

    },
    {
        id: 4,
        title: "Crown Store",
        icon: "P4",
        subtitle: "E-commerce app focusing on clothing apparel.",
        description: "Crown Store is a e-commerce app utilizing Firebase as authenticated log-in and allows users to add clothing items to their cart and check out.",
        url: "https://aznamle-crwn-live.herokuapp.com/",
        github_url: "",
        technology: ["React", "Redux", "Firebase", "Styled Components", ],
        images: ["/projects/crwnstore/crwnstore1.png", "/projects/crwnstore/crwnstore2.png", "/projects/crwnstore/crwnstore3.png", "/projects/crwnstore/crwnstore4.png" ]
    },
]

export default function handler(req, res) {
    res.status(200).json(projects)
}