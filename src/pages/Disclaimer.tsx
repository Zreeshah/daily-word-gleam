
import { Footer } from "@/components/Footer";
import { GameHeader } from "@/components/GameHeader";
import { Link } from "react-router-dom";

const Disclaimer = () => {
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
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer</h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              Last updated: {new Date().toLocaleDateString('en-GB')}
            </p>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Interpretation and Definitions</h2>
              <p>
                The words of which the initial letter is capitalised have meanings defined under the following conditions.
                The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Disclaimer</h2>
              <p className="mb-3">
                The information provided by Daily Word Gleam ("we," "us," or "our") on our website is for general informational and entertainment purposes only.
                All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied,
                regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>
              <p>
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of
                the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the
                site is solely at your own risk.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">External Links Disclaimer</h2>
              <p>
                The site may contain links to external websites that are not provided or maintained by or in any way affiliated with us.
                Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Errors and Omissions Disclaimer</h2>
              <p>
                The information given by Daily Word Gleam is for general guidance on matters of interest only.
                Even if we take every precaution to ensure that the content of the site is both current and accurate,
                errors can occur. Plus, given the changing nature of laws, rules, and regulations, there may be delays,
                omissions, or inaccuracies in the information contained on the site.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Fair Use Disclaimer</h2>
              <p>
                We may use copyrighted material which has not always been specifically authorised by the copyright owner.
                We are making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
                We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States
                Copyright law.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Views Expressed Disclaimer</h2>
              <p>
                Any views and opinions that may be expressed in the site are the views and opinions of the author and do not necessarily
                reflect the views and opinions of Daily Word Gleam. Legal policies, information, agreements, and notices may be changed
                or updated without notice.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
              <p>
                If you have any questions about this Disclaimer, please contact us at disclaimer@dailywordgleam.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Disclaimer;
