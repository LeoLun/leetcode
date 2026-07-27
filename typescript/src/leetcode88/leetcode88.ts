function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = 0;
  let p2 = 0;

  for (; p1 < m + n; ) {
    if (nums1[p1] > nums2[p2] || nums1[p1] === 0) {
      nums1.splice(p1, 0, nums2[p2]);
      p1++;
      p2++;
    } else {
      p1++;
    }
  }

  nums1.length = m + n;
}

export default merge;
