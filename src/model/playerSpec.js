export default function PlayerSpec(args) {
    let {startingGold, factionId} = args;

    this.gold = startingGold;
    this.factionId = factionId;
}