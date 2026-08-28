1. PROJECT CONCEPT AND WORKING MECHANISM

Is project ka main objective JavaScript aur Web Storage API yani localStorage ko use karte hue ek Persistent Theme Switcher banana hai. Jab user dark ya light theme select karta hai, toh preference browser memory mein save ho jaati hai taake page refresh karne par bhi user ki choice barkarar rahe.

Is task ko perform karne ke liye 2 main operations execute hote hain:

1. Load Logic (DOMContentLoaded Event):
Page open ya refresh hone par JavaScript sab se pehle localStorage.getItem('theme') run karti hai. Agar value 'dark' milti hai toh dark theme apply kar diya jata hai.
2. Save Logic (click Event):
Toggle button click hone par theme update hoti hai aur nayi state ('dark' ya 'light') localStorage.setItem('theme', value) ke zariye save kar li jati hai.

2. CHALLENGE MECHANISM (RESET FUNCTIONALITY)

Challenge part ka maqsad browser memory se saved state ko clear karna aur application ko default configuration par restore karna hai.

1. Targeted Key Removal:
localStorage.removeItem('theme') ka use karke sirf theme ki preference delete ki jati hai, baki koi data affect nahi hota.
2. State Restoration:
location.reload() ke zariye browser refresh hota hai. Reload hone par kyun ke localStorage mein koi preference nahi hoti, application apni default Light Mode state mein load ho jati hai.

3. COMPARISON OF THE 3 IMPLEMENTATION WAYS

WAY 1: CLASS TOGGLE METHOD (classList.toggle)

 Working: Is mein document.body par .dark-mode CSS class ko add ya remove kiya jata hai.
 Pros: Implement karne mein sab se easy aur beginner friendly hai, CSS code clean rehta hai.
 Cons: Scalability kam hai, agar multi-theme system banana ho toh maintenance mushkil hoti hai.

WAY 2: CUSTOM PROPERTIES / DATA ATTRIBUTES (data-theme)

 Working: Is mein html element par data-theme attribute update hota hai, jisse CSS variables automatic change ho jate hain.
 Pros: Highly scalable aur modern production grade technique hai, multi-theme support easily handle karti hai.
 Cons: CSS Variables aur attribute selectors ki basic understanding honi zaroori hai.

WAY 3: DIRECT INLINE STYLES (element.style)

 Working: Is mein direct JavaScript ke zariye document.body.style.backgroundColor aur color manipulate kiye jate hain.
 Pros: CSS file par dependency kam hoti hai, quick DOM manipulation ke liye simple hai.
 Cons: Code maintainability kharab hoti hai aur inline styles CSS rules ko override kar dete hain jo best practice nahi hai.
