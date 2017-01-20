# Panduan Aplikasi Kasir (Penjualan)

Repositori ini adalah dokumentasi/panduan Aplikasi Kasir yang dibuat dengan [mkdocs](http://www.mkdocs.org).

Branch `master` adalah source dokumentasi dengan format markdown dan branch `gh-pages` adalah source static html yang didapatkan setelah eksekusi perintah `mkdocs gh-deploy`

## Cara Push ke Github Pages
1.  Buat repository (kosong) baru di github
*  Pada terminal, checkout ke branch `master`
*  `git remote add origin` ke repository di github
*  `mkdocs gh-deploy`
    *  mkdocs akan membuat branch `gh-pages`
    *  mkdocs mem-push ke branch `gh-pages` di repository github
*  Dokumentasi selesai ter-*deploy* ke github pages.