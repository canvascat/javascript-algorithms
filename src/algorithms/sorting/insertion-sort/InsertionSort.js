import Sort from '../Sort';

// 将第i项目依次与其之前项比较，插入比其小的一项后面(下面就是依次与前一项交换位置，直到前一项比它小)
// 需要遍历n次数组，每次至多遍历i项

// function sort(originalArray) {
//   const array = [...originalArray];
//   for (let i = 1; i < array.length; i++) {
//     let currentIndex = i - 1;
//     while (currentIndex >= -1 && array[i] <= array[currentIndex]) {
//       currentIndex--;
//     }
//     if (currentIndex + 1 < i) {
//       array.splice(currentIndex + 1, 0, ...array.splice(i, 1));
//     }
//   }
//   return array;
// }

export default class InsertionSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];

    // Go through all array elements...
    for (let i = 0; i < array.length; i += 1) {
      let currentIndex = i;

      // Call visiting callback.
      this.callbacks.visitingCallback(array[i]);

      // Go and check if previous elements and greater then current one.
      // If this is the case then swap that elements.
      while (
        array[currentIndex - 1] !== undefined
        && this.comparator.lessThan(array[currentIndex], array[currentIndex - 1])
      ) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[currentIndex - 1]);

        // Swap the elements.
        const tmp = array[currentIndex - 1];
        array[currentIndex - 1] = array[currentIndex];
        array[currentIndex] = tmp;

        // Shift current index left.
        currentIndex -= 1;
      }
    }

    return array;
  }
}
