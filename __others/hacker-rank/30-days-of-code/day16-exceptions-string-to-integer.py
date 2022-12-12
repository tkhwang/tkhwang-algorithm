#!/bin/python3

import sys


S = input().strip()
try:
    temp = int(S)
    print(S)
except Exception as err:
    print("Bad String")
