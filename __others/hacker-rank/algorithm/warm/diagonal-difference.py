#!/bin/python3

import sys

n = int(input().strip())
a = []
for a_i in range(n):
    a_t = [int(a_temp) for a_temp in input().strip().split(' ')]
    a.append(a_t)

right = 0
left = 0

for i in range(n):
    right += a[i][i]
    left  += a[i][n-1-i]

print(abs(right - left))
