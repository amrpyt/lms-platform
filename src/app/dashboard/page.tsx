import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="layout-container flex flex-col min-h-screen">
        <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 md:px-12 py-3 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <div className="size-9 bg-primary-med text-white rounded-lg flex items-center justify-center shadow-lg shadow-primary-med/30">
              <span className="material-symbols-outlined text-2xl">clinical_notes</span>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight">منصة د. ميد-إيدو</h2>
          </div>
          <div className="hidden lg:flex flex-1 justify-center">
            <nav className="flex items-center gap-8">
              <a className="text-sm font-semibold text-primary-med" href="#">
                لوحة التحكم
              </a>
              <a className="text-sm font-medium hover:text-primary-med transition-colors" href="#">
                المسارات التعليمية
              </a>
              <a className="text-sm font-medium hover:text-primary-med transition-colors" href="#">
                المكتبة الرقمية
              </a>
              <a className="text-sm font-medium hover:text-primary-med transition-colors" href="#">
                الشهادات المعتمدة
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <button className="relative p-2 text-slate-500 hover:text-primary-med transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
            </button>
            <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 p-1 pr-3 rounded-full border border-slate-200 dark:border-slate-700">
              <span className="text-sm font-bold">د. أحمد خالد</span>
              <div className="size-8 rounded-full bg-slate-300 dark:bg-slate-600 overflow-hidden border-2 border-white dark:border-slate-500 relative">
                <Image
                  alt="User Avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxjBWQ3Br5ZwKNy5R3Tm570_WmawzYhHvc1r3ZDKC9llw6jEmp4P2ebgP1MR3vSiY0KlvfBmzhqgsPI8bd6B5ZRxlg3AxQCURw1CdDwKk72N79NXa0iNQSSM0H9v1lSt6F02RA0nEhgcsTJ6igFt0aPRPtUrrzkT8d0dTV64I2scngmmSuLBHY5G28eRx_y9AqkcDv4gBLV4QU8quZMN04e2iNYb1cniPGwhknyh5IEXpF1NqD88QCVMO_pz2tPoNmTCPWVUTSKPY"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 md:p-12 max-w-[1600px] mx-auto w-full">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">
                  مرحباً بك في مركز التعلم المخصص
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-lg">
                  نظرة عامة على أدائك التعليمي وأحدث التوصيات الطبية.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="bg-primary-med text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary-med/20 hover:bg-primary-med/90 transition-all">
                  <span className="material-symbols-outlined">add_task</span>
                  بدء دورة جديدة
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="dashboard-glass p-6 rounded-2xl shadow-sm border-r-4 border-r-primary-med">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-primary-med/10 rounded-lg text-primary-med">
                    <span className="material-symbols-outlined">group</span>
                  </div>
                  <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                    +١٢٪
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">الطلاب في شبكتك</p>
                <p className="text-3xl font-black mt-1">١٢,٥٠٠+</p>
              </div>
              <div className="dashboard-glass p-6 rounded-2xl shadow-sm border-r-4 border-r-accent-med">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-accent-med/10 rounded-lg text-accent-med">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 px-2 py-1">مُحدّث</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">الدورات المنجزة</p>
                <p className="text-3xl font-black mt-1">٤٥</p>
              </div>
              <div className="dashboard-glass p-6 rounded-2xl shadow-sm border-r-4 border-r-yellow-400">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-yellow-400/10 rounded-lg text-yellow-600">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <span className="text-xs font-bold text-primary-med px-2 py-1 rounded-full">ممتاز</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">معدل النجاح السريري</p>
                <p className="text-3xl font-black mt-1">٩٨.٤٪</p>
              </div>
              <div className="dashboard-glass p-6 rounded-2xl shadow-sm border-r-4 border-r-purple-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-600">
                    <span className="material-symbols-outlined">timer</span>
                  </div>
                  <span className="text-xs font-bold text-purple-600 bg-purple-500/10 px-2 py-1 rounded-full">
                    ١٢٠ ساعة
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">ساعات التعليم المستمر</p>
                <p className="text-3xl font-black mt-1">١٢٠+</p>
              </div>
            </div>
          </div>
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-med">auto_awesome</span>
                <h3 className="text-2xl font-bold">موصى به لك</h3>
                <span className="text-xs bg-primary-med/10 text-primary-med px-3 py-1 rounded-full font-bold">
                  ذكاء اصطناعي
                </span>
              </div>
              <button className="text-sm font-bold text-primary-med flex items-center gap-1 hover:underline">
                عرض الكل
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar">
              {/* Card 1 */}
              <div className="min-w-[300px] md:min-w-[350px] bg-white dark:bg-card-dark rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 group cursor-pointer overflow-hidden flex flex-col">
                <div className="h-44 relative">
                  <Image
                    alt="Cardiology"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIMH7_NrFX52QZfe0rDR42Rr0SCVLAz75N5uuO94k9sPXhmBKdB1NekKG39ZYzJoeCFefg3eqpmBC2q2BLmQp51WpwDBMaq9KHEI1wO7Bp5TnqsYyB1QTfjIgeRsvT7pNZKRRuo9TEPuFGURHuLe8eWvHQBOscIKOLEWj3G8NUEeAFHGaw-QATiamUCZpQC_A1KyBu7oPU82-hk3w49VB6FrDoWDqI6Ewynu6Ejf_KyTSbf32ziZhjkgK5k-0_pjGYcMpFIfN75HM"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 left-4 flex justify-between items-center">
                    <span className="px-3 py-1 bg-primary-med text-white text-[10px] font-bold rounded-md uppercase">
                      Cardiology
                    </span>
                    <div className="flex items-center gap-1 text-white text-xs">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      ٢٨ ساعة
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-primary-med transition-colors">
                    أساسيات أمراض القلب المتقدمة
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                    تعمق في أحدث تقنيات التشخيص غير الجراحي وتفسير نتائج تخطيط القلب المعقدة.
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex -space-x-2 space-x-reverse">
                      <div className="size-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200"></div>
                      <div className="size-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-300"></div>
                      <div className="size-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-400"></div>
                    </div>
                    <span className="text-xs font-bold text-slate-400">+٨٠٠ طالب</span>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="min-w-[300px] md:min-w-[350px] bg-white dark:bg-card-dark rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 group cursor-pointer overflow-hidden flex flex-col">
                <div className="h-44 relative">
                  <Image
                    alt="Neurology"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLfnA7pGnWu2cLKVbzqeXEuA4mmz5uTHtb5U8k33QBGYAFOnkZEziSg_3JiMPvrhRmJ6qycBvB6EC04R6sY3mvv6RmjrbK-Yw6MpphVDsvFMEgkbA11E0_fKZJXpChucG7R4br4m1OUUImRbO1pbDFHFPg6ld8THwk1CQvMoFr7UnQTICdr8carAVQHSGg6QlP1flosCKKE615qi5kkgTh8rQ6yzg9ReftwgJDa7HuajU-iDuLpnX7hSdvSv_ut0bK7yCfm9CwL6k"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 left-4 flex justify-between items-center">
                    <span className="px-3 py-1 bg-accent-med text-slate-900 text-[10px] font-bold rounded-md uppercase">
                      Neurology
                    </span>
                    <div className="flex items-center gap-1 text-white text-xs">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      ٢٠ ساعة
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-primary-med transition-colors">
                    علم الأعصاب السريري الحديث
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                    دراسة شاملة للجهاز العصبي المركزي مع التركيز على حالات الصرع والاضطرابات الحركية.
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex -space-x-2 space-x-reverse">
                      <div className="size-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200"></div>
                      <div className="size-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-300"></div>
                    </div>
                    <span className="text-xs font-bold text-slate-400">+٤٥٠ طالب</span>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="min-w-[300px] md:min-w-[350px] bg-white dark:bg-card-dark rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 group cursor-pointer overflow-hidden flex flex-col">
                <div className="h-44 relative">
                  <Image
                    alt="Surgery"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVlWbRKMyGdsCoK6zJDWFsoVmDLvPS9HDCPzMg9Cu9vN-7RPoSWPDWnjO9fSS20satPw9x_AuDsfFJWvuyo3OdmE6___pNNiXeNtJguoNMxso34cyu1tafQsYtwerthv33ENxnyGRLbBYyNwN-r6095da5z2b22eZkN9xbb8XNUy3_gAVDOPenZKEZ7e0txulK6wtN0qP-jqYQNu-CwX5bNpHgEqltNI39ERifYa_NJ4OeitkzQmXK_dobv6CSxH4JnKwZOmoApfE"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 left-4 flex justify-between items-center">
                    <span className="px-3 py-1 bg-purple-500 text-white text-[10px] font-bold rounded-md uppercase">
                      Surgery
                    </span>
                    <div className="flex items-center gap-1 text-white text-xs">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      ٤٤ ساعة
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-primary-med transition-colors">
                    مهارات الجراحة العامة المكثفة
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                    تجهيز كامل للامتحانات المهنية وللتطبيق العملي في غرف العمليات الحديثة.
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex -space-x-2 space-x-reverse">
                      <div className="size-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200"></div>
                      <div className="size-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-300"></div>
                      <div className="size-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-400"></div>
                    </div>
                    <span className="text-xs font-bold text-slate-400">+١,٢٠٠ طالب</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="dashboard-glass p-6 rounded-2xl shadow-sm">
                <h5 className="font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-med">search</span>
                  بحث في التخصصات
                </h5>
                <div className="relative mb-6">
                  <input
                    className="w-full h-12 pr-10 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:ring-primary-med focus:border-primary-med text-sm"
                    placeholder="مثلاً: طب القلب، طب الطوارئ..."
                    type="text"
                  />
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                    search
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium cursor-pointer hover:bg-primary-med/10 hover:text-primary-med transition-colors">
                    تخطيط القلب
                  </span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium cursor-pointer hover:bg-primary-med/10 hover:text-primary-med transition-colors">
                    الأشعة المقطعية
                  </span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium cursor-pointer hover:bg-primary-med/10 hover:text-primary-med transition-colors">
                    العناية المركزة
                  </span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium cursor-pointer hover:bg-primary-med/10 hover:text-primary-med transition-colors">
                    السكري
                  </span>
                </div>
              </div>
              <div className="bg-primary-med/5 p-6 rounded-2xl border border-primary-med/10 relative overflow-hidden group">
                <div className="relative z-10">
                  <h5 className="font-bold text-primary-med mb-2">هل تحتاج إلى استشارة تعليمية؟</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    احجز جلسة خاصة مع د. جوناثان لمناقشة مسارك المهني.
                  </p>
                  <button className="w-full py-2 bg-primary-med text-white rounded-lg text-sm font-bold">تواصل الآن</button>
                </div>
                <span className="material-symbols-outlined absolute -bottom-4 -left-4 text-primary-med/10 text-8xl transform group-hover:scale-110 transition-transform">
                  medical_services
                </span>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="dashboard-glass p-6 rounded-2xl shadow-sm h-full">
                <div className="flex items-center justify-between mb-6">
                  <h5 className="font-bold">نشاطات التعلم الحالية</h5>
                  <span className="text-xs text-slate-400">آخر تحديث: منذ ٥ دقائق</span>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                    <div className="size-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl">play_circle</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-sm font-bold">متابعة: الفيزيولوجيا المرضية للقلب</p>
                        <span className="text-[10px] text-slate-400">١٢:٣٠ م</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-[65%]"></div>
                      </div>
                      <p className="text-[11px] mt-2 text-slate-500">متبقي ١٥ دقيقة لإنهاء الوحدة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <div className="size-10 rounded-full bg-primary-med/10 text-primary-med flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl">assignment</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-sm font-bold">اختبار متاح: مراجعة الأعصاب السنوية</p>
                        <span className="text-[10px] text-slate-400">أمس</span>
                      </div>
                      <p className="text-xs text-slate-500">لقد أكملت جميع المتطلبات المسبقة لهذا الاختبار.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <div className="size-10 rounded-full bg-yellow-500/10 text-yellow-600 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl">emoji_events</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-sm font-bold">تهانينا! حصلت على شهادة CME</p>
                        <span className="text-[10px] text-slate-400">منذ يومين</span>
                      </div>
                      <p className="text-xs text-slate-500">تم إصدار شهادة "إدارة الطوارئ الجراحية" بنجاح.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-slate-900 text-slate-400 py-12 px-6 md:px-12 border-t border-slate-800">
          <div className="max-w-[1440px] mx-auto grid md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
              <div className="flex items-center gap-2 text-white">
                <div className="size-8 bg-primary-med rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">clinical_notes</span>
                </div>
                <h2 className="text-lg font-bold">د. ميد-إيدو</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed">
                منصة تعليمية سريرية احترافية تأسست لتمكين الجيل القادم من الأطباء والمتخصصين بالمعرفة الطبية العملية
                والمدعومة بالنتائج.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-white font-bold">روابط سريعة</h5>
              <nav className="flex flex-col gap-2 text-sm">
                <a className="hover:text-primary-med transition-colors" href="#">
                  قائمة الدورات
                </a>
                <a className="hover:text-primary-med transition-colors" href="#">
                  عن الدكتور
                </a>
                <a className="hover:text-primary-med transition-colors" href="#">
                  اعتماد الساعات
                </a>
                <a className="hover:text-primary-med transition-colors" href="#">
                  الدعم الفني
                </a>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-white font-bold">تواصل معنا</h5>
              <div className="flex flex-col gap-2 text-sm">
                <p>المجمع الطبي، مدينة الصحة</p>
                <p>contact@drmededu.com</p>
                <div className="flex gap-4 mt-2">
                  <span className="material-symbols-outlined cursor-pointer hover:text-white transition-colors">mail</span>
                  <span className="material-symbols-outlined cursor-pointer hover:text-white transition-colors">share</span>
                  <span className="material-symbols-outlined cursor-pointer hover:text-white transition-colors">hub</span>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1440px] mx-auto border-t border-slate-800 mt-12 pt-8 text-center text-xs">
            <p>© ٢٠٢٤ د. ميد-إيدو. جميع الحقوق محفوظة. مزود معتمد للتعليم الطبي المستمر.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
