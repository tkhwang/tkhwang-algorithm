#!/usr/bin/env python
# -*- coding: utf-8 -*-

def snail(array):

    result = []

    while( len(array) ):
        # Top => Right
        result += array[0]
        del array[0]

        if len(array) > 0:

            # Right => Bottom
            for y in xrange(len(array)):
                result.append(array[y][-1])
                del array[y][-1]

            # Bottom => Left
            result += array[-1][::-1]
            del array[-1]

            # Left => Top
            for y in xrange(len(array)):
                result.append(array[len(array)-1-y][0])
                del array[len(array)-1-y][0]

    print result
    return result

if __name__ == "__main__" :
    snail(array =
          [[1,2,3],
           [4,5,6],
           [7,8,9]])
    snail(array =
          [[ 1,  2,  3,  4,  5],
           [ 6,  7,  8,  9, 10],
           [11, 12, 13, 14, 15],
           [16, 17, 18, 19, 20],
           [21, 22, 23, 24, 25]])

            
