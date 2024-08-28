// Menghitung bulan saat ini dan tahun
const getCurrentMonthDates = () => {
  const now = new Date();
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();
  return {
    [`${currentMonth} 4th ${year}`]: 0,
    [`${currentMonth} 11th ${year}`]: 0,
    [`${currentMonth} 25th ${year}`]: 0,
  };
};

// Inisialisasi data
const dateCapacityKedubes = getCurrentMonthDates();
const dateCapacityPerusahaan = getCurrentMonthDates();

// Fungsi untuk mendapatkan data tanggal kehadiran dengan kapasitas
export const getDateAttendance = (req, res) => {
  const now = new Date();
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();
  const currentMonthDates = {
    [`${currentMonth} 4th ${year}`]: 0,
    [`${currentMonth} 11th ${year}`]: 0,
    [`${currentMonth} 25th ${year}`]: 0,
  };

  res.json({
    dateAttendanceKedubes: currentMonthDates,
    dateAttendancePerusahaan: currentMonthDates,
  });
};
