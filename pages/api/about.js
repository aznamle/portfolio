const about = [
    {
        id: 1,
        name: "Hello, I'm Nam! 👋",
        image: "",
        role: "Software Developer",
        location: "Los Angeles, California ☀️",
        description: "I am a front-end developer focusing on Javascript ES6+! My stack includes React or NextJS.",

    },
]

export default function handler(req, res) {
    res.status(200).json(about)
}