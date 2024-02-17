"use client"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

// Komponen InputSearch
const InputSearch = () => {
  const searchRef = useRef(); // Membuat referensi yang akan digunakan untuk menyimpan nilai input
  const router = useRouter(); // Menginisialisasi hook useRouter untuk navigasi

  // Fungsi handleSearch akan dipanggil saat tombol pencarian ditekan
  const handleSearch = (event) => {
    event.preventDefault(); // Mencegah aksi default dari form (submit)
    const keyword = searchRef.current.value; // Mendapatkan nilai input dari referensi
    router.push(`/search/${keyword}`); // Melakukan navigasi ke halaman pencarian dengan kata kunci yang dimasukkan
  };

  // Fungsi handleKeyPress akan dipanggil saat sebuah tombol ditekan dalam input
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') { // Memeriksa jika tombol yang ditekan adalah "Enter"
      handleSearch(event); // Memanggil fungsi handleSearch jika "Enter" ditekan
    }
  };

  // Render komponen InputSearch
  return (
    <div className="relative text-base font-light">
      {/* Input untuk melakukan pencarian, nilai input akan disimpan menggunakan useRef */}
      <input
        placeholder="Search anime in here "
        className="w-full p-2 rounded"
        ref={searchRef}
        style={{ color: 'black' }}
        onKeyPress={handleKeyPress} // Menambahkan event listener untuk tombol key press
      />

      {/* Tombol pencarian dengan ikon kaca pembesar, ketika ditekan akan memanggil fungsi handleSearch */}
      <button className="absolute top-2 right-2" onClick={handleSearch}>
        <MagnifyingGlass size={25} style={{ color: 'black' }} />
      </button>
    </div>
  );
};

export default InputSearch; // Ekspor komponen InputSearch agar dapat digunakan di tempat lain dalam aplikasi
