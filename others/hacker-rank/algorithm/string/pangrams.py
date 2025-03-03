def is_pangram(s):
    if not (set('abcdefghijklmnopqrstuvwxyz') - set(s.lower())):
        print("pangram")
    else:
        print("not pangram")

s = input().strip()
is_pangram(s)
