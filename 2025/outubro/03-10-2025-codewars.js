# Desafio: Retornar o valor mínimo e o valor máximo de determinado array de números.
# Fonte: Codewars
# Nível: 7 kyu

function minMax(arr){
  let min = arr[0]
  let max = arr[0]
  
  for(let i = 0; i < arr.length; i++) {
    if (min >= arr[i]) min = arr[i]
    if (max <= arr[i]) max = arr[i]
  }
  
  return [min, max]
}

# Teste rápido
minMax([1, 2, 3, 4, 5]) -> [1, 5]
minMax([2334454,5]) -> [5,2334454]

