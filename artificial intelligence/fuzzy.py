# Nama  : Mochamad Yuda Trinurais
# NPM   : 2013020006
# Kelas : 2A

# data
data_permintaan = [2460, 2200, 2350, 2600, 2100, 3000, 3280, 3500, 2960, 3400, 2900, 2250]
data_persediaan = [250, 230, 100, 150, 165, 128, 190, 140, 130, 170, 145, 165]
data_produksi = [2300, 3400, 2200, 4050, 4500, 5000, 2300, 3560, 1000, 2580, 4210, 3300]

data_permintaan_max = max(data_permintaan)
data_persediaan_max = max(data_persediaan)
data_produksi_max = max(data_produksi)

data_permintaan_min = min(data_permintaan)
data_persediaan_min = min(data_persediaan)
data_produksi_min = min(data_produksi)

x_permintaan = 3200
x_persediaan = 140

print('Data yang diketahui')

print('%-10s | %-10s | %-10s | %-s' % ('Bulan', 'Permintaan', 'Persediaan', 'Produksi'))
print('-' * 50)
for i in range(len(data_permintaan)):
    print('%-10s | %-10s | %-10s | %-s' % (i+1, data_permintaan[i], data_persediaan[i], data_produksi[i]))
print('-' * 50)

print('\n')
print(f'max permintaan : {data_permintaan_max}')
print(f'max persediaan : {data_persediaan_max}')
print(f'max produksi : {data_produksi_max}')
print(f'min permintaan : {data_permintaan_min}')
print(f'min persediaan : {data_persediaan_min}')
print(f'min produksi : {data_produksi_min}')

input('\n\nTekan enter untuk melanjutkan...')

print('\n')
print(f'permintaan : {x_permintaan}')
print(f'persediaan : {x_persediaan}')
print('Berapa produksi?')

input('\n\nTekan enter untuk melanjutkan...')

print(f'x produksi (min) : {data_produksi_min}')
print(f'x produksi (max) : {data_produksi_max}')

input('\n\nTekan enter untuk melanjutkan...')

# rumus fuzzy
def permintaan_turun(x):
    return (data_permintaan_max - x) / (data_permintaan_max - data_permintaan_min)
def permintaan_naik(x):
    return (x - data_permintaan_min) / (data_permintaan_max - data_permintaan_min)
def persediaan_sedikit(x):
    return (data_persediaan_max - x) / (data_persediaan_max - data_persediaan_min)
def persediaan_banyak(x):
    return (x - data_persediaan_min) / (data_persediaan_max - data_persediaan_min)

# variable
M_permintaan_turun = permintaan_turun(x_permintaan)
M_permintaan_naik = permintaan_naik(x_permintaan)
M_persediaan_sedikit = persediaan_sedikit(x_persediaan)
M_persediaan_banyak = persediaan_banyak(x_persediaan)



print('\n')
print('definisi variable')
print(f'permintaan turun(x) = {M_permintaan_turun}')
print(f'permintaan naik(x) = {M_permintaan_naik}')
print(f'persediaan sedikit(x) = {M_persediaan_sedikit}')
print(f'persediaan banyak(x) = {M_persediaan_banyak}')

print('Berapa M produksi berkurang?')
print('Berapa M produksi bertambah?')

input('\n\nTekan enter untuk melanjutkan...')

# inferensi
def alpha_and(x1, x2):
    return min([x1, x2])

alpha1 = alpha_and(M_permintaan_turun, M_persediaan_banyak)
alpha2 = alpha_and(M_permintaan_turun, M_persediaan_sedikit)
alpha3 = alpha_and(M_permintaan_naik, M_persediaan_banyak)
alpha4 = alpha_and(M_permintaan_naik, M_persediaan_sedikit)

print('\n')
print('definisi inferensi')
print(f'alpha 1 = {alpha1}')
print(f'alpha 2 = {alpha2}')
print(f'alpha 3 = {alpha3}')
print(f'alpha 4 = {alpha4}')

input('\n\nTekan enter untuk melanjutkan...')

def produksi_berkurang(alpha):
    return data_produksi_max - (alpha * (data_produksi_max - data_produksi_min))

def produksi_bertambah(alpha):
    return (alpha * (data_produksi_max - data_produksi_min) + data_produksi_min)

z1 = produksi_berkurang(alpha1)
z2 = produksi_berkurang(alpha2)
z3 = produksi_bertambah(alpha3)
z4 = produksi_bertambah(alpha4)

print('\n')
print(f'z1 = {z1}')
print(f'z2 = {z2}')
print(f'z3 = {z3}')
print(f'z4 = {z4}')

input('\n\nTekan enter untuk melanjutkan...')

print('\n')
print('defuzikasi')

z = (alpha1 * z1 + alpha2 * z2 + alpha3 * z3 + alpha4 * z4) / (alpha1 + alpha2 + alpha3 + alpha4)
print(f'z = {z}')

print('\n')
print(f'permintaan : {x_permintaan}')
print(f'persediaan : {x_persediaan}')
print(f'jumlah produksi: {round(z)}')