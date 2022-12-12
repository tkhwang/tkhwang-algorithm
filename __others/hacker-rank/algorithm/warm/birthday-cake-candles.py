#!/bin/python3

import sys


n = int(input().strip())
height = [int(height_temp) for height_temp in input().strip().split(' ')]

maximum = max(height)
count = 0

for m in height:
    if m == maximum:
        count += 1

print(count)
