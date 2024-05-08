/**
 * 数组组合
 *
 * @remarks
 *
 * @param array - 数组
 * @param subGroupLength - 组合长度
 * @param isFull - 是否补齐长度
 * @returns The arithmetic mean of `x` and `y`
 *
 */

export function group (array, subGroupLength, callback) {
  let index = 0
  const newArray = []
  while (index < array.length) {
    if (!callback) {
      newArray.push(array.slice(index, (index += subGroupLength)))
    } else {
      newArray.push(
        array.slice(index, (index += subGroupLength)).map(callback)
      )
    }
  }
  return newArray
}
