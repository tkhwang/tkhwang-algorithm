#!/bin/python3

import sys

n = int(input().strip())
arr = [int(arr_temp) for arr_temp in input().strip().split(' ')]

#print(arr)

positive = 0
zero = 0
negative = 0

for i in arr:
    if i > 0 :
        positive +=1
    elif i == 0:
        zero += 1
    elif i < 0 :
        negative += 1

print(float(positive/n))
print(float(negative/n))
print(float(zero/n))
        
