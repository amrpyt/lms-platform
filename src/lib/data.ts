import { Locale } from "./i18n";

export const doctorData = {
  ar: {
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
  },
  en: {
    name: "Dr. Zeyad Mohanna",
    title: "Board-Certified Specialist & International Lecturer",
    bio: "With over a decade of clinical and academic experience, Dr. Zeyad Mohanna has dedicated his career to simplifying complex medical education and transforming it into an enjoyable and inspiring journey for the next generation of physicians. His unique teaching methodology focuses on building deep conceptual understanding rather than traditional memorization.",
    stats: [
      { label: "Active Students", value: "5,000+", icon: "users" },
      { label: "Course Enrollments", value: "12,000+", icon: "graduation-cap" },
      { label: "Years Experience", value: "10+", icon: "award" },
      { label: "Success Rate", value: "98%", icon: "check-circle" },
    ],
    achievements: [
      "Internationally Certified Specialist",
      "Lecturer at Top Universities",
      "Author of Leading Medical Book Series",
      "Award-Winning Innovative Educator"
    ],
  },
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
    email: "contact@drzeyad.com",
    phone: "+20 123 456 7890",
  }
};

export const getDoctorData = (locale: Locale) => ({
  ...doctorData[locale],
  social: doctorData.social,
});

export const courses = [
  {
    id: "1",
    slug: "advanced-anatomy",
    ar: {
      title: "التشريح الطبي المتقدم",
      description: "دليل شامل ومفصل للتشريح البشري لطلاب الطب والمهنيين. يغطي الجهاز العضلي والهيكلي والأوعية الدموية بأسلوب مبسط.",
      fullDescription: "يعتبر هذا الكورس حجر الزاوية لكل طالب طب طموح. سنغوص معاً في تفاصيل الجسم البشري، ليس فقط كخرائط صماء، بل كأنظمة حيوية متكاملة. ستتعلم كيفية ربط المعلومات التشريحية بالتطبيقات السريرية والجراحية الواقعية.",
      category: "تشريح",
      level: "متقدم",
      duration: "28 ساعة",
      instructor: "د. زياد مهنا",
      whatYouWillLearn: [
        "فهم التركيب التشريحي الكامل للجسم",
        "التعرف على الأعضاء والأجهزة الحيوية",
        "ربط التشريح بالتطبيقات السريرية",
        "تحليل الحالات الجراحية",
        "استخدام الأدوات التشريحية الحديثة",
        "فهم العلاقات التشريحية المعقدة"
      ],
      requirements: [
        "معرفة أساسية بالأحياء",
        "لا يتطلب خبرة سابقة في الطب"
      ],
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
    en: {
      title: "Advanced Medical Anatomy",
      description: "A comprehensive guide to human anatomy for medical students and professionals. Covers muscular, skeletal, and vascular systems in a simplified approach.",
      fullDescription: "This course is the cornerstone for every aspiring medical student. We'll dive deep into the details of the human body, not just as static maps, but as integrated living systems. You'll learn how to connect anatomical information with real clinical and surgical applications.",
      category: "Anatomy",
      level: "Advanced",
      duration: "28 hours",
      instructor: "Dr. Zeyad Mohanna",
      whatYouWillLearn: [
        "Understand the complete anatomical structure of the body",
        "Identify vital organs and systems",
        "Connect anatomy with clinical applications",
        "Analyze surgical cases",
        "Use modern anatomical tools",
        "Understand complex anatomical relationships"
      ],
      requirements: [
        "Basic knowledge of biology",
        "No prior medical experience required"
      ],
      curriculum: [
        {
          title: "Unit 1: Introduction to Clinical Anatomy",
          lessons: [
            { title: "Anatomical Terms and Planes", duration: "15:00", free: true },
            { title: "Body Systems Organization", duration: "22:00", free: false },
          ]
        },
        {
          title: "Unit 2: Skeletal System and Joints",
          lessons: [
            { title: "Spinal Column Anatomy", duration: "45:00", free: false },
            { title: "Upper Limb Joints", duration: "38:00", free: false },
          ]
        }
      ]
    },
    price: 199,
    originalPrice: 299,
    students: 1200,
    rating: 4.9,
    reviews: 342,
    lessons: 45,
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIMH7_NrFX52QZfe0rDR42Rr0SCVLAz75N5uuO94k9sPXhmBKdB1NekKG39ZYzJoeCFefg3eqpmBC2q2BLmQp51WpwDBMaq9KHEI1wO7Bp5TnqsYyB1QTfjIgeRsvT7pNZKRRuo9TEPuFGURHuLe8eWvHQBOscIKOLEWj3G8NUEeAFHGaw-QATiamUCZpQC_A1KyBu7oPU82-hk3w49VB6FrDoWDqI6Ewynu6Ejf_KyTSbf32ziZhjkgK5k-0_pjGYcMpFIfN75HM",
    featured: true,
  },
  {
    id: "2",
    slug: "clinical-biochemistry",
    ar: {
      title: "الكيمياء الحيوية السريرية",
      description: "أتقن المسارات الكيميائية الحيوية والارتباطات السريرية في هذا الكورس المتعمق المصمم لربط النظرية بالتطبيق العملي.",
      fullDescription: "الكيمياء الحيوية ليست مجرد معادلات، بل هي لغة الحياة. في هذا الكورس، سنقوم بفك شفرات الاستقلاب والإنزيمات والوراثة الجزيئية بطريقة تجعلك تفهم المرض قبل أن تراه في الكتاب.",
      category: "كيمياء حيوية",
      level: "متوسط",
      duration: "20 ساعة",
      instructor: "د. زياد مهنا",
      whatYouWillLearn: [
        "فهم المسارات الاستقلابية الأساسية",
        "ربط الكيمياء الحيوية بالأمراض السريرية",
        "تحليل نتائج المختبر",
        "فهم الإنزيمات ووظائفها"
      ],
      requirements: [
        "معرفة أساسية بالكيمياء",
        "فهم أولي للأحياء"
      ],
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
    en: {
      title: "Clinical Biochemistry",
      description: "Master biochemical pathways and clinical correlations in this in-depth course designed to bridge theory with practical application.",
      fullDescription: "Biochemistry is not just equations, it's the language of life. In this course, we'll decode metabolism, enzymes, and molecular genetics in a way that helps you understand disease before you see it in a textbook.",
      category: "Biochemistry",
      level: "Intermediate",
      duration: "20 hours",
      instructor: "Dr. Zeyad Mohanna",
      whatYouWillLearn: [
        "Understand basic metabolic pathways",
        "Connect biochemistry with clinical diseases",
        "Analyze laboratory results",
        "Understand enzymes and their functions"
      ],
      requirements: [
        "Basic knowledge of chemistry",
        "Elementary understanding of biology"
      ],
      curriculum: [
        {
          title: "Unit 1: Carbohydrate Metabolism",
          lessons: [
            { title: "Glycolysis", duration: "25:00", free: true },
            { title: "Krebs Cycle and Clinical Significance", duration: "35:00", free: false },
          ]
        }
      ]
    },
    price: 149,
    originalPrice: 199,
    students: 850,
    rating: 4.8,
    reviews: 218,
    lessons: 32,
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLfnA7pGnWu2cLKVbzqeXEuA4mmz5uTHtb5U8k33QBGYAFOnkZEziSg_3JiMPvrhRmJ6qycBvB6EC04R6sY3mvv6RmjrbK-Yw6MpphVDsvFMEgkbA11E0_fKZJXpChucG7R4br4m1OUUImRbO1pbDFHFPg6ld8THwk1CQvMoFr7UnQTICdr8carAVQHSGg6QlP1flosCKKE615qi5kkgTh8rQ6yzg9ReftwgJDa7HuajU-iDuLpnX7hSdvSv_ut0bK7yCfm9CwL6k",
    featured: false,
  },
  {
    id: "3",
    slug: "physiology-essentials",
    ar: {
      title: "أساسيات علم وظائف الأعضاء",
      description: "فهم آليات وظائف الجسم من المستوى الخلوي إلى أنظمة الأعضاء بأسلوب مبسط وعصري يناسب جميع المستويات.",
      fullDescription: "كيف يعمل قلبنا؟ كيف نتنفس؟ في هذا الكورس، سنستكشف روعة التصميم الإلهي في وظائف الأعضاء، مع التركيز على التوازن الحيوي (Homeostasis) وكيفية اختلاله في الحالات المرضية.",
      category: "فيزيولوجيا",
      level: "مبتدئ",
      duration: "35 ساعة",
      instructor: "د. زياد مهنا",
      whatYouWillLearn: [
        "فهم آليات عمل الأعضاء الرئيسية",
        "دراسة التوازن الحيوي",
        "ربط الفيزيولوجيا بالحالات المرضية",
        "تحليل الإشارات العصبية والهرمونية"
      ],
      requirements: [
        "لا يتطلب خبرة سابقة",
        "رغبة في التعلم"
      ],
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
    en: {
      title: "Physiology Essentials",
      description: "Understand body function mechanisms from cellular level to organ systems in a simplified, modern approach suitable for all levels.",
      fullDescription: "How does our heart work? How do we breathe? In this course, we'll explore the magnificent design of organ functions, focusing on homeostasis and how it becomes disrupted in disease states.",
      category: "Physiology",
      level: "Beginner",
      duration: "35 hours",
      instructor: "Dr. Zeyad Mohanna",
      whatYouWillLearn: [
        "Understand major organ mechanisms",
        "Study homeostasis",
        "Connect physiology with disease states",
        "Analyze neural and hormonal signals"
      ],
      requirements: [
        "No prior experience required",
        "Desire to learn"
      ],
      curriculum: [
        {
          title: "Unit 1: Cell and Blood Physiology",
          lessons: [
            { title: "Membrane Transport", duration: "20:00", free: true },
            { title: "Immune Blood Cell Functions", duration: "30:00", free: false },
          ]
        }
      ]
    },
    price: 179,
    originalPrice: 249,
    students: 2100,
    rating: 5.0,
    reviews: 567,
    lessons: 52,
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVlWbRKMyGdsCoK6zJDWFsoVmDLvPS9HDCPzMg9Cu9vN-7RPoSWPDWnjO9fSS20satPw9x_AuDsfFJWvuyo3OdmE6___pNNiXeNtJguoNMxso34cyu1tafQsYtwerthv33ENxnyGRLbBYyNwN-r6095da5z2b22eZkN9xbb8XNUy3_gAVDOPenZKEZ7e0txulK6wtN0qP-jqYQNu-CwX5bNpHgEqltNI39ERifYa_NJ4OeitkzQmXK_dobv6CSxH4JnKwZOmoApfE",
    featured: true,
  },
  {
    id: "4",
    slug: "cardiology-fundamentals",
    ar: {
      title: "أمراض القلب والأوعية الدموية",
      description: "تعمق في أحدث تقنيات التشخيص غير الجراحي وتفسير نتائج تخطيط القلب المعقدة مع حالات سريرية واقعية.",
      fullDescription: "يعتبر هذا الكورس دليلاً عملياً للأطباء وطلاب الطب للتعامل مع أكثر الحالات القلبية شيوعاً وتعقيداً، مع شرح مبسط لجهاز الدوران والفيزيولوجيا المرضية.",
      category: "أمراض قلب",
      level: "متقدم",
      duration: "30 ساعة",
      instructor: "د. زياد مهنا",
      whatYouWillLearn: [
        "تفسير تخطيط القلب بدقة",
        "تشخيص أمراض القلب الشائعة",
        "فهم الفيزيولوجيا المرضية للقلب",
        "تحليل حالات سريرية معقدة"
      ],
      requirements: [
        "معرفة أساسية بالتشريح",
        "فهم أولي للفيزيولوجيا"
      ],
      curriculum: [
        {
          title: "الوحدة 1: تخطيط القلب الأساسي",
          lessons: [
            { title: "أساسيات موجات ECG", duration: "30:00", free: true },
          ]
        }
      ]
    },
    en: {
      title: "Cardiovascular Diseases",
      description: "Dive deep into the latest non-invasive diagnostic techniques and complex ECG interpretation with real clinical cases.",
      fullDescription: "This course is a practical guide for physicians and medical students to handle the most common and complex cardiac cases, with simplified explanation of the circulatory system and pathophysiology.",
      category: "Cardiology",
      level: "Advanced",
      duration: "30 hours",
      instructor: "Dr. Zeyad Mohanna",
      whatYouWillLearn: [
        "Interpret ECGs accurately",
        "Diagnose common heart diseases",
        "Understand cardiac pathophysiology",
        "Analyze complex clinical cases"
      ],
      requirements: [
        "Basic knowledge of anatomy",
        "Elementary understanding of physiology"
      ],
      curriculum: [
        {
          title: "Unit 1: Basic ECG",
          lessons: [
            { title: "ECG Wave Fundamentals", duration: "30:00", free: true },
          ]
        }
      ]
    },
    price: 229,
    originalPrice: null,
    students: 780,
    rating: 4.9,
    reviews: 189,
    lessons: 48,
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmOywauxC8qnFU-zzD2rqeDFWvbLGIHlt62LkT9FSL8a0ypFcLNRJy_8DEjdDhAuOUcxhZA0igASPElTCazLMsKDVv5pPsKWv1mj-bcQbjiVVvotIC_P9UEMuKIzLAuZBFhvU8lQAJ17YUy6m_LsaFz8JpmEl3sk7VteqLGE0OHpYhI6_ls2Lb1cSKDTC4tbOvKy68hxomB5x2yE1IQ2pyzmodsC4iY_kErzsfG8ZU7YxJHU0l7jA1oG5V0OmVQmdVUYY2NKnej9k",
    featured: false,
  }
];

export const getCourse = (slug: string, locale: Locale) => {
  const course = courses.find(c => c.slug === slug);
  if (!course) return null;
  
  const localizedData = course[locale];
  return {
    ...course,
    ...localizedData,
  };
};

export const getCourses = (locale: Locale) => {
  return courses.map(course => ({
    ...course,
    ...course[locale],
  }));
};

export const reviews = {
  ar: [
    {
      id: "1",
      name: "أحمد محمد",
      rating: 5,
      date: "منذ أسبوعين",
      comment: "كورس ممتاز جداً، شرح مبسط ومفصل. الدكتور زياد لديه أسلوب فريد في توصيل المعلومة."
    },
    {
      id: "2",
      name: "سارة أحمد",
      rating: 5,
      date: "منذ شهر",
      comment: "أفضل كورس تشريح على الإطلاق! ساعدني كثيراً في الامتحانات."
    },
    {
      id: "3",
      name: "محمد علي",
      rating: 4,
      date: "منذ شهرين",
      comment: "محتوى ممتاز وشرح واضح. أنصح به بشدة لكل طالب طب."
    }
  ],
  en: [
    {
      id: "1",
      name: "Ahmed Mohamed",
      rating: 5,
      date: "2 weeks ago",
      comment: "Excellent course, simplified and detailed explanation. Dr. Zeyad has a unique style of conveying information."
    },
    {
      id: "2",
      name: "Sara Ahmed",
      rating: 5,
      date: "1 month ago",
      comment: "Best anatomy course ever! Helped me tremendously in exams."
    },
    {
      id: "3",
      name: "Mohamed Ali",
      rating: 4,
      date: "2 months ago",
      comment: "Excellent content and clear explanation. Highly recommend for every medical student."
    }
  ]
};

export const getReviews = (locale: Locale) => reviews[locale];

export const categories = {
  ar: ["تشريح", "كيمياء حيوية", "فيزيولوجيا", "أمراض قلب"],
  en: ["Anatomy", "Biochemistry", "Physiology", "Cardiology"]
};

export const levels = {
  ar: ["مبتدئ", "متوسط", "متقدم"],
  en: ["Beginner", "Intermediate", "Advanced"]
};

export const getCategories = (locale: Locale) => categories[locale];
export const getLevels = (locale: Locale) => levels[locale];
