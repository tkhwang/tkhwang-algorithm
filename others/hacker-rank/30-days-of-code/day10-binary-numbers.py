#!/bin/python3

import sys

n = int(input().strip())
binary = "{0:b}".format(n)
split = binary.split('0')
result = max(split)
print(result.count('1'))
