import { abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const FeatureGlow = () => {
  return (
    <section id="features" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What Do I Bring to the Table?"
          sub="✨ Features & Skills I Shine In"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {abilities.map((feature, index) => (
            <GlowCard key={index} card={feature} index={index}>
              <div className="flex items-start gap-4">
                <img
                  src={feature.imgPath}
                  alt={feature.title}
                  className="size-12 object-contain"
                />
                <div>
                  <p className="font-bold text-white text-xl mb-1">{feature.title}</p>
                  <p className="text-white-50 text-base">{feature.desc}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGlow;
