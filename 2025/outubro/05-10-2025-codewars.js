# Desafio: Retornar a contagem de vogais em determinada string.
# Fonte: Codewars
# Nível: 7 kyu

function vowelsCount(text) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const vowelsFound = text.split('').filter((char) => vowels.includes(char))
  const totalVowels= vowelsFound.length
  return totalVowels
}

# Teste rápido
vowelsCount("abracadabra") -> 5
vowelsCount("o a kak ushakov lil vo kashu kakao") -> 13
