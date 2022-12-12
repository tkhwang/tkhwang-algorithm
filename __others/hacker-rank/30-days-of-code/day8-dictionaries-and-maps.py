n = int(input().strip())

dict = dict()

i = 0
while i < n :
    data = input().strip()
    #print(data)
    key, value = data.split(' ')
    dict[key] = value
    i += 1

i = 0
while i < n :
    data = input().strip()
    #print(data)
    if data in dict:
        print("%s=%s" % (data, dict[data]))
    else:
        print("Not found")
    i += 1
