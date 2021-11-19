const about = [
    {
        id: 1,
        name: "Hello, I'm Nam! 👋",
        image: "",
        role: "Software Engineer",
        location: "Rancho Cucamonga, California",
        description: "I am a front-end Software Engineer focusing on Javascript ES6+, React, NextJS, and Redux.\n\n In my free time, I am a gamer, sports fan, and anime fan!",
        email : "namtle98@gmail.com",
    },
]

export default function handler(req, res) {
    res.status(200).json(about)
}