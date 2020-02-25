
### First pass:
array = [8,4,23,42,16,15]
left = 0
right = array.length-1 = 5
quickSort(array, 0, 5)
after comparing arr[5]=15 to the values of the left and right, if they are larger than 15=> moving left
result = [8,4,15,42,16,23]

### Second pass
array = [8,4,15,42,16,23]
left = 0
right = 1
quickSort(array, 0, 1)
after comparing arr[1]=4 to the values of the left and right, if they are larger than 4=> moving left
result = [4,8,15,42,16,23]

### third pass
array = [4,8,15,42,16,23]
left = 3
right = 5
quickSort(array, 3, 5)
after comparing arr[5]=23 to the values of the left and right, if they are larger than 23=> moving left
result = [4,8,15,16,23,42]





