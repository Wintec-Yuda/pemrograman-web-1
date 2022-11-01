nim = 1

prima = False

# menentukan nim apakah bilangan prima
for i in range(2, nim):
    if nim % i == 0:
        prima = True
        break

if prima:
    print("Bilangan Prima")
else:
    print("Bukan Bilangan Prima")