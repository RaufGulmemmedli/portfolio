/**
 * Bütün məzmunu buradan redaktə edin — statik portfolio üçün mərkəzi məlumat faylı.
 */

export type Experience = {
  company: string
  role: string
  period: string
  description: string
}

export type Project = {
  title: string
  description: string
  href: string
  tags: string[]
}

export const site = {
  name: "Rauf Gülməmmədli",
  /** qısa peşə başlığı */
  role: "Frontend Developer",
  /** hero alt sətri */
  tagline:
    "İstifadəçi təcrübəsini ön planda tutan, sürətli və dəqiq interfeyslər hazırlayıram.",
  /** haqqımda mətni — öz mətninizlə əvəz edin */
  about: `Mən Rauf Gülməmmədli, 2 ildən artıq təcrübəyə malik Front-End proqramçıyam. Müasir veb texnologiyalarından istifadə edərək istifadəçi yönümlü, performanslı və genişlənə bilən tətbiqlərin hazırlanması ilə məşğulam.

Karyeram ərzində müxtəlif sahələrdə real layihələr üzərində çalışmışam. Tinda MMC-də fəaliyyətim zamanı Azərbaycanın aparıcı istehsalçı şirkətlərinə aid məhsulların sifariş idarəetməsi, işçi fəaliyyətlərinin izlənməsi və çatdırılma proseslərinin optimallaşdırılması kimi sistemlərin hazırlanmasında iştirak etmişəm. Bu layihələrdə əsas məqsəd proseslərin avtomatlaşdırılması və istifadəçi təcrübəsinin maksimum dərəcədə yaxşılaşdırılması olmuşdur.

Hal-hazırda Grandmart MMC-də biznes proseslərinin avtomatlaşdırılması şöbəsində Front-End proqramçı kimi fəaliyyət göstərirəm. Burada işçi idarəetməsi, müştəri qeydiyyatı və digər əməliyyatların rəqəmsallaşdırılması istiqamətində layihələr üzərində çalışıram. Eyni zamanda uzaqdan müxtəlif layihələrdə iştirak edərək fərqli sistemlər və texnologiyalarla təcrübəmi davamlı şəkildə inkişaf etdirirəm.

Məqsədim daim yeni texnologiyaları öyrənərək daha effektiv, stabil və istifadəçi dostu məhsullar yaratmaq, həmçinin komandaya və layihələrə real dəyər qatmaqdır.`,

  email: "gulmammadlirauf@gmail.com",
  phone: "+994 51 751 56 17",

  /** haqqımda bölməsindəki lokasiya sətrı */
  location: "Bakı, Azərbaycan · Remote",

  
  skills: [
    "HTML & CSS",
    "JavaScript / TypeScript",
    "React & Next.js",
    "Responsive & Mobile-first",
    "Git",
    "UI/UX ilə əməkdaşlıq",
  ],

  experience: [
    {
      company: "Grandmart MMC",
      role: "Front End Developer",
      period: "2025.08 — hazırda",
      description:
        "Biznes proseslərinin avtomatlaşdırılması layihələrində: işçi idarəetməsi, müştəri qeydiyyatı və əməliyyatların rəqəmsallaşdırılması istiqamətində interfeyslər və veb tərəflərin hazırlanması.",
    },
    {
      company: "Tİnda MMC",
      role: "Junior Front End Developer",
      period: "2024.01 — 2025.08",
      description:
        "Sifariş idarəetməsi, istehsal və çatdırılma proseslərinin izlənməsi kimi sistemlərdə junior front-end kimi iştirak; proseslərin avtomatlaşdırılması və istifadəçi təcrübəsinin yaxşılaşdırılması.",
    },
  ] satisfies Experience[],

  projects: [
    {
      title: "Tinda",
      description:
        "Azərbaycan istehsalçı şirkətlərinin məhsullarının idarə olunması, sifariş proseslərinin izlənməsi və çatdırılma sistemlərinin optimallaşdırılması üçün hazırlanmış daxili layihədir. Layihədə işçi fəaliyyətlərinin monitorinqi və sifarişlərin real vaxt izlənməsi funksionallıqları mövcuddur. Məxfi daxili layihə olduğu üçün ictimai link paylaşılmır.",
      href: "",
      tags: ["Daxili", "Sifariş", "Monitorinq"],
    },
    {
      title: "Venta",
      description:
        "Şirkət daxili biznes proseslərinin avtomatlaşdırılması üçün hazırlanmış idarəetmə sistemidir. İşçilərin idarə olunması, müştəri qeydiyyatı və müxtəlif əməliyyatların rəqəmsallaşdırılması üzərində qurulmuşdur. Məxfi daxili layihə olduğu üçün ictimai link paylaşılmır.",
      href: "",
      tags: ["Daxili", "İdarəetmə", "Avtomatlaşdırma"],
    },
    {
      title: "Amare Study",
      description:
        "Onlayn kurs platformasıdır. Müəllimlərin və tələbələrin idarə olunması, dərs materiallarının paylaşılması və təhsil prosesinin effektiv idarə edilməsi üçün hazırlanmış sistemdir.",
      href: "https://amarestudy.az/az",
      tags: ["Təhsil", "Kurs platforması", "Next.js"],
    },
    {
      title: "Yerin",
      description:
        "Restoranlar üçün rezervasiya platformasıdır. İstifadəçilər restoranlarda masa bron edə, tarix və saat seçimi edə bilirlər. Layihə hazırda test mərhələsindədir və istifadəçi təcrübəsinin optimallaşdırılması üzərində işlər davam edir.",
      href: "https://dev.yerin.az/az/home",
      tags: ["Rezervasiya", "Restoran", "Test"],
    },
    {
      title: "NextClass",
      description:
        "Korporativ mühit üçün hazırlanmış imtahan platformasıdır. İstifadəçilər real-time olaraq imtahanlarda iştirak edə bilir, sistem isə nəticələri dinamik şəkildə idarə edir. Platforma geniş miqyaslı istifadə üçün nəzərdə tutulmuşdur.",
      href: "https://nextclass.az/",
      tags: ["İmtahan", "Real-time", "Korporativ"],
    },
    {
      title: "Running Club",
      description:
        "Onlayn marafon platformasıdır. İstifadəçilər marafonlara qoşula, tədbirlər yarada və idman məhsullarını əldə edə bilirlər. Layihə hazırda prototip mərhələsindədir və inkişaf etdirilməkdədir.",
      href: "https://runnig-club.vercel.app/az",
      tags: ["Marafon", "İdman", "Prototip"],
    },
    {
      title: "MCard",
      description:
        "Fərdi və korporativ istifadəçilər üçün vizitkartların dizaynı, sifarişi və çatdırılması üçün hazırlanmış platformadır. İstifadəçilər öz vizitkartlarını onlayn şəkildə dizayn edə bilirlər. Layihə startup mərhələsində olduğu üçün ictimai link paylaşılmır.",
      href: "",
      tags: ["Vizitkart", "Startup", "Dizayn"],
    },
  ] satisfies Project[],
}

export const nav = [
  { id: "about", label: "Haqqımda" },
  { id: "experience", label: "Təcrübə" },
  { id: "projects", label: "Layihələr" },
  { id: "contact", label: "Əlaqə" },
] as const
