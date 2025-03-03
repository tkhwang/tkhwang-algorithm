#!/bin/python3

import sys

"""
If  is odd, print Weird
If  is even and in the inclusive range of 2 to 5, print Not Weird
If  is even and in the inclusive range of 6 to 20, print Weird
If  is even and greater than 20, print Not Weird
"""

N = int(input().strip())


if N %   2 :
    print("Weird")
else:
    if N in range(2, 6):
        print("Not Weird")
    elif N in range(6, 21):
        print("Weird")
    elif N > 20:
        print("Not Weird")


    
