'use strict';

/**
 * Сортирует массив чисел по частоте их появления.
 * Элементы с большей частотой появляются раньше в результирующем массиве.
 * Если два элемента имеют одинаковую частоту, они сортируются по возрастанию значени> *
 * @param {number[]} arr Входной массив чисел для сортировки
 * @returns {number[]} Новый массив, отсортированный по частоте появления элементов
 */
const sortByFrequency = (arr) => {
  if (arr.length === 0) {
    return [];
  }

  const frequencyMap = new Map();

  arr.forEach(num => {
    frequencyMap[num] = (frequencyMap[num] || 0) +1;
  });

  return [...arr].sort((a,b) => {
    const freqA = frequencyMap[a];
    const freqB = frequencyMap[b];
    let diff = (freqA !== freqB) ? freqB-freqA : a-b;
    return diff;
  });

}

