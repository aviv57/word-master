const answers = [
  'אבטחה',
  'אבטלה',
  'אבנים',
  'אדירה',
  'אודות',
  'אושרו',
  'אזהרה',
  'אזרחי',
  'אחווה',
  'אחוזה',
  'אירעה',
  'איתות',
  'אלימה',
  'אפייה',
  'אצטלה',
  'ארובה',
  'אשמים',
  'אשפוז',
  'אתמול',
  'בודדה',
  'בועות',
  'בחירה',
  'ביקרה',
  'בלבול',
  'בלימה',
  'בליעה',
  'במקום',
  'בננות',
  'בעיות',
  'ברזים',
  'בריאה',
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
  'דגלים',
  'דורות',
  'דיקור',
  'דתיים',
  'הארכה',
  'הבשלה',
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
  'השפיע',
  'השקעת',
  'השתמט',
  'התכבד',
  'התמדה',
  'התמסר',
  'התנפח',
  'התעלף',
  'התערב',
  'התפאר',
  'התפרק',
  'התקשר',
  'התרסק',
  'וודקה',
  'ויכוח',
  'זיהום',
  'זינוק',
  'חדרים',
  'חוגים',
  'חולדה',
  'חולמת',
  'חולצה',
  'חופשי',
  'חזרות',
  'חטיפה',
  'חמישה',
  'חקירה',
  'חריגה',
  'חשדות',
  'חששות',
  'חתונה',
  'טבילה',
  'טבעית',
  'טיפלה',
  'יאפשר',
  'יבואו',
  'יוצרת',
  'ינשוף',
  'יסמין',
  'יעבוד',
  'יצליח',
  'כבדים',
  'כלכלי',
  'כלכלן',
  'כמיהה',
  'כפפות',
  'כתמים',
  'לאחסן',
  'לאסוף',
  'לארגן',
  'לבבות',
  'לגבות',
  'לגזור',
  'לגמול',
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
  'לפגוש',
  'לפוצץ',
  'לפעול',
  'לרדוף',
  'לרענן',
  'לשהות',
  'לשלוט',
  'לשלוף',
  'לשנות',
  'לתלות',
  'לתרגם',
  'מאוהב',
  'מאושר',
  'מבוטח',
  'מבוסס',
  'מביכה',
  'מגוון',
  'מדובר',
  'מדחום',
  'מדפים',
  'מובהק',
  'מודגש',
  'מודפס',
  'מוזמן',
  'מוחות',
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
  'מחזות',
  'מחזיר',
  'מחיקה',
  'מחסום',
  'מחצית',
  'מחריד',
  'מחשבה',
  'מחשמל',
  'מטאור',
  'מטווח',
  'מטפלת',
  'מכבסה',
  'מכולת',
  'מלאכה',
  'מלהיב',
  'ממוצע',
  'ממותג',
  'ממציא',
  'מנהרה',
  'מנחות',
  'מסועף',
  'מסכות',
  'מסננת',
  'מעבדה',
  'מעודד',
  'מעושן',
  'מעסיק',
  'מעצבת',
  'מפליא',
  'מפסיק',
  'מפתיע',
  'מצגות',
  'מצוין',
  'מצולע',
  'מצופה',
  'מצורף',
  'מצטרף',
  'מציצה',
  'מצעים',
  'מקולל',
  'מקומם',
  'מקושר',
  'מרגשת',
  'מריצה',
  'מרענן',
  'מרצים',
  'משאבה',
  'משוחד',
  'משושה',
  'משמיע',
  'משתדל',
  'משתמש',
  'משתפת',
  'מתאים',
  'מתאמץ',
  'מתבגר',
  'מתגבר',
  'מתגלח',
  'מתכות',
  'מתמיד',
  'מתעלם',
  'מתעלף',
  'מתרחש',
  'נוהגת',
  'נוסעת',
  'נועדה',
  'נושאת',
  'נמוכה',
  'נעוצה',
  'נערות',
  'נפלאה',
  'נראתה',
  'נשלחה',
  'סובלת',
  'סוגרת',
  'סוכות',
  'סחיטה',
  'סיבות',
  'סיכום',
  'סיכון',
  'עברית',
  'עדשות',
  'עונות',
  'עופרת',
  'עוצמה',
  'עיסוק',
  'עמדתי',
  'עמוסה',
  'עמלות',
  'עניים',
  'עסקים',
  'עצבני',
  'עקומה',
  'עשויה',
  'עששית',
  'פועלת',
  'פורחת',
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
  'צביעה',
  'ציבור',
  'ציוני',
  'צללית',
  'צעצוע',
  'צפירה',
  'צפרדע',
  'קבועה',
  'קבעתי',
  'קדומה',
  'קוצים',
  'קטעים',
  'קערות',
  'קרנות',
  'קרקפת',
  'קשירה',
  'רגילה',
  'רופאה',
  'רחוקה',
  'רחמים',
  'רמזור',
  'רציתי',
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
  'שיתפה',
  'שניהם',
  'שקרים',
  'שרטוט',
  'שתיקה',
  'תבחרו',
  'תבשיל',
  'תדהמה',
  'תווים',
  'תורים',
  'תזכור',
  'תזמון',
  'תחקור',
  'תחשיב',
  'תיצור',
  'תכנות',
  'תכשיט',
  'תלמוד',
  'תמריץ',
  'תמשיך',
  'תעבור',
  'תפילה',
  'תפירה',
  'תקליט',
  'תקנות',
  'תשאול',
]

export default answers
