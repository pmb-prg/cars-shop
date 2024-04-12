import styles from './Categories.module.scss'
import Link from 'next/link';
import Sedan from '../icons/Sedan';
import Suv from '../icons/Suv';
import Hatchback from '../icons/Hatchback';
import Sport from '../icons/Sport';

function Categories() {
  return (
    <div className={styles.container}>
        <Link href='/categories/sedan'>
            <div>
                <span>Sedan</span>
                <Sedan />
            </div>
        </Link>
        <Link href='/categories/suv'>
            <div>
                <span>Suv</span>
                <Suv />
            </div>
        </Link>
        <Link href='/categories/hatchback'>
            <div>
                <span>Hatchback</span>
                <Hatchback />
            </div>
        </Link>
        <Link href='/categories/sport'>
            <div>
                <span>Sport</span>
                <Sport />
            </div>
        </Link>
    </div>
  )
}

export default Categories