import * as fs from 'fs';

interface DataItem {
    id: string;
    name: string;
    class: string;
    description: string;
    cardNumber: number;
    rarity: string;
    secretArtType: boolean;
    skills: string[];
    ultimata: string;
    resonance: {
        id: string;
        name: string;
        effect: string;
        resonanceIconURL: string;
    };
    affinity: string;
    region: string[];
}

function loadDataFromFile(filename: string): DataItem[] {
    const data: string = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
}

function showAllData(data: DataItem[]): void {
    console.log("\nAlle data:");
    data.forEach(item => {
        console.log(`ID: ${item.id}, Name: ${item.name}, Class: ${item.class}, Rarity: ${item.rarity}`);
    });
}

function filterById(data: DataItem[]): void {
    const id: string = readlineSync.question("Geef het ID op om te filteren: ");
    const foundItem: DataItem | undefined = data.find(item => item.id === id);
    if (foundItem) {
        console.log(`ID: ${foundItem.id}, Name: ${foundItem.name}, Class: ${foundItem.class}, Rarity: ${foundItem.rarity}`);
    } else {
        console.log("Geen item gevonden met dat ID.");
    }
}

import readlineSync from readline-sync;

console.log("Welkom bij de JSON Console App!");

const data: DataItem[] = loadDataFromFile('FatedSummons.json');

while (true) {
    console.log("\nMenu:");
    console.log("1. Toon alle data");
    console.log("2. Filter op ID");
    console.log("3. Exit");
    const choice: string = readlineSync.question("Maak uw keuze: ");

    switch (choice) {
        case "1":
            showAllData(data);
            break;
        case "2":
            filterById(data);
            break;
        case "3":
            process.exit(0);
            break;
        default:
            console.log("Ongeldige keuze. Probeer opnieuw.");
            break;
    }
}
