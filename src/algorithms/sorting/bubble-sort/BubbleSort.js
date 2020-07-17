import Sort from '../Sort';

/* 冒泡排序
 * 比较相邻项，将较大项后移，一次遍历后即可将最大项移动到最后；比较(n - 1) * n / 2 次
 */

// function bubbleSort (originalArray, callback = (a, b) => a <= b) {
//   const array = [...originalArray];
//   for (let i = 0; i < array.length; i++) {
//     let swapped = false;
//     for (let j = 0; j < array.length - 1; j++) {
//       if (!callback(array[j], array[j + 1])) {
//         [array[j], array[j + 1]] = [array[j + 1], array[j]];
//         swapped = true;
//       }
//     }
//     if (!swapped) return array;
//   }
//   return array;
// }

export default class BubbleSort extends Sort {
  sort(originalArray) {
    // 保存交换是否已经发生的信息的标志。
    // Flag that holds info about whether the swap has occur or not.
    let swapped = false;
    // Clone original array to prevent its modification.
    const array = [...originalArray];

    for (let i = 1; i < array.length; i += 1) {
      swapped = false;

      // Call visiting callback.
      this.callbacks.visitingCallback(array[i]);

      for (let j = 0; j < array.length - i; j += 1) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[j]);

        // Swap elements if they are in wrong order.
        if (this.comparator.lessThan(array[j + 1], array[j])) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];

          // Register the swap.
          swapped = true;
        }
      }

      // If there were no swaps then array is already sorted and there is
      // no need to proceed.
      if (!swapped) {
        return array;
      }
    }

    return array;
  }
}
