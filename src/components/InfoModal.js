import { ReactComponent as Github } from '../data/Github.svg'
import { ReactComponent as Close } from '../data/Close.svg'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export const InfoModal = ({ isOpen, handleClose, darkMode, styles }) => (
  <Modal isOpen={isOpen} onRequestClose={handleClose} style={styles} contentLabel="Game Info Modal">
    <div className={`h-full ${darkMode ? 'dark' : ''}`}>
      <button
        className="absolute top-4 right-4 rounded-full nm-flat-background dark:nm-flat-background-dark text-primary dark:text-primary-dark p-1 w-6 h-6 sm:p-2 sm:h-8 sm:w-8 hover:nm-inset-background dark:hover:nm-inset-background-dark"
        onClick={handleClose}
      >
        <Close />
      </button>
      <div className="h-full flex flex-col items-center justify-center max-w-[390px] mx-auto pt-9 text-primary dark:text-primary-dark">
        <div className="flex-1 w-full sm:text-base text-sm">
          <h1 className="text-center sm:text-3xl text-2xl rtl">איך לשחק?</h1>
          <ul className="list-disc pl-5 block sm:text-base text-sm">
            <li className="mt-6 mb-2 rtl">יש לך 6 ניחושים לנחש את המילה הנכונה.</li>
            <li className="mb-2 rtl">אפשר לנחש כל מילה שמופיעה ברשימת המילים של המשחק.</li>
            <li className="mb-2 rtl">
              אחרי כל ניחוש, כל אות תיצבע בירוק, צהוב או אפור.
            </li>
          </ul>
          <div className="mb-3 mt-8 flex items-center rtl">
            <span className="nm-inset-n-green text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10 rounded-full">
              א
            </span>
            <span className="mx-2">=</span>
            <span>אות נכונה, במיקום הנכון.</span>
          </div>
          <div className="mb-3 rtl">
            <span className="nm-inset-yellow-500 text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10 rounded-full">
              א
            </span>
            <span className="mx-2">=</span>
            <span>אות נכונה, במיקום לא נכון.</span>
          </div>
          <div className="mb-3 rtl">
            <span className="nm-inset-n-gray text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10 rounded-full">
              א
            </span>
            <span className="mx-2">=</span>
            <span>האות לא מופיעה במילה.</span>
          </div>
        </div>
        <div className="absolute bottom-4 right-12 flex-col max-w-[390px] mx-auto">
          <div className="flex sm:text-base text-sm rtl">
            <span>הקוד של המשחק זמין ב</span>
            <a
              className="ml-[6px] rounded-full h-5 w-5 sm:h-6 sm:w-9"
              href="https://github.com/aviv57/word-master"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </div>
          <div className="flex sm:text-base text-sm rtl">
            <span>
              ניתן לשלוח הצעות למילים ורעיונות לשיפור <a href="https://forms.gle/D39QL2HeYVPFgQSt8" className="underline text-sky-400">כאן</a>
            </span>
          </div>
          <div className="flex text-[10px] rtl">
            <span>
              (תאריך עדכון אחרון 01/06/2025)
            </span>
          </div>
        </div>
      </div>
    </div>
  </Modal>
)
