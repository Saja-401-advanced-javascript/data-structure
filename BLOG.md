testing array = [8,4,23,42,16,15]
n = arr.length = 6

if(n>1) ====> true
mid = 6/2 => 3

### first pass
left = [4]
right = [23]
comparing left=>[4] with right=>[23] then sorting them => merge =[4,23].

### second pass 
left = [8]
right = [4,23]
comparing left=>[8] with right=>[4,23] then sorting them => merge =[4,8,23].


### third pass 
left = [16]
right = [15]
comparing left=>[16] with right=>[15] then sorting them => merge =[15,16].


### fourth pass 
left = [42]
right = [15,16]
comparing left=>[16] with right=>[15] then sorting them => merge =[15,16,42].


### fifth pass 
left = [4,8,23]
right = [15,16,42]
comparing left=>[4,8,23] with right=>[15,16,42] then sorting them => merge =[4,8,15,16,23,42].

### result 
[4,8,15,16,23,42]