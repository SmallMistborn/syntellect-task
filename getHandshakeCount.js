export default function getHandshakeCount(peopleCount) {
    return (peopleCount * (peopleCount - 1)) / 2;
}