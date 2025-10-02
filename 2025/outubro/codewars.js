# Desafio: Dada duas strings, retorne uma nova string ordenada alfabeticamente e sem repetição de caracteres.
# Fonte: Codewars
# Nível: 7 kyu

function longest(strA, strB) {
  return [...s1, ...s2].sort().map((e, i, a) => e == a[i + 1] ? '' : e).join('')
}

# Teste rápido
longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") -> "abcdefklmopqwxy"
longest("olamundo", "repositoriodepratica") -> "acdeilmnoprstu"
