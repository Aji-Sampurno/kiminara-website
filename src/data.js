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
    keuangankuPortfolio
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
