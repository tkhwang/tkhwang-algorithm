#!/bin/python3

import sys

n = int(input().strip())

for i in range(n):
    print(" "*(n-1-i) + "#"*(i+1))
