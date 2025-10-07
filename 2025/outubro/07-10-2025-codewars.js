# Desafio: 
  -Encontrar os múltiplos do parâmetro 'baseNumber' até, e incluindo, o 100
  -Somar os digitos de cada múltiplo
  -Somar o valor total do cálculo anterior
# Fonte: Codewars
# Nível: 7 kyu

function sumOfDigitSums(baseNumber) {
  const numbersUpTo100 = Array.from({ length: 100 }, (_, i) => i + 1);
  const multiples = numbersUpTo100.filter(n => n % baseNumber === 0);
  const digitSums = multiples.map(n =>
    String(n)
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0)
  );
  const total = digitSums.reduce((sum, current) => sum + current, 0);
  return total;
}

# Teste rápido
sumOfDigitSums(30) -> 18
sumOfDigitSums(25) -> 25
