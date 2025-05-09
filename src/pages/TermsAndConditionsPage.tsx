import { Page } from '@/components/Page.tsx';
import type { FC } from 'react';

export const TermsAndConditionsPage: FC = () => {
    return (
        <Page back={false}>
            <div className="flex justify-center w-full bg-white">
                <div className="relative w-[375px] h-[812px] overflow-hidden [background:linear-gradient(161deg,rgba(160,132,232,1)_0%,rgba(93,44,219,1)_100%)] min-h-screen font-sans">
                    <div className="container max-w-4xl mx-auto px-2 py-2">
                        <header className="text-center mb-4">
                            <h2 className="text-lg font-bold text-gray-700">Terms and Conditions</h2>
                        </header>
                        
                        <main className="bg-white shadow-xl p-2 md:p-2 overflow-y-auto h-screen">
                        {/* Introduction */}
                        <section className="mb-2">
                            <h3 className="text-md font-bold text-gray-600 mb-1">Introduction</h3>
                            <p className="text-sm text-gray-700">
                            Welcome to Cochi, a meeting application designed to connect members of the LGBTQ+ community. 
                            By accessing or using our application, you agree to be bound by these Terms and Conditions.
                            </p>
                        </section>
                        
                        {/* Eligibility */}
                        <section className="mb-2">
                            <h3 className="text-md font-bold text-gray-600 mb-1">Eligibility</h3>
                            <p className="text-sm text-gray-700">
                            Users must be at least 18 years of age to access and use Cochi. By creating an account, 
                            you represent and warrant that you are at least 18 years old.
                            </p>
                        </section>
                        
                        {/* Account Registration */}
                        <section className="mb-2">
                            <h3 className="text-md font-bold text-gray-600 mb-1">Account Registration</h3>
                            <p className="text-sm text-gray-700">
                            To use Cochi, you will need to register and create an account. You agree to provide accurate, 
                            current, and complete information during registration and to update such information to keep it 
                            accurate, current, and complete.
                            </p>
                        </section>
                        
                        {/* Privacy */}
                        <section className="mb-2">
                            <h3 className="text-md font-bold text-gray-600 mb-1">Privacy</h3>
                            <p className="text-sm text-gray-700">
                            Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, 
                            use, and disclose information about you.
                            </p>
                        </section>
                        
                        {/* User Conduct */}
                        <section className="mb-2">
                            <h4 className="text-md font-bold text-gray-600 mb-1">Respect Yourself and Respect Others</h4>
                            <p className="text-sm text-gray-700 mb-3">
                            At Cochi, we believe in creating a supportive and inclusive environment where all users feel 
                            valued and safe. You agree to:
                            </p>
                            <ul className="list-disc text-sm pl-6 text-gray-700">
                            <li>Treat yourself with dignity and set healthy boundaries</li>
                            <li>Respect other users' identities, orientations, pronouns, and boundaries</li>
                            <li>Communicate honestly and with integrity</li>
                            <li>Refrain from harassment, hate speech, or discriminatory behavior</li>
                            <li>Support the wellbeing of the community through positive interactions</li>
                            </ul>
                        </section>
                        
                        {/* Prohibited Content */}
                        <section className="mb-2">
                            <h3 className="text-md font-bold text-gray-600 mb-1">Prohibited Content</h3>
                            <p className="text-sm text-gray-700 mb-3">
                            You agree not to post, upload, or share content that:
                            </p>
                            <ul className="list-disc text-sm pl-6 text-gray-700">
                            <li>Is illegal, harmful, threatening, abusive, harassing, or discriminatory</li>
                            <li>Contains sexually explicit material not appropriate for the platform</li>
                            <li>Impersonates any person or entity</li>
                            <li>Contains personal or private information about another person without their consent</li>
                            <li>Infringes any patent, trademark, trade secret, copyright, or other intellectual property</li>
                            </ul>
                        </section>
                        
                        {/* Safety Guidelines */}
                        <section className="mb-2">
                            <h3 className="text-md font-bold text-gray-600 mb-1">Safety Guidelines</h3>
                            <ul className="list-disc text-sm pl-6 text-gray-700">
                            <li>Never share personal financial information with other users</li>
                            <li>Meet in public places for initial in-person meetings</li>
                            <li>Inform a friend or family member about your meeting plans</li>
                            <li>Report suspicious behavior or safety concerns immediately</li>
                            </ul>
                        </section>
                        
                        {/* Termination */}
                        <section className="mb-2">
                            <h3 className="text-md font-bold text-gray-600 mb-1">Termination</h3>
                            <p className="text-sm text-gray-700">
                            We reserve the right to suspend or terminate your account if you violate these Terms and Conditions 
                            or engage in behavior that harms the community or platform.
                            </p>
                        </section>
                        
                        {/* Modifications to Terms */}
                        <section className="mb-2">
                            <h3 className="text-md font-bold text-gray-600 mb-1">Modifications to Terms</h3>
                            <p className="text-sm text-gray-700">
                            We may modify these Terms and Conditions from time to time. We will notify you of any material 
                            changes via the application or by email.
                            </p>
                        </section>
                        
                        {/* Disclaimer of Warranties */}
                        <section className="mb-2">
                            <h3 className="text-md font-bold text-gray-600 mb-1">Disclaimer of Warranties</h3>
                            <p className="text-sm text-gray-700">
                            Cochi is provided "as is" and "as available" without any warranties of any kind.
                            </p>
                        </section>
                        
                        {/* Limitation of Liability */}
                        <section className="mb-2">
                            <h3 className="text-md font-bold text-gray-600 mb-1">Limitation of Liability</h3>
                            <p className="text-sm text-gray-700">
                            To the maximum extent permitted by law, Cochi shall not be liable for any indirect, incidental, 
                            special, consequential, or punitive damages.
                            </p>
                        </section>
                        
                        {/* Governing Law */}
                        <section className="mb-2">
                            <h3 className="text-md font-bold text-gray-600 mb-1">Governing Law</h3>
                            <p className="text-sm text-gray-700">
                            These Terms and Conditions shall be governed by and construed in accordance with the laws of 
                            Israel, without regard to its conflict of law provisions.
                            </p>
                        </section>
                        
                        {/* Contact Information */}
                        <section className="mb-2">
                            <h3 className="text-md font-bold text-gray-600 mb-1">Contact Information</h3>
                            <p className="text-sm text-gray-700">
                            If you have any questions about these Terms and Conditions, please contact us at support@cochi-dating.com.
                            </p>
                        </section>
                        
                        {/* Acceptance */}
                        <section className="mt-10 pt-6 border-t border-gray-200 text-center">
                            <p className="text-sm text-gray-700 font-medium">
                            By using Cochi, you acknowledge that you have read, understood, and agree to be bound by these 
                            Terms and Conditions.
                            </p>
                        </section>
                        </main>

                        <footer className="text-xs mt-4 text-center text-gray-200">
                        <p>© 2025 Cochi. All rights reserved.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </Page>
    );
  };