"use client"
import styles from './main.module.css';
const className = "w-7 h-7";
const colors = {
    success: "bg-green-100 text-green-800",
    error: "bg-pink-100 text-red-800",
    warning: "bg-amber-100 text-amber-800",
    info: "bg-sky-100 text-sky-800",
};

export default function Alert({ type = 'info', heading = '', message = '', onClose, duration }) {
    const icons = {
        success: (
            <svg viewBox="0 0 24 24" fill="none" className={className} >
                <path className={' fill-green-400'} fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" />
            </svg>
        ),
        error: (
            <svg viewBox="0 0 24 24" fill="none" className={className}>
                <path className={' fill-red-400'} fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z" />
            </svg>
        ),
        warning: (
            <svg viewBox="0 0 24 24" fill="none" className={className}>
                <path className={' fill-amber-400'} fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11 13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V13ZM13 15.9888C13 15.4365 12.5523 14.9888 12 14.9888C11.4477 14.9888 11 15.4365 11 15.9888V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V15.9888Z" />
            </svg>
        ),
        info: (
            <svg viewBox="0 0 1024 1024" fill="none" className={className}>
                <path className={'fill-sky-400'} d="M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z" />
            </svg>
        ),
    };

    return (
        <div className={`relative flex items-center gap-4 px-4 py-2 h-full w-full max-h-fit max-w-sm  rounded-md shadow-md overflow-hidden ${styles.alert} ${colors[type]}`}>
            <figure className="flex items-center gap-2 text-xs">
                <span className="shrink-0">{icons[type]}</span>
                <figcaption className='' >
                    <h4 className="font-semibold ">{heading}</h4>
                    <span className="">{message}</span>
                </figcaption>
            </figure>
            <button
                aria-label='Close Notification'
                onClick={onClose}
                className="ml-auto p-1 hover:bg-black/10 rounded"
            >
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className={`absolute bottom-0 left-0 h-1 bg-current w-full ${styles.progress}`} style={{ animationDuration: `${duration}ms` }} />
        </div>
    );
}
