export interface FatedSummons {
    id: string
    name: string
    class: string
    description: string
    image: string
    cardNumber: number
    rarity: string
    secretArtType: boolean
    skills: string[]
    ultimata: string
    resonance: Resonance
    affinity: string
    region: string[]
}

export interface Resonance {
    id: string
    name: string
    effect: string
}
