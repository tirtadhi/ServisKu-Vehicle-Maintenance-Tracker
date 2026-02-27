/* =============================================
   ServisKu - Vehicle Maintenance Tracker
   Main Application Logic
   ============================================= */

// ============ DATA: Komponen Kendaraan ============

const KOMPONEN_MOTOR_MATIC = [
    { id: 'oli_mesin',       nama: 'Oli Mesin',            icon: '🛢️', intervalKm: 2000,  intervalHari: 90,   kategori: 'Mesin' },
    { id: 'oli_gardan',      nama: 'Oli Gardan/Transmisi', icon: '⚙️', intervalKm: 8000,  intervalHari: 365,  kategori: 'Mesin' },
    { id: 'busi',            nama: 'Busi',                 icon: '🔥', intervalKm: 8000,  intervalHari: 365,  kategori: 'Mesin' },
    { id: 'filter_udara',    nama: 'Filter Udara',         icon: '💨', intervalKm: 8000,  intervalHari: 365,  kategori: 'Mesin' },
    { id: 'vbelt',           nama: 'V-Belt',               icon: '🔗', intervalKm: 15000, intervalHari: 545,  kategori: 'Transmisi' },
    { id: 'roller',          nama: 'Roller',               icon: '🎱', intervalKm: 15000, intervalHari: 545,  kategori: 'Transmisi' },
    { id: 'per_cvt',         nama: 'Per CVT / Per Sentrifugal', icon: '🌀', intervalKm: 20000, intervalHari: 730, kategori: 'Transmisi' },
    { id: 'kampas_ganda',    nama: 'Kampas Ganda (Kopling)', icon: '🥏', intervalKm: 20000, intervalHari: 730, kategori: 'Transmisi' },
    { id: 'kampas_rem_dpn',  nama: 'Kampas Rem Depan',    icon: '🛑', intervalKm: 15000, intervalHari: 545,  kategori: 'Rem' },
    { id: 'kampas_rem_blk',  nama: 'Kampas Rem Belakang', icon: '🛑', intervalKm: 15000, intervalHari: 545,  kategori: 'Rem' },
    { id: 'minyak_rem',      nama: 'Minyak Rem',          icon: '💧', intervalKm: 20000, intervalHari: 730,  kategori: 'Rem' },
    { id: 'ban_depan',       nama: 'Ban Depan',            icon: '🛞', intervalKm: 20000, intervalHari: 730,  kategori: 'Ban & Roda' },
    { id: 'ban_belakang',    nama: 'Ban Belakang',         icon: '🛞', intervalKm: 15000, intervalHari: 545,  kategori: 'Ban & Roda' },
    { id: 'bearing_roda',    nama: 'Bearing Roda',         icon: '🔩', intervalKm: 30000, intervalHari: 1095, kategori: 'Ban & Roda' },
    { id: 'aki',             nama: 'Aki / Baterai',        icon: '🔋', intervalKm: 30000, intervalHari: 545,  kategori: 'Kelistrikan' },
    { id: 'lampu_depan',     nama: 'Lampu Depan (Bohlam)', icon: '💡', intervalKm: 30000, intervalHari: 730,  kategori: 'Kelistrikan' },
    { id: 'lampu_belakang',  nama: 'Lampu Belakang',       icon: '💡', intervalKm: 40000, intervalHari: 1095, kategori: 'Kelistrikan' },
    { id: 'coolant',         nama: 'Coolant / Air Radiator', icon: '🧊', intervalKm: 20000, intervalHari: 365, kategori: 'Pendingin' },
    { id: 'selang_radiator', nama: 'Selang Radiator',      icon: '🪠', intervalKm: 40000, intervalHari: 1095, kategori: 'Pendingin' },
    { id: 'kabel_gas',       nama: 'Kabel Gas',            icon: '🧵', intervalKm: 20000, intervalHari: 730,  kategori: 'Lain-lain' },
    { id: 'knalpot',         nama: 'Knalpot',              icon: '💨', intervalKm: 40000, intervalHari: 1095, kategori: 'Lain-lain' },
    { id: 'shock_dpn',       nama: 'Shock Depan',          icon: '🔧', intervalKm: 30000, intervalHari: 1095, kategori: 'Lain-lain' },
    { id: 'shock_blk',       nama: 'Shock Belakang',       icon: '🔧', intervalKm: 30000, intervalHari: 1095, kategori: 'Lain-lain' },
];

const KOMPONEN_MOTOR_MANUAL = [
    { id: 'oli_mesin',       nama: 'Oli Mesin',            icon: '🛢️', intervalKm: 2000,  intervalHari: 90,   kategori: 'Mesin' },
    { id: 'oli_gardan',      nama: 'Oli Gardan/Transmisi', icon: '⚙️', intervalKm: 10000, intervalHari: 365,  kategori: 'Mesin' },
    { id: 'busi',            nama: 'Busi',                 icon: '🔥', intervalKm: 8000,  intervalHari: 365,  kategori: 'Mesin' },
    { id: 'filter_udara',    nama: 'Filter Udara',         icon: '💨', intervalKm: 8000,  intervalHari: 365,  kategori: 'Mesin' },
    { id: 'rantai',          nama: 'Rantai & Gear Set',    icon: '⛓️', intervalKm: 15000, intervalHari: 545,  kategori: 'Transmisi' },
    { id: 'kopling',         nama: 'Kampas Kopling',       icon: '🥏', intervalKm: 20000, intervalHari: 730,  kategori: 'Transmisi' },
    { id: 'kabel_kopling',   nama: 'Kabel Kopling',        icon: '🧵', intervalKm: 20000, intervalHari: 730,  kategori: 'Transmisi' },
    { id: 'kampas_rem_dpn',  nama: 'Kampas Rem Depan',    icon: '🛑', intervalKm: 15000, intervalHari: 545,  kategori: 'Rem' },
    { id: 'kampas_rem_blk',  nama: 'Kampas Rem Belakang', icon: '🛑', intervalKm: 15000, intervalHari: 545,  kategori: 'Rem' },
    { id: 'minyak_rem',      nama: 'Minyak Rem',          icon: '💧', intervalKm: 20000, intervalHari: 730,  kategori: 'Rem' },
    { id: 'ban_depan',       nama: 'Ban Depan',            icon: '🛞', intervalKm: 20000, intervalHari: 730,  kategori: 'Ban & Roda' },
    { id: 'ban_belakang',    nama: 'Ban Belakang',         icon: '🛞', intervalKm: 15000, intervalHari: 545,  kategori: 'Ban & Roda' },
    { id: 'bearing_roda',    nama: 'Bearing Roda',         icon: '🔩', intervalKm: 30000, intervalHari: 1095, kategori: 'Ban & Roda' },
    { id: 'aki',             nama: 'Aki / Baterai',        icon: '🔋', intervalKm: 30000, intervalHari: 545,  kategori: 'Kelistrikan' },
    { id: 'lampu_depan',     nama: 'Lampu Depan (Bohlam)', icon: '💡', intervalKm: 30000, intervalHari: 730,  kategori: 'Kelistrikan' },
    { id: 'lampu_belakang',  nama: 'Lampu Belakang',       icon: '💡', intervalKm: 40000, intervalHari: 1095, kategori: 'Kelistrikan' },
    { id: 'coolant',         nama: 'Coolant / Air Radiator', icon: '🧊', intervalKm: 20000, intervalHari: 365, kategori: 'Pendingin' },
    { id: 'selang_radiator', nama: 'Selang Radiator',      icon: '🪠', intervalKm: 40000, intervalHari: 1095, kategori: 'Pendingin' },
    { id: 'kabel_gas',       nama: 'Kabel Gas',            icon: '🧵', intervalKm: 20000, intervalHari: 730,  kategori: 'Lain-lain' },
    { id: 'knalpot',         nama: 'Knalpot',              icon: '💨', intervalKm: 40000, intervalHari: 1095, kategori: 'Lain-lain' },
    { id: 'shock_dpn',       nama: 'Shock Depan',          icon: '🔧', intervalKm: 30000, intervalHari: 1095, kategori: 'Lain-lain' },
    { id: 'shock_blk',       nama: 'Shock Belakang',       icon: '🔧', intervalKm: 30000, intervalHari: 1095, kategori: 'Lain-lain' },
];

const KOMPONEN_MOBIL_MATIC = [
    { id: 'oli_mesin',       nama: 'Oli Mesin',            icon: '🛢️', intervalKm: 5000,  intervalHari: 90,   kategori: 'Mesin' },
    { id: 'oli_transmisi',   nama: 'Oli Transmisi Matic',  icon: '⚙️', intervalKm: 40000, intervalHari: 730,  kategori: 'Mesin' },
    { id: 'oli_gardan',      nama: 'Oli Gardan',           icon: '⚙️', intervalKm: 40000, intervalHari: 730,  kategori: 'Mesin' },
    { id: 'filter_oli',      nama: 'Filter Oli',           icon: '🧲', intervalKm: 10000, intervalHari: 180,  kategori: 'Mesin' },
    { id: 'filter_udara',    nama: 'Filter Udara Mesin',   icon: '💨', intervalKm: 20000, intervalHari: 365,  kategori: 'Mesin' },
    { id: 'filter_ac',       nama: 'Filter AC / Kabin',    icon: '❄️', intervalKm: 15000, intervalHari: 365,  kategori: 'Mesin' },
    { id: 'filter_bbm',      nama: 'Filter BBM / Bensin',  icon: '⛽', intervalKm: 40000, intervalHari: 730,  kategori: 'Mesin' },
    { id: 'busi',            nama: 'Busi',                 icon: '🔥', intervalKm: 20000, intervalHari: 365,  kategori: 'Mesin' },
    { id: 'timing_belt',     nama: 'Timing Belt / Chain',  icon: '🔗', intervalKm: 80000, intervalHari: 1460, kategori: 'Mesin' },
    { id: 'fan_belt',        nama: 'Fan Belt / V-Belt',    icon: '🔗', intervalKm: 40000, intervalHari: 730,  kategori: 'Mesin' },
    { id: 'kampas_rem_dpn',  nama: 'Kampas Rem Depan',    icon: '🛑', intervalKm: 30000, intervalHari: 730,  kategori: 'Rem' },
    { id: 'kampas_rem_blk',  nama: 'Kampas Rem Belakang', icon: '🛑', intervalKm: 40000, intervalHari: 1095, kategori: 'Rem' },
    { id: 'minyak_rem',      nama: 'Minyak Rem',          icon: '💧', intervalKm: 40000, intervalHari: 730,  kategori: 'Rem' },
    { id: 'disk_rem_dpn',    nama: 'Piringan/Disk Rem Depan', icon: '💿', intervalKm: 60000, intervalHari: 1460, kategori: 'Rem' },
    { id: 'disk_rem_blk',    nama: 'Piringan/Disk Rem Belakang', icon: '💿', intervalKm: 80000, intervalHari: 1825, kategori: 'Rem' },
    { id: 'ban_dpn',         nama: 'Ban Depan',            icon: '🛞', intervalKm: 40000, intervalHari: 1095, kategori: 'Ban & Roda' },
    { id: 'ban_blk',         nama: 'Ban Belakang',         icon: '🛞', intervalKm: 40000, intervalHari: 1095, kategori: 'Ban & Roda' },
    { id: 'spooring_balancing', nama: 'Spooring & Balancing', icon: '🎯', intervalKm: 10000, intervalHari: 180, kategori: 'Ban & Roda' },
    { id: 'rotasi_ban',      nama: 'Rotasi Ban',           icon: '🔄', intervalKm: 10000, intervalHari: 180,  kategori: 'Ban & Roda' },
    { id: 'aki',             nama: 'Aki / Baterai',        icon: '🔋', intervalKm: 60000, intervalHari: 730,  kategori: 'Kelistrikan' },
    { id: 'lampu_depan',     nama: 'Lampu Depan',          icon: '💡', intervalKm: 50000, intervalHari: 730,  kategori: 'Kelistrikan' },
    { id: 'wiper',           nama: 'Wiper Blade',          icon: '🧹', intervalKm: 20000, intervalHari: 365,  kategori: 'Lain-lain' },
    { id: 'coolant',         nama: 'Coolant / Air Radiator', icon: '🧊', intervalKm: 40000, intervalHari: 730, kategori: 'Pendingin' },
    { id: 'freon_ac',        nama: 'Freon AC',             icon: '❄️', intervalKm: 40000, intervalHari: 730,  kategori: 'Pendingin' },
    { id: 'minyak_ps',       nama: 'Minyak Power Steering', icon: '🫗', intervalKm: 40000, intervalHari: 730, kategori: 'Lain-lain' },
    { id: 'shock_dpn',       nama: 'Shock Absorber Depan', icon: '🔧', intervalKm: 50000, intervalHari: 1460, kategori: 'Lain-lain' },
    { id: 'shock_blk',       nama: 'Shock Absorber Belakang', icon: '🔧', intervalKm: 50000, intervalHari: 1460, kategori: 'Lain-lain' },
    { id: 'karet_support',   nama: 'Karet Support Shock',  icon: '⬛', intervalKm: 50000, intervalHari: 1460, kategori: 'Lain-lain' },
];

const KOMPONEN_MOBIL_MANUAL = [
    { id: 'oli_mesin',       nama: 'Oli Mesin',            icon: '🛢️', intervalKm: 5000,  intervalHari: 90,   kategori: 'Mesin' },
    { id: 'oli_transmisi',   nama: 'Oli Transmisi Manual', icon: '⚙️', intervalKm: 40000, intervalHari: 730,  kategori: 'Mesin' },
    { id: 'oli_gardan',      nama: 'Oli Gardan',           icon: '⚙️', intervalKm: 40000, intervalHari: 730,  kategori: 'Mesin' },
    { id: 'filter_oli',      nama: 'Filter Oli',           icon: '🧲', intervalKm: 10000, intervalHari: 180,  kategori: 'Mesin' },
    { id: 'filter_udara',    nama: 'Filter Udara Mesin',   icon: '💨', intervalKm: 20000, intervalHari: 365,  kategori: 'Mesin' },
    { id: 'filter_ac',       nama: 'Filter AC / Kabin',    icon: '❄️', intervalKm: 15000, intervalHari: 365,  kategori: 'Mesin' },
    { id: 'filter_bbm',      nama: 'Filter BBM / Bensin',  icon: '⛽', intervalKm: 40000, intervalHari: 730,  kategori: 'Mesin' },
    { id: 'busi',            nama: 'Busi',                 icon: '🔥', intervalKm: 20000, intervalHari: 365,  kategori: 'Mesin' },
    { id: 'timing_belt',     nama: 'Timing Belt / Chain',  icon: '🔗', intervalKm: 80000, intervalHari: 1460, kategori: 'Mesin' },
    { id: 'fan_belt',        nama: 'Fan Belt / V-Belt',    icon: '🔗', intervalKm: 40000, intervalHari: 730,  kategori: 'Mesin' },
    { id: 'kopling',         nama: 'Kampas Kopling',       icon: '🥏', intervalKm: 60000, intervalHari: 1460, kategori: 'Transmisi' },
    { id: 'master_kopling',  nama: 'Master Kopling',       icon: '🔧', intervalKm: 80000, intervalHari: 1825, kategori: 'Transmisi' },
    { id: 'kampas_rem_dpn',  nama: 'Kampas Rem Depan',    icon: '🛑', intervalKm: 30000, intervalHari: 730,  kategori: 'Rem' },
    { id: 'kampas_rem_blk',  nama: 'Kampas Rem Belakang', icon: '🛑', intervalKm: 40000, intervalHari: 1095, kategori: 'Rem' },
    { id: 'minyak_rem',      nama: 'Minyak Rem',          icon: '💧', intervalKm: 40000, intervalHari: 730,  kategori: 'Rem' },
    { id: 'disk_rem_dpn',    nama: 'Piringan/Disk Rem Depan', icon: '💿', intervalKm: 60000, intervalHari: 1460, kategori: 'Rem' },
    { id: 'disk_rem_blk',    nama: 'Piringan/Disk Rem Belakang', icon: '💿', intervalKm: 80000, intervalHari: 1825, kategori: 'Rem' },
    { id: 'ban_dpn',         nama: 'Ban Depan',            icon: '🛞', intervalKm: 40000, intervalHari: 1095, kategori: 'Ban & Roda' },
    { id: 'ban_blk',         nama: 'Ban Belakang',         icon: '🛞', intervalKm: 40000, intervalHari: 1095, kategori: 'Ban & Roda' },
    { id: 'spooring_balancing', nama: 'Spooring & Balancing', icon: '🎯', intervalKm: 10000, intervalHari: 180, kategori: 'Ban & Roda' },
    { id: 'rotasi_ban',      nama: 'Rotasi Ban',           icon: '🔄', intervalKm: 10000, intervalHari: 180,  kategori: 'Ban & Roda' },
    { id: 'aki',             nama: 'Aki / Baterai',        icon: '🔋', intervalKm: 60000, intervalHari: 730,  kategori: 'Kelistrikan' },
    { id: 'lampu_depan',     nama: 'Lampu Depan',          icon: '💡', intervalKm: 50000, intervalHari: 730,  kategori: 'Kelistrikan' },
    { id: 'wiper',           nama: 'Wiper Blade',          icon: '🧹', intervalKm: 20000, intervalHari: 365,  kategori: 'Lain-lain' },
    { id: 'coolant',         nama: 'Coolant / Air Radiator', icon: '🧊', intervalKm: 40000, intervalHari: 730, kategori: 'Pendingin' },
    { id: 'freon_ac',        nama: 'Freon AC',             icon: '❄️', intervalKm: 40000, intervalHari: 730,  kategori: 'Pendingin' },
    { id: 'minyak_ps',       nama: 'Minyak Power Steering', icon: '🫗', intervalKm: 40000, intervalHari: 730, kategori: 'Lain-lain' },
    { id: 'shock_dpn',       nama: 'Shock Absorber Depan', icon: '🔧', intervalKm: 50000, intervalHari: 1460, kategori: 'Lain-lain' },
    { id: 'shock_blk',       nama: 'Shock Absorber Belakang', icon: '🔧', intervalKm: 50000, intervalHari: 1460, kategori: 'Lain-lain' },
    { id: 'karet_support',   nama: 'Karet Support Shock',  icon: '⬛', intervalKm: 50000, intervalHari: 1460, kategori: 'Lain-lain' },
];

// ============ Utility Functions ============

function getKomponenList(jenis, transmisi) {
    if (jenis === 'motor') {
        return transmisi === 'matic' ? KOMPONEN_MOTOR_MATIC : KOMPONEN_MOTOR_MANUAL;
    } else {
        return transmisi === 'matic' ? KOMPONEN_MOBIL_MATIC : KOMPONEN_MOBIL_MANUAL;
    }
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function formatNumber(num) {
    return num.toLocaleString('id-ID');
}

function formatCurrency(num) {
    return 'Rp ' + num.toLocaleString('id-ID');
}

function formatDate(dateStr) {
    if (!dateStr) return '-';
    const d = new Date(dateStr);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return d.toLocaleDateString('id-ID', options);
}

function formatDateShort(dateStr) {
    if (!dateStr) return '-';
    const d = new Date(dateStr);
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function daysBetween(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));
}

function todayStr() {
    return new Date().toISOString().split('T')[0];
}

// ============ Data Store ============

const STORAGE_KEY = 'servisku_data';

let appData = {
    vehicles: [],
    history: [],
    settings: {
        darkMode: false,
        warningPct: 30,
        dangerPct: 10
    }
};

function loadData() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            appData = JSON.parse(raw);
            // ensure settings exist
            if (!appData.settings) {
                appData.settings = { darkMode: false, warningPct: 30, dangerPct: 10 };
            }
        }
    } catch (e) {
        console.error('Gagal memuat data:', e);
    }
}

function saveData() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    } catch (e) {
        console.error('Gagal menyimpan data:', e);
    }
}

// ============ Toast Notification ============

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const icons = { success: '✅', danger: '❌', warning: '⚠️', info: 'ℹ️' };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span class="toast-icon">${icons[type] || '✅'}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============ Modal Helpers ============

function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

function showConfirm(title, message, callback) {
    document.getElementById('confirmTitle').textContent = title;
    document.getElementById('confirmMessage').textContent = message;
    openModal('modalConfirm');
    const btn = document.getElementById('btnConfirmYes');
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    newBtn.addEventListener('click', () => {
        closeModal('modalConfirm');
        callback();
    });
}

// ============ Tab Navigation ============

function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    document.querySelector(`.tab[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`tab-${tabName}`).classList.add('active');

    // Refresh tab data
    if (tabName === 'dashboard') refreshDashboard();
    if (tabName === 'kendaraan') refreshVehicleList();
    if (tabName === 'servis') refreshServisForm();
    if (tabName === 'riwayat') refreshRiwayat();
    if (tabName === 'pengaturan') refreshSettings();
}

// ============ Vehicle CRUD ============

let editingVehicleId = null;

function resetVehicleForm() {
    editingVehicleId = null;
    document.getElementById('modalVehicleTitle').textContent = '🏍️ Tambah Kendaraan Baru';
    document.querySelector('input[name="vehicleType"][value="motor"]').checked = true;
    document.querySelector('input[name="transmisi"][value="matic"]').checked = true;
    document.getElementById('vMerk').value = '';
    document.getElementById('vTipe').value = '';
    document.getElementById('vTahun').value = '';
    document.getElementById('vPlat').value = '';
    document.getElementById('vKm').value = '';
    document.getElementById('vWarna').value = '';
}

function saveVehicle() {
    const jenis = document.querySelector('input[name="vehicleType"]:checked').value;
    const transmisi = document.querySelector('input[name="transmisi"]:checked').value;
    const merk = document.getElementById('vMerk').value.trim();
    const tipe = document.getElementById('vTipe').value.trim();
    const tahun = document.getElementById('vTahun').value.trim();
    const plat = document.getElementById('vPlat').value.trim();
    const km = parseInt(document.getElementById('vKm').value) || 0;
    const warna = document.getElementById('vWarna').value.trim();

    if (!merk || !tipe) {
        showToast('Merk dan Tipe harus diisi!', 'warning');
        return;
    }

    if (editingVehicleId) {
        // Edit existing
        const v = appData.vehicles.find(v => v.id === editingVehicleId);
        if (v) {
            v.jenis = jenis;
            v.transmisi = transmisi;
            v.merk = merk;
            v.tipe = tipe;
            v.tahun = tahun;
            v.plat = plat;
            v.km = km;
            v.warna = warna;
            // re-initialize components if type changed
            const komponenList = getKomponenList(jenis, transmisi);
            komponenList.forEach(k => {
                if (!v.komponen[k.id]) {
                    v.komponen[k.id] = { lastKm: 0, lastDate: null };
                }
            });
            showToast('Kendaraan berhasil diperbarui!');
        }
    } else {
        // New vehicle
        const komponenList = getKomponenList(jenis, transmisi);
        const komponen = {};
        komponenList.forEach(k => {
            komponen[k.id] = { lastKm: 0, lastDate: null };
        });

        appData.vehicles.push({
            id: generateId(),
            jenis,
            transmisi,
            merk,
            tipe,
            tahun,
            plat,
            km,
            warna,
            komponen,
            createdAt: todayStr()
        });
        showToast('Kendaraan berhasil ditambahkan!');
    }

    saveData();
    closeModal('modalVehicle');
    refreshVehicleList();
    refreshAllSelects();
    refreshDashboard();
}

function editVehicle(id) {
    const v = appData.vehicles.find(v => v.id === id);
    if (!v) return;
    editingVehicleId = id;
    document.getElementById('modalVehicleTitle').textContent = '✏️ Edit Kendaraan';
    document.querySelector(`input[name="vehicleType"][value="${v.jenis}"]`).checked = true;
    document.querySelector(`input[name="transmisi"][value="${v.transmisi}"]`).checked = true;
    document.getElementById('vMerk').value = v.merk;
    document.getElementById('vTipe').value = v.tipe;
    document.getElementById('vTahun').value = v.tahun;
    document.getElementById('vPlat').value = v.plat;
    document.getElementById('vKm').value = v.km;
    document.getElementById('vWarna').value = v.warna || '';
    openModal('modalVehicle');
}

function deleteVehicle(id) {
    const v = appData.vehicles.find(v => v.id === id);
    if (!v) return;
    showConfirm(
        'Hapus Kendaraan',
        `Yakin ingin menghapus ${v.merk} ${v.tipe} (${v.plat})? Semua data servis terkait juga akan dihapus.`,
        () => {
            appData.vehicles = appData.vehicles.filter(v => v.id !== id);
            appData.history = appData.history.filter(h => h.vehicleId !== id);
            saveData();
            refreshVehicleList();
            refreshAllSelects();
            refreshDashboard();
            showToast('Kendaraan berhasil dihapus!');
        }
    );
}

// ============ Component Status Calculation ============

function getComponentStatus(vehicle, komponenDef) {
    const comp = vehicle.komponen[komponenDef.id];
    if (!comp || comp.lastKm === 0) {
        // Assume it was fresh at km 0 or just bought
        const kmUsed = vehicle.km;
        const pctUsed = (kmUsed / komponenDef.intervalKm) * 100;
        const sisaKm = komponenDef.intervalKm - kmUsed;

        // Also check time
        let daysPassed = 0;
        let pctTime = 0;
        if (comp && comp.lastDate) {
            daysPassed = daysBetween(comp.lastDate, todayStr());
            pctTime = (daysPassed / komponenDef.intervalHari) * 100;
        } else if (vehicle.createdAt) {
            daysPassed = daysBetween(vehicle.createdAt, todayStr());
            pctTime = (daysPassed / komponenDef.intervalHari) * 100;
        }

        const pct = Math.max(pctUsed, pctTime);

        return {
            pctUsed: Math.min(pct, 100),
            sisaKm: Math.max(sisaKm, 0),
            lastKm: comp ? comp.lastKm : 0,
            lastDate: comp ? comp.lastDate : null,
            status: getStatusFromPct(pct)
        };
    }

    const kmSinceService = vehicle.km - comp.lastKm;
    const pctKm = (kmSinceService / komponenDef.intervalKm) * 100;
    const sisaKm = komponenDef.intervalKm - kmSinceService;

    let pctTime = 0;
    if (comp.lastDate) {
        const daysPassed = daysBetween(comp.lastDate, todayStr());
        pctTime = (daysPassed / komponenDef.intervalHari) * 100;
    }

    const pct = Math.max(pctKm, pctTime);

    return {
        pctUsed: Math.min(pct, 100),
        sisaKm: Math.max(sisaKm, 0),
        lastKm: comp.lastKm,
        lastDate: comp.lastDate,
        status: getStatusFromPct(pct)
    };
}

function getStatusFromPct(pct) {
    const dangerPct = 100 - (appData.settings.dangerPct || 10);
    const warningPct = 100 - (appData.settings.warningPct || 30);
    if (pct >= dangerPct) return 'danger';
    if (pct >= warningPct) return 'warning';
    return 'safe';
}

function getStatusIcon(status) {
    if (status === 'danger') return '🔴';
    if (status === 'warning') return '🟡';
    return '🟢';
}

function getStatusLabel(status) {
    if (status === 'danger') return 'Segera Ganti!';
    if (status === 'warning') return 'Hampir Waktunya';
    return 'Masih Aman';
}

function getProgressColor(status) {
    if (status === 'danger') return 'var(--danger)';
    if (status === 'warning') return 'var(--warning)';
    return 'var(--success)';
}

// ============ Refresh Vehicle List ============

function refreshVehicleList() {
    const container = document.getElementById('vehicleList');
    if (appData.vehicles.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🅿️</div>
                <h3>Belum Ada Kendaraan</h3>
                <p>Klik tombol "Tambah Kendaraan" untuk memulai</p>
            </div>`;
        return;
    }

    container.innerHTML = appData.vehicles.map(v => {
        const komponenList = getKomponenList(v.jenis, v.transmisi);
        let dangerCount = 0, warningCount = 0, safeCount = 0;
        komponenList.forEach(k => {
            const s = getComponentStatus(v, k);
            if (s.status === 'danger') dangerCount++;
            else if (s.status === 'warning') warningCount++;
            else safeCount++;
        });

        const icon = v.jenis === 'motor' ? '🏍️' : '🚗';
        const transLabel = v.transmisi === 'matic' ? 'Matic' : 'Manual';

        return `
        <div class="vehicle-card">
            <div class="vehicle-icon">${icon}</div>
            <div class="vehicle-info">
                <div class="vehicle-name">${v.merk} ${v.tipe}</div>
                <div class="vehicle-meta">
                    <span>📅 ${v.tahun || '-'}</span>
                    <span>🔖 ${v.plat || '-'}</span>
                    <span>⚙️ ${transLabel}</span>
                    ${v.warna ? `<span>🎨 ${v.warna}</span>` : ''}
                </div>
                <div class="vehicle-km">📏 ${formatNumber(v.km)} km</div>
                <div class="vehicle-status-badges">
                    ${dangerCount > 0 ? `<span class="badge badge-danger">🔴 ${dangerCount} Segera Ganti</span>` : ''}
                    ${warningCount > 0 ? `<span class="badge badge-warning">🟡 ${warningCount} Hampir</span>` : ''}
                    <span class="badge badge-safe">🟢 ${safeCount} Aman</span>
                </div>
            </div>
            <div class="vehicle-actions">
                <button class="btn btn-primary btn-sm" onclick="showVehicleDetail('${v.id}')">📋 Detail</button>
                <button class="btn btn-secondary btn-sm" onclick="editVehicle('${v.id}')">✏️ Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteVehicle('${v.id}')">🗑️ Hapus</button>
            </div>
        </div>`;
    }).join('');
}

// ============ Vehicle Detail Modal ============

function showVehicleDetail(vehicleId) {
    const v = appData.vehicles.find(v => v.id === vehicleId);
    if (!v) return;

    const komponenList = getKomponenList(v.jenis, v.transmisi);
    const icon = v.jenis === 'motor' ? '🏍️' : '🚗';
    document.getElementById('modalDetailTitle').textContent = `${icon} ${v.merk} ${v.tipe}`;

    // Group by kategori
    const groups = {};
    komponenList.forEach(k => {
        if (!groups[k.kategori]) groups[k.kategori] = [];
        groups[k.kategori].push(k);
    });

    let html = `
        <div style="margin-bottom:16px; font-size:14px; color:var(--text-secondary);">
            📏 <strong>${formatNumber(v.km)} km</strong> &nbsp;|&nbsp;
            🔖 ${v.plat || '-'} &nbsp;|&nbsp;
            📅 ${v.tahun || '-'} &nbsp;|&nbsp;
            ⚙️ ${v.transmisi === 'matic' ? 'Matic' : 'Manual'}
        </div>
    `;

    for (const [kategori, items] of Object.entries(groups)) {
        html += `<h4 style="margin:16px 0 8px; color:var(--accent);">📦 ${kategori}</h4>`;
        html += `<table class="detail-table"><thead><tr>
            <th>Komponen</th>
            <th>Status</th>
            <th>Sisa KM</th>
            <th>Terakhir</th>
            <th>Progress</th>
        </tr></thead><tbody>`;

        items.forEach(k => {
            const s = getComponentStatus(v, k);
            const progressColor = getProgressColor(s.status);
            html += `<tr>
                <td>${k.icon} ${k.nama}</td>
                <td>${getStatusIcon(s.status)} ${getStatusLabel(s.status)}</td>
                <td class="fw-bold" style="color:${progressColor}">${formatNumber(s.sisaKm)} km</td>
                <td>${s.lastDate ? formatDateShort(s.lastDate) : '-'}<br><small style="color:var(--text-muted)">${s.lastKm > 0 ? formatNumber(s.lastKm) + ' km' : '-'}</small></td>
                <td>
                    <div class="detail-progress-bar">
                        <div class="detail-progress-fill" style="width:${s.pctUsed}%; background:${progressColor}"></div>
                    </div>
                    <small>${Math.round(s.pctUsed)}%</small>
                </td>
            </tr>`;
        });

        html += '</tbody></table>';
    }

    document.getElementById('modalDetailBody').innerHTML = html;
    openModal('modalDetail');
}

// ============ Dashboard ============

function refreshDashboard() {
    const selectedVehicleId = document.getElementById('dashVehicleSelect').value;

    let totalVehicles = appData.vehicles.length;
    let dangerTotal = 0, warningTotal = 0, safeTotal = 0;
    let allAlerts = [];

    const vehiclesToCheck = selectedVehicleId
        ? appData.vehicles.filter(v => v.id === selectedVehicleId)
        : appData.vehicles;

    vehiclesToCheck.forEach(v => {
        const komponenList = getKomponenList(v.jenis, v.transmisi);
        komponenList.forEach(k => {
            const s = getComponentStatus(v, k);
            if (s.status === 'danger') dangerTotal++;
            else if (s.status === 'warning') warningTotal++;
            else safeTotal++;

            allAlerts.push({
                vehicle: v,
                komponen: k,
                status: s
            });
        });
    });

    document.getElementById('statTotal').textContent = totalVehicles;
    document.getElementById('statDanger').textContent = dangerTotal;
    document.getElementById('statWarning').textContent = warningTotal;
    document.getElementById('statSafe').textContent = safeTotal;

    // Sort: danger first, then warning, then safe. Within same status, by pctUsed desc
    allAlerts.sort((a, b) => {
        const order = { danger: 0, warning: 1, safe: 2 };
        if (order[a.status.status] !== order[b.status.status]) {
            return order[a.status.status] - order[b.status.status];
        }
        return b.status.pctUsed - a.status.pctUsed;
    });

    const alertContainer = document.getElementById('alertList');

    if (appData.vehicles.length === 0) {
        alertContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🏍️</div>
                <h3>Belum Ada Kendaraan</h3>
                <p>Tambahkan kendaraan pertama Anda untuk mulai melacak perawatan</p>
                <button class="btn btn-primary" onclick="switchTab('kendaraan')">+ Tambah Kendaraan</button>
            </div>`;
        return;
    }

    alertContainer.innerHTML = allAlerts.map(a => {
        const s = a.status;
        const k = a.komponen;
        const v = a.vehicle;
        const vIcon = v.jenis === 'motor' ? '🏍️' : '🚗';
        const progressColor = getProgressColor(s.status);

        return `
        <div class="alert-item status-${s.status}" onclick="showVehicleDetail('${v.id}')">
            <div class="alert-status-icon">${getStatusIcon(s.status)}</div>
            <div class="alert-info">
                <div class="alert-komponen">${k.icon} ${k.nama}</div>
                <div class="alert-vehicle-name">${vIcon} ${v.merk} ${v.tipe} (${v.plat || '-'})</div>
                <div class="alert-detail">${getStatusLabel(s.status)} — Interval: ${formatNumber(k.intervalKm)} km</div>
                <div class="alert-progress">
                    <div class="alert-progress-fill" style="width:${s.pctUsed}%; background:${progressColor}"></div>
                </div>
            </div>
            <div class="alert-km-left" style="color:${progressColor}">
                ${s.sisaKm > 0 ? 'Sisa ' + formatNumber(s.sisaKm) + ' km' : '⚠️ Lewat!'}
            </div>
        </div>`;
    }).join('');
}

// ============ Servis Form ============

function refreshServisForm() {
    const vehicleId = document.getElementById('servisVehicleSelect').value;
    const formArea = document.getElementById('servisFormArea');

    if (!vehicleId) {
        formArea.classList.add('hidden');
        return;
    }

    formArea.classList.remove('hidden');

    const v = appData.vehicles.find(v => v.id === vehicleId);
    if (!v) return;

    document.getElementById('inputKmSekarang').value = v.km;
    document.getElementById('inputTanggal').value = todayStr();

    const komponenList = getKomponenList(v.jenis, v.transmisi);
    const checklistContainer = document.getElementById('komponenChecklist');

    // Group by kategori
    const groups = {};
    komponenList.forEach(k => {
        if (!groups[k.kategori]) groups[k.kategori] = [];
        groups[k.kategori].push(k);
    });

    let html = '';
    for (const [kategori, items] of Object.entries(groups)) {
        html += `<div style="grid-column: 1 / -1; margin-top:8px; font-weight:700; color:var(--accent); font-size:13px;">📦 ${kategori}</div>`;
        items.forEach(k => {
            const s = getComponentStatus(v, k);
            const statusIcon = getStatusIcon(s.status);
            html += `
            <label class="komponen-check-item" data-id="${k.id}">
                <input type="checkbox" value="${k.id}">
                <span class="comp-icon">${k.icon}</span>
                <span>${k.nama}</span>
                <span style="margin-left:auto; font-size:12px;">${statusIcon}</span>
            </label>`;
        });
    }

    checklistContainer.innerHTML = html;

    // Add toggle highlight
    checklistContainer.querySelectorAll('.komponen-check-item').forEach(item => {
        item.addEventListener('change', (e) => {
            if (e.target.checked) item.classList.add('checked');
            else item.classList.remove('checked');
        });
    });
}

function updateKmOnly() {
    const vehicleId = document.getElementById('servisVehicleSelect').value;
    const km = parseInt(document.getElementById('inputKmSekarang').value);

    if (!vehicleId || isNaN(km)) {
        showToast('Pilih kendaraan dan isi kilometer!', 'warning');
        return;
    }

    const v = appData.vehicles.find(v => v.id === vehicleId);
    if (!v) return;

    if (km < v.km) {
        showToast('Kilometer baru tidak boleh kurang dari sebelumnya!', 'warning');
        return;
    }

    v.km = km;
    saveData();
    refreshDashboard();
    showToast(`Kilometer ${v.merk} ${v.tipe} diperbarui ke ${formatNumber(km)} km`);
}

function simpanServis() {
    const vehicleId = document.getElementById('servisVehicleSelect').value;
    const km = parseInt(document.getElementById('inputKmSekarang').value);
    const tanggal = document.getElementById('inputTanggal').value;
    const bengkel = document.getElementById('inputBengkel').value.trim();
    const biaya = parseInt(document.getElementById('inputBiaya').value) || 0;
    const catatan = document.getElementById('inputCatatan').value.trim();

    if (!vehicleId) {
        showToast('Pilih kendaraan terlebih dahulu!', 'warning');
        return;
    }

    const checked = [];
    document.querySelectorAll('#komponenChecklist input[type="checkbox"]:checked').forEach(cb => {
        checked.push(cb.value);
    });

    if (checked.length === 0) {
        showToast('Pilih minimal satu komponen yang diservis!', 'warning');
        return;
    }

    const v = appData.vehicles.find(v => v.id === vehicleId);
    if (!v) return;

    // Update km
    if (km && km >= v.km) v.km = km;

    // Update component service records
    checked.forEach(kompId => {
        v.komponen[kompId] = {
            lastKm: km || v.km,
            lastDate: tanggal || todayStr()
        };
    });

    // Save history
    const komponenList = getKomponenList(v.jenis, v.transmisi);
    const checkedNames = checked.map(id => {
        const k = komponenList.find(k => k.id === id);
        return k ? k.nama : id;
    });

    appData.history.push({
        id: generateId(),
        vehicleId: vehicleId,
        vehicleName: `${v.merk} ${v.tipe}`,
        vehiclePlat: v.plat,
        km: km || v.km,
        tanggal: tanggal || todayStr(),
        komponen: checked,
        komponenNames: checkedNames,
        bengkel,
        biaya,
        catatan
    });

    saveData();

    // Reset form
    document.getElementById('inputBengkel').value = '';
    document.getElementById('inputBiaya').value = '';
    document.getElementById('inputCatatan').value = '';
    document.querySelectorAll('#komponenChecklist input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
        cb.closest('.komponen-check-item').classList.remove('checked');
    });

    refreshServisForm();
    refreshDashboard();
    showToast(`Servis ${checkedNames.length} komponen berhasil dicatat!`);
}

// ============ Riwayat ============

function refreshRiwayat() {
    const vehicleFilter = document.getElementById('riwayatVehicleSelect').value;
    const komponenFilter = document.getElementById('riwayatKomponenFilter').value;

    let filtered = [...appData.history];

    if (vehicleFilter) {
        filtered = filtered.filter(h => h.vehicleId === vehicleFilter);
    }

    if (komponenFilter) {
        filtered = filtered.filter(h => h.komponen.includes(komponenFilter));
    }

    // Sort by date desc
    filtered.sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));

    const container = document.getElementById('riwayatList');

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📋</div>
                <h3>Belum Ada Riwayat</h3>
                <p>Riwayat servis akan muncul setelah Anda mencatat servis pertama</p>
            </div>`;
        return;
    }

    container.innerHTML = filtered.map(h => {
        return `
        <div class="riwayat-card">
            <div class="riwayat-header">
                <span class="riwayat-date">📅 ${formatDate(h.tanggal)}</span>
                <span class="riwayat-vehicle">${h.vehicleName} (${h.vehiclePlat || '-'})</span>
            </div>
            <div class="riwayat-komponen-list">
                ${h.komponenNames.map(n => `<span class="riwayat-komponen-tag">${n}</span>`).join('')}
            </div>
            <div class="riwayat-meta">
                <span>📏 ${formatNumber(h.km)} km</span>
                ${h.bengkel ? `<span>🏪 ${h.bengkel}</span>` : ''}
                ${h.biaya ? `<span>💰 ${formatCurrency(h.biaya)}</span>` : ''}
                ${h.catatan ? `<span>📝 ${h.catatan}</span>` : ''}
            </div>
            <div class="riwayat-actions">
                <button class="btn btn-danger btn-sm" onclick="deleteRiwayat('${h.id}')">🗑️ Hapus</button>
            </div>
        </div>`;
    }).join('');
}

function deleteRiwayat(id) {
    showConfirm('Hapus Riwayat', 'Yakin ingin menghapus catatan riwayat ini?', () => {
        appData.history = appData.history.filter(h => h.id !== id);
        saveData();
        refreshRiwayat();
        showToast('Riwayat berhasil dihapus!');
    });
}

// ============ Populate Selects ============

function refreshAllSelects() {
    const selects = [
        document.getElementById('dashVehicleSelect'),
        document.getElementById('servisVehicleSelect'),
        document.getElementById('riwayatVehicleSelect')
    ];

    selects.forEach(sel => {
        const currentVal = sel.value;
        const firstOption = sel.options[0].outerHTML;
        sel.innerHTML = firstOption;
        appData.vehicles.forEach(v => {
            const icon = v.jenis === 'motor' ? '🏍️' : '🚗';
            const opt = document.createElement('option');
            opt.value = v.id;
            opt.textContent = `${icon} ${v.merk} ${v.tipe} (${v.plat || '-'})`;
            sel.appendChild(opt);
        });
        sel.value = currentVal;
    });

    // Populate komponen filter
    populateKomponenFilter();
}

function populateKomponenFilter() {
    const sel = document.getElementById('riwayatKomponenFilter');
    const currentVal = sel.value;
    sel.innerHTML = '<option value="">-- Semua Komponen --</option>';

    // Collect all unique component IDs from all vehicles
    const allKomponen = new Set();
    appData.vehicles.forEach(v => {
        const list = getKomponenList(v.jenis, v.transmisi);
        list.forEach(k => allKomponen.add(JSON.stringify({ id: k.id, nama: k.nama, icon: k.icon })));
    });

    allKomponen.forEach(jsonStr => {
        const k = JSON.parse(jsonStr);
        const opt = document.createElement('option');
        opt.value = k.id;
        opt.textContent = `${k.icon} ${k.nama}`;
        sel.appendChild(opt);
    });

    sel.value = currentVal;
}

// ============ Settings ============

function refreshSettings() {
    document.getElementById('settingDarkMode').checked = appData.settings.darkMode;
    document.getElementById('settingWarningPct').value = appData.settings.warningPct || 30;
    document.getElementById('settingDangerPct').value = appData.settings.dangerPct || 10;
}

function applyTheme() {
    if (appData.settings.darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('btnTheme').textContent = '☀️';
    } else {
        document.documentElement.removeAttribute('data-theme');
        document.getElementById('btnTheme').textContent = '🌙';
    }
}

// ============ Export / Import ============

function exportData() {
    const json = JSON.stringify(appData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `servisku_backup_${todayStr()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Data berhasil diekspor!');
}

function importData(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            if (imported.vehicles && imported.history) {
                showConfirm(
                    'Impor Data',
                    'Data saat ini akan diganti dengan data yang diimpor. Lanjutkan?',
                    () => {
                        appData = imported;
                        if (!appData.settings) appData.settings = { darkMode: false, warningPct: 30, dangerPct: 10 };
                        saveData();
                        applyTheme();
                        refreshAllSelects();
                        refreshDashboard();
                        refreshVehicleList();
                        refreshSettings();
                        showToast('Data berhasil diimpor!');
                    }
                );
            } else {
                showToast('Format file tidak valid!', 'danger');
            }
        } catch (err) {
            showToast('Gagal membaca file!', 'danger');
        }
    };
    reader.readAsText(file);
}

// ============ Init & Event Listeners ============

document.addEventListener('DOMContentLoaded', () => {
    loadData();
    applyTheme();

    // Splash screen
    setTimeout(() => {
        document.getElementById('splash').classList.add('fade-out');
        document.getElementById('app').classList.remove('hidden');
        refreshAllSelects();
        refreshDashboard();
    }, 1500);

    // Tab navigation
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // Add Vehicle
    document.getElementById('btnAddVehicle').addEventListener('click', () => {
        resetVehicleForm();
        openModal('modalVehicle');
    });

    // Save Vehicle
    document.getElementById('btnSaveVehicle').addEventListener('click', saveVehicle);

    // Servis vehicle select change
    document.getElementById('servisVehicleSelect').addEventListener('change', refreshServisForm);

    // Update KM
    document.getElementById('btnUpdateKm').addEventListener('click', updateKmOnly);

    // Save Servis
    document.getElementById('btnSimpanServis').addEventListener('click', simpanServis);

    // Dashboard vehicle filter
    document.getElementById('dashVehicleSelect').addEventListener('change', refreshDashboard);

    // Riwayat filters
    document.getElementById('riwayatVehicleSelect').addEventListener('change', refreshRiwayat);
    document.getElementById('riwayatKomponenFilter').addEventListener('change', refreshRiwayat);

    // Close modals
    document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => closeModal(btn.dataset.close));
    });
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.closest('.modal').classList.add('hidden');
        });
    });

    // Theme toggle
    document.getElementById('btnTheme').addEventListener('click', () => {
        appData.settings.darkMode = !appData.settings.darkMode;
        applyTheme();
        saveData();
    });

    // Settings dark mode toggle
    document.getElementById('settingDarkMode').addEventListener('change', (e) => {
        appData.settings.darkMode = e.target.checked;
        applyTheme();
        saveData();
    });

    // Settings warning/danger pct
    document.getElementById('settingWarningPct').addEventListener('change', (e) => {
        appData.settings.warningPct = parseInt(e.target.value) || 30;
        saveData();
        refreshDashboard();
    });

    document.getElementById('settingDangerPct').addEventListener('change', (e) => {
        appData.settings.dangerPct = parseInt(e.target.value) || 10;
        saveData();
        refreshDashboard();
    });

    // Export
    document.getElementById('btnExport').addEventListener('click', exportData);

    // Import
    document.getElementById('btnImport').addEventListener('click', () => {
        document.getElementById('fileImport').click();
    });
    document.getElementById('fileImport').addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            importData(e.target.files[0]);
            e.target.value = '';
        }
    });

    // Reset data
    document.getElementById('btnResetData').addEventListener('click', () => {
        showConfirm('Hapus Semua Data', 'PERINGATAN: Semua data kendaraan dan riwayat servis akan dihapus permanen. Lanjutkan?', () => {
            appData = {
                vehicles: [],
                history: [],
                settings: appData.settings
            };
            saveData();
            refreshAllSelects();
            refreshDashboard();
            refreshVehicleList();
            showToast('Semua data berhasil dihapus!');
        });
    });
});
