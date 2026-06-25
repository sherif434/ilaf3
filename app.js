/* -------------------------------------------------------------
   إيلاف - منطق العمل والتفاعلات (Eelaf Shop Application Logic)
   ------------------------------------------------------------- */

// رقم هاتف المشرف الافتراضي لتلقي الطلبات عبر الواتساب (يمكن تعديله هنا)
const SUPERVISOR_PHONE = "+212600000000";

// قاعدة بيانات المنتجات المغربية الفاخرة المحدثة بمعرض الصور والفوائد وطريقة الاستخدام
const PRODUCTS = [
    {
        id: 1,
        title: "زيت الأركان التجميلي العضوي النقي",
        desc: "معصور على البارد، طبيعي 100% لتغذية البشرة والشعر وترطيبهما بعمق.",
        price: 150.00,
        category: "cosmetics",
        badge: "الأكثر مبيعاً",
        image: "argan_oil.png",
        images: ["argan_oil.png", "logo.png"],
        benefits: [
            "ترطيب عميق للبشرة الجافة والتالفة واستعادة مرونتها.",
            "مكافحة الشيخوخة وتقليل ظهور الخطوط الدقيقة والتجاعيد.",
            "تغذية بصيلات الشعر وعلاج التقصف والبهتان والجفاف.",
            "تقوية الأظافر الهشة وحمايتها من التكسر والتشققات."
        ],
        usage: "ضعي بضع قطرات من الزيت على بشرة وجهك وجسمك بعد تنظيفهما، ودلكي بلطف بحركات دائرية قبل النوم. بالنسبة للشعر، وزعي الزيت بالتساوي على الأطراف وجذور الشعر، واتركيه لمدة ساعة على الأقل قبل الاستحمام وغسله."
    },
    {
        id: 2,
        title: "الصابون البلدي المغربي بالزيتون والنعناع",
        desc: "صابون تقليدي ناعم يزيل الخلايا الميتة وينظف البشرة بعمق في الحمام المغربي.",
        price: 45.00,
        category: "cosmetics",
        badge: "طبيعي",
        image: "black_soap.png",
        images: ["black_soap.png", "logo.png"],
        benefits: [
            "تقشير طبيعي فائق الفعالية يزيل خلايا الجلد الميتة تماماً.",
            "تنشيط الدورة الدموية وتفتيح وتوحيد لون البشرة والجسم.",
            "تنظيف مسام الجسم بعمق وإزالة الشوائب والترسبات الدهنية.",
            "إضفاء نعومة فائقة ونضارة طبيعية وملمس حريري رائع للجسم."
        ],
        usage: "يدهن الجسم بالكامل بالصابون البلدي بعد التعرض للبخار الدافئ أو الماء الساخن في الحمام لمدة 10 دقائق، يترك الصابون على الجسم لمدة 5 دقائق، ثم يشطف بالماء الفاتر جيداً، وبعدها يتم فرك الجسم باستخدام الليفة المغربية (الكيسة) بحركات طولية لإزالة الجلد الميت."
    },
    {
        id: 3,
        title: "الغاسول المغربي الفاخر بالأعشاب الطبيعية",
        desc: "طين الأطلس الطبيعي المخلوط بالورد والبابونج لتنظيف وتنعيم البشرة والشعر.",
        price: 60.00,
        category: "cosmetics",
        badge: "مميز",
        image: "ghassoul.png",
        images: ["logo.png", "argan_oil.png"],
        benefits: [
            "امتصاص الدهون الزائدة والشوائب من مسام البشرة بكفاءة عالية.",
            "شد مسام البشرة الواسعة وتحسين مرونتها ومظهرها العام.",
            "تغذية بصيلات الشعر وإضافة حجم ولمعان طبيعي مميز له.",
            "تلطيف البشرة الحساسة وتقليل الاحمرار والتهيجات الجلدية."
        ],
        usage: "يخلط مقدار مناسب من الغاسول بماء دافئ أو ماء ورد للحصول على عجينة متجانسة وسلسة. يوضع الماسك على الوجه أو الشعر لمدة 10-15 دقيقة حتى يجف تماماً، ثم يشطف بالماء الفاتر بلطف."
    },
    {
        id: 4,
        title: "ماء ورد قلعة مكونة المقطر الطبيعي",
        desc: "تونر طبيعي منعش لتهدئة البشرة وتنقيتها، مقطر من بتلات الورد الجوري.",
        price: 35.00,
        category: "cosmetics",
        badge: "شائع",
        image: "rose_water.png",
        images: ["logo.png", "black_soap.png"],
        benefits: [
            "تونر طبيعي ومثالي يوازن درجة حموضة البشرة الطبيعية (pH).",
            "تضييق المسام الواسعة بالوجه ومنحه إشراقة وانتعاشاً فورياً.",
            "تهدئة تهيج البشرة الحساسة واحمرارها بعد إزالة الشعر أو الحلاقة.",
            "ترطيب خفيف ومناسب لجميع أنواع البشرة في كافة فصول السنة."
        ],
        usage: "يرش ماء الورد مباشرة على الوجه والرقبة بعد تنظيفهما، أو يمسح بواسطة قطنة مبللة صباحاً ومساءً. يمكن استخدامه كعنصر خلط أساسي مع قناع الغاسول المغربي لنتائج أفضل."
    },
    {
        id: 5,
        title: "أملو المغربي الأصيل باللوز وأركان والعسل",
        desc: "مزيج لذيذ ومغذي من اللوز المحمص، زيت الأركان الغذائي وعسل النحل الحر.",
        price: 120.00,
        category: "food",
        badge: "صحي ومغذي",
        image: "amlou.png",
        images: ["logo.png", "argan_oil.png"],
        benefits: [
            "مصدر طبيعي وصحي هائل يمد الجسم بالطاقة والنشاط طوال اليوم.",
            "غني بالأحماض الدهنية الصحية (أوميغا 6 و 9) ومضادات الأكسدة.",
            "يقوي جهاز المناعة ويساعد في تحسين عملية الهضم والتمثيل الغذائي.",
            "بديل صحي ولذيذ وخالٍ من المواد الحافظة والسكريات المصنعة."
        ],
        usage: "يقدم كطبق أساسي في الفطور أو الوجبات الخفيفة، ويؤكل مع الخبز الساخن أو الفطائر المغربية (البغرير والمسمن). ينصح بتحريك وتحريك أملو جيداً في البرطمان قبل الاستهلاك نظراً لانفصال الزيت الطبيعي عن اللوز في الأعلى."
    },
    {
        id: 6,
        title: "زعفران تاليوين الحر الأصيل (1 جرام)",
        desc: "الذهب الأحمر المغربي ذو النكهة والرائحة القوية، مقطوف يدوياً من مزارع تاليوين.",
        price: 75.00,
        category: "food",
        badge: "فاخر",
        image: "saffron.png",
        images: ["logo.png", "black_soap.png"],
        benefits: [
            "مضاد قوي للأكسدة والالتهابات ويقوي صحة الشرايين والقلب.",
            "يساعد في تحسين المزاج العام ومكافحة أعراض القلق والاكتئاب.",
            "تحسين مستويات الذاكرة وتقوية القدرات الذهنية ومكافحة الزهايمر.",
            "يضفي نكهة ملكية فريدة ولوناً ذهبياً رائعاً للأطباق الفاخرة والشاي."
        ],
        usage: "تنقع بضع شعيرات من الزعفران في نصف كوب من الماء الدافئ أو الحليب الدافئ لمدة 10 دقائق لتتحلل خصائصه ونكهته، ثم يضاف السائل المنقوع للطبخ (مثل الطواجن أو الأرز) أو للشاي المغربي الساخن."
    },
    {
        id: 7,
        title: "طقم الشاي المغربي النحاسي الفاخر",
        desc: "براد نحاسي منقوش يدوياً مع 6 كؤوس مزخرفة وصينية لتقديم الشاي المغربي الأصيل.",
        price: 450.00,
        category: "sets",
        badge: "تراثي",
        image: "tea_set.png",
        images: ["logo.png", "argan_oil.png"],
        benefits: [
            "صناعة يدوية تقليدية 100% تعكس عراقة الفن والنحاس المغربي.",
            "نحاس نقي ذو جودة عالية يحتفظ بحرارة ونكهة الشاي لفترة أطول.",
            "تحفة فنية رائعة تضيف لمسة جمال وتراث أصيل لأي ركن بمنزلك.",
            "مثالي لإقامة طقوس الشاي المغربي المميزة واستقبال الضيوف بفخامة."
        ],
        usage: "يغسل البراد والكؤوس يدوياً بالماء الفاتر وصابون لطيف (تجنب غسالة الأطباق). يوضع الشاي الأخضر والنعناع والسكر والماء المغلي بداخله، ويترك ليتخمر لبضع دقائق، ثم يصب الشاي في الكؤوس من مسافة مرتفعة لخلق الرغوة التقليدية."
    },
    {
        id: 8,
        title: "صندوق العناية المغربي الملكي المتكامل",
        desc: "يحتوي على زيت أركان، صابون بلدي، غاسول، ليفة كيسة فاخرة، وماء الورد في صندوق خشبي مميز.",
        price: 280.00,
        category: "sets",
        badge: "باقة هدايا",
        image: "gift_box.png",
        images: ["logo.png", "black_soap.png"],
        benefits: [
            "تجربة حمام مغربي تقليدي ملكي متكاملة وفاخرة داخل منزلك.",
            "توفير قيمة اقتصادية ممتازة مقارنة بشراء المستحضرات بشكل فردي.",
            "هدية أنيقة وفاخرة ومثالية للمناسبات الخاصة والتهادي الفاخر.",
            "جميع المكونات طبيعية تماماً ومستخلصة بعناية لتمنح بشرتك النعومة الفائقة."
        ],
        usage: "ابدأ بالصابون البلدي بعد تعريض جسمك للبخار الساخن ثم التقشير بالليفة المغربية المرفقة، ثم اخلط قناع الغاسول بماء الورد وضعه على وجهك وجسمك، وفي النهاية بعد الاستحمام جفف جسمك ورطبه بالكامل بزيت الأركان النقي."
    }
];

// قاعدة بيانات الدول لرمز التحقق وتسجيل الدخول
const COUNTRIES = {
    EG: { name: "مصر", prefix: "+20", flag: "🇪🇬", placeholder: "1x xxx xxxx", pattern: /^[1][0-259]\d{8}$/ },
    MA: { name: "المغرب", prefix: "+212", flag: "🇲🇦", placeholder: "6xx xx xx xx", pattern: /^[5-7]\d{8}$/ },
    SA: { name: "السعودية", prefix: "+966", flag: "🇸🇦", placeholder: "5x xxx xxxx", pattern: /^5\d{8}$/ },
    AE: { name: "الإمارات", prefix: "+971", flag: "🇦🇪", placeholder: "5x xxx xxxx", pattern: /^5\d{8}$/ },
    KW: { name: "الكويت", prefix: "+965", flag: "🇰🇼", placeholder: "xxxx xxxx", pattern: /^\d{8}$/ },
    QA: { name: "قطر", prefix: "+974", flag: "🇶🇦", placeholder: "xxxx xxxx", pattern: /^\d{8}$/ },
    OM: { name: "عمان", prefix: "+968", flag: "🇴🇲", placeholder: "xxxx xxxx", pattern: /^\d{8}$/ },
    BH: { name: "البحرين", prefix: "+973", flag: "🇧🇭", placeholder: "xxxx xxxx", pattern: /^\d{8}$/ }
};

// حالة التطبيق العامة (Application State)
let cart = [];
let currentUser = null;
let currentView = "home";
let currentOrder = null;
let otpCode = "";
let otpTimerInterval = null;
const SHIPPING_COST = 30.00; // تكلفة ثابتة للتوصيل بالجنيه المصري

// حالة صفحة تفاصيل المنتج النشطة
let selectedProduct = null;
let detailQuantity = 1;
let selectedCountry = "EG"; // الدولة الافتراضية هي مصر

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    // تحميل حالة المستخدم وسلة التسوق من التخزين المحلي
    loadSession();
    
    // عرض المنتجات
    renderProducts("all");
    
    // تحديث شريط السلة
    updateCartCount();
    
    // تفعيل أيقونات Lucide
    lucide.createIcons();
    
    // مراقبة أحداث الإدخال لرموز OTP للتركيز التلقائي
    initOtpInputFocus();
});

// حفظ وحمل الجلسة
function loadSession() {
    const savedUser = localStorage.getItem("eelaf_user");
    const savedCart = localStorage.getItem("eelaf_cart");
    
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserButtonState(true);
    }
    
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function saveSession() {
    if (currentUser) {
        localStorage.setItem("eelaf_user", JSON.stringify(currentUser));
    } else {
        localStorage.removeItem("eelaf_user");
    }
    localStorage.setItem("eelaf_cart", JSON.stringify(cart));
}

// تحديث واجهة زر الحساب
function updateUserButtonState(isLoggedIn) {
    const userBtnText = document.getElementById("user-btn-text");
    const userBtn = document.getElementById("user-btn");
    
    if (isLoggedIn && currentUser) {
        userBtnText.textContent = `مرحباً، ${currentUser.phone}`;
        userBtn.classList.remove("btn-secondary");
        userBtn.classList.add("btn-primary");
    } else {
        userBtnText.textContent = "تسجيل الدخول";
        userBtn.classList.remove("btn-primary");
        userBtn.classList.add("btn-secondary");
    }
}

// عرض المنتجات في الشبكة
function renderProducts(categoryFilter = "all") {
    const grid = document.getElementById("products-grid");
    if (!grid) return;
    
    grid.innerHTML = "";
    
    const filtered = categoryFilter === "all" 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === categoryFilter);
        
    filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        
        card.innerHTML = `
            <div class="product-image-container" onclick="showProductDetails(${product.id})">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <img src="${product.image}" alt="${product.title}" class="product-image" onerror="this.src='logo.png'">
            </div>
            <div class="product-info" onclick="showProductDetails(${product.id})">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-title" title="${product.title}">${product.title}</h3>
                <p class="product-desc" title="${product.desc}">${product.desc}</p>
                <div class="product-price-action">
                    <span class="product-price">${product.price.toFixed(2)} ج.م.</span>
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); showProductDetails(${product.id})" aria-label="عرض التفاصيل">
                        <i data-lucide="eye"></i>
                    </button>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    // إعادة تهيئة أيقونات Lucide للمنتجات الجديدة
    lucide.createIcons();
}

function getCategoryName(category) {
    switch (category) {
        case "cosmetics": return "مستحضرات تجميل";
        case "food": return "منتجات غذائية";
        case "sets": return "باقات وهدايا";
        default: return "عام";
    }
}

// منطق تصفية المنتجات
function filterProducts(category) {
    // تحديث حالة الأزرار النشطة
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    
    const activeBtn = Array.from(buttons).find(btn => btn.getAttribute("onclick").includes(`'${category}'`));
    if (activeBtn) activeBtn.classList.add("active");
    
    renderProducts(category);
}

// تنبيهات Toast
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerHTML = `<i data-lucide="info"></i> <span>${message}</span>`;
    toast.classList.remove("hidden");
    lucide.createIcons();
    
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3500);
}

// إدارة سلة المشتريات
function toggleCart() {
    const drawer = document.getElementById("cart-drawer");
    drawer.classList.toggle("hidden");
    if (!drawer.classList.contains("hidden")) {
        renderCartItems();
    }
}

function closeCartOnOverlay(event) {
    toggleCart();
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    const existing = cart.find(item => item.product.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }
    
    saveSession();
    updateCartCount();
    showToast(`تمت إضافة "${product.title}" إلى سلة المشتريات.`);
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.product.id === productId);
    if (!item) return;
    
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveSession();
        updateCartCount();
        renderCartItems();
    }
}

function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.product.id === productId);
    if (itemIndex > -1) {
        const title = cart[itemIndex].product.title;
        cart.splice(itemIndex, 1);
        saveSession();
        updateCartCount();
        renderCartItems();
        showToast(`تم حذف "${title}" من السلة.`);
    }
}

function updateCartCount() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = [document.getElementById("cart-badge"), document.getElementById("cart-count")];
    
    badges.forEach(badge => {
        if (badge) badge.textContent = totalQty;
    });
}

function renderCartItems() {
    const container = document.getElementById("cart-items-container");
    const totalPriceElement = document.getElementById("cart-total-price");
    if (!container) return;
    
    container.innerHTML = "";
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-message">
                <i data-lucide="shopping-bag"></i>
                <p>سلة المشتريات فارغة حالياً</p>
                <button class="btn btn-primary btn-sm mt-3" onclick="toggleCart()">تصفح المنتجات</button>
            </div>
        `;
        totalPriceElement.textContent = "0.00 ج.م.";
        lucide.createIcons();
        return;
    }
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        subtotal += itemTotal;
        
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <img src="${item.product.image}" alt="${item.product.title}" class="cart-item-image" onerror="this.src='logo.png'">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.product.title}</h4>
                <p class="cart-item-price">${item.product.price.toFixed(2)} ج.م.</p>
                <div class="cart-item-actions">
                    <div class="quantity-controller">
                        <button class="qty-btn" onclick="updateQuantity(${item.product.id}, -1)">
                            <i data-lucide="minus"></i>
                        </button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.product.id}, 1)">
                            <i data-lucide="plus"></i>
                        </button>
                    </div>
                    <button class="delete-item-btn" onclick="removeFromCart(${item.product.id})" aria-label="حذف">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
    
    totalPriceElement.textContent = `${subtotal.toFixed(2)} ج.م.`;
    lucide.createIcons();
}

// عرض تفاصيل المنتج ديناميكياً
function showProductDetails(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    selectedProduct = product;
    detailQuantity = 1; // تصفير الكمية المحددة
    
    // تعبئة البيانات في واجهة تفاصيل المنتج
    document.getElementById("detail-main-image").src = product.images[0];
    document.getElementById("detail-main-image").alt = product.title;
    document.getElementById("detail-category").textContent = getCategoryName(product.category);
    document.getElementById("detail-title").textContent = product.title;
    document.getElementById("detail-price").textContent = `${product.price.toFixed(2)} ج.م.`;
    document.getElementById("detail-desc").textContent = product.desc;
    document.getElementById("detail-qty-val").textContent = detailQuantity;
    
    // تعبئة معرض الصور المصغرة
    const thumbnailsContainer = document.getElementById("detail-thumbnails");
    thumbnailsContainer.innerHTML = "";
    
    product.images.forEach((img, idx) => {
        const thumb = document.createElement("img");
        thumb.className = `thumbnail-img ${idx === 0 ? 'active' : ''}`;
        thumb.src = img;
        thumb.alt = `${product.title} - صورة ${idx + 1}`;
        thumb.onerror = function() { this.src = 'logo.png'; };
        
        // عند الضغط على الصورة المصغرة تتغير الصورة الرئيسية
        thumb.onclick = () => {
            document.getElementById("detail-main-image").src = img;
            document.querySelectorAll(".thumbnail-img").forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
        };
        
        thumbnailsContainer.appendChild(thumb);
    });
    
    // تعبئة الفوائد
    const benefitsList = document.getElementById("detail-benefits");
    benefitsList.innerHTML = "";
    product.benefits.forEach(benefit => {
        const li = document.createElement("li");
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });
    
    // تعبئة طريقة الاستخدام
    document.getElementById("detail-usage").textContent = product.usage;
    
    // الانتقال لصفحة التفاصيل
    navigateTo("product-detail");
}

// التحكم في كمية صفحة التفاصيل
function adjustDetailQuantity(delta) {
    detailQuantity += delta;
    if (detailQuantity < 1) {
        detailQuantity = 1;
    }
    document.getElementById("detail-qty-val").textContent = detailQuantity;
}

// إضافة المنتج من صفحة التفاصيل إلى السلة
function addProductFromDetailsToCart() {
    if (!selectedProduct) return;
    
    const existing = cart.find(item => item.product.id === selectedProduct.id);
    if (existing) {
        existing.quantity += detailQuantity;
    } else {
        cart.push({ product: selectedProduct, quantity: detailQuantity });
    }
    
    saveSession();
    updateCartCount();
    showToast(`تمت إضافة ${detailQuantity} من "${selectedProduct.title}" إلى السلة.`);
    
    // فتح سلة المشتريات تلقائياً لمراجعة الطلب والشراء
    toggleCart();
}

// التنقل بين الصفحات والأقسام (Views Management)
function navigateTo(viewName) {
    // جمع كل الأقسام (Views)
    const allViews = document.querySelectorAll(".view-section");
    allViews.forEach(v => v.classList.add("hidden"));
    
    // إزالة الصفة النشطة من جميع روابط الهيدر
    document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
    
    currentView = viewName;
    
    if (viewName === "home") {
        document.getElementById("home-view").classList.remove("hidden");
        document.getElementById("nav-home").classList.add("active");
        window.scrollTo(0, 0);
    } else if (viewName === "products") {
        document.getElementById("products-view").classList.remove("hidden");
        document.getElementById("nav-products").classList.add("active");
        renderProducts(currentFilter || "all");
        window.scrollTo(0, 0);
    } else if (viewName === "testimonials") {
        document.getElementById("testimonials-view").classList.remove("hidden");
        document.getElementById("nav-testimonials").classList.add("active");
        window.scrollTo(0, 0);
    } else if (viewName === "checkout") {
        document.getElementById("checkout-view").classList.remove("hidden");
        window.scrollTo(0, 0);
    } else if (viewName === "receipt") {
        document.getElementById("receipt-view").classList.remove("hidden");
        window.scrollTo(0, 0);
    } else if (viewName === "product-detail") {
        document.getElementById("product-detail-view").classList.remove("hidden");
        document.getElementById("nav-products").classList.add("active");
        window.scrollTo(0, 0);
    }
    
    // تفعيل وتحديث أيقونات Lucide
    lucide.createIcons();
}

// الذهاب إلى صفحة الدفع
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast("سلتك فارغة! أضف بعض المنتجات للمتابعة.");
        return;
    }
    
    // إغلاق سلة المشتريات
    const drawer = document.getElementById("cart-drawer");
    drawer.classList.add("hidden");
    
    // التحقق من تسجيل الدخول أولاً
    if (!currentUser) {
        showToast("يرجى تسجيل الدخول برقم الهاتف أولاً لإتمام طلبك.");
        openAuthModal();
        return;
    }
    
    // تعبئة ملخص الدفع
    renderCheckoutSummary();
    
    // الانتقال لصفحة الشحن والدفع
    navigateTo("checkout");
}

function renderCheckoutSummary() {
    const itemsContainer = document.getElementById("checkout-summary-items");
    const subtotalText = document.getElementById("checkout-subtotal");
    const totalText = document.getElementById("checkout-total");
    
    if (!itemsContainer) return;
    itemsContainer.innerHTML = "";
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        subtotal += itemTotal;
        
        const div = document.createElement("div");
        div.className = "summary-item-row";
        div.innerHTML = `
            <img src="${item.product.image}" alt="${item.product.title}" class="summary-item-img" onerror="this.src='logo.png'">
            <div class="summary-item-details">
                <div class="summary-item-name">${item.product.title}</div>
                <div class="summary-item-qty">الكمية: ${item.quantity}</div>
            </div>
            <div class="summary-item-total">${itemTotal.toFixed(2)} ج.م.</div>
        `;
        itemsContainer.appendChild(div);
    });
    
    const finalTotal = subtotal + SHIPPING_COST;
    
    subtotalText.textContent = `${subtotal.toFixed(2)} ج.م.`;
    totalText.textContent = `${finalTotal.toFixed(2)} ج.م.`;
}

// إدارة نافذة تسجيل الدخول (Authentication Modals)
function openAuthModal() {
    const modal = document.getElementById("auth-modal");
    modal.classList.remove("hidden");
    showAuthStep("phone");
    handleCountryChange(); // تحديث الحقول الافتراضية
}

function closeAuthModal() {
    const modal = document.getElementById("auth-modal");
    modal.classList.add("hidden");
    resetAuthTimer();
}

function closeAuthModalOnOverlay(event) {
    closeAuthModal();
}

function showAuthStep(step) {
    const phoneStep = document.getElementById("auth-step-phone");
    const otpStep = document.getElementById("auth-step-otp");
    
    if (step === "phone") {
        phoneStep.classList.remove("hidden");
        otpStep.classList.add("hidden");
        resetAuthTimer();
    } else {
        phoneStep.classList.add("hidden");
        otpStep.classList.remove("hidden");
    }
}

// منطق تغيير الدولة في تسجيل الدخول
function handleCountryChange() {
    const select = document.getElementById("auth-country");
    selectedCountry = select.value;
    const countryData = COUNTRIES[selectedCountry];
    
    const prefixSpan = document.getElementById("country-prefix");
    const phoneInput = document.getElementById("auth-phone");
    
    prefixSpan.textContent = countryData.prefix;
    phoneInput.placeholder = countryData.placeholder;
    phoneInput.value = ""; // مسح القيمة الحالية لتفادي أخطاء التحقق
    
    // تحديث تلميح رقم الهاتف المساعد
    const hint = document.getElementById("phone-hint");
    hint.textContent = `أدخل رقم هاتف ${countryData.name} المكون من الأرقام المتبقية بدون مفتاح الاتصال.`;
}

// إدخال وتوجيه رمز OTP
function initOtpInputFocus() {
    const digits = document.querySelectorAll(".otp-digit");
    
    digits.forEach((digit, idx) => {
        digit.addEventListener("paste", (e) => {
            const data = e.clipboardData.getData("text").trim();
            if (data.length === 4 && /^\d+$/.test(data)) {
                digits.forEach((d, i) => d.value = data[i]);
                digits[3].focus();
            }
        });
    });
}

function handleOtpInput(event) {
    const input = event.target;
    const nextIdx = parseInt(input.dataset.index) + 1;
    const digits = document.querySelectorAll(".otp-digit");
    
    // التحقق من أن القيمة رقمية
    input.value = input.value.replace(/[^0-9]/g, "");
    
    if (input.value && nextIdx < 4) {
        digits[nextIdx].focus();
    }
}

function handleOtpKeyDown(event) {
    const input = event.target;
    const prevIdx = parseInt(input.dataset.index) - 1;
    const digits = document.querySelectorAll(".otp-digit");
    
    if (event.key === "Backspace" && !input.value && prevIdx >= 0) {
        digits[prevIdx].focus();
    }
}

// محاكاة إرسال كود التحقق بناءً على الدولة
function handleSendOTP(event) {
    event.preventDefault();
    const phoneVal = document.getElementById("auth-phone").value.trim().replace(/\s+/g, '');
    const countryData = COUNTRIES[selectedCountry];
    
    if (!phoneVal) {
        showToast("يرجى إدخال رقم الهاتف.");
        return;
    }
    
    // التحقق من صحة الرقم بناءً على نمط الدولة المحددة
    if (countryData.pattern && !countryData.pattern.test(phoneVal)) {
        showToast(`يرجى إدخال رقم هاتف صحيح لـ ${countryData.name}. (مثل: ${countryData.placeholder})`);
        return;
    }
    
    // رقم الهاتف الكامل مع رمز الدولة
    const fullPhone = `${countryData.prefix} ${phoneVal}`;
    document.getElementById("display-auth-phone").textContent = fullPhone;
    
    // توليد رمز OTP تجريبي (لأغراض العرض) وعرضه للمستخدم للتسهيل
    otpCode = Math.floor(1000 + Math.random() * 9000).toString();
    
    showToast(`تم إرسال رمز تحقق تجريبي: ${otpCode} (أدخله في الخطوة التالية)`);
    
    showAuthStep("otp");
    startOtpTimer();
}

// إدارة عداد إعادة إرسال الكود
function startOtpTimer() {
    const timerText = document.getElementById("otp-timer");
    const resendBtn = document.getElementById("resend-btn");
    let seconds = 59;
    
    resendBtn.disabled = true;
    timerText.textContent = seconds;
    
    clearInterval(otpTimerInterval);
    otpTimerInterval = setInterval(() => {
        seconds--;
        timerText.textContent = seconds;
        
        if (seconds <= 0) {
            clearInterval(otpTimerInterval);
            resendBtn.disabled = false;
            resendBtn.innerHTML = "إعادة إرسال رمز التحقق";
        } else {
            resendBtn.innerHTML = `إعادة إرسال (<span id="otp-timer">${seconds}</span> ثانية)`;
        }
    }, 1000);
}

function resetAuthTimer() {
    clearInterval(otpTimerInterval);
    const resendBtn = document.getElementById("resend-btn");
    if (resendBtn) {
        resendBtn.disabled = true;
        resendBtn.innerHTML = `إعادة إرسال (<span id="otp-timer">59</span> ثانية)`;
    }
}

function handleResendOTP() {
    otpCode = Math.floor(1000 + Math.random() * 9000).toString();
    showToast(`تم إعادة إرسال الرمز التجريبي: ${otpCode}`);
    startOtpTimer();
}

// التحقق من رمز OTP
function handleVerifyOTP(event) {
    event.preventDefault();
    const digits = document.querySelectorAll(".otp-digit");
    let enteredCode = "";
    
    digits.forEach(d => enteredCode += d.value);
    
    if (enteredCode === otpCode || enteredCode === "1234") { // السماح بـ 1234 ككود طوارئ للتسهيل
        const phoneVal = document.getElementById("auth-phone").value.trim();
        const countryData = COUNTRIES[selectedCountry];
        currentUser = { phone: `${countryData.prefix} ${phoneVal}` };
        
        saveSession();
        updateUserButtonState(true);
        closeAuthModal();
        showToast("تم تسجيل الدخول بنجاح.");
        
        // مسح خانات الكود للفرات القادمة
        digits.forEach(d => d.value = "");
    } else {
        showToast("رمز التحقق غير صحيح، يرجى المحاولة مرة أخرى.");
    }
}

// معالجة وتقديم الطلب (Place Order)
function handlePlaceOrder(event) {
    event.preventDefault();
    
    const name = document.getElementById("shipping-name").value.trim();
    const phone = document.getElementById("shipping-phone").value.trim();
    const city = document.getElementById("shipping-city").value.trim();
    const address = document.getElementById("shipping-address").value.trim();
    const notes = document.getElementById("shipping-notes").value.trim();
    
    // إنشاء كائن الطلب الفريد
    const orderId = "EEL-" + Math.floor(10000 + Math.random() * 90000);
    const orderDate = formatDate(new Date());
    
    currentOrder = {
        orderId,
        date: orderDate,
        customerName: name,
        customerPhone: phone,
        city,
        address,
        notes,
        items: [...cart],
        subtotal: cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
        shipping: SHIPPING_COST,
        total: cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0) + SHIPPING_COST
    };
    
    // عرض الفاتورة
    renderInvoice(currentOrder);
    
    // إفراغ سلة المشتريات
    cart = [];
    saveSession();
    updateCartCount();
    
    // الانتقال لصفحة الفاتورة وتأكيد الطلب
    navigateTo("receipt");
    showToast("تم تسجيل طلبك بنجاح! الرجاء تأكيد الطلب مع المشرف.");
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('ar-EG', options); // تنسيق عربي مصر
}

// بناء الفاتورة ديناميكياً
function renderInvoice(order) {
    document.getElementById("receipt-id").textContent = `#${order.orderId}`;
    document.getElementById("receipt-date").textContent = order.date;
    document.getElementById("receipt-name").textContent = order.customerName;
    document.getElementById("receipt-phone").textContent = order.customerPhone;
    document.getElementById("receipt-city").textContent = order.city;
    document.getElementById("receipt-address").textContent = order.address;
    document.getElementById("barcode-text").textContent = `EELAF-ORDER-${order.orderId}`;
    
    const tableBody = document.getElementById("receipt-table-body");
    tableBody.innerHTML = "";
    
    order.items.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>
                <strong>${item.product.title}</strong>
                <p style="font-size:0.75rem; color:#828e86; margin:4px 0 0 0;">${getCategoryName(item.product.category)}</p>
            </td>
            <td class="text-center">${item.product.price.toFixed(2)} ج.م.</td>
            <td class="text-center">${item.quantity}</td>
            <td class="text-left">${(item.product.price * item.quantity).toFixed(2)} ج.م.</td>
        `;
        tableBody.appendChild(tr);
    });
    
    document.getElementById("receipt-subtotal").textContent = `${order.subtotal.toFixed(2)} ج.م.`;
    document.getElementById("receipt-shipping").textContent = `${order.shipping.toFixed(2)} ج.م.`;
    document.getElementById("receipt-total").textContent = `${order.total.toFixed(2)} ج.م.`;
}

// التقاط لقطة شاشة للفاتورة وحفظها كصورة تلقائياً عبر html2canvas
function downloadInvoiceImage() {
    if (!currentOrder) return;
    
    const invoiceElement = document.getElementById("invoice-card");
    showToast("جاري إعداد وتحميل الفاتورة كصورة، يرجى الانتظار...");
    
    html2canvas(invoiceElement, {
        scale: 2, // جودة مضاعفة للفاتورة
        useCORS: true, // للسماح بتحميل الصور الخارجية
        backgroundColor: "#ffffff"
    }).then(canvas => {
        const link = document.createElement("a");
        link.download = `EELAF-INVOICE-${currentOrder.orderId}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
        showToast("تم حفظ الفاتورة بنجاح في جهازك. يرجى إرسالها للمشرف.");
    }).catch(err => {
        console.error("Error generating invoice image:", err);
        showToast("حدث خطأ أثناء تحميل الفاتورة، يرجى أخذ لقطة شاشة يدوية للشاشة.");
    });
}

// إرسال الطلب للمشرف عبر الواتساب مع رسالة منسقة
function sendOrderToWhatsApp() {
    if (!currentOrder) return;
    
    let itemsText = "";
    currentOrder.items.forEach(item => {
        itemsText += `• ${item.product.title} (الكمية: ${item.quantity}) - ${(item.product.price * item.quantity).toFixed(2)} ج.م.\n`;
    });
    
    // صياغة رسالة واتساب أنيقة ومفصلة
    const message = `السلام عليكم ورحمة الله،\nلقد قمت بتقديم طلب من متجر *إيلاف للمنتجات المغربية*:\n\n` +
                    `*رقم الطلب:* #${currentOrder.orderId}\n` +
                    `*التاريخ:* ${currentOrder.date}\n\n` +
                    `*بيانات العميل والشحن:*\n` +
                    `• *الاسم الكامل:* ${currentOrder.customerName}\n` +
                    `• *رقم الهاتف:* ${currentOrder.customerPhone}\n` +
                    `• *المدينة:* ${currentOrder.city}\n` +
                    `• *العنوان بالتفصيل:* ${currentOrder.address}\n` +
                    (currentOrder.notes ? `• *ملاحظات:* ${currentOrder.notes}\n` : '') + `\n` +
                    `*المنتجات المطلوبة:*\n${itemsText}\n` +
                    `*المجموع الفرعي:* ${currentOrder.subtotal.toFixed(2)} ج.م.\n` +
                    `*تكلفة التوصيل:* ${currentOrder.shipping.toFixed(2)} ج.م.\n` +
                    `*المجموع الكلي المترتب:* *${currentOrder.total.toFixed(2)} ج.م.*\n\n` +
                    `*حالة الدفع:* بانتظار تأكيد الاستلام أو التحويل.\n` +
                    `لقد قمت بأخذ لقطة شاشة للفاتورة وسأرفقها لكم الآن لتأكيد الطلب وشحنه. شكراً لكم.`;
                    
    const encodedText = encodeURIComponent(message);
    
    // رابط الواتساب المباشر
    const whatsappUrl = `https://wa.me/${SUPERVISOR_PHONE.replace('+', '')}?text=${encodedText}`;
    
    // فتح الرابط في نافذة جديدة
    window.open(whatsappUrl, "_blank");
}

// إعادة تصفير البيانات والعودة للرئيسية
function resetToHome() {
    currentOrder = null;
    navigateTo("home");
}

// 1. إضافة منتج جديد
function saveProduct(productObj) {
    // جلب المنتجات الموجودة مسبقاً (إن وجدت)
    let products = JSON.parse(localStorage.getItem('myProducts') || '[]');
    
    // إضافة المنتج الجديد للقائمة
    products.push(productObj);
    
    // تحويل المصفوفة إلى نص (String) ثم حفظها
    localStorage.setItem('myProducts', JSON.stringify(products));
    console.log("تم حفظ المنتج بنجاح");
}

// 2. استرجاع المنتجات لعرضها
function getProducts() {
    const data = localStorage.getItem('myProducts');
    return data ? JSON.parse(data) : [];
}
