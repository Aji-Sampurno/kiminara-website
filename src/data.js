// Automatically load all JSON files from src/content/portfolios/
const portfolioModules = import.meta.glob('./content/portfolios/*.json', { eager: true });

// Convert the Vite modules object into an array of portfolio objects
export const portfolios = Object.values(portfolioModules).map(module => module.default || module);

// Fallback search mechanism
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
