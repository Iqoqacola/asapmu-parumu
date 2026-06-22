import { useEffect, useState } from "react";
import { FinishPopUp } from "../components/ui/Card";

const STATIC_STEPS = [
  {
    id: 1,
    step_order: 1,
    title: 'Pengantar',
    text_content: `
      <div style="padding: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333;">
         <div style="background-color: #E3F2FD; padding: 15px 20px; margin-bottom: 20px; border-radius: 8px; border-left: 4px solid #1E88E5; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
           <div style="display: flex; align-items: center; margin-bottom: 5px;">
             <span style="font-size: 20px; margin-right: 10px;">🚬️</span>
             <strong style="text-transform: uppercase; color: #1E88E5; font-size: 18px;">APA ITU ROKOK?</strong>
           </div>
           <p style="font-size: 16px;">
             Rokok adalah silinder kertas berisi daun tembakau olahan. Meski umum, rokok mengandung bahan yang <strong style="color: #d32f2f;">sangat berbahaya bagi kesehatan</strong> (baik bagi perokok maupun orang sekitar).
           </p>
         </div>
         <p style="font-size: 16px; margin-bottom: 25px;">
           Kebiasaan ini bukan sekadar budaya, tapi ancaman serius. <strong style="color: #d32f2f;">Tidak ada dampak positif</strong> yang berarti dari merokok, justru sebaliknya, ia membawa ribuan racun ke dalam tubuh.
         </p>
         <div style="background-color: #ffebee; padding: 15px 20px; border-radius: 8px; border-left: 4px solid #c62828; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
           <div style="display: flex; align-items: center; margin-bottom: 5px;">
             <span style="font-size: 20px; margin-right: 10px;">⚠️</span>
               <strong style="text-transform: uppercase; color: #c62828; font-size: 18px;">FAKTA MEMPRIHATINKAN</strong>
           </div>
           <p style="color: #b71c1c; font-size: 15px; line-height: 1.5; margin: 0;">
             Prevalensi merokok pada remaja usia 13–15 tahun di Indonesia mencapai 20,3%. Artinya, 1 dari 5 remaja sudah meracuni tubuhnya sejak dini.
           </p>
         </div>
      </div>`,
    image_url: '/modules/1.Pengantar.png'
  },
  {
    id: 2,
    step_order: 2,
    title: 'Kandungan Zat pada Rokok',
    text_content: `
      <div style="padding: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333;">
         <h2 style="color: #b71c1c; margin-top: 0; font-size: 22px; display: flex; align-items: center;">
             <span style="font-size: 28px; margin-right: 10px;">☠️</span>
             LEBIH DARI 7.000 ZAT BERBAHAYA
         </h2>
         <p style="margin-bottom: 20px;">Di dalam satu batang rokok, terdapat ribuan zat kimia, ratusan di antaranya beracun dan sekitar 70 bersifat karsinogenik (penyebab kanker).</p>
         <div style="margin-top: 20px; display: grid; gap: 15px;">
           <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; border-left: 4px solid #2e7d32; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
             <div style="display: flex; align-items: flex-start;">
               <span style="font-size: 24px; margin-right: 12px;">🫁</span>
               <div>
                 <strong style="text-transform: uppercase; color: #2e7d32; font-size: 17px;">Tar</strong>
                 <p style="margin: 5px 0 0 0; color: #555; font-size: 15px;">Residu lengket berwarna cokelat yang mengendap di paru-paru, merusak silia, dan pemicu utama kanker.</p>
               </div>
             </div>
           </div>
           <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; border-left: 4px solid #d32f2f; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
             <div style="display: flex; align-items: flex-start;">
               <span style="font-size: 24px; margin-right: 12px;">💊</span>
               <div>
                 <strong style="text-transform: uppercase; color: #c62828; font-size: 17px;">Nikotin</strong>
                 <p style="margin: 5px 0 0 0; color: #555; font-size: 15px;">Zat adiktif yang membuat kecanduan. Nikotin mencapai otak dalam 10 detik, meningkatkan detak jantung dan tekanan darah.</p>
               </div>
             </div>
           </div>
           <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; border-left: 4px solid #f57c00; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
             <div style="display: flex; align-items: flex-start;">
               <span style="font-size: 24px; margin-right: 12px;">🌫️</span>
               <div>
                 <strong style="text-transform: uppercase; color: #e65100; font-size: 17px;">Karbon Monoksida (CO)</strong>
                 <p style="margin: 5px 0 0 0; color: #555; font-size: 15px;">Gas beracun (sama seperti asap knalpot) yang mengikat hemoglobin darah, sehingga tubuh kekurangan oksigen.</p>
               </div>
             </div>
           </div>
           <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; border-left: 4px solid #455a64; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
             <div style="display: flex; align-items: flex-start;">
               <span style="font-size: 24px; margin-right: 12px;">🧪</span>
               <div>
                 <strong style="text-transform: uppercase; color: #37474f; font-size: 17px;">Logam Berat & Racun Lain</strong>
                 <p style="margin: 5px 0 0 0; color: #555; font-size: 15px;">Mengandung Arsenik (racun tikus), Timbal, Formaldehida (pengawet mayat), dan Benzena (pelarut industri).</p>
               </div>
             </div>
           </div>
         </div>
      </div>`,
    image_url: '/modules/2.ZatBerbahaya.png',
    interactive_type: 'VIDEO',
    interactive_url: 'https://www.youtube.com/embed/96ZPwmtjpJQ?si=bojvnLlhkFINjDOA',
    media_description: 'Animasi: Zat Berbahaya Dalam Rokok'
  },
  {
    id: 3,
    step_order: 3,
    title: 'Mitos vs. Fakta Merokok',
    text_content: `
      <div style="padding: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333;">
         <h2 style="color: #212121; margin-top: 0; font-size: 22px; display: flex; align-items: center; margin-bottom: 25px;">
           BANYAK YANG SALAH PAHAM
         </h2>
         <div style="background-color: #fff; border: 1px solid #e0e0e0; border-radius: 10px; margin-bottom: 20px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
           <div style="background-color: #ffebee; padding: 12px 20px; display: flex; align-items: center; border-bottom: 1px solid #ffcdd2;">
             <span style="font-size: 20px; margin-right: 12px;">❌</span>
             <strong style="color: #c62828; font-size: 17px;">MITOS:</strong>
             <span style="margin-left: 10px; color: #b71c1c;">Rokok ringan (mild), shisha, atau vape lebih aman.</span>
           </div>
           <div style="padding: 15px 20px; background-color: #f9fbe7; display: flex; align-items: flex-start;">
             <span style="font-size: 20px; margin-right: 12px;">✅</span>
             <div>
               <strong style="color: #33691e; font-size: 17px;">FAKTA:</strong>
               <p style="margin: 5px 0 0 0; color: #555;">Semua bentuk tembakau berbahaya. Vape mengandung nikotin dan zat kimia karsinogenik lainnya. Tidak ada batas aman dalam merokok.</p>
             </div>
           </div>
         </div>
         <div style="background-color: #fff; border: 1px solid #e0e0e0; border-radius: 10px; margin-bottom: 20px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
           <div style="background-color: #ffebee; padding: 12px 20px; display: flex; align-items: center; border-bottom: 1px solid #ffcdd2;">
             <span style="font-size: 20px; margin-right: 12px;">❌</span>
             <strong style="color: #c62828; font-size: 17px;">MITOS:</strong>
             <span style="margin-left: 10px; color: #b71c1c;">Merokok membuat saya tenang dan menghilangkan stres.</span>
           </div>
           <div style="padding: 15px 20px; background-color: #f9fbe7; display: flex; align-items: flex-start;">
             <span style="font-size: 20px; margin-right: 12px;">✅</span>
             <div>
               <strong style="color: #33691e; font-size: 17px;">FAKTA:</strong>
               <p style="margin: 5px 0 0 0; color: #555;">Efek tenang hanya sementara karena pemenuhan adiksi nikotin. Faktanya, ketergantungan rokok justru meningkatkan tingkat stres dan kecemasan jangka panjang.</p>
             </div>
           </div>
         </div>
         <div style="background-color: #fff; border: 1px solid #e0e0e0; border-radius: 10px; margin-bottom: 20px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
           <div style="background-color: #ffebee; padding: 12px 20px; display: flex; align-items: center; border-bottom: 1px solid #ffcdd2;">
             <span style="font-size: 20px; margin-right: 12px;">❌</span>
             <strong style="color: #c62828; font-size: 17px;">MITOS:</strong>
             <span style="margin-left: 10px; color: #b71c1c;">Saya masih muda, jadi belum berbahaya.</span>
           </div>
           <div style="padding: 15px 20px; background-color: #f9fbe7; display: flex; align-items: flex-start;">
             <span style="font-size: 20px; margin-right: 12px;">✅</span>
             <div>
               <strong style="color: #33691e; font-size: 17px;">FAKTA:</strong>
               <p style="margin: 5px 0 0 0; color: #555;">Kerusakan akibat rokok dimulai sejak hisapan pertama. Pada remaja, rokok mengganggu perkembangan otak dan paru-paru.</p>
             </div>
           </div>
         </div>
      </div>`,
    image_url: '/modules/3.MitosFakta.png'
  },
  {
    id: 4,
    step_order: 4,
    title: 'Dampak Kesehatan',
    text_content: `
      <div style="padding: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333;">
         <h2 style="color: #212121; margin-top: 0; font-size: 22px; display: flex; align-items: center; justify-content: left;">
           <span style="font-size: 30px; margin-right: 10px;">🏥</span> DAMPAK KESEHATAN SERIUS
         </h2>
         <p style="text-align: left; margin-bottom: 25px; color: #555;">Merokok merusak hampir setiap organ tubuh, bukan hanya paru-paru.</p>
         <div style="display: grid; gap: 15px;">
           <div style="display: flex; align-items: center; padding: 15px; background-color: #fff; border-radius: 10px; border: 1px solid #e0e0e0; border-left: 5px solid #d32f2f; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
             <span style="font-size: 30px; margin-right: 15px;">🧠</span>
             <div>
               <strong style="text-transform: uppercase; color: #c62828; font-size: 17px;">Stroke & Penyakit Jantung</strong>
               <p style="margin: 5px 0 0 0; color: #555; font-size: 15px;">Penyempitan dan kerusakan pembuluh darah, meningkatkan risiko serangan jantung dan stroke fatal.</p>
             </div>
           </div>
           <div style="display: flex; align-items: center; padding: 15px; background-color: #fff; border-radius: 10px; border: 1px solid #e0e0e0; border-left: 5px solid #f57c00; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
             <span style="font-size: 30px; margin-right: 15px;">🛡️</span>
             <div>
               <strong style="text-transform: uppercase; color: #e65100; font-size: 17px;">Sistem Imun Melemah</strong>
               <p style="margin: 5px 0 0 0; color: #555; font-size: 15px;">Perokok lebih mudah sakit dan proses penyembuhan luka menjadi lebih lambat.</p>
             </div>
           </div>
           <div style="display: flex; align-items: center; padding: 15px; background-color: #fff; border-radius: 10px; border: 1px solid #e0e0e0; border-left: 5px solid #d32f2f; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
             <span style="font-size: 30px; margin-right: 15px;">⚠️</span>
             <div>
               <strong style="text-transform: uppercase; color: #c62828; font-size: 17px;">Gangguan Reproduksi</strong>
               <p style="margin: 5px 0 0 0; color: #555; font-size: 15px;">Menyebabkan impotensi pada pria, gangguan kesuburan, dan risiko komplikasi kehamilan pada wanita.</p>
             </div>
           </div>
           <div style="display: flex; align-items: center; padding: 15px; background-color: #fff; border-radius: 10px; border: 1px solid #e0e0e0; border-left: 5px solid #1976d2; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
             <span style="font-size: 30px; margin-right: 15px;">🦷</span>
             <div>
               <strong style="text-transform: uppercase; color: #1565c0; font-size: 17px;">Kerusakan Mulut & Kulit</strong>
               <p style="margin: 5px 0 0 0; color: #555; font-size: 15px;">Bau mulut, gigi kuning, penyakit gusi, kanker mulut, dan penuaan dini pada kulit (keriput).</p>
             </div>
           </div>
         </div>
      </div>`,
    image_url: '/modules/4.DampakKesehatan.png',
    interactive_type: 'VIDEO',
    interactive_url: 'https://www.youtube.com/embed/273CDxUJdAA?si=dCHD6lET2IKTihCJ',
    media_description: 'Animasi: Vape/Rokok Elektrik dan Rokok'
  },
  {
    id: 5,
    step_order: 5,
    title: 'Perokok Pasif',
    text_content: `
      <div style="padding: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333;">
         <h2 style="text-transform: uppercase; color: #2e7d32; margin-top: 0; font-size: 22px; display: flex; align-items: center;">
           <span style="text-transform: uppercase; font-size: 28px; margin-right: 10px;">🌬️</span> Bahaya Bagi Orang Lain
         </h2>
         <div style="background-color: #fff3e0; padding: 20px; border-radius: 10px; border: 1px solid #ffe0b2; margin-bottom: 20px;">
           <p style="font-size: 17px; color: #e65100; margin: 0; text-align: left;">
             <strong>Perokok Pasif</strong> (orang yang menghirup asap rokok orang lain) memiliki risiko kesehatan serius, bahkan jika mereka tidak pernah merokok.
           </p>
         </div>
         <div style="display: grid; gap: 20px;">
           <div style="background-color: #f9f9f9; padding: 20px; border-radius: 10px; border-left: 5px solid #d32f2f; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
             <div style="display: flex; align-items: center; margin-bottom: 5px;">
               <span style="font-size: 28px; margin-right: 12px;">👶</span>
               <strong style="text-transform: uppercase; color: #c62828; font-size: 18px;">Dampak pada Anak & Bayi</strong>
             </div>
             <ul style="color: #555; margin: 0; font-size: 15px; line-height: 1.7;">
               <li>1. Meningkatkan risiko Sindrom Kematian Bayi Mendadak (SIDS).</li>
               <li>2. Terkena infeksi telinga, batuk, pilek, dan serangan asma yang lebih parah.</li>
               <li>3. Menghambat pertumbuhan paru-paru anak.</li>
             </ul>
           </div>
           <div style="background-color: #f9f9f9; padding: 20px; border-radius: 10px; border-left: 5px solid #2e7d32; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
             <div style="display: flex; align-items: center; margin-bottom: 5x;">
               <span style="font-size: 28px; margin-right: 12px;">🏠</span>
               <strong style="text-transform: uppercase; color: #2e7d32; font-size: 18px;">Lindungi Keluarga Anda</strong>
             </div>
             <p style="color: #555; margin: 0; font-size: 15px;">
               Tidak ada tingkat paparan asap rokok yang aman. Menjadikan rumah dan kendaraan anda zona 100% bebas rokok adalah satu-satunya cara melindungi keluarga.
             </p>
           </div>
         </div>
      </div>`,
    image_url: '/modules/5.PerokokPasif.png'
  },
  {
    id: 6,
    step_order: 6,
    title: 'Dampak Sosial dan Ekonomi',
    text_content: `
      <div style="padding: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333;">
         <h2 style="text-transform: uppercase; color: #2e7d32; margin-top: 0; font-size: 22px; text-align: left; margin-bottom: 25px;">Lebih dari Sekadar Masalah Kesehatan</h2>
         <div style="display: grid; gap: 20px;">
           <div style="background-color: #fff; padding: 22px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border: 1px solid #e0e0e0; border-top: 4px solid #2e7d32;">
             <div style="display: flex; align-items: center; margin-bottom: 5px;">
               <span style="font-size: 32px; margin-right: 15px; color: #2e7d32;">💸</span>
               <strong style="text-transform: uppercase; color: #2e7d32; font-size: 20px;">Kerugian Finansial (Pemborosan)</strong>
             </div>
             <p style="color: #555; margin: 0; font-size: 16px; line-height: 1.7;">
               Jika satu bungkus rokok seharga Rp25.000 sehari, setahun anda membakar <strong>Rp9.125.000</strong>. Bayangkan apa yang bisa anda beli, tabung, atau investasikan dengan uang tersebut.
             </p>
           </div>
           <div style="background-color: #fff; padding: 22px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border: 1px solid #e0e0e0; border-top: 4px solid #1976d2;">
             <div style="display: flex; align-items: center; margin-bottom: 5px;">
               <span style="font-size: 32px; margin-right: 15px; color: #1976d2;">🤝</span>
               <strong style="text-transform: uppercase; color: #1565c0; font-size: 20px;">Dampak Sosial & Penampilan</strong>
             </div>
             <p style="color: #555; margin: 0; font-size: 16px; line-height: 1.7;">
               Bau asap yang menempel di baju, rambut, dan napas bisa mengganggu orang lain. Gigi kuning dan kulit kusam memengaruhi penampilan. Anda tetap bisa bergaul, terlihat keren, dan diterima tanpa harus merokok. Teman sejati akan mendukung kesehatanmu.
             </p>
           </div>
         </div>
      </div>`,
    image_url: '/modules/6.SosialEkonomi.png'
  },
  {
    id: 7,
    step_order: 7,
    title: 'Aturan dan Hak Bukan Perokok',
    text_content: `
      <div style="padding: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333;">
         <h2 style="text-transform: uppercase; color: #2e7d32; margin-top: 0; font-size: 22px; display: flex; align-items: center;">
           <span style="font-size: 28px; margin-right: 10px; margin-bottom: 10px;">⚖️</span> Kawasan Tanpa Rokok (KTR)
         </h2>
         <div style="background-color: #f1f8e9; padding: 25px; border-radius: 12px; border-left: 5px solid #2e7d32; margin-bottom: 25px;">
           <p style="font-size: 17px; color: #33691e; margin-bottom: 20px; line-height: 1.8;">
             Tahukah kamu? Pemerintah telah menetapkan aturan tegas mengenai <strong style="color: #2e7d32;">Kawasan Tanpa Rokok (KTR)</strong> untuk melindungi masyarakat.
           </p>
           <p style="color: #555; margin-bottom: 10px;">Tempat-tempat KTR antara lain:</p>
           <ul style="color: #555; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding-left: 20px; margin-bottom: 20px;">
              <li>🏫 Sekolah & Kampus</li><li>🏥 Fasilitas Kesehatan</li>
              <li>🚌 Angkutan Umum</li><li>🕌 Tempat Ibadah</li>
              <li>🎡 Tempat Bermain Anak</li><li>🏢 Tempat Kerja</li>
           </ul>
           <div style="background-color: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); border: 1px solid #c5e1a5;">
             <strong style="color: #2e7d32; font-size: 18px; display: flex; align-items: center;"><span style="margin-right: 10px;">✋</span> Hak Anda Sebagai Bukan Perokok:</strong>
             <p style="margin-top: 10px; color: #555; font-size: 16px;">
               Anda memiliki hak fundamental untuk menghirup udara bersih. Jangan ragu untuk dengan sopan meminta orang lain mematikan rokoknya jika mereka merokok di area KTR atau di dekat anda. Ini demi kesehatan bersama.
             </p>
           </div>
         </div>
      </div>`,
    image_url: '/modules/7.AturanHak.png'
  },
  {
    id: 8,
    step_order: 8,
    title: 'Hidup Lebih Baik Tanpa Rokok',
    text_content: `
      <div style="padding: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333;">
         <h2 style="text-transform: uppercase; color: #2e7d32; margin-top: 0; font-size: 22px; text-align: left; margin-bottom: 10px;">
           <span style="font-size: 24px;">🌟</span>
           Tubuh Mulai Pulih
         </h2>
         <p style="text-align: left; color: #555; margin-bottom: 25px;">Manfaat berhenti merokok dimulai segera setelah rokok terakhir anda:</p>
         <div style="display: grid; gap: 15px; margin-bottom: 30px;">
           <div style="background-color: #e8f5e9; padding: 18px; border-radius: 10px; border-left: 4px solid #43a047; display: flex; align-items: center;">
             <span style="font-size: 24px; margin-right: 15px; color: #2e7d32;">⏱️</span>
             <div>
               <strong style="color: #2e7d32; font-size: 18px; display: block;">20 Menit Pertama</strong>
               <span style="color: #555;">Tekanan darah dan denyut jantung mulai kembali normal. Suhu tangan dan kaki meningkat.</span>
             </div>
           </div>
           <div style="background-color: #e8f5e9; padding: 18px; border-radius: 10px; border-left: 4px solid #43a047; display: flex; align-items: center;">
             <span style="font-size: 24px; margin-right: 15px; color: #2e7d32;">🗓️</span>
             <div>
               <strong style="color: #2e7d32; font-size: 18px; display: block;">2 Minggu - 3 Bulan</strong>
               <span style="color: #555;">Sirkulasi darah membaik. Fungsi paru-paru meningkat hingga 30%. Napas terasa lebih lega dan energi bertambah.</span>
             </div>
           </div>
           <div style="background-color: #e8f5e9; padding: 18px; border-radius: 10px; border-left: 4px solid #43a047; display: flex; align-items: center;">
             <span style="font-size: 24px; margin-right: 15px; color: #2e7d32;">🎂</span>
             <div>
               <strong style="color: #2e7d32; font-size: 18px; display: block;">1 Tahun Bebas Rokok</strong>
               <span style="color: #555;">Risiko tambahan terkena penyakit jantung koroner berkurang menjadi setengah dari risiko seorang perokok.</span>
             </div>
           </div>
         </div>
         <p style="text-align: left; color: #2e7d32; font-weight: bold; font-size: 18px; background-color: #f1f8e9; padding: 15px; border-radius: 8px;">
           Berhenti merokok adalah investasi kesehatan yang bisa anda lakukan!
         </p>
      </div>`,
    image_url: '/modules/8.TanpaRokok.png',
    interactive_type: 'VIDEO',
    interactive_url: 'https://www.youtube.com/embed/DB9n7aNM6q0?si=3ja18y0CRc0xy0bC',
    media_description: 'Animasi: Hidup Tanpa Rokok'
  },
  {
    id: 9,
    step_order: 9,
    title: 'Tips Berhenti Merokok',
    text_content: `
      <div style="padding: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333;">
         <h2 style="text-transform: uppercase; color: #2e7d32; margin-top: 0; font-size: 22px; text-align: left; margin-bottom: 10px;">
           <span style="font-size: 32px; margin-right: 10px;">💪</span> Metode 4D
         </h2>
         <p style="color: #555; text-align: left; margin-bottom: 25px; font-size: 16px;">
           Saat keinginan kuat untuk merokok (craving) datang, ingatlah bahwa rasa itu hanya bertahan beberapa menit. Lawan dengan <strong>4D</strong>:
         </p>
         <div style="display: grid;   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; ">
           <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; border-top: 4px solid #ef5350; text-align: center;">
             <span style="font-size: 32px; display: block; margin-bottom: 10px;">⏳</span>
             <strong style="text-transform: uppercase; color: #c62828; font-size: 18px; display: block;">1. Delay (Tunda)</strong>
             <p style="margin: 10px 0 0 0; color: #555; font-size: 15px;">Tunda keinginan itu. Katakan "nanti 10 menit lagi". Biasanya keinginan itu akan hilang sendiri.</p>
           </div>
           <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; border-top: 4px solid #42a5f5; text-align: center;">
             <span style="font-size: 32px; display: block; margin-bottom: 10px;">🧘</span>
             <strong style="text-transform: uppercase; color: #1565c0; font-size: 18px; display: block;">2. Deep Breath (Napas)</strong>
             <p style="margin: 10px 0 0 0; color: #555; font-size: 15px;">Tarik napas dalam-dalam lewat hidung, keluarkan perlahan lewat mulut. Ulangi 3x sampai rileks.</p>
           </div>
           <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; border-top: 4px solid #66bb6a; text-align: center;">
             <span style="font-size: 32px; display: block; margin-bottom: 10px;">💧</span>
             <strong style="text-transform: uppercase; color: #2e7d32; font-size: 18px; display: block;">3. Drink Water (Minum)</strong>
             <p style="margin: 10px 0 0 0; color: #555; font-size: 15px;">Minum air putih secara perlahan. Ini membantu membasuh tenggorokan dan mengalihkan rasa ingin.</p>
           </div>
           <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; border-top: 4px solid #ffa726; text-align: center;">
             <span style="font-size: 32px; display: block; margin-bottom: 10px;">🏃</span>
             <strong style="text-transform: uppercase; color: #e65100; font-size: 18px; display: block;">4. Do Something Else</strong>
             <p style="margin: 10px 0 0 0; color: #555; font-size: 15px;">Alihkan perhatian! Berolahraga, mengunyah permen karet bebas gula, atau ngobrol dengan teman yang mendukung.</p>
           </div>
         </div>
      </div>`,
    image_url: '/modules/9.TipsBerhenti.png'
  },
  {
    id: 10,
    step_order: 10,
    title: 'Game Teka-Teki Silang',
    text_content: `
      <div style="padding: 40px 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; text-align: center;">
         <div style="margin-bottom: 15px;">
           <h2 style="text-transform: uppercase; color: #2e7d32; font-size: 28px; margin: 10px 0 5px 0;"><span style="font-size: 45px; color: #2e7d32;">🎮</span> FUN TIME!</h2>
           <p style="color: #777; font-size: 18px; margin: 0;">Tema: Bahaya & Manfaat Berhenti Merokok</p>
         </div>
         <div style="background-color: #f1f8e9; padding: 30px; border-radius: 15px; border: 2px solid #a5d6a7; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
           <p style="color: #33691e; font-size: 18px; margin-bottom: 20px;">
             Sudah paham semua materi sebelumnya? Mari kita buktikan dengan menyelesaikan tantangan Teka-Teki Silang ini!
           </p>
           <p style="color: #555; font-size: 16px;">Klik tombol di bawah untuk memulai permainan.</p>
         </div>
      </div>`,
    image_url: '/modules/10.Game.png',
    interactive_type: 'GAME',
    interactive_url: 'https://www.educaplay.com/game/25878514-crossword_puzzle_9.html',
    media_description: 'Teka-Teki Silang'
  }
];

const PenyuluhanStatis = ({ user }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [steps, setSteps] = useState(STATIC_STEPS);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      setIsLoading(true);
      const savedProgress = localStorage.getItem("penyuluhanProgress");
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        setCurrentStep(parsed.currentStep || 0);
        setCompletedSteps(parsed.completedSteps || []);
      }
      setIsLoading(false);
    };

    loadData();
  }, []);

  const saveProgressLocal = (progressUpdate) => {
    localStorage.setItem("penyuluhanProgress", JSON.stringify(progressUpdate));
  };

  const handleCompleteStep = () => {
    if (!completedSteps.includes(currentStep)) {
      const newCompletedSteps = [...completedSteps, currentStep];
      setCompletedSteps(newCompletedSteps);
      saveProgressLocal({ currentStep, completedSteps: newCompletedSteps });
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      saveProgressLocal({ currentStep: newStep, completedSteps });
    }

    if (currentStep === steps.length - 1) {
      setShowPopUp(true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onClosePopUp = () => {
    setShowPopUp(false);
  };

  const handlePrev = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (currentStep > 0) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      saveProgressLocal({ currentStep: newStep, completedSteps });
    }
  };

  const progress = steps.length > 0 ? ((completedSteps.length / steps.length) * 100).toFixed(0) : 0;

  const renderInteractiveContent = (content) => {
    if (!content.interactive_type || !content.interactive_url) return null;

    let interactiveElement;
    switch (content.interactive_type) {
      case "VIDEO":
        interactiveElement = (
          <iframe
            src={content.interactive_url}
            title="Video Player"
            frameBorder="0"
            allow="fullscreen; autoplay; allow-top-navigation-by-user-activation"
            allowFullScreen
            className="w-full aspect-video rounded-lg shadow-md"
          ></iframe>
        );
        break;
      case "GAME":
        interactiveElement = (
          <iframe
            src={content.interactive_url}
            title="Interactive Game"
            className="w-full h-[40rem] border-0 rounded-lg shadow-md"
          ></iframe>
        );
        break;
      default:
        return null;
    }

    return (
      <div className="bg-gray-50 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">
          {content.media_description}
        </h3>
        {interactiveElement}
      </div>
    );
  };

  const renderStepContent = () => {
    if (steps.length === 0) return null;
    const currentContent = steps[currentStep];
    if (!currentContent) return <p>Materi untuk langkah ini tidak ditemukan.</p>;

    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div
            dangerouslySetInnerHTML={{ __html: currentContent.text_content }}
            className="prose max-w-none"
          ></div>

          <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg min-h-[250px]">
            {currentContent.image_url ? (
              <img
                src={currentContent.image_url}
                alt={currentContent.title}
                className="rounded-lg shadow-md max-h-60 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/400x300/EFEFEF/333333?text=Gambar+Gagal";
                }}
              />
            ) : (
              <p className="text-gray-500">Gambar tidak tersedia.</p>
            )}
          </div>
        </div>

        {renderInteractiveContent(currentContent)}
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Memuat data penyuluhan...</p>
      </div>
    );
  }

  return (
    <>
      {showPopUp && (
        <div className="hero z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <FinishPopUp
            title={"Selamat!"}
            progress={
              <div
                className="radial-progress text-[var(--Primary-color)] text-2xl text-center self-center"
                style={{ "--value": 100, "--size": "8rem" }}
                aria-valuenow={100}
                role="progressbar"
              >
                100%
              </div>
            }
            context={"Kamu telah menyelesaikan edukasi terkait rokok melalui website ini!"}
            onClose={onClosePopUp}
            contextClose={"Tutup"}
            navigate={"/"}
            contextNavigate={"Beranda"}
          />
        </div>
      )}
      <div className="min-h-screen bg-[var(--Background-color)] text-[var(--Text-dark)] p-4 md:p-8">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-[var(--Primary-color)] uppercase">
            Penyuluhan Bahaya Rokok
          </h1>
          <div className="font-semibold text-[var(--Accent-color)]">
            Halo, {user?.namaLengkap || "Pengguna"}
          </div>
        </header>

        <div className="w-full bg-gray-200 h-3 rounded-full mb-6">
          <div
            className="bg-[var(--Accent-color)] h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress > 100 ? 100 : progress}%` }}
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1 bg-white shadow-md rounded-2xl p-4 self-start">
            <ul className="space-y-3">
              {steps.map((step, index) => (
                <li
                  key={step.id}
                  className={`p-3 rounded-lg cursor-pointer transition-all ${
                    index === currentStep
                      ? "bg-[var(--Accent-color)] text-white"
                      : completedSteps.includes(index)
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-600"
                  }`}
                  onClick={() => {
                    if (completedSteps.includes(index - 1) || index === 0) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setCurrentStep(index);
                    }
                  }}
                >
                  {step.step_order}. {step.title}
                </li>
              ))}
            </ul>
          </aside>

          <main className="lg:col-span-3 bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">
                {steps[currentStep]?.title}
              </h2>
              {renderStepContent()}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 pt-4 border-t">
              <button
                onClick={handleCompleteStep}
                disabled={completedSteps.includes(currentStep)}
                className="cursor-pointer w-full md:w-auto mb-4 md:mb-0 bg-[var(--Accent-color)] text-white px-6 py-2 rounded-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {completedSteps.includes(currentStep)
                  ? "Sudah Dipahami ✔"
                  : "Tandai Sudah Paham"}
              </button>
              <div className="flex justify-between w-full md:w-auto">
                <button
                  disabled={currentStep === 0}
                  onClick={handlePrev}
                  className="cursor-pointer bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 disabled:opacity-40 mr-2"
                >
                  Sebelumnya
                </button>
                <button
                  disabled={!completedSteps.includes(currentStep)}
                  onClick={handleNext}
                  className="cursor-pointer bg-[var(--Accent-color)] text-white px-8 py-2 rounded-lg hover:scale-105 transition-all disabled:opacity-40"
                >
                  {currentStep === steps.length - 1 ? "Selesai" : "Lanjut"}
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default PenyuluhanStatis;