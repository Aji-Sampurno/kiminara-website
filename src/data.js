export const keuangankuPortfolio = {
    id: "keuanganku",
    title: "Keuanganku",
    category: "Finance App (Mobile)",
    description: "Aplikasi pencatat keuangan offline dengan fitur komprehensif mulai dari pencatatan arus kas, aset, hutang, hingga ekspor PDF.",
    fullDescription: "Aplikasi pencatat keuangan offline dengan fitur pencatatan pemasukan, pengeluaran, aset, tabungan, hutang, cicilan, manajemen kategori, ekspor PDF, serta backup & restore data lokal.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop",
    isOffline: true
};

export const portfolios = [
    keuangankuPortfolio,
    {
        id: "shopswift",
        title: "ShopSwift Mobile",
        category: "E-Commerce App (Mobile)",
        description: "Aplikasi belanja online dengan fitur real-time tracking dan integrasi pembayaran.",
        fullDescription: "Aplikasi belanja online dengan fitur real-time tracking, integrasi API pembayaran multi-platform, dan desain UI/UX yang memanjakan mata.",
        image: "https://images.unsplash.com/photo-1607004468138-c7e4f88e5011?q=80&w=800&auto=format&fit=crop",
        isOffline: false
    },
    {
        id: "fingrow",
        title: "FinGrow Web System",
        category: "Fintech Dashboard (Web)",
        description: "Dashboard analitik keuangan untuk manajemen aset dan pelaporan visual.",
        fullDescription: "Sistem informasi manajemen keuangan berbasis web dengan dashboard interaktif, ekspor laporan otomatis (PDF/Excel), dan keamanan enkripsi tinggi.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        isOffline: false
    },
    {
        id: "workflowz",
        title: "WorkFlowz Task Manager",
        category: "SaaS Platform (Web)",
        description: "Platform kolaborasi tim dan manajemen tugas dengan Kanban board.",
        fullDescription: "Platform kolaborasi tim dan manajemen tugas dengan fitur komunikasi real-time, Kanban board, dan integrasi kalender yang efisien.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
        isOffline: false
    },
    {
        id: "medcare",
        title: "MedCare Scanner",
        category: "HealthTech App (Mobile)",
        description: "Deteksi barcode makanan dan pelacakan kalori.",
        fullDescription: "Aplikasi mobile untuk mendeteksi kandungan gizi dari barcode makanan dengan fitur pelacakan kalori harian bagi pengguna.",
        image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop",
        isOffline: false
    },
    {
        id: "learnhub",
        title: "LearnHub Online",
        category: "Edutech Portal (Web)",
        description: "Portal edukasi dengan kuis interaktif dan sertifikasi digital.",
        fullDescription: "Portal edukasi interaktif untuk pembelajaran jarak jauh kelas profesional, lengkap dengan kuis interaktif dan sertifikasi digital.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
        isOffline: false
    }
];

export const getPortfolioById = (id) => {
    const portfolio = portfolios.find(p => p.id === id);
    if (!portfolio) {
        return {
            id: id,
            title: id.charAt(0).toUpperCase() + id.slice(1),
            isOffline: false
        };
    }
    return portfolio;
};
