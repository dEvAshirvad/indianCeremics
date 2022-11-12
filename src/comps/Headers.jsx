import React from 'react'
import { Link } from 'react-router-dom'

function Headers() {
  return (
    <header>
        <nav className='container flexy'>
            <Link to={"/"}>
                <h1 className="navh1">Indian Ceremics</h1>
            </Link>
            <ul className="navMenus flexy">
                <li><Link to={"/collections"}>Collections</Link></li>
                <li><Link to={"/story"}>Our Story</Link></li>
            </ul>
            <div className="navCommands flexy">
                <Link to={"/checkout"}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0.1C0.502944 0.1 0.1 0.502944 0.1 1C0.1 1.49706 0.502944 1.9 1 1.9L1 0.1ZM4.05556 1L4.92868 0.781718C4.82852 0.381068 4.46854 0.1 4.05556 0.1V1ZM20.5556 17.7889C21.0526 17.7889 21.4556 17.3859 21.4556 16.8889C21.4556 16.3918 21.0526 15.9889 20.5556 15.9889V17.7889ZM23 3.44444L23.8731 3.66273C23.9403 3.39386 23.8799 3.10902 23.7094 2.89057C23.5388 2.67213 23.2771 2.54444 23 2.54444V3.44444ZM20.5556 13.2222V14.1222C20.9685 14.1222 21.3285 13.8412 21.4287 13.4405L20.5556 13.2222ZM1 1.9H4.05556V0.1H1L1 1.9ZM3.18243 1.21828L3.79354 3.66273L5.53979 3.22616L4.92868 0.781718L3.18243 1.21828ZM3.79354 3.66273L6.23798 13.4405L7.98424 13.0039L5.53979 3.22616L3.79354 3.66273ZM7.11111 12.3222H6.5V14.1222H7.11111V12.3222ZM6.5 17.7889H20.5556V15.9889H6.5V17.7889ZM3.76667 15.0556C3.76667 16.5651 4.99042 17.7889 6.5 17.7889V15.9889C5.98453 15.9889 5.56667 15.571 5.56667 15.0556H3.76667ZM6.5 12.3222C4.99042 12.3222 3.76667 13.546 3.76667 15.0556H5.56667C5.56667 14.5401 5.98453 14.1222 6.5 14.1222V12.3222ZM4.66667 4.34444H23V2.54444H4.66667V4.34444ZM22.1269 3.22616L19.6824 13.0039L21.4287 13.4405L23.8731 3.66273L22.1269 3.22616ZM20.5556 12.3222H7.11111V14.1222H20.5556V12.3222ZM19.6556 21.7778C19.6556 21.9557 19.5113 22.1 19.3333 22.1V23.9C20.5054 23.9 21.4556 22.9498 21.4556 21.7778H19.6556ZM19.3333 22.1C19.1554 22.1 19.0111 21.9557 19.0111 21.7778H17.2111C17.2111 22.9498 18.1613 23.9 19.3333 23.9V22.1ZM19.0111 21.7778C19.0111 21.5998 19.1554 21.4556 19.3333 21.4556V19.6556C18.1613 19.6556 17.2111 20.6057 17.2111 21.7778H19.0111ZM19.3333 21.4556C19.5113 21.4556 19.6556 21.5998 19.6556 21.7778H21.4556C21.4556 20.6057 20.5054 19.6556 19.3333 19.6556V21.4556ZM7.43333 21.7778C7.43333 21.9557 7.28907 22.1 7.11111 22.1V23.9C8.28318 23.9 9.23333 22.9498 9.23333 21.7778H7.43333ZM7.11111 22.1C6.93315 22.1 6.78889 21.9557 6.78889 21.7778H4.98889C4.98889 22.9498 5.93904 23.9 7.11111 23.9V22.1ZM6.78889 21.7778C6.78889 21.5998 6.93315 21.4556 7.11111 21.4556V19.6556C5.93904 19.6556 4.98889 20.6057 4.98889 21.7778H6.78889ZM7.11111 21.4556C7.28907 21.4556 7.43333 21.5998 7.43333 21.7778H9.23333C9.23333 20.6057 8.28318 19.6556 7.11111 19.6556V21.4556Z" fill="black"/>
                    </svg>
                </Link>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0001 22C9.33694 22.0046 7.69482 21.6283 6.19969 20.8999C5.65249 20.6338 5.12821 20.3229 4.63219 19.9704L4.48149 19.8604C3.1173 18.8535 2.00196 17.5474 1.2211 16.0423C0.413418 14.4846 -0.00549196 12.7546 5.4365e-05 11C5.4365e-05 4.92485 4.92496 0 11.0001 0C17.0752 0 22.0001 4.92485 22.0001 11C22.0056 12.7538 21.587 14.483 20.7801 16.0401C20.0004 17.5443 18.8866 18.85 17.5241 19.8571C17.0102 20.2333 16.4648 20.5645 15.8939 20.8471L15.8059 20.8911C14.3099 21.6234 12.6657 22.0027 11.0001 22ZM11.0001 16.4999C9.3517 16.4967 7.84051 17.4174 7.08738 18.8836C9.55291 20.1048 12.4472 20.1048 14.9128 18.8836V18.8781C14.1587 17.4135 12.6474 16.4949 11.0001 16.4999ZM11.0001 14.2999C13.3828 14.3031 15.5798 15.5871 16.7519 17.6615L16.7684 17.6472L16.7838 17.634L16.7651 17.6505L16.7541 17.6593C19.536 15.256 20.5307 11.3765 19.2485 7.93109C17.9663 4.48565 14.6775 2.20034 11.0012 2.20034C7.32488 2.20034 4.03599 4.48565 2.75378 7.93109C1.47158 11.3765 2.4663 15.256 5.24819 17.6593C6.42107 15.5859 8.61787 14.3028 11.0001 14.2999ZM11.0001 13.1999C8.57002 13.1999 6.60008 11.23 6.60008 8.79997C6.60008 6.36992 8.57002 4.39998 11.0001 4.39998C13.4301 4.39998 15.4 6.36992 15.4 8.79997C15.4 9.96691 14.9365 11.0861 14.1113 11.9112C13.2862 12.7364 12.167 13.1999 11.0001 13.1999ZM11.0001 6.59997C9.78504 6.59997 8.80008 7.58494 8.80008 8.79997C8.80008 10.015 9.78504 11 11.0001 11C12.2151 11 13.2001 10.015 13.2001 8.79997C13.2001 7.58494 12.2151 6.59997 11.0001 6.59997Z" fill="black"/>
                </svg>
            </div>
        </nav>
    </header>
  )
}

export default Headers