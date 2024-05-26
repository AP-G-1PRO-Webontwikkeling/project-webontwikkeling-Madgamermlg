import type { FatedSummons, Resonance } from "./interface";
import readline from "readline-sync";
let terminalclosed = false;

async function main() {
    const data = await fetch("https://raw.githubusercontent.com/AP-G-1PRO-Webontwikkeling/project-webontwikkeling-Madgamermlg/main/json/FatedSummons.json")

    const fatedsummons: FatedSummons[] = await data.json() as FatedSummons[];
    while (terminalclosed === false) {
        console.log("Welkom bij Fated Summons, de nieuwste trading card game !")
        console.log("Keuzes:\n")
        console.log("1. Bekijk alle data.")
        console.log("2. Zoek met behulp van ID.")
        console.log("3. sluit applicatie af. \n")

        const optionchoice = readline.questionInt("Maak je keuze uit bovenstaande keuzes:")
        if (optionchoice === 1) {
            fatedsummons.forEach(element => {
                showToString(element);
                console.log("------------------------------------------")
            });
        }
        if (optionchoice === 2) {
            const id = readline.question("Geef de gewenste id mee:")
            showToString(fatedsummons.find((fs) => fs.id.toLowerCase() === id.toLowerCase()));
        }
        if (optionchoice === 3) {
            console.log("Tot volgende keer moedige held!")
            terminalclosed = true;
        }
    }
}
async function showToString(personCard: FatedSummons | undefined) {
    if (!personCard) {
        console.log("Kaart niet gevonden!")
        return;
    }
    console.log("- ID:", personCard.id)
    console.log("- Naam:", personCard.name)
    console.log("- Klasse:", personCard.class)
    console.log("- Beschrijving:", personCard.description)
    console.log("- Foto:", personCard.image)
    console.log("- Kaartnummer:", personCard.cardNumber)
    console.log("- Zeldzaamheid:", personCard.rarity)
    console.log("- Legendarisch:", personCard.secretArtType)
    console.log("- Skills:")
    console.log("   -", personCard.skills[0])
    console.log("   -", personCard.skills[1])
    console.log("- Ultimata:", personCard.ultimata)
    console.log("- Resonance:")
    console.log("   -", personCard.resonance.id)
    console.log("   -", personCard.resonance.name)
    console.log("   -", personCard.resonance.effect)
    console.log("- Groep:", personCard.affinity)
    console.log("- Region:")
    console.log("   -", personCard.region[0])
    console.log("   -", personCard.region[1])
}
main()