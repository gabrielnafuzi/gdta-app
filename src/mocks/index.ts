const mocks = {
  price: ['R$ 4,99', 'R$ 5,99', 'R$ 6,99', 'R$ 7,99', 'Grátis'],
  distance: [
    '0,5 km',
    '1 km',
    '1,5 km',
    '2 km',
    '2,5 km',
    '3 km',
    '3,5 km',
    '4 km',
    '5 km',
    '6 km',
    '7 km'
  ],
  category: [
    'Mercado',
    'Japonesa',
    'Chinesa',
    'Lanches',
    'Pizza',
    'Brasileira',
    'Italiana',
    'Árabe'
  ]
} as const

export const getRandomMockValue = (type: keyof typeof mocks) => {
  const randomIndex = Math.floor(Math.random() * mocks[type].length)

  return mocks[type][randomIndex]
}
