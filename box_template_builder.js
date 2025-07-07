$(() => {
    const boxes = [
        {
            title: "Smartphone/MCU Gesture Recognition (Uni project)",
            time: "2025",
            body: "In this project I made a mobile app with Flutter, which connected over BLE to an Arduino recognising gestures through accelerometers.",
            images: ["muc-3.png", "muc-1.png", "muc-2.png"]
        },
        {
            title: "LabVIEW TCP Comms",
            time: "2024",
            body: "LabVIEW is a graphical flow programming 'language' for National Instruments cards. The program communicated and monitors a bidirectional TCP setup.",
            images: ["placeholder.png"]
        },
        {
            title: "Live Coding & Exam Walkthroughs (Tutoring)",
            time: "2023",
            body: "Creating resources to help with the NEA & exam papers for Computer Science A-Level.",
            images: ["live-coding.png", "exam-paper.png"]
        },
        {
            title: "Wordle RPG (Uni Project)",
            time: "2023",
            body: "This team project combined Wordle with RPG/roguelike mechanics. I made the backend with Spring Boot & PostgreSQL, hosted with AWS. I worked on the frontend too with Angular/Typescript. I was also in charge of accessibility for the project and took a major role in organising and planning.",
            images: ["wordle-1.png", "wordle-2.png", "wordle-3.png"]
        },
        {
            title: "3D Animations for Tutoring (S.A. & Volume of a Prism)",
            time: "2020",
            body: "Experimenting with 3D animation to help in teaching.",
            images: ["tut-3d-1.png", "tut-3d-2.png", "tut-3d-3.png", "tut-3d-4.png", "tut-3d-5.png"]
        },
        {
            title: "3D Animations for Tutoring (S.A. & Volume of a Compound Solid)",
            time: "2019",
            body: "Experimenting with 3D animation to help in teaching.",
            images: ["tut-3d-6.png", "tut-3d-7.png", "tut-3d-8.png"]
        },
        {
            title: "Advert Animations For a Local Company",
            time: "2020",
            body: "I liased with a local company to make some animations for advertising on social media an in their building. I used Blender and Kdenlive for modelling & editing.",
            images: ["stars-blender.png", "stars-uv.png", "stars-kdenlive.png"]
        },
        {
            title: "A-Level Project",
            time: "2020",
            body: "I learnt C++ for this. I learnt about parsing & lexing with Bison/Flex. This was my first attempt focusing on time/space optimisation. Ambitious project to make an interpreted programming language based off of classes & metaclasses, and reimagining all statements as expressions (including class definitions, which are instances of metaclasses). Adjacency is now a binary operator, which allows chaining of objects & code blocks.",
            images: ["placeholder.png"]
        },
        {
            title: "NixOS",
            time: "2020",
            body: "I wanted to learn NixOS (a non-FHS immutable Linux distro), and the Nix ecosystem. It was a steep learning curve but I ended up learning a lot about Linux along the way, and contributing to the official nixpkgs repo.",
            images: ["nixos.jpg"]
        },
        {
            title: "Music App & Sound Tech",
            time: "2017-2021",
            body: "I started out with sound & lighting help for school shows/assemblies, ending up in charge of sound for school shows. We needed a free music player with keyboard controls, preset volumes per track, fading, looping & preset order, which I made with Python & Tkinter.",
            images: ["music-player.png","music-player-2.png", "school-of-rock.jpg"]
        },
        {
            title: "National Citizenship Service",
            time: "2019",
            body: "The NCS involves volunteering & charity work for students after GCSE's. I worked on 3D animations for mental health (for Mind).",
            images: ["ncs.png", "mind-1.png", "mind-2.png", "mind-3.png", "mind-4.png"]
        },
        {
            title: "Bronze/Silver DofE",
            time: "2017-2019",
            body: "4 parts - volunteering, physical, skills & expedition (pictured).",
            images: ["field.jpg"]
        },
        {
            title: "Cipher Challenge",
            time: "2016-2019",
            body: "The cipher challenge requires you to write code to crack ciphers. I mostly worked on a visual transposition solver & substituion solver, which allowed entering known words to match in the ciphertext. I started in Scratch and moved to Python.",
            images: ["columnar.png","freq-analysis.png"]
        },
    ];

    let count = 0;

    const source = $("#box-template").html();
    const template = Handlebars.compile(source);

    boxes.forEach(box => {
        box.id = count++;
        const html = template(box);
        $("#content").append(html);
    });
});

Handlebars.registerHelper('eq', function(a, b) {
  return a == b;
});
