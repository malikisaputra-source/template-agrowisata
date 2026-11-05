// Template Agrowisata · interaksi & animasi (gaya agri bento).
// Konten tampil penuh tanpa JS/GSAP; animasi hanya "dari" keadaan awal dan mati bila prefers-reduced-motion.
(() => {
  const ID = {
    skip: "Langsung ke isi",
    "nav.about": "Tentang", "nav.programs": "Program", "nav.journey": "Perjalanan", "nav.impact": "Dampak", "nav.cta": "Jadi mitra",
    "hero.kicker": "Agrowisata &amp; komunitas tani",
    "hero.title": 'Tumbuhkan petani, <span class="sorot">tumbuhkan masa depan.</span>',
    "hero.sub": "Komunitas tani anak muda yang mengajak generasi muda pulang ke desa: bertani, berkarya, dan memimpin.",
    "hero.cta1": "Jadi mitra", "hero.cta2": "Gabung gerakan",
    "hero.b1": "pengunjung per tahun (contoh)", "hero.b2": "Digerakkan anak muda",
    "ab.k": "Tentang kami", "ab.t": "Menumbuhkan desa <u>bersama</u>",
    "ab.s1": "tahun program yang digerakkan anak muda",
    "ab.p1": "Kebun Lembah Hijau adalah contoh komunitas tani yang memberdayakan anak muda menjadi agen perubahan lewat pertanian berkelanjutan, pengembangan masyarakat desa, dan inovasi ekonomi lokal.",
    "ab.p2": "Kami menjalankan program edukasi, pemberdayaan masyarakat, dan akses pasar untuk petani muda, bersama pemerintah, kampus, perusahaan, dan desa.",
    "ab.s2": "petani mitra (contoh)", "ab.s3": "program unggulan",
    "why.title": "Kenapa kami ada.",
    "why.lead": "Petani makin menua dan berpenghasilan kecil. Kami mengajak generasi berikutnya pulang dengan model yang menyatukan tiga kekuatan.",
    "fw.agro": "Praktik berkelanjutan, teknologi tepat guna, dan produk unggulan lokal.",
    "fw.socio": "Kapasitas komunitas, pendidikan, kearifan lokal, dan kolaborasi inklusif.",
    "fw.preneur": "Kreativitas pemuda, model bisnis lokal, modal, dan jejaring.",
    "why.c1": "Makin sedikit anak muda memilih bertani sebagai karier", "why.c2": "Petani hanya dapat sedikit nilai tambah dari panennya",
    "why.c3": "Pasar, teknologi, dan inovasi sulit dijangkau", "why.c4": "Potensi pertanian yang besar belum digarap",
    "prog.t": "Program unggulan", "prog.cta": "Dukung program", "prog.lead": "Lima program yang bekerja sebagai satu ekosistem, dari kelas di ladang sampai rak di pasar.",
    p1: "Edukasi dan pelatihan pertanian: pendampingan petani muda untuk meningkatkan pengetahuan dan keterampilan.",
    p2: "Pemberdayaan masyarakat: membangun kelembagaan desa yang kuat lewat partisipasi aktif warga.",
    p3: "Pengembangan produk: mengolah hasil tani lokal jadi produk bernilai tambah yang mampu bersaing.",
    p4: "Akses pasar dan kemitraan: menghubungkan petani dengan pasar, mitra, dan distribusi yang lebih luas.",
    p5: "Pertanian lestari: praktik ramah lingkungan untuk menjaga sumber daya alam.",
    "model.t": "Model pemberdayaan kami.", "model.lead": "Enam langkah yang kami jalani bersama setiap desa, dari mendengar sampai mandiri.",
    m1: "Riset", m1d: "Memetakan potensi dan kebutuhan desa.", m2: "Pelibatan", m2d: "Membangun kepercayaan dan melibatkan warga.",
    m3: "Peningkatan kapasitas", m3d: "Pelatihan dan pendampingan.", m4: "Pengembangan produk", m4d: "Mengembangkan produk lokal bernilai.",
    m5: "Branding & pemasaran", m5d: "Membuka akses pasar lebih luas.", m6: "Komunitas berkelanjutan", m6d: "Masyarakat mandiri dan berkelanjutan.",
    "j.t": "Perjalanan & capaian.", "j.lead": "Membangun desa, mendampingi petani, menginspirasi generasi berikutnya.",
    j1: "Pelopor gerakan petani muda", j1d: "Pelatihan, demplot, eco-enzyme, dan ketahanan pangan desa.",
    j2: "Pengakuan nasional", j2d: "Diakui dinas pertanian dan jejaring petani setempat.",
    j3: "Ekspedisi regenerasi petani", j3d: "Mengunjungi desa-desa tani di beberapa provinsi bersama mitra kampus.",
    j4: "Agrowisata desa", j4d: "Pemberdayaan bawang merah hulu ke hilir: olahan, produk, dan agrowisata.",
    j5: "Komunitas pemuda terbaik", j5d: "Penghargaan daerah, liputan media, dan gerakan yang makin meluas.",
    j6: "Belajar pertanian ke dunia", j6d: "Program pembelajaran pertanian internasional di luar negeri.",
    "founder.role": "Pendiri", "founder.k": "Pesan pendiri",
    "founder.q": "\"Masa depan pertanian bukan hanya soal tanah yang subur, tapi soal anak muda yang mau pulang ke desa, peduli potensi lokal, dan membuka peluang bagi masyarakat.\"",
    v1: "Integritas", v1d: "Jujur dan akuntabel di setiap program", v2: "Pemberdayaan", v2d: "Anak muda yang berdiri di kaki sendiri", v3: "Kolaborasi", v3d: "Kemitraan lintas sektor untuk dampak jangka panjang",
    "imp.t": "Dampak yang selaras SDGs & ESG.", "imp.lead": "Setiap program dirancang agar bisa dilaporkan ke tujuan yang penting bagi mitra kami.",
    "imp.sdg": "Kontribusi SDGs", "imp.chip": "tujuan SDGs yang kami dukung",
    sdg1: "Tanpa kemiskinan", sdg2: "Tanpa kelaparan", sdg4: "Pendidikan berkualitas", sdg5: "Kesetaraan gender", sdg8: "Pekerjaan layak & pertumbuhan", sdg13: "Aksi iklim",
    e: "Lingkungan", ed: "Pertanian berkelanjutan dan pengelolaan sampah organik.", s: "Sosial", sd: "Pemberdayaan dan pendidikan masyarakat.", g: "Tata kelola", gd: "Kolaborasi lintas sektor dan pelaporan transparan.",
    "gal.t": "Dari ladang kami.", "mitra.k": "Mitra strategis",
    "cta.t": "Mari tumbuhkan desa yang lebih kuat, bersama.",
    "cta.d": "Perusahaan, pemerintah, dan donor: bermitra di program yang siap ESG & SDGs, berbasis komunitas, dan terukur dari edukasi sampai pasar.",
    "cta.b1": "Mulai kemitraan", "cta.b2": "Gabung jadi relawan",
    "kunjungan.kartu": "Daftar program pertukaran", "kunjungan.cta": "Pesan kunjungan kebun ↗",
  };

  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const hemat = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const EN = {}; $$("[data-i18n]").forEach((el) => { if (!(el.dataset.i18n in EN)) EN[el.dataset.i18n] = el.innerHTML; });
  let bahasa = "en";

  // bungkus tiap kata dalam .baris > span supaya bisa dianimasikan (elemen di dalamnya, mis. .sorot/<u>, tetap)
  function pecahKata(el) {
    el.setAttribute("aria-label", el.textContent.replace(/\s+/g, " ").trim());
    const bungkus = (node) => [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const f = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((w) => { if (!w) return; if (/^\s+$/.test(w)) return f.append(w); const s = document.createElement("span"); s.className = "baris"; s.setAttribute("aria-hidden", "true"); s.innerHTML = `<span>${w}</span>`; f.append(s); });
        n.replaceWith(f);
      } else if (n.nodeType === 1 && !n.classList.contains("baris") && n.namespaceURI !== "http://www.w3.org/2000/svg") bungkus(n);
    });
    bungkus(el);
  }
  const pecahJudul = () => pecahKata($(".hero-judul"));

  function setBahasa(b, awal) {
    bahasa = b; document.documentElement.lang = b;
    try { localStorage.setItem("bt-lang", b); } catch (e) {}
    $$("[data-lang]").forEach((x) => x.setAttribute("aria-pressed", String(x.dataset.lang === b)));
    $$("[data-i18n]").forEach((el) => { const v = b === "id" ? ID[el.dataset.i18n] : EN[el.dataset.i18n]; if (v != null) el.innerHTML = v; });
    pecahJudul();
    if (!awal && window.ScrollTrigger) ScrollTrigger.refresh();
  }
  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => setBahasa(b.dataset.lang)));

  // akordion program: satu terbuka, foto tengah ikut berganti
  const foto = $("#p-foto");
  function bukaProgram(ak) {
    $$(".ak").forEach((x) => { const buka = x === ak; x.classList.toggle("buka", buka); x.querySelector("button").setAttribute("aria-expanded", String(buka)); x.querySelector(".ak-isi").hidden = !buka; });
    const src = `img/${ak.dataset.img}.svg`; if (foto.getAttribute("src") === src) return;
    foto.alt = ak.querySelector("button span").textContent;
    if (!window.gsap || hemat) { foto.src = src; return; }
    gsap.to(foto, { opacity: 0, scale: 1.04, duration: .25, onComplete: () => { foto.src = src; gsap.fromTo(foto, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: .9, ease: "expo.out" }); } });
    if (!hemat && window.gsap) gsap.from(ak.querySelector(".ak-isi p"), { y: 10, opacity: 0, duration: .5, ease: "power3.out" });
  }
  $$(".ak").forEach((ak) => ak.querySelector("button").addEventListener("click", () => bukaProgram(ak)));
  bukaProgram($(".ak"));
  $$(".ak").forEach((ak) => { const i = new Image(); i.src = `img/${ak.dataset.img}.svg`; });

  // nav: sembunyi saat turun, muncul saat naik; tautan aktif sesuai bagian
  const nav = $("#nav"); let yLama = 0;
  addEventListener("scroll", () => { const y = scrollY; nav.classList.toggle("sembunyi", y > 500 && y > yLama && !document.body.classList.contains("laci-buka")); yLama = y; }, { passive: true });
  const tMenu = $(".menu-hp"), laci = $("#laci");
  const bukaLaci = (b) => {
    tMenu.setAttribute("aria-expanded", String(b)); laci.hidden = !b; document.body.classList.toggle("laci-buka", b); document.body.style.overflow = b ? "hidden" : "";
    if (b && window.gsap && !hemat) gsap.from("#laci > *", { y: 30, opacity: 0, stagger: .05, duration: .6, ease: "expo.out" });
  };
  tMenu.addEventListener("click", () => bukaLaci(laci.hidden));
  $$("#laci a").forEach((a) => a.addEventListener("click", () => bukaLaci(false)));
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !laci.hidden) { bukaLaci(false); tMenu.focus(); } });

  function angka(el) {
    const akhir = parseFloat(el.dataset.count), dec = +el.dataset.dec || 0;
    const tulis = (v) => (el.textContent = v.toLocaleString(bahasa === "id" ? "id-ID" : "en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec }));
    const o = { v: 0 }; tulis(0);
    gsap.to(o, { v: akhir, duration: 1.8, ease: "power3.out", onUpdate: () => tulis(o.v), scrollTrigger: { trigger: el, start: "top 92%", once: true } });
  }

  function animasi() {
    gsap.registerPlugin(ScrollTrigger);
    $$(".nav-tautan a").forEach((a) => { const s = $(a.getAttribute("href")); if (s) ScrollTrigger.create({ trigger: s, start: "top 50%", end: "bottom 50%", onToggle: (st) => a.classList.toggle("aktif", st.isActive) }); });
    if (hemat) return;

    // hero: nav turun, kata naik, foto kapsul melebar dari tengah, chip meletup
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.from(".nav-bar", { y: -40, opacity: 0, duration: 1 })
      .from(".hero .kicker", { y: 16, opacity: 0, duration: .8 }, "<.1")
      .from(".hero-judul .baris > span", { yPercent: 110, duration: 1.1, stagger: .06 }, "<.05")
      .from([".hero-kanan > *"], { y: 24, opacity: 0, duration: .9, stagger: .08 }, "<.3")
      .from(".hero-kapsul", { clipPath: "inset(0% 42% 0% 42% round 999px)", duration: 1.5, ease: "expo.inOut" }, "<.1")
      .from(".hero-kapsul img", { scale: 1.3, duration: 2 }, "<")
      .from(".hero-kapsul .chip", { y: 30, scale: .85, opacity: 0, duration: .9, stagger: .12, ease: "back.out(1.7)" }, "-=.9")
      .from(".lencana-bintang svg", { rotate: -180, duration: 1.4 }, "<");
    gsap.to(".hero-kapsul picture img", { yPercent: -12, ease: "none", scrollTrigger: { trigger: ".hero-kapsul", start: "top 70%", end: "bottom top", scrub: true } });
    gsap.to(".lencana-bintang svg", { rotate: 360, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 } });

    $$("[data-count]").forEach(angka);

    // judul bagian: kata demi kata berputar naik dari balik garis (3D)
    $$(".judul").forEach((j) => {
      pecahKata(j);
      gsap.from(j.querySelectorAll(".baris > span"), { yPercent: 115, rotationX: -70, transformOrigin: "50% 100%", opacity: 0, duration: 1.1, stagger: .06, ease: "expo.out", scrollTrigger: { trigger: j, start: "top 88%", once: true } });
    });
    $$(".kepala-tengah .kicker, .kepala-baris .lead, .kepala-baris > .tombol, .kepala-baris > .lencana-bintang").forEach((el) => gsap.from(el, { y: 36, opacity: 0, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } }));

    // bento & kartu: muncul bergelombang
    const kelompok = [".bento .b", ".tiga .kartu", ".tantangan li", ".langkah li", ".nilai .kartu-kecil", ".dampak-grid > *", ".galeri-grid img"];
    kelompok.forEach((sel) => {
      const el = $$(sel); if (!el.length) return;
      gsap.from(el, { y: 40, opacity: 0, scale: .96, duration: 1, stagger: { each: .07, from: "start" }, ease: "expo.out", scrollTrigger: { trigger: el[0], start: "top 88%", once: true } });
    });
    gsap.from(".akordion .ak", { x: 30, opacity: 0, duration: .9, stagger: .07, ease: "expo.out", scrollTrigger: { trigger: ".akordion", start: "top 85%", once: true } });
    gsap.from(".program-foto", { clipPath: "inset(12% 12% 12% 12% round 22px)", duration: 1.4, ease: "expo.inOut", scrollTrigger: { trigger: ".program-foto", start: "top 85%", once: true } });
    gsap.from(".pendiri-foto", { clipPath: "inset(100% 0% 0% 0% round 32px)", duration: 1.5, ease: "expo.inOut", scrollTrigger: { trigger: ".pendiri-foto", start: "top 85%", once: true } });
    gsap.from(".chip-nama", { y: 20, opacity: 0, duration: .8, ease: "back.out(1.7)", delay: .8, scrollTrigger: { trigger: ".pendiri-foto", start: "top 85%", once: true } });
    gsap.from(".pendiri-teks blockquote", { y: 30, opacity: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: ".pendiri-teks", start: "top 85%", once: true } });
    gsap.from(".cta", { scale: .94, opacity: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: ".cta", start: "top 85%", once: true } });
    gsap.from(".cta-foto", { clipPath: "inset(100% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut", scrollTrigger: { trigger: ".cta", start: "top 80%", once: true } });

    // model: langkah menyala bergiliran mengikuti gulir
    const li = $$(".langkah li");
    ScrollTrigger.create({ trigger: ".langkah", start: "top 75%", end: "bottom 35%", onUpdate: (st) => { const n = Math.min(li.length - 1, Math.floor(st.progress * li.length)); li.forEach((x, i) => x.classList.toggle("aktif", i === n)); } });

    // bilah progres gulir di atas layar
    const bilah = document.createElement("div"); bilah.className = "progres"; bilah.setAttribute("aria-hidden", "true"); document.body.append(bilah);
    gsap.to(bilah, { scaleX: 1, ease: "none", scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: .3 } });

    // pita mitra: berjalan terus, makin cepat (dan berbalik arah) mengikuti kecepatan gulir
    const pita = $(".pita-isi"); pita.style.animation = "none";
    const jalan = gsap.to(pita, { xPercent: -50, duration: 36, ease: "none", repeat: -1 });
    let arah = 1;
    ScrollTrigger.create({ onUpdate: (st) => {
      const v = st.getVelocity(); arah = st.direction;
      gsap.to(jalan, { timeScale: arah * Math.min(6, 1 + Math.abs(v) / 400), duration: .2, overwrite: true, onComplete: () => gsap.to(jalan, { timeScale: arah, duration: 1 }) });
    } });

    // foto miring halus mengikuti kecepatan gulir (terasa "hidup"), lalu kembali tegak
    const miring = gsap.quickTo(".galeri-grid img, .b-foto, .kj", "skewY", { duration: .5, ease: "power3" });
    ScrollTrigger.create({ onUpdate: (st) => miring(gsap.utils.clamp(-4, 4, st.getVelocity() / -350)) });
    addEventListener("scroll", () => { clearTimeout(window.__tegak); window.__tegak = setTimeout(() => miring(0), 120); }, { passive: true });

    // parallax di dalam foto bento & galeri
    $$(".b-foto img, .dampak-foto img, .cta-foto img").forEach((img) => gsap.fromTo(img, { yPercent: -8, scale: 1.15 }, { yPercent: 8, scale: 1.15, ease: "none", scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true } }));

    const mm = gsap.matchMedia();
    mm.add("(min-width: 961px)", () => {
      // HERO: dipin, foto kapsul melebar jadi layar penuh, teks hero naik & memudar
      const kapsul = $(".hero-kapsul");
      const skala = () => Math.max(innerWidth / kapsul.offsetWidth, innerHeight / kapsul.offsetHeight);
      const th = gsap.timeline({ scrollTrigger: { trigger: ".hero", start: "top top", end: "+=90%", pin: true, scrub: .6, invalidateOnRefresh: true, anticipatePin: 1 } });
      th.to(".hero-atas", { y: -120, opacity: 0, ease: "power2.in" }, 0)
        .to(kapsul, { scale: () => skala(), y: () => innerHeight / 2 - (kapsul.offsetTop + kapsul.offsetHeight / 2), borderRadius: 0, ease: "power2.inOut" }, 0)
        .to(".hero-kapsul picture img", { scale: 1.12, ease: "none" }, 0)
        .to(".hero-kapsul .chip", { opacity: 0, y: 30, stagger: .05 }, 0);

      // perjalanan: dipin dan digeser menyamping; tiap kartu berputar tegak saat masuk
      const rel = $("#rel"), panel = $(".perjalanan");
      const geser = gsap.to(rel, { x: () => -Math.max(0, rel.scrollWidth - innerWidth + 24), ease: "none", scrollTrigger: { trigger: panel, start: "top 12px", end: () => "+=" + Math.max(1, rel.scrollWidth - innerWidth), pin: true, scrub: .8, invalidateOnRefresh: true, anticipatePin: 1 } });
      $$(".kj").forEach((k) => gsap.from(k, { rotate: 8, y: 80, scale: .9, opacity: .3, ease: "power2.out", scrollTrigger: { trigger: k, containerAnimation: geser, start: "left 100%", end: "left 60%", scrub: true } }));
    });
    mm.add("(max-width: 960px)", () => {
      $$(".kj").forEach((el) => gsap.from(el, { y: 60, rotate: 3, opacity: 0, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } }));
    });
    mm.add("(hover: hover) and (pointer: fine)", () => {
      // tombol magnet: tertarik ke arah kursor
      const lepas = [];
      $$(".tombol").forEach((t) => {
        const x = gsap.quickTo(t, "x", { duration: .4, ease: "power3" }), y = gsap.quickTo(t, "y", { duration: .4, ease: "power3" });
        const gerak = (e) => { const r = t.getBoundingClientRect(); x((e.clientX - r.left - r.width / 2) * .25); y((e.clientY - r.top - r.height / 2) * .35); };
        const keluar = () => { x(0); y(0); };
        t.addEventListener("mousemove", gerak); t.addEventListener("mouseleave", keluar);
        lepas.push(() => { t.removeEventListener("mousemove", gerak); t.removeEventListener("mouseleave", keluar); });
      });
      // kartu miring 3D mengikuti kursor
      $$(".b, .kartu, .langkah li, .kartu-kecil, .kj").forEach((k) => {
        gsap.set(k, { transformPerspective: 900 });
        const rx = gsap.quickTo(k, "rotationX", { duration: .5, ease: "power3" }), ry = gsap.quickTo(k, "rotationY", { duration: .5, ease: "power3" });
        const gerak = (e) => { const r = k.getBoundingClientRect(); ry(((e.clientX - r.left) / r.width - .5) * 10); rx(((e.clientY - r.top) / r.height - .5) * -10); };
        const keluar = () => { rx(0); ry(0); };
        k.addEventListener("mousemove", gerak); k.addEventListener("mouseleave", keluar);
        lepas.push(() => { k.removeEventListener("mousemove", gerak); k.removeEventListener("mouseleave", keluar); });
      });
      return () => lepas.forEach((f) => f());
    });
  }

  let simpan = null; try { simpan = localStorage.getItem("bt-lang"); } catch (e) {}
  const awal = simpan || ((navigator.language || "").toLowerCase().startsWith("id") ? "id" : "en");
  setBahasa(awal, true);
  if (window.gsap && window.ScrollTrigger) animasi();
  addEventListener("load", () => window.ScrollTrigger && ScrollTrigger.refresh());
})();
