export const PerusahaanTemplate = (formData) => {
    return `
      <p>Halo,</p>
      <p>Berikut adalah laporan verifikasi untuk Perusahaan:</p>
      <div style="background-color: #f0f0f0; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
        <p><strong>Nama dan Jabatan Pengisi Form:</strong> ${formData.position}</p>
        <p><strong>Bersedia untuk mengikuti kegiatan Business Gathering Member PTE bersama Perwakilan Negara Asing di Indonesia</strong> </p>
        <hr />
        <p><strong>Details for Perusahaan:</strong></p>
        <ul>
          <li><strong>Nama Perusahaan:</strong> ${formData.NamePerusahaan}</li>
          <li><strong>Produk Perusahaan:</strong> ${formData.ProdukPerusahaan}</li>
          <li><strong>Position Perusahaan:</strong> ${formData.positionPerusahaan}</li>
          <li><strong>No. Handphone Perusahaan:</strong> ${formData.noPerusahaan}</li>
          <li><strong>Tanggal Kedatangan:</strong> ${formData.dateAttendance}</li>
        </ul>
        <hr />
        <p><strong>Diharapkan Datang pada tangal yang telah di pilih</strong></p>
      </div>
    `;
};
