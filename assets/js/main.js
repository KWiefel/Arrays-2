// =============================== Codeflow_uebung_lvl_1_8: Arrays slice() ======================

// Die Methode slice() kennen wir ja schon von den strings, auch hier kann man mit slice() Werte aus einem array schneiden und bekommt ein neues array zurück. Hierbei ist zu beachten, dass slice() einen Startindex benötigt, optional auch einen Endindex.

// Erstelle ein neues array mit deinen Lieblingsreisezielen, danach schneidest du mit slice() zwei Werte aus dem array aus und lässt dir das Ergebnis in der Konsole ausgeben.

const country = ["Vietnam", "Thailand", "Bosnien", "Türkei"];
console.log(country);

const sliceCountry = country.slice(1, 3);
console.log(sliceCountry);

// =============================== Codeflow_uebung_lvl_1_10: Arrays/String split() ======================

// Finde mit der Ergebnisvorschau heraus, wo der string gesplittet worden ist. Wichtig ist ,dass du dir die einzelnen Vorgänge in extra Variablen zwischenspeicherst, weil sonst nicht mit der Rückgabe von split() weiterarbeiten kannst.

const text =
  "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";
console.log(text);

const text1 = text.split(" ");
console.log(text1);

const text2 = text.split("");
console.log(text2);

// =============================== Array-Iteration-Level-1_1 ======================

// Schreibe eine Funktion myDrinks(), die jedes Element eines Arrays in deiner Konsole ausgibt und mit document.write() in deine index.html schreibt.

// Verwende die Liste aus dem Code-Snippet und sortiere das Array getraenke vorher alphabetisch.

let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

// getraenke.sort();
// console.log(getraenke);

// getraenke.forEach((elt) => {
//   getraenke.sort();
//   console.log(elt);
//   document.write(`${elt}<br>`);
// });

getraenke.forEach(
  (elt) => getraenke.sort() + console.log(elt) + document.write(`${elt}<br>`)
);

// =============================== Array-Iteration-Level-1_2 ======================

// In dieser Übung lernst du map() kennen. Dies ist ebenfalls eine Methode, die sehr viel genutzt wird.
// Nutze das Array getraenke aus der vorherigen Übung oder aus dem Code-Snippet.
// Nutze die map()-Methode, um in der neuen Variable upperDrinks alle Getränke in Großbuchstaben zu speichern.
// Wende nun die map() Funktion auf dein Array getraenke an.
// Gib nun upperDrinks in der Konsole aus.

getraenke.sort();
const getraenkeCap = getraenke.map((elt) => elt.toUpperCase());

console.log(getraenkeCap);

// =============================== Array-Iteration-Level-1_3 ======================

// Schreibe eine Funktion, die jeden Wert aus dem Array (siehe Code-Snippet) mit 2 multipliziert und das Ergebnis sortiert

let array = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];
console.log(array.length);

const newArray = array.map((elt) => elt * 2).sort((elt1, elt2) => elt1 - elt2);
console.log(newArray);

// =============================== Array-Iteration-Level-1_4 ======================

// Schreibe eine Funktion, die mit Hilfe von map() ein Array aus Temperaturen von Fahrenheit in Celsius umwandelt.
// Verwende die mathematische Formel celsius = (℉ - 32) / 1.8 zur Umrechnung.
// Verwende das Array aus dem Code-Snippet.
// Überprüfe das Ergebnis in der Konsole.

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
console.log(fahrenheit);

const celcius = fahrenheit.map((elt) => {
  elt = (elt - 32) / 1.8;
  return elt.toFixed(0);
});
console.log(celcius);

// =============================== Array-Iteration-Level-1_5 ======================

// Verwende die Variable checkNumber und map().
// Überprüfe mit einem if-Statement, ob die Zahl durch 3 teilbar ist.
// Wenn ja, addiere 100 zu dieser Zahl hinzu.
// Gib das Ergebnis in der Konsole aus.

let checkNumber = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

const checkedNumber = checkNumber.map((elt) => {
  if (elt % 3 == 0) {
    elt = elt + 100;
    return elt;
  } else {
    return elt;
  }
});

console.log(checkedNumber);

const checkedNumberArrow = checkNumber.map((elt) =>
  elt % 3 == 0 ? elt + 100 : elt
);

console.log(checkedNumberArrow);

// =============================== Array-Iteration-Level-1_6 ======================

// Erstelle ein neues Array auf Basis des gegebenen Arrays (siehe Code-Snippet).
// Entferne die Dateiendungen (z.B. "image.jpg" => "image").
// Falls keine Dateiendung vorhanden ist, soll der Wert "invalid" gespeichert werden (z.B. "dog" => "invalid").
// Die Werte sollen in Kleinbuchstaben gespeichert werden.
// Es sollte entweder mit der map() oder forEach() Methode gearbeitet werden.

let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

const changeAlbum = album.map((elt) =>
  elt.includes(".") ? elt.slice(0, -4) : (elt = "invalid")
);
console.log(changeAlbum);

// =============================== Array-Sort-Level-1_1 ======================

// In dieser Übung geht es darum, Arrays alphabetisch zu sortieren.
// Sortiere die Programmiersprachen alphabetisch.
// Der Code für das Array steht im Code-Snippet.
// Deklariere die Funktion sortierung.
// Verwende den Befehl sort(), um die Aufgabe zu erfüllen.
// Rufe die Funktion sortierung auf.
// Überprüfe den Erfolg in der Konsole.

let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

const sortierung = languages.sort();

console.log(sortierung);

// =============================== Array-Sort-Level-1_2 ======================

// In dieser Übung geht es darum, Arrays nicht alphabetisch von A-Z, sondern von Z-A zu sortieren.
// Sortiere die Programmiersprachen in umgekehrter alphabetischer Reihenfolge.
// Der Code steht im Code-Snippet.
// Deklariere die Funktion sortierung2.
// Verwende den Befehl sort() und reverse(), um die Aufgabe auszuführen.
// Rufe die Funktion sortierung2 auf.
// Überprüfe das Ergebnis in der Konsole.

const sortierung2 = languages.sort().reverse();

console.log(sortierung2);

// =============================== Array-Sort-Level-2_1 ======================

// Schreibe ein kleines Programm, das Zeichenketten umkehrt.
// Diese Funktion soll jeden String, der ihr übergeben wird umdrehen können (nutze einen Parameter).
// Du wirst Array-Methoden verwenden müssen, um den String umzudrehen.
// Rufe die Funktion mit deinem Namen als Parameter auf.
// Überprüfe das Ergebnis in der Konsole.
// Versuche diese Begriffe umzukehren: Sergio, Hannah, Regallager, Reliefpfeiler und Rentner.
// Versuche diese Sätze umzukehren: "Ella mag alle Bohnen" und "han nesaH has ennaH".

const name = "Konstantin Wiefel";
const test1 = "Sergio, Hannah, Regallager, Reliefpfeiler und Rentner";
const test2 = "Ella mag alle Bohnen";
const test3 = "han nesaH has ennaH";

const switchIt2 = (param) => param.split("").reverse().join("");

console.log(switchIt2(name));
console.log(switchIt2(test1));
console.log(switchIt2(test2));
console.log(switchIt2(test3));

// =============================== Array-Sort-Level-2_2 ======================

// In dieser Übung lernst du, wie man die Nummern 0-∞ aufsteigend sortiert.
// Sortiere die Nummern aufsteigend.
// Der Code steht im Code-Snippet.
// Verwende den Befehl sort() und Google, um die Aufgabe korrekt auszuführen.
// Überprüfe das Ergebnis in der Konsole.

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

const sortNumbers = numArray2.sort((num1, num2) => num1 - num2);
console.log(sortNumbers);
