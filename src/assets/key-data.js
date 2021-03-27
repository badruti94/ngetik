import key1 from './key-images/1.png';
import key2 from './key-images/2.png';
import key3 from './key-images/3.png';

import alt from './key-images/alt.jpg'
import backspace from './key-images/backspace.jpg'
import bintang from './key-images/bintang.jpg'
import blockquote from './key-images/blockquote.jpg'
import buka_kurung from './key-images/buka-kurung.jpg'
import buka_kurung_kurawal from './key-images/buka-kurung-kurawal.jpg'
import buka_kurung_siku from './key-images/buka-kurung-siku.jpg'
import capslok from './key-images/capslok.jpg'
import ctrl from './key-images/ctrl.jpg'
import delapan from './key-images/delapan.jpg'
import hapus from './key-images/delete.jpg'
import dolar from './key-images/dolar.jpg'
import down from './key-images/down.jpg'
import dua from './key-images/dua.jpg'
import empat from './key-images/empat.jpg'
import enam from './key-images/enam.jpg'
import end from './key-images/end.jpg'
import enter from './key-images/enter.jpg'
import esc from './key-images/esc.jpg'
import garing_kiri from './key-images/garing-kiri.jpg'
import home from './key-images/home.jpg'
import koma from './key-images/koma.jpg'
import kurang_dari from './key-images/kurang-dari.jpg'
import kutip_dua from './key-images/kutip-dua.jpg'
import kutip_satu from './key-images/kutip-satu.jpg'
import lebih_dari from './key-images/lebih-dari.jpg'
import left from './key-images/left.jpg'
import lima from './key-images/lima.jpg'
import minus from './key-images/minus.jpg'
import nol from './key-images/nol.jpg'
import pagar from './key-images/pagar.jpg'
import page_down from './key-images/page-down.jpg'
import page_up from './key-images/page-up.jpg'
import plus from './key-images/plus.jpg'
import right from './key-images/right.jpg'
import sama_dengan from './key-images/sama-dengan.jpg'
import satu from './key-images/satu.jpg'
import sembilan from './key-images/sembilan.jpg'
import shift from './key-images/shift.jpg'
import tab from './key-images/tab.jpg'
import tanda_seru from './key-images/tanda-seru.jpg'
import tanda_tanya from './key-images/tanda-tanya.jpg'
import tiga from './key-images/tiga.jpg'
import titik from './key-images/titik.jpg'
import titik_dua from './key-images/titik-dua.jpg'
import titik_koma from './key-images/titik-koma.jpg'
import tujuh from './key-images/tujuh.jpg'
import underscore from './key-images/underscore.jpg'
import up from './key-images/up.jpg'

const getKeyImg = key => {
    switch (key) {
        case 'Alt':
            return alt
            break;
        case 'Backspace':
            return backspace
            break;
        case '*':
            return bintang
            break;
        case '`':
            return blockquote
            break;
        case '(':
            return buka_kurung
            break;
        case '{':
            return buka_kurung_kurawal
            break;
        case '[':
            return buka_kurung_siku
            break;
        case 'CapsLock':
            return capslok
            break;
        case 'Control':
            return ctrl
            break;
        case '8':
            return delapan
            break;
        case 'Delete':
            return hapus
            break;
        case '$':
            return dolar
            break;
        case 'ArrowDown':
            return down
            break;
        case '2':
            return dua
            break;
        case '4':
            return empat
            break;
        case '6':
            return enam
            break;
        case 'End':
            return end
            break;
        case 'Enter':
            return enter
            break;
        case 'Escape':
            return esc
            break;
        case '/':
            return garing_kiri
            break;
        case 'Home':
            return home
            break;
        case ',':
            return koma
            break;
        case '<':
            return kurang_dari
            break;
        case '"':
            return kutip_dua
            break;
        case "'":
            return kutip_satu
            break;
        case '>':
            return lebih_dari
            break;
        case 'ArrowLeft':
            return left
            break;
        case '5':
            return lima
            break;
        case '-':
            return minus
            break;
        case '0':
            return nol
            break;
        case '#':
            return pagar
            break;
        case 'PageDown':
            return page_down
            break;
        case 'PageUp':
            return page_up
            break;
        case '+':
            return plus
            break;
        case 'ArrowRight':
            return right
            break;
        case '=':
            return sama_dengan
            break;
        case '1':
            return satu
            break;
        case '9':
            return sembilan
            break;
        case 'Shift':
            return shift
            break;
        case 'Tab':
            return tab
            break;
        case '!':
            return tanda_seru
            break;
        case '?':
            return tanda_tanya
            break;
        case '3':
            return tiga
            break;
        case '.':
            return titik
            break;
        case ':':
            return titik_dua
            break;
        case ';':
            return titik_koma
            break;
        case '7':
            return tujuh
            break;
        case '_':
            return underscore
            break;
        case 'ArrowUp':
            return up
            break;
    }
}

export default getKeyImg