import Rand from 'rand-seed';

export function getRandomIntInclusive(
    random: Rand,
    min: number,
    max: number
): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(random.next() * (max - min + 1) + min); // Максимум и минимум включаются
}
