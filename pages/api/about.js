const about = [
    {
        id: 1,
        name: "Hello, I'm Nam! 👋",
        image: "",
        role: "Software Developer",
        location: "Rancho Cucamonga, California",
        description: "I am a front-end developer focusing on Javascript ES6+! My stack includes React, NextJS, Prisma and Prismic.\n\n In my free time, I am a gamer, sports fan, and anime fan!",
        email : "namle1998@hotmail.com",
        social: [
            {
                title: "Twitter",
                url: "https://twitter.com/aznamle"
            },
            {
                title: "LinkedIn",
                url: "https://twitter.com/aznamle"
            },
            {
                title: "GitHub",
                url: "https://github.com/aznamle"
            },
        ],
    },
]

export default function handler(req, res) {
    res.status(200).json(about)
}