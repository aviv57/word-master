const words = {
  "אבחון": true,
  "אבטיח": true,
  "אבטלה": true,
  "אגדות": true,
  "אגודה": true,
  "אגודל": true,
  "אגרוף": true,
  "אדוני": true,
  "אוויר": true,
  "אופנה": true,
  "אופרה": true,
  "אזהרה": true,
  "אזורי": true,
  "אזכור": true,
  "אזעקה": true,
  "אזרחי": true,
  "אחדות": true,
  "אחיזה": true,
  "אחסון": true,
  "אחראי": true,
  "אחרון": true,
  "איזון": true,
  "איכות": true,
  "אילוץ": true,
  "אימוץ": true,
  "אירוח": true,
  "אירית": true,
  "אכזבה": true,
  "אכזרי": true,
  "אכילה": true,
  "אכיפה": true,
  "אלבום": true,
  "אלוהי": true,
  "אמונה": true,
  "אמיתי": true,
  "אנשים": true,
  "אספקה": true,
  "אפונה": true,
  "אפילו": true,
  "אפליה": true,
  "אפרסק": true,
  "אפשרי": true,
  "אקדמי": true,
  "אקלים": true,
  "אקראי": true,
  "ארגון": true,
  "ארוחה": true,
  "ארמון": true,
  "ארנבת": true,
  "אשכול": true,
  "אשליה": true,
  "אשראי": true,
  "אתיקה": true,
  "אתלטי": true,
  "אתמול": true,
  "בגדים": true,
  "בגלוי": true,
  "בגללו": true,
  "בדידה": true,
  "בדיוק": true,
  "בדיחה": true,
  "בדיקה": true,
  "בהחלט": true,
  "בורות": true,
  "בזבוז": true,
  "בחיים": true,
  "בחירה": true,
  "בטחון": true,
  "בידוד": true,
  "בידור": true,
  "ביושר": true,
  "ביטוח": true,
  "ביטוי": true,
  "ביישן": true,
  "ביצוע": true,
  "בישול": true,
  "בישוף": true,
  "בלבול": true,
  "בלעדי": true,
  "במהלך": true,
  "במקור": true,
  "בנוסף": true,
  "בנזין": true,
  "בנקאי": true,
  "בסיסי": true,
  "בעיטה": true,
  "בעיקר": true,
  "בעלות": true,
  "בעלים": true,
  "בקבוק": true,
  "בקושי": true,
  "בקלות": true,
  "בקצרה": true,
  "בקרוב": true,
  "ברווז": true,
  "ברחבי": true,
  "בריחה": true,
  "בריטי": true,
  "בריכה": true,
  "ברכות": true,
  "בשורה": true,
  "גאווה": true,
  "גאולה": true,
  "גבינה": true,
  "גדולה": true,
  "גופני": true,
  "גזירה": true,
  "גיבוי": true,
  "גיבור": true,
  "גיטרה": true,
  "גירוי": true,
  "גלגול": true,
  "גלריה": true,
  "גסיסה": true,
  "גרעון": true,
  "דבורה": true,
  "דברים": true,
  "דוגמא": true,
  "דווקא": true,
  "דחיפה": true,
  "דיאטה": true,
  "דיווח": true,
  "דיוקן": true,
  "דירוג": true,
  "דכאון": true,
  "דליפה": true,
  "דמיון": true,
  "דפדפן": true,
  "דפופה": true,
  "דצמבר": true,
  "דרומי": true,
  "דרישה": true,
  "דרכון": true,
  "דרמטי": true,
  "האשמה": true,
  "הבחנה": true,
  "הבטחה": true,
  "הגבלה": true,
  "הגדרה": true,
  "הגיון": true,
  "הגירה": true,
  "הגנתי": true,
  "הדבקה": true,
  "הדרכה": true,
  "הובלה": true,
  "הודאה": true,
  "הודעה": true,
  "הוכחה": true,
  "הולדת": true,
  "הומור": true,
  "הונאה": true,
  "הוסיף": true,
  "הופעה": true,
  "הוצאה": true,
  "הוקרה": true,
  "הוראה": true,
  "הזמנה": true,
  "החוצה": true,
  "החלטה": true,
  "הטרדה": true,
  "הירשם": true,
  "הכחשה": true,
  "הכנסה": true,
  "הכרזה": true,
  "הלבשה": true,
  "הלויה": true,
  "הליבה": true,
  "הליכה": true,
  "המלצה": true,
  "המצאה": true,
  "הנדסה": true,
  "הנהלה": true,
  "הסכמה": true,
  "העדיף": true,
  "העדפה": true,
  "העלאה": true,
  "הענות": true,
  "הערכה": true,
  "הפגנה": true,
  "הפסקה": true,
  "הפעלה": true,
  "הפצצה": true,
  "הפרדה": true,
  "הפרעה": true,
  "הפתעה": true,
  "הצבעה": true,
  "הצהרה": true,
  "הצלחה": true,
  "הקלטה": true,
  "הקפאה": true,
  "הקרנה": true,
  "הרחבה": true,
  "הריון": true,
  "הרכבה": true,
  "הרצאה": true,
  "הרשמה": true,
  "הרשעה": true,
  "השבחה": true,
  "השגחה": true,
  "השכרה": true,
  "השערה": true,
  "השפעה": true,
  "השקעה": true,
  "השקפה": true,
  "השראה": true,
  "השתתף": true,
  "התאמה": true,
  "התחלה": true,
  "התקנה": true,
  "התקפי": true,
  "ואילו": true,
  "וידאו": true,
  "וילון": true,
  "ועידה": true,
  "זיהוי": true,
  "זיהום": true,
  "זכיון": true,
  "זכרון": true,
  "זרימה": true,
  "חבילה": true,
  "חברות": true,
  "חברתי": true,
  "חגורה": true,
  "חגיגה": true,
  "חדשות": true,
  "חדשני": true,
  "חוכמה": true,
  "חוליה": true,
  "חולצה": true,
  "חולשה": true,
  "חומצה": true,
  "חומרה": true,
  "חופשה": true,
  "חוקתי": true,
  "חותמת": true,
  "חזותי": true,
  "חיבור": true,
  "חיובי": true,
  "חיוור": true,
  "חיוני": true,
  "חייזר": true,
  "חיישן": true,
  "חינוך": true,
  "חלבון": true,
  "חלופה": true,
  "חלוקה": true,
  "חליפה": true,
  "חלקיק": true,
  "חלקית": true,
  "חמישי": true,
  "חנינה": true,
  "חסכון": true,
  "חצאית": true,
  "חקיקה": true,
  "חקירה": true,
  "חקלאי": true,
  "חשבון": true,
  "חשיפה": true,
  "חשמלי": true,
  "חתולה": true,
  "חתונה": true,
  "חתיכה": true,
  "חתימה": true,
  "טיוטה": true,
  "טיפול": true,
  "טירון": true,
  "טלפון": true,
  "טרופי": true,
  "יבדקו": true,
  "יהודי": true,
  "יהלום": true,
  "יווני": true,
  "יוזמה": true,
  "יועצת": true,
  "יושרה": true,
  "יחידה": true,
  "יחסית": true,
  "ייעוץ": true,
  "ייצור": true,
  "יישום": true,
  "יכולה": true,
  "יכולת": true,
  "ילדות": true,
  "ילידי": true,
  "ינואר": true,
  "יסודי": true,
  "יפנית": true,
  "יציאה": true,
  "יצירה": true,
  "ירחון": true,
  "ירידה": true,
  "ירקות": true,
  "יתרון": true,
  "כביסה": true,
  "כבשים": true,
  "כוונה": true,
  "כותנה": true,
  "כותרת": true,
  "כיבוש": true,
  "כיוון": true,
  "כימיה": true,
  "כיסוי": true,
  "כלכלה": true,
  "כלכלי": true,
  "כלכלן": true,
  "כניסה": true,
  "כנסיה": true,
  "כנראה": true,
  "כפולה": true,
  "כפילה": true,
  "כראוי": true,
  "כרוני": true,
  "כרטיס": true,
  "כשרון": true,
  "כתובת": true,
  "כתיבה": true,
  "לאבחן": true,
  "לאומי": true,
  "לאורך": true,
  "לאכול": true,
  "לאכוף": true,
  "לאנוס": true,
  "לאסוף": true,
  "לאסור": true,
  "לאפות": true,
  "לאפשר": true,
  "לארגן": true,
  "לבגוד": true,
  "לבהות": true,
  "לבודד": true,
  "לבחון": true,
  "לבחור": true,
  "לבלבל": true,
  "לבלוע": true,
  "לבלות": true,
  "לבנות": true,
  "לברוח": true,
  "לגדול": true,
  "לגלות": true,
  "לגמרי": true,
  "לגנוב": true,
  "לגנות": true,
  "לגרור": true,
  "לדאוג": true,
  "לדווח": true,
  "לדחוף": true,
  "לדחות": true,
  "לדמות": true,
  "לדעוך": true,
  "לדפוק": true,
  "לדקלם": true,
  "לדרוש": true,
  "להביא": true,
  "להבין": true,
  "להביס": true,
  "להגיב": true,
  "להגיע": true,
  "להוות": true,
  "להזיע": true,
  "להטיף": true,
  "להיות": true,
  "להכות": true,
  "להכיל": true,
  "להכשל": true,
  "להמיס": true,
  "להמיר": true,
  "להמנע": true,
  "להניח": true,
  "להניע": true,
  "להסיק": true,
  "להסיר": true,
  "להעיד": true,
  "להעיף": true,
  "להעלם": true,
  "להפוך": true,
  "להפיץ": true,
  "להפיק": true,
  "להציג": true,
  "להציל": true,
  "להציע": true,
  "להקים": true,
  "להקיף": true,
  "להרגע": true,
  "להרוג": true,
  "להרוס": true,
  "להרשם": true,
  "להשאר": true,
  "להשיג": true,
  "להשיק": true,
  "להתיר": true,
  "לוויה": true,
  "לולאה": true,
  "לזהות": true,
  "לזחול": true,
  "לזכור": true,
  "לזכות": true,
  "לזרוק": true,
  "לחגוג": true,
  "לחדול": true,
  "לחוקק": true,
  "לחזור": true,
  "לחיות": true,
  "לחייב": true,
  "לחימה": true,
  "לחכות": true,
  "לחלוק": true,
  "לחנוך": true,
  "לחסום": true,
  "לחפור": true,
  "לחצות": true,
  "לחקור": true,
  "לחרבן": true,
  "לחשוב": true,
  "לחשוף": true,
  "לחתור": true,
  "לטאטא": true,
  "לטעום": true,
  "לטעון": true,
  "לטרוק": true,
  "ליזום": true,
  "לייזר": true,
  "ליישם": true,
  "ליישר": true,
  "לימוד": true,
  "לימון": true,
  "ליצור": true,
  "לירוק": true,
  "לירות": true,
  "לישון": true,
  "לכאוב": true,
  "לכבוש": true,
  "לכופף": true,
  "לכלול": true,
  "לכתוב": true,
  "ללבוש": true,
  "ללוות": true,
  "ללחוץ": true,
  "ללכוד": true,
  "ללמוד": true,
  "ללעוס": true,
  "למחוץ": true,
  "למחוק": true,
  "למחות": true,
  "למידה": true,
  "למנוע": true,
  "למנות": true,
  "למסור": true,
  "למעוד": true,
  "למעלה": true,
  "למעשה": true,
  "למצוא": true,
  "למצוץ": true,
  "למרוד": true,
  "למרות": true,
  "למשוך": true,
  "למשול": true,
  "למתוח": true,
  "לנטוש": true,
  "לנסוע": true,
  "לנסות": true,
  "לנעול": true,
  "לנקות": true,
  "לנשום": true,
  "לנשוף": true,
  "לסבול": true,
  "לסבור": true,
  "לסגור": true,
  "לסווג": true,
  "לסייע": true,
  "לסלוח": true,
  "לסמוך": true,
  "לספוג": true,
  "לספור": true,
  "לסרוק": true,
  "לעבור": true,
  "לעודד": true,
  "לעומת": true,
  "לעורר": true,
  "לעזוב": true,
  "לעטוף": true,
  "לעלות": true,
  "לעמוד": true,
  "לערבב": true,
  "לערוך": true,
  "לערום": true,
  "לעשות": true,
  "לעתור": true,
  "לפגוע": true,
  "לפגוש": true,
  "לפלוש": true,
  "לפסוע": true,
  "לפרוס": true,
  "לפרוש": true,
  "לפרסם": true,
  "לפתוח": true,
  "לפתור": true,
  "לצחוק": true,
  "לצייד": true,
  "לצייר": true,
  "לצמצם": true,
  "לצעוק": true,
  "לצערי": true,
  "לצפות": true,
  "לצרוח": true,
  "לצרוך": true,
  "לקבוע": true,
  "לקבור": true,
  "לקוות": true,
  "לקנות": true,
  "לקעקע": true,
  "לקפוץ": true,
  "לקצוץ": true,
  "לקראת": true,
  "לקרוא": true,
  "לקרות": true,
  "לקשור": true,
  "לראות": true,
  "לרבות": true,
  "לרדוף": true,
  "לרכוש": true,
  "לרמוז": true,
  "לרמות": true,
  "לרקוד": true,
  "לשאוב": true,
  "לשאול": true,
  "לשאוף": true,
  "לשבור": true,
  "לשגשג": true,
  "לשדוד": true,
  "לשוחח": true,
  "לשוטט": true,
  "לשחות": true,
  "לשחזר": true,
  "לשחרר": true,
  "לשטוף": true,
  "לשכוח": true,
  "לשכור": true,
  "לשכנע": true,
  "לשלוח": true,
  "לשלוט": true,
  "לשמוע": true,
  "לשמור": true,
  "לשנות": true,
  "לשפוט": true,
  "לשפוך": true,
  "לשפשף": true,
  "לשקול": true,
  "לשקוע": true,
  "לשרוד": true,
  "לשרוף": true,
  "לשתות": true,
  "לתבוע": true,
  "לתדלק": true,
  "לתחוב": true,
  "לתחזק": true,
  "לתכנן": true,
  "לתלות": true,
  "לתמוך": true,
  "לתפוס": true,
  "לתפעל": true,
  "לתקוף": true,
  "לתקשר": true,
  "לתרגם": true,
  "לתרום": true,
  "מאובן": true,
  "מאוחד": true,
  "מאוחר": true,
  "מאזין": true,
  "מאחור": true,
  "מאיים": true,
  "מאמין": true,
  "מאתגר": true,
  "מבוגר": true,
  "מבויש": true,
  "מבטיח": true,
  "מבריק": true,
  "מברשת": true,
  "מגוון": true,
  "מגוחך": true,
  "מגזין": true,
  "מגילה": true,
  "מגניב": true,
  "מגעיל": true,
  "מדהים": true,
  "מדויק": true,
  "מדוכא": true,
  "מדידה": true,
  "מדינה": true,
  "מדליה": true,
  "מדרגה": true,
  "מדרון": true,
  "מדריך": true,
  "מדרכה": true,
  "מהווה": true,
  "מהנדס": true,
  "מהפכה": true,
  "מובהק": true,
  "מוביל": true,
  "מוגבל": true,
  "מוגדל": true,
  "מודאג": true,
  "מודעה": true,
  "מוחלט": true,
  "מוכשר": true,
  "מולדת": true,
  "מומחה": true,
  "מונית": true,
  "מוסכם": true,
  "מוסתר": true,
  "מועיל": true,
  "מועמד": true,
  "מועצה": true,
  "מופרז": true,
  "מופתע": true,
  "מוצלח": true,
  "מוקדם": true,
  "מורחב": true,
  "מורכב": true,
  "מורשת": true,
  "מושבה": true,
  "מושבע": true,
  "מושחת": true,
  "מושלם": true,
  "מזבלה": true,
  "מזוין": true,
  "מזויף": true,
  "מזכיר": true,
  "מזרחי": true,
  "מחווה": true,
  "מחוקק": true,
  "מחזור": true,
  "מחלקה": true,
  "מחסום": true,
  "מחסור": true,
  "מחריד": true,
  "מחשבה": true,
  "מטופש": true,
  "מטורף": true,
  "מטריד": true,
  "מיוחד": true,
  "מיידי": true,
  "מייסד": true,
  "מילגה": true,
  "מילון": true,
  "מילים": true,
  "מימון": true,
  "מיעוט": true,
  "מיקום": true,
  "מישהו": true,
  "מישור": true,
  "מיתוס": true,
  "מכולה": true,
  "מכולת": true,
  "מכונה": true,
  "מכוער": true,
  "מכירה": true,
  "מכללה": true,
  "מכריע": true,
  "מכשול": true,
  "מכשפה": true,
  "מלאכה": true,
  "מלומד": true,
  "מלחמה": true,
  "מלכות": true,
  "ממוצע": true,
  "ממשיך": true,
  "ממשלה": true,
  "מנהיג": true,
  "מנהלי": true,
  "מנהרה": true,
  "מנוחה": true,
  "מנוסה": true,
  "מנורה": true,
  "מנטור": true,
  "מניעה": true,
  "מסגרת": true,
  "מסוים": true,
  "מסוכן": true,
  "מסופק": true,
  "מסורת": true,
  "מסחרי": true,
  "מסיבי": true,
  "מסירה": true,
  "מסלול": true,
  "מסעדה": true,
  "מספיק": true,
  "מסריח": true,
  "מעבדה": true,
  "מעודד": true,
  "מעולה": true,
  "מעורב": true,
  "מעטים": true,
  "מעטפה": true,
  "מעלית": true,
  "מעסיק": true,
  "מערבי": true,
  "מעריך": true,
  "מערכת": true,
  "מעשיה": true,
  "מפגין": true,
  "מפורט": true,
  "מפורש": true,
  "מפחיד": true,
  "מפלגה": true,
  "מפלצת": true,
  "מפעיל": true,
  "מפתיע": true,
  "מצאתי": true,
  "מצביע": true,
  "מצוין": true,
  "מצחיק": true,
  "מצטער": true,
  "מצליח": true,
  "מצלמה": true,
  "מצפון": true,
  "מקומי": true,
  "מקורי": true,
  "מקלדת": true,
  "מקלחת": true,
  "מקסים": true,
  "מקצוע": true,
  "מקרוב": true,
  "מרגיש": true,
  "מרהיב": true,
  "מרוחק": true,
  "מרוצה": true,
  "מרכזי": true,
  "מרכיב": true,
  "מרפאה": true,
  "מרפסת": true,
  "מרשתת": true,
  "משאיל": true,
  "משאית": true,
  "משאלה": true,
  "משולב": true,
  "משונה": true,
  "משוער": true,
  "משופר": true,
  "משורר": true,
  "משותף": true,
  "משטרה": true,
  "משיכה": true,
  "משימה": true,
  "משכנע": true,
  "משמעת": true,
  "משמרת": true,
  "משעמם": true,
  "משפחה": true,
  "משפטי": true,
  "משקיע": true,
  "משקיף": true,
  "משתמש": true,
  "משתנה": true,
  "משתתף": true,
  "מתאים": true,
  "מתבגר": true,
  "מתווה": true,
  "מתחיל": true,
  "מתחרה": true,
  "מתכון": true,
  "מתמשך": true,
  "מתעקש": true,
  "מתפתח": true,
  "מתקדם": true,
  "מתקשר": true,
  "מתרחש": true,
  "נבואה": true,
  "נדנדה": true,
  "נהיגה": true,
  "נוחות": true,
  "נוכחי": true,
  "נוסחה": true,
  "נוצרי": true,
  "נוקשה": true,
  "נורמה": true,
  "נחיתה": true,
  "נטייה": true,
  "ניסוי": true,
  "ניצול": true,
  "ניקוז": true,
  "נכונה": true,
  "נסגרה": true,
  "נסיכה": true,
  "נסיעה": true,
  "נעילה": true,
  "נפילה": true,
  "נקודה": true,
  "נקישה": true,
  "נרטיב": true,
  "נשואה": true,
  "נשיכה": true,
  "נשימה": true,
  "נשיקה": true,
  "סביבה": true,
  "סבלני": true,
  "סגנון": true,
  "סויטה": true,
  "סוכרת": true,
  "סוללה": true,
  "סולרי": true,
  "סחורה": true,
  "סחיפה": true,
  "סטייק": true,
  "סטירה": true,
  "סיבוב": true,
  "סיומת": true,
  "סיכום": true,
  "סינון": true,
  "סינית": true,
  "סיננה": true,
  "סיפון": true,
  "סליחה": true,
  "סלמון": true,
  "סנטור": true,
  "ספורט": true,
  "ספינה": true,
  "ספרות": true,
  "ספריה": true,
  "סצינה": true,
  "סקירה": true,
  "סקנדל": true,
  "סריקה": true,
  "סתירה": true,
  "עבדות": true,
  "עבודה": true,
  "עבירה": true,
  "עדיין": true,
  "עדכון": true,
  "עובדה": true,
  "עולמי": true,
  "עופרת": true,
  "עוצמה": true,
  "עזרים": true,
  "עיוור": true,
  "עימות": true,
  "עירום": true,
  "עיתון": true,
  "עכשוי": true,
  "עכשיו": true,
  "עליון": true,
  "עלייה": true,
  "עלילה": true,
  "עניבה": true,
  "ענישה": true,
  "עצבני": true,
  "עצמאי": true,
  "עקומה": true,
  "עקרון": true,
  "ערבית": true,
  "ערעור": true,
  "עשרים": true,
  "פגיעה": true,
  "פגישה": true,
  "פדרלי": true,
  "פולחן": true,
  "פוסטר": true,
  "פורום": true,
  "פורמט": true,
  "פטרול": true,
  "פיזית": true,
  "פיצוי": true,
  "פיצוץ": true,
  "פליטה": true,
  "פלילי": true,
  "פלישה": true,
  "פלסטי": true,
  "פנימי": true,
  "פנסיה": true,
  "פסולת": true,
  "פסיקת": true,
  "פסנתר": true,
  "פעולה": true,
  "פעמון": true,
  "פציעה": true,
  "פקודה": true,
  "פרברי": true,
  "פרוסה": true,
  "פריון": true,
  "פרמיה": true,
  "פרסום": true,
  "פתאום": true,
  "פתיחה": true,
  "פתרון": true,
  "צוואר": true,
  "צחקוק": true,
  "ציטוט": true,
  "צילום": true,
  "צילמה": true,
  "צינור": true,
  "ציפור": true,
  "צמיחה": true,
  "צמצום": true,
  "צעצוע": true,
  "צפוני": true,
  "צריכה": true,
  "קבוצה": true,
  "קבינט": true,
  "קדימה": true,
  "קהילה": true,
  "קופסא": true,
  "קורבן": true,
  "קזינו": true,
  "קטלני": true,
  "קידום": true,
  "קיטור": true,
  "קינוח": true,
  "קישור": true,
  "קלאסי": true,
  "קמפוס": true,
  "קניון": true,
  "קניות": true,
  "קפדני": true,
  "קפיצה": true,
  "קריאה": true,
  "קריטי": true,
  "קרינה": true,
  "קרסול": true,
  "קתולי": true,
  "ראיון": true,
  "ראשון": true,
  "רביעי": true,
  "רובוט": true,
  "רווחה": true,
  "רוחני": true,
  "רחמים": true,
  "ריבית": true,
  "ריכוז": true,
  "ריפוי": true,
  "ריקוד": true,
  "רכישה": true,
  "רמיזה": true,
  "רמקול": true,
  "רעיון": true,
  "רפואי": true,
  "רציני": true,
  "רשימה": true,
  "רשמית": true,
  "רתיחה": true,
  "שאלון": true,
  "שבועי": true,
  "שבלול": true,
  "שבריר": true,
  "שגיאה": true,
  "שגריר": true,
  "שדולה": true,
  "שדרוג": true,
  "שוברת": true,
  "שולחן": true,
  "שולחת": true,
  "שולים": true,
  "שונים": true,
  "שיווק": true,
  "שיכור": true,
  "שילוב": true,
  "שימור": true,
  "שינוי": true,
  "שיעור": true,
  "שיקוי": true,
  "שכונה": true,
  "שלושה": true,
  "שלילי": true,
  "שלישי": true,
  "שמאלה": true,
  "שמונה": true,
  "שמועה": true,
  "שמיכה": true,
  "שמיעה": true,
  "שמרני": true,
  "שניהם": true,
  "שרוול": true,
  "שריטה": true,
  "שריפה": true,
  "שרשרת": true,
  "שתיים": true,
  "שתיקה": true,
  "תאגיד": true,
  "תאונה": true,
  "תאריך": true,
  "תבואה": true,
  "תבואו": true,
  "תביעה": true,
  "תבלין": true,
  "תבנית": true,
  "תבריח": true,
  "תגובה": true,
  "תגלית": true,
  "תדמית": true,
  "תהליך": true,
  "תובנה": true,
  "תודעה": true,
  "תווית": true,
  "תוחלת": true,
  "תוכנה": true,
  "תוספת": true,
  "תועלת": true,
  "תופעה": true,
  "תוצאה": true,
  "תזונה": true,
  "תזמון": true,
  "תחושה": true,
  "תחליף": true,
  "תחרות": true,
  "תחשוב": true,
  "תחשיב": true,
  "תחתית": true,
  "תיאור": true,
  "תינוק": true,
  "תיקון": true,
  "תכונה": true,
  "תכנון": true,
  "תכנות": true,
  "תכנית": true,
  "תכשיט": true,
  "תלונה": true,
  "תמונה": true,
  "תמותה": true,
  "תמיכה": true,
  "תמריץ": true,
  "תנאים": true,
  "תנועה": true,
  "תנופה": true,
  "תסכול": true,
  "תסריט": true,
  "תעודה": true,
  "תעלול": true,
  "תעשיה": true,
  "תפארת": true,
  "תפוקה": true,
  "תפיסה": true,
  "תפישה": true,
  "תפסיק": true,
  "תפקיד": true,
  "תפריט": true,
  "תצלום": true,
  "תצפית": true,
  "תקופה": true,
  "תקיפה": true,
  "תקליט": true,
  "תקציב": true,
  "תקציר": true,
  "תקרית": true,
  "תרבות": true,
  "תרגול": true,
  "תרגום": true,
  "תרגיל": true,
  "תרומה": true,
  "תרופה": true,
  "תרחיש": true,
  "תריסר": true,
  "תרכיב": true,
  "תשואה": true,
  "תשובה": true,
  "תשוקה": true,
  "תשלום": true,
  "תשתית": true,
}

export default words