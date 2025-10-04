# Desafio: Substituir cada caractere de uma string, excluindo os úlimos quatro, em hashtag ('#').
# Fonte: Codewars
# Nível: 7 kyu

function maskify(cc) {
  if (cc.length <= 4) return cc
  
  const lastFour = cc.slice(-4)
  const charsMasked = cc.slice(0, -4).replace(/./g, '#')
  
  return charsMasked + lastFour
}

# Teste rápido
maskify('4556364607935616') -> "############5616"
maskify('Batman!') -> "###man!"
