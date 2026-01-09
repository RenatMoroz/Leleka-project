import css from './Header.module.css'
import Link from 'next/link'
import { AuthNavigation } from '../AuthNavigation/AuthNavigation'

const Header = () => (<header className={css.header}>
    
    <Link href="/" aria-label="Home">
       
        <svg width="106" height="30" class="header-logo">
          <use href="/publ"></use>
        </svg>
         Лелека
    </Link>
                <Link href="/">
                <svg width="106" height="30" class="header-logo">
          <use href=""></use>
        </svg></Link>
</header>)

export default Header