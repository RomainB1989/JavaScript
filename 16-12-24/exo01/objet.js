let record = {
    title:"2001",
    author:"Dr.Dre",
    producer:"Dr. Dre and Mel-Man",
    year:"1999",
};
console.log(record);

record.trackList = {
    track1:["The Watcher", "3:45"],
    track2:["S.T.I.L.L Dre", "4:30"],
    track3:["Bitch Niggaz", "4:12"],
    track4:["Ed-Ucation", "1:54"],
    track5:["The Message/Outro", "5:30"],
};
console.log(record);

let painting= {
    title:"La Joconde",
    artist:"Leonardo Da Vinci",
    year:"1485"
};

delete painting.artist;
console.log(painting);

let book = {
    title:"Bilbo the Hobbit",
    author:"J.R.R Tolkien",
    year:"1952"
};

console.log(book.hasOwnProperty("modèle"));
console.log(book.hasOwnProperty("title"));

let i = 0;
let draw = [];

while(i < 10){
    draw.push("#");
    console.log(draw);
    i++;
}

for(let y=10; i>0; i-=2){
    draw.push("@");
    console.log(draw);
}

