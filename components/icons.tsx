import { cn } from '@/utils/cn';
import {
  AlertTriangle,
  Blocks,
  Check,
  ChevronsUpDown,
  FileText,
  HelpCircle,
  Loader,
  LucideProps,
  Plus,
  Settings,
  Trash,
  X,
  HeartIcon,
  MessageCircle,
  ArrowLeft,
  ArrowRight,
  Music,
  Music2,
  Image
} from 'lucide-react';

export const Icons = {
  music1: Music,
  music2: Music2,
  signout: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="currentColor"
      fill="none"
      role="img"
      {...props}
    >
      <path
        d="M4 9.20433C4 7.13117 4 6.09459 4.35762 5.25272C4.65634 4.54951 5.1278 3.94591 5.7219 3.50609C6.43314 2.97955 7.38764 2.79412 9.29665 2.42326C11.2817 2.03762 12.2743 1.8448 13.0467 2.15208C13.6884 2.40733 14.229 2.88944 14.5789 3.51833C15 4.27538 15 5.35327 15 7.50906V16.4909C15 18.6467 15 19.7246 14.5789 20.4817C14.229 21.1106 13.6884 21.5927 13.0467 21.8479C12.2743 22.1552 11.2817 21.9624 9.29665 21.5767C7.38764 21.2059 6.43314 21.0205 5.7219 20.4939C5.1278 20.0541 4.65634 19.4505 4.35762 18.7473C4 17.9054 4 16.8688 4 14.7957V9.20433Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M15 19.7982C16.4473 19.9487 18.3999 20.4116 19.4375 19.0885C20 18.3712 20 17.2786 20 15.0934V8.90664C20 6.72138 20 5.62876 19.4375 4.91152C18.3999 3.58841 16.4473 4.05129 15 4.20177"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 13L12 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 19.7266L22 19.7266"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 20H5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  attachment: Image,
  home: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="currentColor"
      fill="none"
      role="img"
      {...props}
    >
      <path
        d="M9.06165 4.82633L3.23911 9.92134C2.7398 10.3583 3.07458 11.1343 3.76238 11.1343C4.18259 11.1343 4.52324 11.4489 4.52324 11.8371V15.0806C4.52324 17.871 4.52324 19.2662 5.46176 20.1331C6.40029 21 7.91082 21 10.9319 21H13.0681C16.0892 21 17.5997 21 18.5382 20.1331C19.4768 19.2662 19.4768 17.871 19.4768 15.0806V11.8371C19.4768 11.4489 19.8174 11.1343 20.2376 11.1343C20.9254 11.1343 21.2602 10.3583 20.7609 9.92134L14.9383 4.82633C13.5469 3.60878 12.8512 3 12 3C11.1488 3 10.4531 3.60878 9.06165 4.82633Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16H12.009"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  homeFill: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      data-src="https://cdn.hugeicons.com/icons/home-06-solid-rounded.svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      role="img"
      color="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6328 10.9887C21.8611 10.4595 21.7639 9.80273 21.2545 9.35692L15.395 4.2296C15.2791 4.12821 15.1612 4.02205 15.0409 3.91379C14.1767 3.1359 13.1924 2.25 11.9997 2.25C10.807 2.25 9.82272 3.13589 8.95847 3.91378C8.8382 4.02204 8.72025 4.1282 8.60439 4.22959L2.74491 9.35692C2.23543 9.80273 2.13831 10.4595 2.36662 10.9887C2.54339 11.3985 2.90593 11.718 3.36751 11.8355C3.57479 11.8883 3.67843 11.9147 3.72051 11.9686C3.76258 12.0225 3.76289 12.1089 3.76351 12.2818C3.76646 13.1014 3.77292 14.9211 3.77292 15.1392C3.7729 16.4846 3.77288 17.5762 3.89806 18.4362C4.02915 19.3368 4.31065 20.0912 4.95257 20.6841C5.58601 21.2691 6.37767 21.5185 7.32313 21.6359C8.24198 21.75 9.41323 21.75 10.88 21.75H13.1193C14.5861 21.75 15.7574 21.75 16.6762 21.6359C17.6217 21.5185 18.4134 21.2691 19.0468 20.6841C19.6887 20.0912 19.9702 19.3368 20.1013 18.4362C20.2265 17.5762 20.2265 16.4846 20.2265 15.1392C20.2265 14.9211 20.2329 13.1014 20.2359 12.2818C20.2365 12.1089 20.2368 12.0225 20.2789 11.9686C20.3209 11.9146 20.4246 11.8883 20.6319 11.8355C21.0934 11.718 21.456 11.3985 21.6328 10.9887ZM12 14.75C11.3096 14.75 10.75 15.3096 10.75 16C10.75 16.6904 11.3096 17.25 12 17.25H12.009C12.6993 17.25 13.259 16.6904 13.259 16C13.259 15.3096 12.6993 14.75 12.009 14.75H12Z"
        fill="currentColor"
      />
    </svg>
  ),
  bell: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      role="img"
      fill="none"
      {...props}
    >
      <path
        d="M2.52992 14.7696C2.31727 16.1636 3.268 17.1312 4.43205 17.6134C8.89481 19.4622 15.1052 19.4622 19.5679 17.6134C20.732 17.1312 21.6827 16.1636 21.4701 14.7696C21.3394 13.9129 20.6932 13.1995 20.2144 12.5029C19.5873 11.5793 19.525 10.5718 19.5249 9.5C19.5249 5.35786 16.1559 2 12 2C7.84413 2 4.47513 5.35786 4.47513 9.5C4.47503 10.5718 4.41272 11.5793 3.78561 12.5029C3.30684 13.1995 2.66061 13.9129 2.52992 14.7696Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 19C8.45849 20.7252 10.0755 22 12 22C13.9245 22 15.5415 20.7252 16 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  bellFill: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="injected-svg"
      data-src="https://cdn.hugeicons.com/icons/notification-02-solid-rounded.svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      role="img"
      {...props}
    >
      <path
        d="M3.92786 9.27697C3.92789 4.84151 7.54419 1.25 12 1.25C16.4558 1.25 20.0721 4.84155 20.0721 9.27703C20.0722 10.3088 20.1416 11.0874 20.6173 11.7873C20.6835 11.8832 20.7712 12.0033 20.8671 12.1345L20.8671 12.1345C21.0337 12.3625 21.2247 12.624 21.3697 12.8505C21.6255 13.2503 21.8754 13.7324 21.9613 14.2942C22.2416 16.127 20.9494 17.3136 19.6625 17.8454C15.1298 19.7182 8.87016 19.7182 4.33746 17.8454C3.05056 17.3136 1.75836 16.127 2.03868 14.2942C2.12459 13.7324 2.37452 13.2503 2.63033 12.8505C2.77528 12.624 2.96636 12.3624 3.13291 12.1345L3.13294 12.1344C3.22882 12.0032 3.31657 11.8831 3.38271 11.7872C3.85838 11.0873 3.92776 10.3087 3.92786 9.27697Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.74341 17.7838C8.27717 17.6419 8.82485 17.9596 8.9667 18.4934C9.30659 19.7724 10.5207 20.7502 12.0002 20.7502C13.4798 20.7502 14.6939 19.7724 15.0338 18.4934C15.1756 17.9596 15.7233 17.6419 16.2571 17.7838C16.7908 17.9256 17.1086 18.4733 16.9667 19.0071C16.3896 21.1786 14.3697 22.7502 12.0002 22.7502C9.63084 22.7502 7.61087 21.1786 7.03379 19.0071C6.89194 18.4733 7.20965 17.9256 7.74341 17.7838Z"
        fill="currentColor"
      />
    </svg>
  ),
  inbox: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="currentColor"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 13.5H16.5743C15.7322 13.5 15.0706 14.2036 14.6995 14.9472C14.2963 15.7551 13.4889 16.5 12 16.5C10.5111 16.5 9.70373 15.7551 9.30054 14.9472C8.92942 14.2036 8.26777 13.5 7.42566 13.5H2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  inboxFill: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      data-src="https://cdn.hugeicons.com/icons/inbox-solid-rounded.svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      role="img"
      color="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.825 1.75C15.0007 1.74998 15.7354 1.74997 17.0955 1.93282C18.4999 2.12164 19.6537 2.52175 20.5661 3.43414C21.4784 4.34653 21.8786 5.50033 22.0674 6.90471C22.2313 8.12428 22.2483 10.047 22.25 12L22.2436 13.5037C22.235 15.2454 22.1957 16.6539 21.9906 17.7892C21.7817 18.9461 21.3902 19.8839 20.635 20.6391C19.7768 21.4973 18.6846 21.8843 17.3079 22.0694C15.9645 22.25 14.2438 22.25 12.0531 22.25H11.9387C9.74803 22.25 8.02736 22.25 6.68394 22.0694C5.30729 21.8843 4.21503 21.4973 3.35683 20.6391C2.60166 19.8839 2.21017 18.9461 2.00121 17.7892C1.79614 16.6539 1.75682 15.2454 1.74825 13.5037L1.75038 11.9999C1.75212 10.0469 1.76905 8.12426 1.93301 6.90471C2.12183 5.50033 2.52194 4.34653 3.43433 3.43414C4.34672 2.52175 5.50052 2.12164 6.9049 1.93282C8.26503 1.74996 9.99976 1.74998 12.1757 1.75H12.825ZM20.0852 7.17121C20.2409 8.32894 20.2497 10.2983 20.2502 12.4499C20.2502 12.6155 20.1159 12.75 19.9502 12.75L16.5703 12.75C15.2901 12.75 14.4348 13.7898 14.0243 14.6123C13.7341 15.1938 13.1705 15.75 11.9959 15.75C10.8213 15.75 10.2577 15.1938 9.96753 14.6123C9.55704 13.7898 8.70177 12.75 7.42158 12.75L4.05019 12.75C3.8845 12.75 3.75018 12.6155 3.75022 12.4499C3.75069 10.2983 3.75952 8.32894 3.91518 7.17121C4.07417 5.9886 4.36969 5.3272 4.84854 4.84835C5.32739 4.3695 5.98879 4.07399 7.1714 3.91499C8.38277 3.75212 10.4827 3.75 12.7502 3.75C15.0176 3.75 15.6176 3.75212 16.829 3.91499C18.0116 4.07399 18.673 4.3695 19.1518 4.84835C19.6307 5.3272 19.9262 5.9886 20.0852 7.17121Z"
        fill="currentColor"
      />
    </svg>
  ),
  heart: HeartIcon,
  leftArrow: ArrowLeft,
  rightArrow: ArrowRight,
  orchestr: ({ className, animate = false, ...props }: LucideProps & { animate?: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        'group size-6 text-foreground child:origin-center child:transition child:duration-200 child:ease-in-out child:animate-ease-in-out',

        className
      )}
      {...props}
    >
      <path d="M2 10v3" className={cn('group-hover:animate-wave', animate && 'animate-wave')} />
      <path
        d="M6 6v11"
        className={cn(
          'opacity-90 delay-[60ms] animate-delay-[60ms] group-hover:animate-wave group-hover:animate-delay-[180ms]',
          animate && 'animate-wave'
        )}
      />
      <path
        d="M10 3v18"
        className={cn(
          'opacity-70 delay-[120ms] animate-delay-[120ms] group-hover:animate-wave group-hover:animate-delay-[120ms]',
          animate && 'animate-wave'
        )}
      />
      <path
        d="M14 8v7"
        className={cn(
          'opacity-60 delay-[180ms] animate-delay-[180ms] group-hover:animate-wave group-hover:animate-delay-[60ms]',
          animate && 'animate-wave'
        )}
      />
      <path
        d="M18 5v13"
        className={cn(
          'opacity-80 delay-[240ms] animate-delay-[240ms] group-hover:animate-wave group-hover:animate-delay-[300ms]',
          animate && 'animate-wave'
        )}
      />
      <path
        d="M22 10v3"
        className={cn(
          'opacity-70 delay-[300ms] animate-delay-[300ms] group-hover:animate-wave group-hover:animate-delay-[240ms]',
          animate && 'animate-wave'
        )}
      />
    </svg>
  ),
  message: MessageCircle,
  cheveronVert: ChevronsUpDown,
  blocks: Blocks,
  close: X,
  spinner: Loader,
  trash: Trash,
  post: FileText,
  settings: Settings,
  add: Plus,
  warning: AlertTriangle,
  help: HelpCircle,
  google: ({ ...props }: LucideProps) => (
    <svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="4 4 40 40"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="google"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        // fill="#fbc02d"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        // fill="#e53935"
        fill="currentColor"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        // fill="#4caf50"
        fill="currentColor"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        // fill="#1565c0"
        fill="currentColor"
        d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  ),
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      />
    </svg>
  ),
  check: Check
} as const;

export type IconNames = keyof typeof Icons;
