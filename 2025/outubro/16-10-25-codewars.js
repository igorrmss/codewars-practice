# Desafio: 
  -Dado dois parâmetros numerais, some todos os números que existam entre eles e incluindo eles.
# Fonte: Codewars
# Nível: 7 kyu

function sequence(start, stop) {
  return Array.from( { length: stop - start + 1 }, (_, i) => start + i).reduce((sum, curr) => sum + curr)
}

function invertedSequence(start, stop) {
  return Array.from( { length: start - stop + 1 }, (_, i) => start - i).reduce((sum, curr) => sum + curr)
}

function getSum(start, stop){
  return stop > start ? sequence(start, stop) : invertedSequence(start, stop)
}

# Teste rápido
getSum(-1, 4) -> 9
getSum(4, -1) -> 9

getSum(0, 2) -> 3
