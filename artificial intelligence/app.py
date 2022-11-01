def nilai(a, b):
    if a in ['A', 'B'] and b in ['A', 'B']:
        return 7
    elif a in ['A', 'E'] and b in ['A', 'E']:
        return 6
    elif a in ['A', 'D'] and b in ['A', 'D']:
        return 9
    elif a in ['A', 'C'] and b in ['A', 'C']:
        return 10
    elif a in ['B', 'C'] and b in ['B', 'C']:
        return 5
    elif a in ['B', 'D'] and b in ['B', 'D']:
        return 3
    elif a in ['C', 'D'] and b in ['C', 'D']:
        return 6
    elif a in ['C', 'E'] and b in ['C', 'E']:
        return 4
    elif a in ['D', 'E'] and b in ['D', 'E']:
        return 7
    elif a in ['E', 'B'] and b in ['E', 'B']:
        return 8

def permutasi(a):
    if len(a) == 1:
        return [a]
    else:
        result = []
        for i in range(len(a)):
            b = a[:i] + a[i+1:]
            for p in permutasi(b):
                result.append(a[i:i+1] + p)
        return result

def GT(a):
    b = []
    c = []
    for i in permutasi(a):
        t = 0
        for j in range(len(i)):
            if j == len(i) - 1:
                break
            t += nilai(i[j], i[j+1])
        b.append(i)
        c.append(t)
    d = 0
    e = b[0]
    f = c[0]
    print('No\tL\tPL\tLT\tPLT')
    for i in b:
        print(d+1, end='\t')
        g = ''
        for j in i:
            print(j, end='')
            g += j
        print(f'\t{c[d]}', end='')
        if d > 0:
            if f > c[d]:
                e = g
                f = c[d]
        print(f'\t{e}', end='')
        print(f'\t{f}', end='')
        print()
        d += 1

a = ['1','2','3','4','5','6']
print(permutasi(a))