
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";

export const HowToPlay = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('howToPlay.title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-teal-700 mb-3">{t('howToPlay.gameRules')}</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span>{t('howToPlay.rule1')}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span>{t('howToPlay.rule2')}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span>{t('howToPlay.rule3')}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span>{t('howToPlay.rule4')}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-teal-700 mb-3">{t('howToPlay.tileColors')}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-green-500 text-white font-bold rounded">A</div>
                <span className="text-gray-700">{t('howToPlay.green')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-white font-bold rounded">B</div>
                <span className="text-gray-700">{t('howToPlay.yellow')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-500 text-white font-bold rounded">C</div>
                <span className="text-gray-700">{t('howToPlay.gray')}</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-teal-700 mb-4">{t('howToPlay.tips')}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">{t('howToPlay.tip1.title')}</h4>
              <p className="text-gray-700">{t('howToPlay.tip1.desc')}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">{t('howToPlay.tip2.title')}</h4>
              <p className="text-gray-700">{t('howToPlay.tip2.desc')}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">{t('howToPlay.tip3.title')}</h4>
              <p className="text-gray-700">{t('howToPlay.tip3.desc')}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">{t('howToPlay.tip4.title')}</h4>
              <p className="text-gray-700">{t('howToPlay.tip4.desc')}</p>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mb-4">{t('howToPlay.what')}</h3>
          <p className="text-gray-700 mb-4">
            {t('howToPlay.whatDesc1')}
          </p>
          <p className="text-gray-700">
            {t('howToPlay.whatDesc2')}
          </p>
        </div>
        
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-teal-700 mb-4">{t('howToPlay.faq')}</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">{t('howToPlay.faq1.q')}</h4>
              <p className="text-gray-700">{t('howToPlay.faq1.a')}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">{t('howToPlay.faq2.q')}</h4>
              <p className="text-gray-700">{t('howToPlay.faq2.a')}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">{t('howToPlay.faq3.q')}</h4>
              <p className="text-gray-700">{t('howToPlay.faq3.a')}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">{t('howToPlay.faq4.q')}</h4>
              <p className="text-gray-700">{t('howToPlay.faq4.a')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
