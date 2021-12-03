export const formatToBrl = (value: number | string): string => {
  // react native does not support the Intl.NumberFormat API

  const asNumber = Number(value)

  if (isNaN(asNumber)) return 'R$ 0,00'

  return `R$ ${String(asNumber).replace('.', ',')}`
}
