def split(msg):
    even = ""
    odd = ""
    for i, ch in enumerate(msg):
        if i % 2 :
            even += ch
        else:
            odd  += ch
    return odd + " " + even

n = int(input().strip())

i= 0

while i < n:
    msg = input().strip()
    print(split(msg))
    i += 1
