// 주식가격
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42584

def solution(prices):
    stack = []
    N = len(prices)
    
    res = [N-i - 1 for i in range(N)]
    
    for i, price in enumerate(prices):
        while stack and prices[stack[-1]] > price:
            last = stack.pop()
            res[last] = i - last
        stack.append(i)
        
    return res
