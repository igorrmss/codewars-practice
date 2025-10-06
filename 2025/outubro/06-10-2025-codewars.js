# Desafio: Remover palavras duplicadas de uma string.
# Fonte: Codewars
# Nível: 7 kyu

function removeDuplicateWords(words) {
  // utilizando o método filter()
  const arrOfWords = []
  return words.split(' ').filter((word) => !arrOfWords.includes(word) && arrOfWords.push(word)).join(' ')

  // utilizando o objeto Set
  const duplicatesRemoved = new Set(words.split(' '))
  return [...duplicatesRemoved].join(' ')
}

# Teste rápido
removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta') -> "alpha beta gamma delta"
