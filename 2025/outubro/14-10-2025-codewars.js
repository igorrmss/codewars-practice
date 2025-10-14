# Desafio: 
  -Criar uma função para verificar se determinada palavra é um isograma, ou seja, não possui letras repetidas, ignorando letras maiúsculas.
# Fonte: Codewars
# Nível: 7 kyu

function isIsogram(baseString){
  const isogram = []
  baseString.toLowerCase().split('').map((char) => !isogram.includes(char) && isogram.push(char))
  return isogram.length === baseString.length
}

# Teste rápido
isIsogram("Dermatoglyphics") -> true
isIsogram("moOse") -> false
