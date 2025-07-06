$(() => {
    const boxes = [
        {
            title: "Wordle RPG (Uni project)",
            time: "2022",
            body: "This team project combined Wordle with RPG/roguelike mechanics. I made the backend with Spring Boot & PostgreSQL, hosted with AWS. The frontend was Angular/Typescript which I also worked on. I was also in charge of accessibility for the project and took a major role in organising and planning.",
            images: ["wordle-1.png", "wordle-2.png"]
        },
        {
            title: "Advert Animations For a Local Company",
            time: "2020",
            body: "I liased with a local company to make some animations for advertising on social media an in their building. I used Blender and Kdenlive for modelling & editing.",
            images: ["stars-blender.png"]
        },
        {
            title: "A-Level Project",
            time: "2020",
            body: "I learnt C++ for this. I learnt about parsing & lexing with Bison/Flex. This was my first attempt focusing on time/space optimisation. Ambitious project to make an interpreted programming language based off of classes & metaclasses, and reimagining all statements as expressions (including class definitions, which are instances of metaclasses). Adjacency is now a binary operator, which allows chaining of objects & code blocks.",
            images: ["placeholder.png"]
        },
        {
            title: "Music App & Sound Tech",
            time: "2017-2020",
            body: "I started out with sound & lighting help for school shows/assemblies, ending up in charge of sound for school shows. We needed a free music player with keyboard controls, preset volumes per track, fading, looping & preset order, which I made with Python & Tkinter.",
            images: ["music-player.png","music-player-2.png", "school-of-rock.jpg"]
        },
        {
            title: "Cipher Challenge",
            time: "2016-2019",
            body: "The cipher challenge requires you to write code to crack ciphers. I mostly worked on a visual transposition solver & substituion solver, which allowed entering known words to match in the ciphertext. I started in Scratch and moved to Python",
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
