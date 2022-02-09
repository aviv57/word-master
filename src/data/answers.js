const answers = [
  'אבטחה',
  'אבטלה',
  'אבנים',
  'אדירה',
  'אודות',
  'אזהרה',
  'אזרחי',
  'אחווה',
  'אחוזה',
  'אחסון',
  'אירעה',
  'איתות',
  'אלימה',
  'אפייה',
  'אצטלה',
  'ארובה',
  'אשליה',
  'אשמים',
  'אשפוז',
  'אתמול',
  'בדיחה',
  'בהירה',
  'בודדה',
  'בוסתן',
  'בועות',
  'בחירה',
  'ביקרה',
  'בלבול',
  'בלילה',
  'בלימה',
  'בליעה',
  'במקום',
  'בננות',
  'בעיות',
  'ברזים',
  'בריאה',
  'בריחה',
  'בתולה',
  'גופים',
  'גזירה',
  'גידול',
  'גילוח',
  'גילתה',
  'גישור',
  'גרגיר',
  'גרורה',
  'גרושה',
  'דבורה',
  'דגלים',
  'דורות',
  'דיקור',
  'דירוג',
  'דירות',
  'דתיים',
  'הארכה',
  'הבשלה',
  'הגדרה',
  'הגיבה',
  'הגרלה',
  'הדאיג',
  'הדליף',
  'הדפסה',
  'הדרים',
  'הובהר',
  'הוגבל',
  'הודיע',
  'הוכחה',
  'הונאה',
  'הוסיף',
  'הופרש',
  'הוצאה',
  'הוקצב',
  'הורחק',
  'הושמד',
  'הושעה',
  'החכרה',
  'החלטה',
  'החלמה',
  'הטבעה',
  'הילוך',
  'הכינה',
  'הכנסה',
  'הכשיל',
  'הכשיר',
  'הכתיב',
  'הכתרה',
  'המחשה',
  'הנעלה',
  'הנפקה',
  'הסריח',
  'הסתבך',
  'הסתכן',
  'הסתפר',
  'העמיק',
  'הערכה',
  'העתיק',
  'הפניה',
  'הפעלה',
  'הפצצה',
  'הפרדה',
  'הפתיע',
  'הצגות',
  'הצטער',
  'הצלחה',
  'הצללה',
  'הצרחה',
  'הרחבה',
  'הריון',
  'הריסה',
  'הרשאה',
  'השאלה',
  'השפיע',
  'השקעת',
  'השתמט',
  'השתקם',
  'התכבד',
  'התמדה',
  'התמסר',
  'התנדב',
  'התנפח',
  'התעלף',
  'התערב',
  'התפאר',
  'התפרק',
  'התקשר',
  'התרסק',
  'וודקה',
  'ויכוח',
  'זדוני',
  'זיהום',
  'זינוק',
  'חבילה',
  'חגורה',
  'חגיגה',
  'חדרים',
  'חוברת',
  'חוגים',
  'חוטים',
  'חולדה',
  'חולמת',
  'חולצה',
  'חופשי',
  'חורשה',
  'חזרות',
  'חטיפה',
  'חיבוק',
  'חיידק',
  'חיסור',
  'חישוב',
  'חיתול',
  'חליפה',
  'חלקלק',
  'חמישה',
  'חצובה',
  'חקירה',
  'חריגה',
  'חשבון',
  'חשדות',
  'חשמלי',
  'חששות',
  'חתונה',
  'טבילה',
  'טבעית',
  'טיפלה',
  'יאפשר',
  'יבואו',
  'יהדות',
  'יוצרת',
  'ייעוד',
  'ינשוף',
  'יסמין',
  'יעבוד',
  'יצירה',
  'יצליח',
  'כבאית',
  'כבדים',
  'כינור',
  'כלכלי',
  'כלכלן',
  'כמיהה',
  'כפפות',
  'כרטיס',
  'כריכה',
  'כתמים',
  'לאחסן',
  'לאסוף',
  'לארגן',
  'לבבות',
  'לגבות',
  'לגזור',
  'לדקלם',
  'להזיע',
  'להזיק',
  'להפיל',
  'לוחמת',
  'לזהות',
  'לחייב',
  'לחפור',
  'לחשוד',
  'לייעל',
  'ליקוי',
  'לכופף',
  'לכעוס',
  'לכפתר',
  'לכרות',
  'ללחוץ',
  'למנות',
  'למתוח',
  'לסחוט',
  'לסייע',
  'לעזוב',
  'לעשות',
  'לפגוע',
  'לפוצץ',
  'לפעול',
  'לרדוף',
  'לרענן',
  'לרקוד',
  'לשדרג',
  'לשהות',
  'לשלוט',
  'לשלוף',
  'לשנות',
  'לתרגם',
  'מאוהב',
  'מאושר',
  'מאזין',
  'מבוטח',
  'מבוסס',
  'מביכה',
  'מגוון',
  'מדובר',
  'מדויק',
  'מדחום',
  'מדפים',
  'מדפסת',
  'מדריך',
  'מובהק',
  'מודגש',
  'מודפס',
  'מוזמן',
  'מוחות',
  'מוכרח',
  'מומחה',
  'מועיל',
  'מופרד',
  'מופתע',
  'מוצדק',
  'מוצלח',
  'מוקדם',
  'מוקפד',
  'מורים',
  'מורכב',
  'מזוזה',
  'מזלזל',
  'מזרחי',
  'מחולק',
  'מחוקק',
  'מחזור',
  'מחזות',
  'מחזיר',
  'מחיקה',
  'מחלקה',
  'מחסום',
  'מחצית',
  'מחצלת',
  'מחריד',
  'מחשבה',
  'מחשמל',
  'מטאור',
  'מטווח',
  'מטפלת',
  'מטריד',
  'מילון',
  'מילים',
  'מישהו',
  'מכבסה',
  'מכולת',
  'מכלאה',
  'מכפיל',
  'מלאכה',
  'מלהיב',
  'ממוצע',
  'ממותג',
  'ממציא',
  'מנהרה',
  'מנחות',
  'מניפה',
  'מסועף',
  'מסכות',
  'מסננת',
  'מעבדה',
  'מעודד',
  'מעושן',
  'מעטפה',
  'מעלות',
  'מעלית',
  'מעסיק',
  'מעצבת',
  'מערכת',
  'מפוצץ',
  'מפוקח',
  'מפליא',
  'מפסיק',
  'מפתיע',
  'מצגות',
  'מצוין',
  'מצולע',
  'מצופה',
  'מצורף',
  'מצטרף',
  'מצלמה',
  'מצעים',
  'מקביל',
  'מקולל',
  'מקומם',
  'מקושר',
  'מרגשת',
  'מרוחק',
  'מריצה',
  'מרענן',
  'מרפסת',
  'מרצים',
  'משאבה',
  'משוחד',
  'משושה',
  'משלוח',
  'משמיע',
  'משתדל',
  'משתמש',
  'משתפת',
  'מתאים',
  'מתאמץ',
  'מתבגר',
  'מתגבר',
  'מתגלח',
  'מתכון',
  'מתכות',
  'מתמיד',
  'מתעלם',
  'מתעלף',
  'מתרחש',
  'נדידה',
  'נוהגת',
  'נוסעת',
  'נועדה',
  'נושאת',
  'ניהול',
  'נמוכה',
  'נעוצה',
  'נערות',
  'נפלאה',
  'נראתה',
  'נשלחה',
  'סובלת',
  'סוגרת',
  'סוכות',
  'סוללה',
  'סחיטה',
  'סיבות',
  'סידור',
  'סיכום',
  'סיכון',
  'סיפור',
  'ספינה',
  'ספרות',
  'עברית',
  'עדשות',
  'עונות',
  'עופרת',
  'עוצמה',
  'עיסוק',
  'עכביש',
  'עמוסה',
  'עמלות',
  'עניבה',
  'עניים',
  'עסקים',
  'עצבים',
  'עצבני',
  'עקומה',
  'עקירה',
  'עשויה',
  'עששית',
  'פגמים',
  'פועלת',
  'פורחת',
  'פורקן',
  'פחדים',
  'פחדתי',
  'פיחות',
  'פירסם',
  'פלאים',
  'פליטה',
  'פלילי',
  'פלישה',
  'פסטות',
  'פסילה',
  'פסנתר',
  'פעולה',
  'פעמון',
  'פקדון',
  'פרוסה',
  'פרחים',
  'פרצוף',
  'פרשות',
  'צביטה',
  'צביעה',
  'ציבור',
  'ציוני',
  'ציפית',
  'צללית',
  'צנצנת',
  'צעצוע',
  'צפירה',
  'צפרדע',
  'קבועה',
  'קבעתי',
  'קדומה',
  'קהילה',
  'קופסה',
  'קוצים',
  'קטעים',
  'קינוח',
  'קישור',
  'קעקוע',
  'קערות',
  'קרנות',
  'קרקפת',
  'קשירה',
  'ראשון',
  'רגילה',
  'רופאה',
  'רחוקה',
  'רחמים',
  'רמזור',
  'רציני',
  'רציתי',
  'רשימה',
  'רשמים',
  'שאלון',
  'שאלות',
  'שארית',
  'שוברת',
  'שיאים',
  'שידרה',
  'שיזוף',
  'שיחות',
  'שיכור',
  'שילוב',
  'שינוע',
  'שיעול',
  'שיעור',
  'שירות',
  'שיתוף',
  'שיתפה',
  'שניהם',
  'שקרים',
  'שרטוט',
  'שתיקה',
  'תבחרו',
  'תבשיל',
  'תגובה',
  'תדהמה',
  'תווים',
  'תוכנה',
  'תולעת',
  'תורים',
  'תזכור',
  'תזמון',
  'תחושה',
  'תחקור',
  'תחשיב',
  'תיצור',
  'תכנות',
  'תכשיט',
  'תכשיר',
  'תלמוד',
  'תמנון',
  'תמריץ',
  'תמשיך',
  'תעבור',
  'תעוזה',
  'תפילה',
  'תפירה',
  'תקליט',
  'תקנות',
  'תרופה',
  'תרמיל',
  'תשאול',
]

export default answers
