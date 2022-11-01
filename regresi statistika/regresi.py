x = [39,47,45,47,65,46,67,42,67,56,64,56,59,34,42,48,45,17,20,19,36,50,39,21,44,53,63,29,25,69]
y = [144,220,138,145,162,142,170,124,158,154,162,150,140,110,128,130,135,114,116,124,136,142,120,120,160,158,144,130,125,175]

# menentukan persamaan regresi linear
def linear_regression(x, y):
    n = len(x)
    x_jumlah = sum(x)
    y_jumlah = sum(y)
    xy_jumlah = sum([a*b for a,b in zip(x,y)])

    x2_jumlah = sum([a*a for a in x])
    
    a = (n*xy_jumlah - x_jumlah*y_jumlah)/(n*x2_jumlah - x_jumlah*x_jumlah)

    b = (x2_jumlah*y_jumlah - x_jumlah*xy_jumlah)/(n*x2_jumlah - x_jumlah*x_jumlah)


    print('x\ty\tx2\ty2\txy')
    for i in range(len(x)):
        print(x[i], '\t', y[i], '\t', x[i]*x[i], '\t', y[i]*y[i], '\t', x[i]*y[i])

    return a, b



print(linear_regression(x, y))
