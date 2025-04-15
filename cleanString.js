export default function removeDuplicates(input) {
    const words = input.split(",");
    const uniqueWords = [...new Set(words)];
    return uniqueWords.join(",");
}