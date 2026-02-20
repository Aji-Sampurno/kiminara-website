import React from 'react';
import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Code } from 'lucide-react';
import { getPortfolioById } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PrivacyPolicy = () => {
    const [searchParams] = useSearchParams();
    const appId = searchParams.get('app') || 'general';
    const appData = getPortfolioById(appId);
    const appName = appData.title;

    useScrollReveal();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `Kebijakan Privasi - ${appName} | Kiminara`;
    }, [appName]);

    return (
        <>
            <section style={{ paddingTop: '150px', paddingBottom: '3rem' }}>
                <div className="container">
                    <div className="section-header reveal">
                        <h1>Kebijakan Privasi</h1>
                        <p style={{ margin: '1.5rem auto 0', fontSize: '1.2rem' }}>
                            Pernyataan privasi resmi untuk aplikasi <span className="app-name-display">{appName}</span>.
                        </p>
                    </div>

                    {!appData.isOffline ? (
                        /* General Privacy Policy */
                        <div className="privacy-container reveal" style={{ transitionDelay: '100ms' }}>
                            <p>Terakhir diperbarui: 20 Februari 2026</p>

                            <p>Halaman ini digunakan sebagai Kebijakan Privasi resmi (Privacy Policy) untuk aplikasi <strong><span className="app-name-display">{appName}</span></strong> yang dikembangkan oleh Kiminara, sesuai dengan ketentuan Google Play Store, Apple App Store, dan peraturan privasi hukum yang berlaku.</p>

                            <h2>1. Pengumpulan Data Informasi</h2>
                            <p>Kami sangat menghargai privasi pengguna kami. Aplikasi <strong><span className="app-name-display">{appName}</span></strong> mungkin mengumpulkan beberapa data pribadi tertentu seperti:</p>
                            <ul>
                                <li>Informasi Identitas (Nama, Alamat Email) saat pembuatan akun.</li>
                                <li>Data Penggunaan Aplikasi untuk analisis diagnostik dan peningkatan fitur.</li>
                                <li>Data Perangkat, seperti model smartphone dan versi sistem operasi murni untuk kepentingan teknis tanpa mengidentifikasi personal secara persisten.</li>
                            </ul>

                            <h2>2. Bagaimana Kami Menggunakan Informasi Anda</h2>
                            <p>Data yang kami kumpulkan tidak pernah dijual kepada pihak ketiga. Kami menggunakan data Anda semata-mata untuk:</p>
                            <ul>
                                <li>Menyediakan, mengoperasikan, dan mempertahankan layanan dasar dalam aplikasi.</li>
                                <li>Berkomunikasi dengan pengguna terkait dengan dukungan teknis (Customer Support).</li>
                                <li>Membantu kami menemukan, mencegah, dan mengatasi masalah teknis/bug.</li>
                            </ul>

                            <h2>3. Keamanan Data (Data Security)</h2>
                            <p>Kami senantiasa berupaya melindungi informasi di <strong><span className="app-name-display">{appName}</span></strong> secara wajar menggunakan standar enkripsi (seperti SSL/HTTPS) untuk meminimalisasi risiko kehilangan data, penyalahgunaan, atau akses tidak sah. Namun, tidak ada transmisi data melalui internet atau server yang 100% mutlak dan terjamin absolut keamanannya.</p>

                            <h2>4. Tautan Pihak Ketiga (Third-Party Links/Services)</h2>
                            <p>Layanan kami dapat menggunakan API layanan pihak ketiga (seperti metode pembayaran eksternal atau peta yang terintegrasi). Kebijakan privasi pihak luar berada di luar tanggung jawab layanan <strong><span className="app-name-display">{appName}</span></strong>.</p>

                            <h2>5. Hak Pengguna (User Rights)</h2>
                            <p>Sesuai dengan pedoman standar Privasi, setiap pengguna berhak mendapatkan kejelasan tentang data apa saja yang disimpan, dan dapat meminta penghapusan akun serta penghapusan data secara mandiri melalui pengaturan di dalam aplikasi, atau dengan menghubungi pengembang layanan.</p>

                            <h2>6. Hubungi Pengembang</h2>
                            <p>Jika Anda memiliki pertanyaan mendalam perihal Kebijakan Privasi layanan aplikasi <strong><span className="app-name-display">{appName}</span></strong>, silakan sampaikan keluhan Anda kepada tim Developer Kami di: <a href="mailto:privacy@kiminara.com" style={{ color: 'var(--primary-color)' }}>privacy@kiminara.com</a></p>
                        </div>
                    ) : (
                        /* Offline Specific Privacy Policy (e.g., Keuanganku) */
                        <div className="privacy-container reveal" style={{ transitionDelay: '100ms' }}>
                            <p>Terakhir diperbarui: 20 Februari 2026</p>

                            <p>Kebijakan Privasi ini mengatur penggunaan aplikasi <strong>{appName}</strong>, sebuah aplikasi yang dikembangkan oleh Kiminara.</p>

                            <h2>1. Penyimpanan Data Lokal (Offline First)</h2>
                            <p>Aplikasi <strong>{appName}</strong> dirancang untuk sepenuhnya beroperasi secara luring (<em>offline</em>). <strong>Kami tidak mengumpulkan, mengirimkan, atau menyimpan data pribadi Anda di server kami atau pihak ketiga mana pun.</strong></p>
                            <ul>
                                <li>Semua data <strong>hanya disimpan secara lokal</strong> di dalam memori penyimpanan perangkat Anda (<em>smartphone</em>).</li>
                                <li>Anda memiliki kendali penuh atas data Anda. Keamanan data fisik pada memori HP menjadi tanggung jawab pengguna.</li>
                            </ul>

                            <h2>2. Fitur Ekspor (PDF) & Backup Restore</h2>
                            <p>Aplikasi menyediakan fitur untuk mengekspor laporan ke format PDF, serta melakukan <em>Backup</em> dan <em>Restore</em> data. Fitur ini memerlukan akses (izin) ke penyimpanan eksternal (<em>storage/files media</em>) di perangkat Anda. Data ekspor hanya disimpan di memori HP Anda dan kami tidak memiliki akses pada file tersebut.</p>

                            <h2>3. Layanan Pihak Ketiga & Internet</h2>
                            <p>Aplikasi ini <strong>tidak memerlukan koneksi internet</strong> untuk fungsi utamanya. Jika ada koneksi internet yang diminta, hal itu murni digunakan oleh kerangka kerja (framework) dasar sistem operasi atau untuk menayangkan iklan pihak ketiga apabila berlaku di masa mendatang.</p>

                            <h2>4. Keamanan & Tanggung Jawab Pengguna</h2>
                            <p>Karena kami tidak memiliki server untuk mem-backup data Anda, <strong>hilangnya perangkat atau penghapusan aplikasi berarti data Anda mungkin akan hilang secara permanen</strong> jika Anda belum melakukan <em>Backup</em> mandiri. Kami menyarankan Anda untuk sering melakukan <em>backup</em> file ke Google Drive pribadi atau media penyimpanan awan milik Anda sendiri.</p>

                            <h2>5. Persetujuan</h2>
                            <p>Dengan menggunakan Aplikasi {appName}, Anda sepenuhnya menyetujui Kebijakan Privasi ini bahwa tidak ada pertukaran data yang kami lakukan secara jarak jauh.</p>

                            <h2>6. Kontak Pengembang</h2>
                            <p>Untuk kendala teknis aplikasi, silakan hubungi tim kami di: <a href="mailto:privacy@kiminara.com" style={{ color: 'var(--primary-color)' }}>privacy@kiminara.com</a></p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;
