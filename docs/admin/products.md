# Manajemen Produk
Adalah menu/fitur untuk melakukan pengaturan Produk yaitu:

- Daftar dan Pencarian Produk
- Input Produk Baru
- Lihat Detail Produk
- Edit Produk
- Cetak Daftar Harga

## Daftar dan Pencarian Produk
Adalah Daftar Produk yang terdata pada sistem.
Akses melalui menu **Produk** --> **Cari Produk**
![Daftar Produk](/img/products/daftar-cari-produk-1.png)

Keterangan Gambar:

1. Tombol **Input Produk Baru** untuk menambah Produk
* Kolom **Pencarian Produk**
* Daftar Produk
* Tombol **Detail Produk** untuk melihat detail produk
* Tombol <span class="btn btn-danger btn-xs">x</span> untuk menghapus produk (*tombol ini muncul jika stok produk kosong*)
* Daftar Halaman adalah link menuju daftar produk pada halaman berikutnya (setiap halaman terdapat 25 daftar Produk)

## Input Produk
1. Klik tombol **Input Produk Baru**
* Isikan **Nama Produk**, Deskripsi, pilih **Satuan Produk**, jumlah **Stok**, Harga **Modal**, dan **Harga Jual**
* Klik tombol **Input Produk**
![Input Produk](/img/products/input-produk-1.png)

## Detail Produk
![Detail Produk](/img/products/detail-produk-1.png)
Pada halaman ini, **Admin** dapat melakukan:

1. Tambah Satuan Produk
* Edit Stok dan Harga
* Konversi Satuan Produk
* Mutasi Stok
* Edit Nama dan Deskripsi Produk

## Tambah Satuan
1. Lihat bagian **Konversi Satuan**
* Pada **Tambah Satuan Baru**, pilih Satuan yang ingin ditambahkan
* Klik tombol **Tambah**
![Tambah Satuan Produk](/img/products/tambah-satuan-produk-1.png)

## Edit Stok dan Harga
1. Lihat bagian **Stok dan Harga**
* Ubah **Stok** sesuai Satuan yang diinginkan
* Ubah **Harga Modal** dan **Harga Jual**
* Klik tombol **Update** untuk menyimpan perubahan
![Stok dan Harga Produk](/img/products/stok-harga-1.png)

## Konversi Satuan
Adalah fungsi untuk mengatur Satuan besar dan kecil produk dengan jumlah satuannya.
Misalnya:

* Produk memiliki satuan **Dus** dan **Botol**
* Satu Dus = 10 Botol

Pengaturan Konversi Satuan:

1. Isikan **Angka** konversi dan pilih **Satuan Kecil**-nya
* Klik tombol **Update**
![Konversi Satuan Produk](/img/products/konversi-satuan-produk-1.png)

## Mutasi Stok
Mirip seperti pengoperasian [**Mutasi Stok** pada **Kasir**](/cashier.md#mutasi-stok), untuk **Admin** mutasi stok dapat dilakukan pada halaman **Detail Produk** :

1. Pada bagian **Mutasi Stok**
* Pilih **Dari Satuan**
* Isikan angka **Sejumlah**
* Pilih **Ke Satuan**
* Klik tombol **Mutasikan**
![Sebelum Mutasi](/img/products/mutasi-produk-1.png)
![Setelah Mutasi](/img/products/mutasi-produk-2.png)

## Edit dan Hapus Produk
Untuk mengubah **Nama** dan **Deskripsi** produk:

1. Pada halaman **Detail Produk**, klik tombol **Edit Produk**
* Ubah **Nama** dan **Deskripsi** produk
* Klik tombol **Update Data Produk** untuk menyimpan perubahan
* Tombol **Hapus Produk ini** untuk menghapus Produk dari sistem
![Edit Produk](/img/products/edit-produk-1.png)

!!! warning "Catatan:"
    Penghapusan Produk dari sistem dapat dilakukan jika **Stok** produk telah kosong.

![Hapus Produk](/img/products/hapus-produk-1.png)

## Cetak Daftar Harga
Untuk mencetak daftar harga produk terbaru

1. Buka dengan menu **Produk** --> **Cetak Daftar Harga**
* Klik tombol **Cetak** untuk membuka kotak dialog Cetak/Print
