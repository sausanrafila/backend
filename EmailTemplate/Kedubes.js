export const KedubesTemplate = (formData) => {
    return `
      <p>Halo,</p>
      <p>Berikut adalah laporan Verifikasi untuk kedubes:</p>
      <div style="background-color: #f0f0f0; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
        <p><strong>Nama dan Jabatan Pengisi Form:</strong> ${formData.position}</p>
        <p><strong>bersedia untuk mengikuti kegiatan Business Gathering Member PTE bersama Perwakilan Negara Asing di Indonesia:</strong> </p>
        <p><strong>Occupation:</strong> ${formData.occupation}</p>
        <hr />
        <p><strong>Details for Kedubes:</strong></p>
        <ul>
          <li><strong>Nama Kedubes:</strong> ${formData.NameKedubes}</li>
          <li><strong>PIC Kedubes:</strong> ${formData.PICKedubes}</li>
          <li><strong>No. Handphone Kedubes:</strong> ${formData.NoKedubes}</li>
          <li><strong>Tanggal Kedatangan:</strong> ${formData.dateAttendance}</li>
        </ul>
        <hr />
        <p><strong>Diharapkan Datang pada tangal yang telah di pilih</strong></p>
      </div>
    `;
};
