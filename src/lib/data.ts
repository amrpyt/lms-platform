export const doctorData = {
  name: "د. زياد مهنا",
  title: "أخصائي معتمد ومحاضر دولي",
  bio: "مع أكثر من عقد من الخبرة السريرية والأكاديمية، كرس الدكتور زياد مهنا حياته المهنية لتبسيط التعليم الطبي المعقد وتحويله إلى رحلة ممتعة وملهمة للجيل القادم من الأطباء. تعتمد منهجية التدريس الفريدة الخاصة به على بناء الفهم العميق للمفاهيم بدلاً من الحفظ التقليدي.",
  stats: [
    { label: "طالب نشط", value: "5,000+", icon: "users" },
    { label: "تسجيل في الكورسات", value: "12,000+", icon: "graduation-cap" },
    { label: "سنوات خبرة", value: "10+", icon: "award" },
    { label: "نسبة النجاح", value: "98%", icon: "check-circle" },
  ],
  achievements: [
    "أخصائي معتمد دولياً",
    "محاضر في كبرى الجامعات",
    "مؤلف سلسلة كتب طبية رائدة",
    "تربوي مبتكر وحائز على جوائز"
  ],
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
    email: "contact@drzeyad.com",
    phone: "+20 123 456 7890",
  }
};

export const courses = [
  {
    id: "1",
    slug: "advanced-anatomy",
    title: "التشريح الطبي المتقدم",
    description: "دليل شامل ومفصل للتشريح البشري لطلاب الطب والمهنيين. يغطي الجهاز العضلي والهيكلي والأوعية الدموية بأسلوب مبسط.",
    fullDescription: "يعتبر هذا الكورس حجر الزاوية لكل طالب طب طموح. سنغوص معاً في تفاصيل الجسم البشري، ليس فقط كخرائط صماء، بل كأنظمة حيوية متكاملة. ستتعلم كيفية ربط المعلومات التشريحية بالتطبيقات السريرية والجراحية الواقعية.",
    price: 199,
    originalPrice: 299,
    category: "تشريح",
    students: 1200,
    rating: 4.9,
    reviews: 342,
    duration: "28 ساعة",
    lessons: 45,
    level: "متقدم",
    instructor: "د. زياد مهنا",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIMH7_NrFX52QZfe0rDR42Rr0SCVLAz75N5uuO94k9sPXhmBKdB1NekKG39ZYzJoeCFefg3eqpmBC2q2BLmQp51WpwDBMaq9KHEI1wO7Bp5TnqsYyB1QTfjIgeRsvT7pNZKRRuo9TEPuFGURHuLe8eWvHQBOscIKOLEWj3G8NUEeAFHGaw-QATiamUCZpQC_A1KyBu7oPU82-hk3w49VB6FrDoWDqI6Ewynu6Ejf_KyTSbf32ziZhjkgK5k-0_pjGYcMpFIfN75HM",
    curriculum: [
      {
        title: "الوحدة 1: مقدمة في التشريح السريري",
        lessons: [
          { title: "المصطلحات والمستويات التشريحية", duration: "15:00", free: true },
          { title: "تنظيم أنظمة الجسم", duration: "22:00", free: false },
        ]
      },
      {
        title: "الوحدة 2: الهيكل العظمي والمفاصل",
        lessons: [
          { title: "تشريح العمود الفقري", duration: "45:00", free: false },
          { title: "مفاصل الطرف العلوي", duration: "38:00", free: false },
        ]
      }
    ]
  },
  {
    id: "2",
    slug: "clinical-biochemistry",
    title: "الكيمياء الحيوية السريرية",
    description: "أتقن المسارات الكيميائية الحيوية والارتباطات السريرية في هذا الكورس المتعمق المصمم لربط النظرية بالتطبيق العملي.",
    fullDescription: "الكيمياء الحيوية ليست مجرد معادلات، بل هي لغة الحياة. في هذا الكورس، سنقوم بفك شفرات الاستقلاب والإنزيمات والوراثة الجزيئية بطريقة تجعلك تفهم المرض قبل أن تراه في الكتاب.",
    price: 149,
    originalPrice: 199,
    category: "كيمياء حيوية",
    students: 850,
    rating: 4.8,
    reviews: 218,
    duration: "20 ساعة",
    lessons: 32,
    level: "متوسط",
    instructor: "د. زياد مهنا",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLfnA7pGnWu2cLKVbzqeXEuA4mmz5uTHtb5U8k33QBGYAFOnkZEziSg_3JiMPvrhRmJ6qycBvB6EC04R6sY3mvv6RmjrbK-Yw6MpphVDsvFMEgkbA11E0_fKZJXpChucG7R4br4m1OUUImRbO1pbDFHFPg6ld8THwk1CQvMoFr7UnQTICdr8carAVQHSGg6QlP1flosCKKE615qi5kkgTh8rQ6yzg9ReftwgJDa7HuajU-iDuLpnX7hSdvSv_ut0bK7yCfm9CwL6k",
    curriculum: [
      {
        title: "الوحدة 1: استقلاب الكربوهيدرات",
        lessons: [
          { title: "تحلل السكر (Glycolysis)", duration: "25:00", free: true },
          { title: "دورة كريبس وأهميتها السريرية", duration: "35:00", free: false },
        ]
      }
    ]
  },
  {
    id: "3",
    slug: "physiology-essentials",
    title: "أساسيات علم وظائف الأعضاء",
    description: "فهم آليات وظائف الجسم من المستوى الخلوي إلى أنظمة الأعضاء بأسلوب مبسط وعصري يناسب جميع المستويات.",
    fullDescription: "كيف يعمل قلبنا؟ كيف نتنفس؟ في هذا الكورس، سنستكشف روعة التصميم الإلهي في وظائف الأعضاء، مع التركيز على التوازن الحيوي (Homeostasis) وكيفية اختلاله في الحالات المرضية.",
    price: 179,
    originalPrice: 249,
    category: "فيزيولوجيا",
    students: 2100,
    rating: 5.0,
    reviews: 567,
    duration: "35 ساعة",
    lessons: 52,
    level: "مبتدئ",
    instructor: "د. زياد مهنا",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVlWbRKMyGdsCoK6zJDWFsoVmDLvPS9HDCPzMg9Cu9vN-7RPoSWPDWnjO9fSS20satPw9x_AuDsfFJWvuyo3OdmE6___pNNiXeNtJguoNMxso34cyu1tafQsYtwerthv33ENxnyGRLbBYyNwN-r6095da5z2b22eZkN9xbb8XNUy3_gAVDOPenZKEZ7e0txulK6wtN0qP-jqYQNu-CwX5bNpHgEqltNI39ERifYa_NJ4OeitkzQmXK_dobv6CSxH4JnKwZOmoApfE",
    curriculum: [
      {
        title: "الوحدة 1: فيزيولوجيا الخلية والدم",
        lessons: [
          { title: "النقل عبر الأغشية", duration: "20:00", free: true },
          { title: "وظائف خلايا الدم المناعية", duration: "30:00", free: false },
        ]
      }
    ]
  },
  {
    id: "4",
    slug: "cardiology-fundamentals",
    title: "أمراض القلب والأوعية الدموية",
    description: "تعمق في أحدث تقنيات التشخيص غير الجراحي وتفسير نتائج تخطيط القلب المعقدة مع حالات سريرية واقعية.",
    fullDescription: "يعتبر هذا الكورس دليلاً عملياً للأطباء وطلاب الطب للتعامل مع أكثر الحالات القلبية شيوعاً وتعقيداً، مع شرح مبسط لجهاز الدوران والفيزيولوجيا المرضية.",
    price: 229,
    originalPrice: null,
    category: "أمراض قلب",
    students: 780,
    rating: 4.9,
    reviews: 189,
    duration: "30 ساعة",
    lessons: 48,
    level: "متقدم",
    instructor: "د. زياد مهنا",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmOywauxC8qnFU-zzD2rqeDFWvbLGIHlt62LkT9FSL8a0ypFcLNRJy_8DEjdDhAuOUcxhZA0igASPElTCazLMsKDVv5pPsKWv1mj-bcQbjiVVvotIC_P9UEMuKIzLAuZBFhvU8lQAJ17YUy6m_LsaFz8JpmEl3sk7VteqLGE0OHpYhI6_ls2Lb1cSKDTC4tbOvKy68hxomB5x2yE1IQ2pyzmodsC4iY_kErzsfG8ZU7YxJHU0l7jA1oG5V0OmVQmdVUYY2NKnej9k",
    curriculum: [
      {
        title: "الوحدة 1: تخطيط القلب الأساسي",
        lessons: [
          { title: "أساسيات موجات ECG", duration: "30:00", free: true },
        ]
      }
    ]
  }
];
