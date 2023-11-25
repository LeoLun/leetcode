package leetcode

func removeDuplicates(nums []int) int {
	length := len(nums)
	if length <= 2 {
		return length
	}
	index := 0
	target := nums[0]

	for i := 0; i < length; i++ {
		if nums[i] == target {
			if index >= 2 {
				nums = append(nums[:i], nums[i+1:]...)
				i -= 1
				length = len(nums)
			} else {
				index++
			}
		} else {
			target = nums[i]
			index = 1
		}
	}

	return length
}
