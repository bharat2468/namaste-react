function Contact() {
    return (
        <div className="w-full max-w-5xl mx-auto py-12 px-5 md:py-24 text-primary-content">
            <div className="space-y-6 text-center">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="max-w-[600px] mx-auto text-gray-500">
                    Have a question or need assistance? Fill out the form below
                    and we'll get back to you as soon as possible.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="space-y-4">
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="label" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="input input-bordered w-full"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="label" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="input input-bordered w-full"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="label" htmlFor="subject">
                                Subject
                            </label>
                            <input
                                className="input input-bordered w-full"
                                id="subject"
                                placeholder="Enter the subject"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="label" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="textarea textarea-bordered w-full min-h-[150px]"
                                id="message"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-secondary text-secondary-content w-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold">Get in Touch</h2>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <MapPinIcon className="h-5 w-5 text-gray-500" />
                                <p className="text-gray-500">
                                    123 Main St, Anytown USA 12345
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <PhoneIcon className="h-5 w-5 text-gray-500" />
                                <p className="text-gray-500">(123) 456-7890</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MailIcon className="h-5 w-5 text-gray-500" />
                                <p className="text-gray-500">info@acme.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold">Follow Us</h2>
                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="text-gray-500 hover:text-primary"
                            >
                                <TwitterIcon className="h-6 w-6" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-primary"
                            >
                                <FacebookIcon className="h-6 w-6" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-primary"
                            >
                                <InstagramIcon className="h-6 w-6" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-primary"
                            >
                                <LinkedinIcon className="h-6 w-6" />
                                <span className="sr-only">LinkaedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

function FacebookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function InstagramIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function LinkedinIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function MailIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}

function MapPinIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function PhoneIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function TwitterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    );
}
