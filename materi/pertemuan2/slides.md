---
theme: default
highlighter: shiki
lineNumbers: false
monaco: dev
drawings:
  persist: false
download: true
css: unocss
---

# Dasar-dasar HTML

## Pertemuan 1

<div class="absolute bottom-0">
  <p class="text-sm ml-auto">by: <a href="https://anhzf.dev" target="_blank">anhzf.dev</a></p>
</div>


---

# Pick your weapon ⚔️

- Modern Browser (Rekomendasi: Chrome/Mozilla/MsEdge/Safari 🤪)
- [Visual Studio Code](https://code.visualstudio.com)

## Direkomendasikan
- Ekstensi vscode [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)


---

# Referensi Belajar

- https://developer.mozilla.org/en-US/docs/Web/HTML
- https://www.w3schools.com/html


---

# Jadi, apa itu HTML?

- 👉 *Hyper Text Markup Language* (HTML) adalah kode yang digunakan untuk membuat dan mengelola halaman web.
- 👉 Digunakan untuk mendefinisikan struktur konten halaman web.
- 👉 HTML terdiri dari beberapa rangkaian [elemen](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).
- 👉 HTML memberi tahu ke Browser bagaimana menampilkan konten.

## Contoh
Misalkan memiliki paragraf berikut:
```
SMPIT Nur Hidayah
```

Untuk membuat paragraf di atas dalam web menggunakan HTML, kita bisa menggunakan tag `<p>`:
```html
<p>SMPIT Nur Hidayah</p>
```


---

# Anatomi Elemen HTML
Pada dasarnya elemen pada HTML memiliki **Tag pembuka**, **Konten**, **Tag penutup**

![Anatomi HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-small.png)

- Tag pembuka: terdiri dari nama elemen yang ditutup dengan kurung sudut (`<` dan `>`).
- Konten: berisi konten yang akan ditampilkan di halaman web. Dapat berupa hanya teks ataupun Elemen HTML.
- Tag penutup: penanda untuk menutup elemen yang dibuka dengan tag pembuka.

---

# Elemen HTML dengan Atribut
Atribut pada elemen HTML diletakkan pada **Tag pembuka** setelah nama elemen.

![Anatomi HTML dengan atribut](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-attribute-small.png)


---

# Elemen Kosong
Beberapa elemen HTML tidak dapat memiliki konten, sehingga tidak memerlukan tag penutup.

contoh: `<img`, `<br>`, `<hr>`

```html
<img src="images/firefox-icon.png" alt="My test image">
```


---
layout: two-cols
---

# Contoh dokumen HTML

```html {all|1|2,12|3,5|4|6-11|all}
<!DOCTYPE html>
<html>
  <head>
    <title>Judul halaman</title>
  </head>
  <body>

    <h1>My First Heading</h1>
    <p>My first paragraph.</p>

  </body>
</html>
```

::right::

<div class="demo">
  <iframe src="/demos/example_html-document.html" class="demo__content"></iframe>
</div>


---
layout: two-cols
---

# Elemen Teks pada HTML

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<b>Teks tebal</b>
<i>Teks miring</i>
<u>Teks garis bawah</u>
<small>Teks kecil</small>
<sub>Teks sub</sub>
<sup>Teks sup</sup>
<code>Teks kode</code>
<blockquote>Teks blok kutip</blockquote>
```

Referensi: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), [w3schools](https://www.w3schools.com/tags/default.asp)

::right::

<div class="demo">
  <iframe src="/demos/html-typography.html" class="demo__content"></iframe>
</div>


---
layout: two-cols
---

# Elemen Link pada HTML
Untuk membuat link pada HTML, kita bisa menggunakan tag `<a>`, dengan atribut `href` yang berisi URL tujuan.

```html
<a href="https://www.google.com">Link ke Google</a>
```

::right::

<div class="demo">
  <iframe src="/demos/html-link.html" class="demo__content"></iframe>
</div>


---
layout: two-cols
---

# Elemen Gambar pada HTML
Untuk membuat gambar pada HTML, kita bisa menggunakan tag `<img>`, dengan atribut `src` yang berisi URL gambar.

```html
<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
  alt="Google"
  width="100%">
```

::right::

<div class="demo">
  <iframe src="/demos/html-image.html" class="demo__content"></iframe>
</div>


---
layout: two-cols
---

# Elemen List pada HTML
Untuk membuat list pada HTML, kita bisa menggunakan tag `<ul>` atau `<ol>`.

`<ul>` digunakan untuk list tidak berurutan, sedangkan `<ol>` digunakan untuk list berurutan.

Untuk membuat item didalam list, kita bisa menggunakan tag `<li>`.

```html
<h1>List tidak berurutan</h1>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<h1>List berurutan</h1>
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

::right::

<div class="demo">
  <iframe src="/demos/html-list.html" class="demo__content"></iframe>
</div>


---

# Praktek? Gass!!

Silakan membuat halaman web dengan struktur kurang lebih seperti ini:
[Lihat full](/demos/html-practice1.html)

<div class="demo p-0 max-h-45vh">
  <iframe src="/demos/html-practice1.html" class="demo__content"></iframe>
</div>


---

# Ketentuan
Minimal harus terdapat:

- ✅ Gambar
- ✅ Link
- ✅ Teks Heading
- ✅ Paragraf
- ✅ List
- ✅ Elemen teks lainnya (bold, italic, underline, small, dll.)


---

# Langkah perngerjaan

- Buat folder projek baru (bebas), kemudian buka VSCode.
- Pada menu file di pojok kiri atas pilih `Open Folder`, arahkan ke folder yang telah dibuat sebelumnya.
- Buat file dengan nama bebas diakhiri dengan `.html` (saran: index.html).
- Good luck 😁