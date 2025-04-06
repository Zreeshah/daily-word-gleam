
import { Footer } from "@/components/Footer";
import { GameHeader } from "@/components/GameHeader";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <GameHeader />
      
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="mb-6">
            <Link to="/" className="text-teal-600 hover:text-teal-800 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Game
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              Last updated: {new Date().toLocaleDateString('en-GB')}
            </p>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Introduction</h2>
              <p>
                Welcome to Daily Word Gleam ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data.
                This privacy policy explains how we collect, use, and safeguard your information when you visit our website and play our daily word game.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
              <p className="mb-3">
                We collect minimal information to ensure the game functions properly:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Gameplay Data:</strong> We may store your game progress locally in your browser to maintain your daily streak and statistics.
                </li>
                <li>
                  <strong>Device Information:</strong> We collect information about your device and browser to optimize your gaming experience.
                </li>
                <li>
                  <strong>Cookies:</strong> We use cookies to remember your preferences and provide a smoother user experience.
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
              <p className="mb-3">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our daily word game</li>
                <li>To improve your user experience</li>
                <li>To detect and prevent technical issues</li>
                <li>To analyze usage patterns and optimize gameplay</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic
                storage is 100% secure, so we cannot guarantee absolute security.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Services</h2>
              <p>
                We may use third-party services to monitor and analyze the use of our game.
                These third parties have their own privacy policies addressing how they use your information.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@dailywordgleam.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
