"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <div>
            <section className="relative w-full bg-gradient-to-r from-blue-800 to-blue-700 min-h-[28vh] flex items-center justify-center my-24 animate-slide-right delay-300">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                        Terms & Conditions



                    </h1>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-800 to-transparent"></div>
                <style jsx>{`
    @keyframes slideRight {
      0% {
        transform: translateX(-50px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
    .animate-slide-right {
      animation: slideRight 1s ease-out forwards;
    }
    .delay-300 {
      animation-delay: 0.3s;
    }
    .delay-700 {
      animation-delay: 0.7s;
    }
  `}</style>
            </section>
            <section className="bg-white pt-24 pb-36 my-[-120]">
                <div className="container mx-auto px-4">
                    <div className="description-widget">
                        <div className="desc-text lg:pl-10 space-y-6 text-gray-800">

                            <div>
                                <p>
                                    <strong>1. Introduction</strong>
                                    <br />
                                    Secure Edge Solution ("Company," "we," "our," or "us") values your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when applying for a bank loan through our platform.
                                </p>
                            </div>

                            <div>
                                <p><strong>2. Information We Collect</strong></p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        <strong>Personal Information:</strong> Name, address, date of birth, phone number, email address, government-issued identification details.
                                    </li>
                                    <li>
                                        <strong>Financial Information:</strong> Income details, credit score, bank account details, employment status, loan history.
                                    </li>
                                    <li>
                                        <strong>Other Information:</strong> IP address, browsing behavior, and other relevant data for security and analytics.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p><strong>3. How We Use Your Information</strong></p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>To process and evaluate your loan application.</li>
                                    <li>To verify your identity and financial standing.</li>
                                    <li>To communicate loan-related updates and customer support.</li>
                                    <li>To comply with legal and regulatory requirements.</li>
                                    <li>To improve our services and user experience.</li>
                                </ul>
                            </div>

                            <div>
                                <p><strong>4. Information Sharing and Disclosure</strong></p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li><strong>Financial Institutions & Lenders:</strong> To facilitate loan approval and processing.</li>
                                    <li><strong>Regulatory Authorities:</strong> If required by law or legal processes.</li>
                                    <li><strong>Third-Party Service Providers:</strong> For fraud prevention, credit analysis, or customer support.</li>
                                </ul>
                            </div>

                            <div>
                                <p><strong>5. Data Security</strong></p>
                                <p>
                                    We implement industry-standard security measures to protect your personal and financial data from unauthorized access, disclosure, or loss. However, no method of transmission over the internet is entirely secure.
                                </p>
                            </div>

                            <div>
                                <p><strong>6. Your Rights & Choices</strong></p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Access, update, or correct your personal data.</li>
                                    <li>Withdraw consent for data processing (this may affect loan processing).</li>
                                    <li>Request deletion of your personal data, subject to legal obligations.</li>
                                </ul>
                            </div>

                            <div>
                                <p><strong>7. Cookies & Tracking Technologies</strong></p>
                                <p>
                                    We use cookies and similar technologies to improve our website functionality and enhance user experience. You can manage cookie preferences through your browser settings.
                                </p>
                            </div>

                            <div>
                                <p><strong>8. Changes to This Privacy Policy</strong></p>
                                <p>
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
                                </p>
                            </div>

                            <div>
                                <p><strong>9. Contact Us</strong></p>
                                <p>
                                    If you have any questions regarding this Privacy Policy or your personal data, please contact us at:
                                </p>
                                <p>
                                    <strong>Secure Edge Solution</strong>
                                    <br />
                                    Website:{" "}
                                    <Link
                                        href="https://secureedgesolution.com/"
                                        className="text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://secureedgesolution.com/
                                    </Link>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
