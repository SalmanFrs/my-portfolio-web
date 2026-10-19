
import React from "react";
import { portfolioData } from "../data/portfolioData";
import { GitHubIconLink, LinkedInIconLink } from "./SocialIcons";

export const Hero: React.FC = () => {
  const { profile } = portfolioData;
  const avatarSrc = profile.avatarUrl.replace(/^\/public\//, "/");

  const [isCVMenuOpen, setIsCVMenuOpen] = React.useState(false);

  const cvUrlId = profile.cvUrlId?.replace(/^\/public\//, "/");
  const cvUrlEn = profile.cvUrlEn?.replace(/^\/public\//, "/");

  const handleDownloadCV = (
    e: React.MouseEvent<HTMLAnchorElement>,
    cvUrl?: string,
  ) => {
    if (!cvUrl || cvUrl === "#") {
      e.preventDefault();
      alert("The CV file is currently unavailable. Please try again later.");
      return;
    }

    setIsCVMenuOpen(false);
  };

  return (
    <section
      className="relative pt-12 pb-24 flex flex-col justify-center min-h-[calc(100vh-4rem)]"
      id="home"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Bio & Intro */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
            <span className="font-label-sm text-label-sm text-secondary tracking-wide uppercase font-medium">
              {profile.titleTag}
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="font-headline-xl text-headline-xl tracking-tight text-on-surface">
              {profile.fullName},{" "}
              <span className="text-primary font-normal text-headline-lg">
                {profile.degree}
              </span>
            </h1>
            <p className="font-headline-md text-headline-md text-primary-fixed leading-snug font-medium">
              {profile.headline}
            </p>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            {profile.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-primary text-on-primary font-body-md text-body-md font-semibold shadow-md hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-all group"
              href="#projects"
            >
              <span>View Projects</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-y-0.5 transition-transform">
                arrow_downward
              </span>
            </a>

            <div className="relative">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-container-high text-on-surface font-body-md text-body-md hover:bg-surface-bright transition-all"
                onClick={() => setIsCVMenuOpen((prev) => !prev)}
                aria-expanded={isCVMenuOpen}
                aria-haspopup="true"
              >
                <span className="material-symbols-outlined text-sm text-primary">
                  download
                </span>
                <span>Download CV</span>
                <span className="material-symbols-outlined text-sm">
                  {isCVMenuOpen ? "expand_less" : "expand_more"}
                </span>
              </button>

              {isCVMenuOpen && (
                <div className="absolute left-0 top-full z-50 mt-2 min-w-52 overflow-hidden rounded-lg border border-outline-variant/40 bg-surface-container-high shadow-lg">
                  <a
                    href={cvUrlId || "#"}
                    download="CV-Salman-Faris-Alhaitami-ID.pdf"
                    onClick={(e) => handleDownloadCV(e, cvUrlId)}
                    className="flex items-center gap-3 px-4 py-3 text-on-surface transition-colors hover:bg-surface-bright"
                  >
                    <span className="text-lg">🇮🇩</span>
                    <span>Bahasa Indonesia</span>
                  </a>

                  <a
                    href={cvUrlEn || "#"}
                    download="CV-Salman-Faris-Alhaitami-EN.pdf"
                    onClick={(e) => handleDownloadCV(e, cvUrlEn)}
                    className="flex items-center gap-3 px-4 py-3 text-on-surface transition-colors hover:bg-surface-bright"
                  >
                    <span className="text-lg">🇬🇧</span>
                    <span>English</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-on-surface-variant font-label-sm text-label-sm">
            <GitHubIconLink href={profile.githubUrl} />
            <span className="text-surface-container-highest">/</span>
            <LinkedInIconLink href={profile.linkedinUrl} />
            <span className="text-surface-container-highest">/</span>
            <div className="inline-flex items-center gap-1.5 text-outline">
              <span className="material-symbols-outlined text-base text-secondary">
                location_on
              </span>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Card with Stats */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[380px]">
            <div className="relative rounded-2xl bg-surface-container-low p-3 shadow-xl border border-outline-variant/30">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-surface-container-highest">
                <img
                  alt={profile.fullName}
                  className="w-full h-full object-cover object-[center_35%] grayscale-[15%] contrast-105 hover:scale-105 transition-transform duration-500"
                  src={avatarSrc}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-lg bg-surface-dim/80 backdrop-blur-md border border-outline-variant/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="font-label-sm text-label-sm text-on-surface">
                      {profile.university} • {profile.graduationYear}
                    </span>
                  </div>
                </div>
              </div>

              {/* 2 Stats Grid */}
              <div className="grid grid-cols-2 gap-2 mt-3 text-center">
                <div className="p-2.5 rounded-lg bg-surface-container border border-outline-variant/20">
                  <span className="block font-label-sm text-label-sm text-outline">
                    IPK
                  </span>
                  <span className="font-code-inline text-body-md font-semibold text-secondary">
                    {profile.ipk}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-surface-container border border-outline-variant/20">
                  <span className="block font-label-sm text-label-sm text-outline">
                    AVAILABILITY
                  </span>
                  <span className="font-code-inline text-body-md font-semibold text-on-surface">
                    {profile.workPreference}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
