#!/bin/python

import sys
import string
a = set()
ll = []
s = raw_input().strip()
d = {}


substr = []
for i in reversed(xrange(len(s)-1)):
    if s[i] != s[i+1]:
        substr.append(s[i+1:])
        s = s[:i+1]
substr.append(s)

for i in substr:
    if i[0] not in d or len(i) > d[i[0]]:
        d[i[0]] = len(i)

n = long(raw_input().strip())
flag = "No"
for i in xrange(n):
    x = int(raw_input().strip())
    for j in d:
        if x%(ord(j)-96)==0 and d[j]*(ord(j)-96)>=x: flag = "Yes"
    print flag
    flag = "No"
