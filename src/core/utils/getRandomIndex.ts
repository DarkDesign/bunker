import Rand from 'rand-seed';

export function getRandomIndex(
    random: Rand,
    length: number
): number {
    return Math.floor(random.next() * length)
}
